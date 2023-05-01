const http=require('http');
const apps=require('./app');
const port=3000;
const server=http.createServer(apps);
server.listen(port);
//console.log('Server is listening at port:', port);
