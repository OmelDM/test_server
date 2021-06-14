const http = require('http');

const PORT = process.env.PORT || 5000

const server = http.createServer((req, res) => {
  if (req.url === '/statistic') {
    console.log('statistic ', Date.now());
  }

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.end('Hellow world');
});

server.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});