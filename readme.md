# How to reproduce:

1. launch the app with `node index.js`
2. navigate to http://localhost:7000/ in your browser
3. run this code in the console:
```js
s=new WebSocket('ws://localhost:7000')
```
4. at this point node crashes for me with error like this:
```
user@host:~/test$ node index.js 
Example app listening at http://localhost:7000
_http_outgoing.js:320
      this.outputSize += header.length;
                                ^

TypeError: Cannot read property 'length' of null
    at ServerResponse._send (_http_outgoing.js:320:33)
    at write_ (_http_outgoing.js:718:15)
    at ServerResponse.write (_http_outgoing.js:661:15)
    at ReadStream.ondata (_stream_readable.js:719:22)
    at ReadStream.emit (events.js:315:20)
    at addChunk (_stream_readable.js:309:12)
    at readableAddChunk (_stream_readable.js:284:9)
    at ReadStream.Readable.push (_stream_readable.js:223:10)
    at internal/fs/streams.js:226:14
    at FSReqCallback.wrapper [as oncomplete] (fs.js:539:5)
```