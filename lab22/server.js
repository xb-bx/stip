const http = require('http');
const server = http.createServer((req, res) => {
res.writeHead(200, { 'Content-Type': 'application/json' });
res.end(JSON.stringify({ message: 'Доброго дня!' }));
});
server.listen(3000, () => {
console.log('Сервер запущено на порту 3000');
});
