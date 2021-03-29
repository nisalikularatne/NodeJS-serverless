const joi = require('@hapi/joi'),
    Car = require('@socar/socar-test/models/car'),
    exist = require('@socar/socar-test/schemas/custom_validators/exist');
exports.create = {
    schema: () => {
        return joi.object().keys({
            id: joi.any(),
            user_id: joi.number().required(),
            car_id: joi.number().positive().external(exist(Car, 'car_id', 'id')),
            start_at: joi.date().iso().greater('now').required(),
            end_at: joi.date().iso().greater(joi.ref('start_at')).required()
        });
    }
};

exports.getAvailability = {
    schema: () => {
        return joi.object().keys({
            user_id: joi.number().required(),
            car_id: joi.number().required()
        });
    }
};

exports.update = {
    schema: () => {
        return joi.object().keys({
            user_id: joi.number().required(),
            car_id: joi.number().positive().external(exist(Car, 'car_id', 'id')),
            start_at: joi.date().iso().greater('now').required(),
            end_at: joi.date().iso().greater(joi.ref('start_at')).required()
        });
    }
};
