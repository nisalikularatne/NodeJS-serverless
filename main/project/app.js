const express = require('express'),
    cors = require('cors'),
    serverless = require('serverless-http'),
    // loggerMiddleware = require('@socar/socar-test/middlewares/logger'),
    app = express();
app.use(express.json());
const apiV1Routes = require('@socar/socar-test/routes/api/v1');
app.use(cors());
// app.use(loggerMiddleware);
app.use('/api/v1', apiV1Routes);
app.all('*', function (req, res) {
    res.status(404).send('not found');
});

const httpHandler = serverless(app, {
    request: (req, event, context) => {
        req.awsRequestId = context.awsRequestId;
    }
});
module.exports.handler = async (event, context) => {
    return await httpHandler(event, context);
};
module.exports.app = app;
