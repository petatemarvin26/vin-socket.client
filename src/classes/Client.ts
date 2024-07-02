import {Listener} from '@/common';
import {
  Emit,
  On,
  OnConnect,
  CallbackConnect,
  SocketClientInterface,
  OnCreate,
  OnMessage,
} from '@/interfaces';
import {Config} from '@/interfaces';
import {toBuffer, toJSON} from '@/utils';

class SocketClient implements SocketClientInterface {
  private ws: WebSocket;
  private config?: Config;
  private callbackConnect: CallbackConnect;
  private listeners: Listener[];

  constructor(url: string, config?: Config) {
    const ws = new WebSocket(url);
    this.ws = ws;
    this.listeners = [];
    this.callbackConnect = () => {};

    this.config = {
      initConnectionDelay: config?.initConnectionDelay || 100,
    };

    ws.addEventListener('open', this.onCreate);
    ws.addEventListener('message', this.onMessage);
  }

  private onCreate: OnCreate = (event) => {
    this.callbackConnect(event);
  };

  private onMessage: OnMessage = async (message) => {
    const data = await toJSON(message.data);
    for (const {event, callback} of this.listeners) {
      if (data.event === event) callback(data.payload);
    }
  };

  onConnect: OnConnect = (callback) => {
    this.callbackConnect = callback;
  };

  on: On = (event, callback) => {
    this.listeners.push({event, callback});
  };

  emit: Emit = (event, payload) => {
    const message = toBuffer(event, payload);
    try {
      this.ws.send(message);
      console.log('SUCCESS');
    } catch (e) {
      setTimeout(
        () => this.emit(event, payload),
        this.config?.initConnectionDelay
      );
    }
  };
}

export default SocketClient;
