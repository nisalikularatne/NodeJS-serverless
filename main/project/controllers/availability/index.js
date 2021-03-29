const CarAvailabilityService = require('@socar/socar-test/service/availability'),
    CarAvailabilitySchema = require('@socar/socar-test/schemas/availability'),
    HttpStatusCodes = require('http-status-codes'),
    { schemaValidator } = require('@socar/socar-test/helpers'),
    { authorization } = require('@socar/socar-test/helpers/authorization');
exports.create = async (req, res) => {
    await schemaValidator(CarAvailabilitySchema.create, { ...req.params, ...req.body });
    const {
        start_at = null,
        end_at = null
    } = req.body;
    const { car_id, user_id } = req.params;
    await authorization(req.user, user_id);
    let carAvailability = await CarAvailabilityService.create({
        start_at,
        end_at,
        car_id
    });
    res.header('location', `/cars/${carAvailability.id}`);
    res.status(HttpStatusCodes.CREATED);
    return carAvailability;
};
// exports.getAll = async (req, res) => {
//     const { page = 1, page_size = DEFAULT_ITEMS_PER_PAGE, query = null,location=null, manufacturer = null, model = null, is_available = null, sort = 'created_at', order = 'asc',is_manual,minPrice=null,maxPrice=null } = req.query;
//     await schemaValidator(CarSchema.getCars, { ...req.query });
//     let getResponse = await CarService.getCars({page, page_size, query, manufacturer,location, model, sort, order,is_available,is_manual,minPrice,maxPrice});
//     res.status(HttpStatusCodes.OK);
//     return getResponse;
// };
//
exports.getCarAvailability = async (req, res) => {
    const { car_id } = req.params;
    await schemaValidator(CarAvailabilitySchema.getAvailability, { ...req.params });
    let getCarResponse = await CarAvailabilityService.getCarAvailability({ car_id });
    res.status(HttpStatusCodes.OK);
    return getCarResponse;
};

exports.update = async (req, res) => {
    const { car_id, user_id } = req.params;
    await authorization(req.user, user_id);
    const { start_at = null, end_at = null } = req.body;
    await schemaValidator(CarAvailabilitySchema.update, { ...req.params, ...req.body });
    let updateCarResponse = await CarAvailabilityService.update(car_id, { start_at, end_at });
    res.status(HttpStatusCodes.OK);
    return updateCarResponse;
};

