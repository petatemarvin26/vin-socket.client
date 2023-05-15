import {OnCreate, SocketClientInterface} from 'interfaces';

class SocketClient implements SocketClientInterface {
  onCreate: OnCreate = () => {};
}

export default SocketClient;
