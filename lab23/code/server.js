const http = require('http');
const fs = require('fs');
var orderId = 0;
const server = http.createServer((req, res) => {
    if (req.url == "/") {
        fs.readFile('index.html', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    }
    else if (req.url == "/main.js") {
        fs.readFile('main.js', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'application/javascript' });
            res.end(data);
        });
    } else if(req.url != "/api/orders") {
        res.writeHead(404);
        res.write("Not found");
        res.end();
    } else if (req.method != "POST") {
        res.writeHead(405);
        res.write("Method not allowed");
        res.end();
    } else {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString(); 
        });

        req.on('end', () => {
            try {
                const jsonBody = JSON.parse(body);
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ orderId: orderId, order: jsonBody }));
                orderId += 1
            } catch (error) {
                res.writeHead(400, { 'Content-Type': 'text/plain' });
                res.end('Invalid JSON format');
            }
        });
    }
});
server.listen(3000, () => {
    console.log('Сервер запущено на порту 3000');
});
