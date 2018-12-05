const http = require("http");
const App = require("../app");

//Setup a port
App.set('port', (process.env.PORT));

//Listen the server
const server = http.createServer(App);
server.listen(App.get('port'), () => console.log(`server started on port ${App.get('port')}!`));