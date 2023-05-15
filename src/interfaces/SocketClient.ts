interface OnCreate {
  (): void;
}

interface SocketClientInterface {
  onCreate: OnCreate;
}

export {SocketClientInterface, OnCreate};
