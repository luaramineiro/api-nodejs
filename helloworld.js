const http = require('http')
const server = http.createServer((request, response) => {
    response.writeHead(200, { 'Content-type': 'text/plain' });
    response.write('Hello, World!');
    response.end();
});
server.listen(8081);