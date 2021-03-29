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

exports.update = async (car_id, car_availablity = {}) => {
    const updatedObject = await CarAvailability.query().findOne({ car_id }).throwIfNotFound();
    return updatedObject.$query().patchAndFetch(car_availablity);
};
