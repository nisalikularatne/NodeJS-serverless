const joi = require('@hapi/joi'),
    { MAX_ITEMS_PER_PAGE } = require('@socar/socar-test/config');

exports.create = {
    schema: () => {
        return joi.object().keys({
            id: joi.any(),
            user_id: joi.number().required(),
            //consider addition of fleet (small,medium, large)
            //consider addtion of seat sizing
            model: joi.string().max(65).optional(),
            manufacturer: joi.string().max(65).required(),
            day_price: joi.number().required(),
            location: joi.string().max(65).required(),
            is_available: joi.boolean().default(false).optional(),
            car_registration_plate: joi.string().max(65).optional(),
            car_year: joi.number().optional(),
            is_manual: joi.boolean().optional().default(false)

        });
    }
};

exports.getCars = {
    schema: () => {
        return joi.object().keys({
            sort: joi.string().valid('availability', 'created_at', 'is_manual', 'model', 'manufacturer', 'location', 'day_price', 'id').allow('').optional(),
            order: joi.string().valid('asc', 'desc').allow('').optional(),
            manufacturer: joi.string().optional(),
            model: joi.string().optional(),
            is_available: joi.boolean().optional(),
            minPrice: joi.number().optional(),
            maxPrice: joi.number().optional(),
            page: joi.number().positive().allow('').optional(),
            is_manual: joi.boolean().optional(),
            page_size: joi.number().positive().max(MAX_ITEMS_PER_PAGE).allow('').optional(),
            query: joi.any()

        });
    }
};

exports.getCar = {
    schema: () => {
        return joi.object().keys({
            user_id: joi.number().required(),
            id: joi.number().required()
        });
    }
};
