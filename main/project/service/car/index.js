const Car = require('@socar/socar-test/models/car'),
    { MAX_ITEMS_PER_PAGE } = require('@socar/socar-test/config');
exports.create = ({ model, manufacturer, location, day_price, is_available, user_id, car_registration_plate, car_year, is_manual }) => {
    return Car.query().insert({
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
};
exports.getCars = async ({ page = 1, page_size = MAX_ITEMS_PER_PAGE, model, is_manual, manufacturer, location, query = null, sort = 'id', order = 'asc', is_available, minPrice, maxPrice }) => {

    return Car.query().modify(builder => {
        query && builder.where('location', 'like', `%${query}%`);
        minPrice && builder.where('day_price', '>=', minPrice);
        maxPrice && builder.where('day_price', '<=', maxPrice);
        minPrice && maxPrice && builder.where('day_price', '>=', minPrice) && builder.where('day_price', '<=', maxPrice);
        location && builder.where('location', location);
        model && builder.where('model', model);
        manufacturer && builder.where('manufacturer', manufacturer);
        is_manual && builder.where('is_manual', is_manual);
        is_available && builder.where('is_available', is_available);
        builder && builder.page(Number(page) - 1, page_size);
        builder.orderBy(sort, order);

    }).withGraphFetched('car_availability');
};
exports.getCar = async (id) => {
    return Car.query().withGraphFetched('car_availability').where('id', id).first().throwIfNotFound();
};
