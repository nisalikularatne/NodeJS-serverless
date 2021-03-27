const express = require('express');


const apiV1Routes = express.Router(),
    TestController = require('@socar/socar-test/controllers/sample');


apiV1Routes.get('/sample', TestController.getResponse);

module.exports = apiV1Routes;
