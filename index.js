const http = require('http');
const fs = require('fs');
const port = process.env.PORT || 3000;

const server = http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/html' })
    fs.readFile('index.html', function(err,data){
        if(err){
                res.writeHead(404);
                return res.end('File not found')
            }
            res.writeHead(responseCode, { 'Content-Type': contentType })
            res.end(data)
        })
    })

    server.listen(port, () => console.log(`server started on port ${port}; ` +
    'press Ctrl-C to terminate....'))