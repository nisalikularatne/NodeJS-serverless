const { expressCallback } = require('@socar/socar-test/helpers/express');
const express = require('express');

const apiV1Routes = express.Router(),
    CarController = require('@socar/socar-test/controllers/car'),
    CarAvailabilityController = require('@socar/socar-test/controllers/availability'),
    tokenValidatorMiddleware = require('@socar/socar-test/middlewares'),
    UserController = require('@socar/socar-test/controllers/user');

apiV1Routes.post('/users', expressCallback(UserController.create));
apiV1Routes.post('/users/login', expressCallback(UserController.login));
apiV1Routes.get('/cars', expressCallback(CarController.getAll));
apiV1Routes.get('/sample', expressCallback(CarController.sample));
apiV1Routes.use(tokenValidatorMiddleware.authentication);
apiV1Routes.post('/users/:user_id/cars', expressCallback(CarController.create));
apiV1Routes.get('/users/:user_id/cars/:id', expressCallback(CarController.getCar));

apiV1Routes.post('/users/:user_id/cars/:car_id/availability', expressCallback(CarAvailabilityController.create));
apiV1Routes.get('/users/:user_id/cars/:car_id/availability', expressCallback(CarAvailabilityController.getCarAvailability));
apiV1Routes.put('/users/:user_id/cars/:car_id/availability', expressCallback(CarAvailabilityController.update));
module.exports = apiV1Routes;
