const joi = require('@hapi/joi');

exports.create = {
    schema: () => {
        return joi.object().keys({
            id: joi.any(),
            name:joi.string().required(),
            location:joi.string().max(65).required(),
            license_number:joi.string().max(65).optional()
        });
    }
};

exports.login={
    schema: () => {
        return joi.object().keys({
            name: joi.string().max(65).required()
        });
    }
};
