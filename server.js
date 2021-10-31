const http = require('http');
const host = 'http://localhost';
const port = 3333;
const status = require('./pcRamUsage');

http
  .createServer((req, res) => {
    let url = req.url;

    if (url === '/') {
      res.end('<h1>Working</h1>');
    }
    if (url === '/status') {
      res.end(JSON.stringify(status));
    }
  })
  .listen(port, () => {
    console.log(`server is runnig in ${host}:${port}`);
  });
