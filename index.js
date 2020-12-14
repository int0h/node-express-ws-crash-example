const express = require('express');
const path = require('path');
const app = express();
var expressWs = require('express-ws')(app);
const port = 7000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.ws('/ws', function(ws, req) {
    ws.on('message', function(msg) {
      console.log(msg);
    });
    console.log('socket', req.testing);
});

app.get('/*', function(req, res) {
    res.sendFile(path.resolve('./index.html'));
});