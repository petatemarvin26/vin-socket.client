interface Callback {
  (payload: any): void;
}

interface Listener {
  event: string;
  callback: Callback;
}

export {Callback, Listener};
