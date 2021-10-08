const http = require('http');
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Hello World!');
  }

  if (req.url === '/about') {
    res.end('This is our histories!');
  }
  res.end(
    '<h1>Oops!</h1> <p>Nothing to see here! Turn around please!</p> <a href="/">Back home.</a>',
  );
});
server.listen(5000);
