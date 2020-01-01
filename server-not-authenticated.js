// Reference: https://github.com/typicode/json-server#module
// server.js
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 8001;

server.use(middlewares);

server.use(jsonServer.bodyParser);

// Add createdDate on POST requests
server.use((req, res, next) => {
  if (req.method === 'POST') {
    var today = new Date();
    req.body.createdDate = today.toString().substr(4, 6) + ',' + today.toString().substr(10, 5);
  }
  // Continue to JSON Server router
  next();
})

server.use(router);
server.listen(port, () => {
  console.log( `JSON Server is running on port ${port}` );
});