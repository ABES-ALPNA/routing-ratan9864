const http = require("http");

const server = http.createServer((req, res) => {
   res.setHeader('Content-Type', 'text/plain');

    if (req.url === '/') {
        
        res.end("Home Page");
    } else if (req.url === '/about') {
       
        res.end("This is about page");
    } else if (req.url === '/contact') {
       
        res.end("This is contact page");
    } else {
        
        res.end("404 error not found");
    }
});

server.listen(4000, () => {
    console.log("Server is started on port 4000");
});
