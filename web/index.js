const http = require('http');

http
  .createServer(function (req, res) {
    res.setHeader('Content-Type', 'text/html; charset=utf-8;');

    if (req.url === '/home' || req.url === '/') res.write('<h2> Home</h2>');
    else if (req.url === '/is-91-019')
      res.write('<h2> Морквіна Валерія IC-91, 2 курс</h2>');
    else res.write('<h2>Not found</h2>');

    res.end();
  })
  .listen(3000);
