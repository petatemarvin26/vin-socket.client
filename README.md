## VIN-SOCKET.CLIENT

Is [ES][nodejs] Module, a websocket client side connection that minified the functionalities and strategies of [Websocket][ws] for easy implementation of websocket.

This module required to install its peer module [vin-socket.server][peer-lib] to server side in order to work correctly.

#

### Installation

```shell
npm install vin-socket.client
```

#

### Features

- easy to consume
- modern approach
- background digestion into binary data

#

### Usage Examples

Listen to server

```Javascript
const { createServer } = require("http");
const { SocketClient } = require("vin-socket.client");

const wsClient = new SocketClient('ws://localhost:3000');

wsClient.on("res:message", (payload) => {
  console.log(`Received payload from server`, payload)
})

```

> NOTE: We recommend to put the instantiation in top level code

Emit to server

```Javascript
...

wsClient.emit("req:message", {
  message: `Hello server!`
})
```

#

### Contributing

Unfortunately we are not accepting any contributors yet this is under probitionary, but for your concerns and possible suggestions just email me at petatemarvin26@gmail.com

#

### Changelog

We're using github [release][github-release] and based on semantic versioning

#

### License

[ISC][license]

[ws]: https://developer.mozilla.org/en-US/docs/Web/API/WebSocket
[nodejs]: https://nodejs.org/en
[github-release]: https://github.com/petatemarvin26/vin-socket.client/releases
[license]: ./LICENSE
[peer-lib]: https://www.npmjs.com/package/vin-socket.server
