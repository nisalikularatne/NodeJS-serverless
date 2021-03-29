const CarService = require('@socar/socar-test/service/car'),
    CarSchema = require('@socar/socar-test/schemas/cars'),
    { authorization } = require('@socar/socar-test/helpers/authorization'),
    HttpStatusCodes = require('http-status-codes'),
    { DEFAULT_ITEMS_PER_PAGE } = require('@socar/socar-test/config/index'),
    { schemaValidator } = require('@socar/socar-test/helpers');
exports.create = async (req, res) => {
    await schemaValidator(CarSchema.create, { ...req.params, ...req.body });
    const {
        model = null,
        day_price = null,
        manufacturer = null,
        location = null,
        is_available = false,
        car_registration_plate = null,
        car_year = null,
        is_manual = false
    } = req.body;
    const { user_id } = req.params;
    await authorization(req.user, user_id);
    let car = await CarService.create({
        model,
        user_id,
        day_price,
        manufacturer,
        location,
        is_available,
        car_registration_plate,
        car_year,
        is_manual
    });
    res.header('location', `/cars/${car.id}`);
    res.status(HttpStatusCodes.CREATED);
    return car;
};

exports.getAll = async (req, res) => {
    const { page = 1, page_size = DEFAULT_ITEMS_PER_PAGE, query = null, location = null, manufacturer = null, model = null, is_available = null, sort = 'created_at', order = 'asc', is_manual, minPrice = null, maxPrice = null } = req.query;
    await schemaValidator(CarSchema.getCars, { ...req.query });
    let getResponse = await CarService.getCars({
        page,
        page_size,
        query,
        manufacturer,
        location,
        model,
        sort,
        order,
        is_available,
        is_manual,
        minPrice,
        maxPrice
    });
    res.status(HttpStatusCodes.OK);
    return getResponse;
};

exports.getCar = async (req, res) => {
    const { id, user_id } = req.params;
    await authorization(req.user, user_id);
    await schemaValidator(CarSchema.getCar, { ...req.params });
    let getCarResponse = await CarService.getCar(id);
    res.status(HttpStatusCodes.OK);
    return getCarResponse;
};
exports.sample = async (req, res) => {
    res.send('hi sample');
};
