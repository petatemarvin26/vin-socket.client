class Socket {
  private _socket: WebSocket;
  private _url: string;

  constructor(url: string) {
    this._url = url;
    this._socket = new WebSocket(url);
  }

  getSocket() {
    return this._socket;
  }

  getUrl() {
    return this._url;
  }
}

export default Socket;
