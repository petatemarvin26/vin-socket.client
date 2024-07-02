import {Callback} from '@/common';

interface CallbackConnect {
  (event: WebSocketEventMap['open']): void;
}

interface On {
  (event: string, callback: Callback): void;
}

interface OnConnect {
  (callback: CallbackConnect): void;
}

interface OnCreate {
  (event: WebSocketEventMap['open']): void;
}

interface OnMessage {
  (message: any): void;
}

interface Emit {
  (event: string, payload: any): void;
}

interface SocketClientInterface {
  on: On;
  emit: Emit;
  onConnect: OnConnect;
}

interface Config {
  /**
   * This delay is refer to status of connection to avoid emit without handshake,
   * it only necessary to set if the ws immediately invoke event
   */
  initConnectionDelay: number;
}

export {
  Callback,
  On,
  Emit,
  OnConnect,
  OnCreate,
  OnMessage,
  CallbackConnect,
  Config,
};
export default SocketClientInterface;
