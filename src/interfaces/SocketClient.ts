import {Callback} from 'common/interface';

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

export {Callback, On, Emit, OnConnect, OnCreate, OnMessage, CallbackConnect};
export default SocketClientInterface;
