const CarAvailability = require('@socar/socar-test/models/car_availability');
exports.create = ({ start_at, end_at, car_id }) => {
    return CarAvailability.query().insert({
        car_id,
        start_at,
        end_at
    });
};
exports.getCarAvailability = async ({ car_id }) => {
    return CarAvailability.query().withGraphFetched('car').where('car_id', car_id).first().throwIfNotFound();
};

exports.update = (car_id, car_availablity = {}) => {
    return CarAvailability.query()
        .patchAndFetchById(car_id, { ...car_availablity, car_id })
        .throwIfNotFound();
};
