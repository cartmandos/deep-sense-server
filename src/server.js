const app = require('./app');
const server = require('http').createServer(app);
const { host, port } = require('./config');

server.on('listening', () => {
  console.log('\x1b[35m%s\x1b[0m', '[DeepSense] server listening on', `${host}:${port}`);
});

server.on('error', (err) => {
  console.error('Server error: ', err);
  throw err;
});

process.on('uncaughtException', (err) => {
  console.error('Uncaught process exception:', err);
  process.exitCode = 1;
});

(async function startServer() {
  console.log('\x1b[35m%s\x1b[0m', '[DeepSense] starting server...');
  try {
    //NOTE: init & test db connection here
    server.listen(port, host);
  } catch (error) {
    console.error(error);
    process.exitCode = 1;
  }
})();
