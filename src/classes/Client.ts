import {Listener} from 'common/interface';
import {
  Emit,
  On,
  OnConnect,
  CallbackConnect,
  SocketClientInterface,
  OnCreate,
  OnMessage,
} from 'interfaces';
import {toBuffer, toJSON} from 'utils';

class SocketClient implements SocketClientInterface {
  private ws: WebSocket;
  private callbackConnect: CallbackConnect;
  private listeners: Listener[];

  constructor(url: string) {
    const ws = new WebSocket(url);
    this.ws = ws;
    this.listeners = [];
    this.callbackConnect = () => {};

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
    this.ws.send(message);
  };
}

export default SocketClient;
