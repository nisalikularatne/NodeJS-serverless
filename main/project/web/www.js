require('dotenv').config({ path: '.env' });
const config = require('@socar/socar-test/config'),
    { app } = require('@socar/socar-test/app'),
    http = require('http'),
    debug = require('debug')('@socar/socar-test:server'),
    port = normalizePort(config.PORT);
const server = http.createServer(app);
app.set('port', port);
server.listen(port, '0.0.0.0', async () => {
    // eslint-disable-next-line no-console
    console.log(`Service started on port ${port}`);
    debug('http server start');
});
server.on('error', onError);
server.on('listening', onListening);

function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    // var bind = typeof port === 'string'
    //     ? 'Pipe ' + port
    //     : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            process.exit(1);
            break;
        case 'EADDRINUSE':
            process.exit(1);
            break;
        default:
            throw error;
    }
}

async function onListening() {

    var addr = server.address();
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + port;
    debug('Listening on ' + bind);
}

module.exports = server;
