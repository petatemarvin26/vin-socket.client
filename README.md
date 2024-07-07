## VIN-SOCKET.CLIENT

Is a websocket client side connection that minified the functionalities and strategies of [Websocket][ws] for easy implementation of websocket.

This module required to install its peer module [vin-socket.server][peer-lib] for server side in order to work correctly.

#

### Installation

```shell
npm install vin-socket.client
```

#

### Features

- Easy to consume
- Modern approach
- Background digestion as binary

#

### Usage Examples

Connect to Websocket Server

```Javascript
import {SocketClient} from 'vin-socket.client';

// global scope
const socket = new SocketClient('ws://localhost:3200');

const App: React.FC = () => {

  useEffect(() => {
    socket.onConnect(() => {
      // user has been connected
    })
    socket.emit('my:event', {message: 'Hello World'})
  }, [])

  return (
    <div>HELLO WORLD</div>
  )
}

```

> NOTE: We recommend to put the SocketClient instance in global scope or top of the code

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
