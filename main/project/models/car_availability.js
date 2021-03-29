const Model = require('./base');

class CarAvailability extends Model {
    static tableName = 'car_availability';

    static getTableName() {
        return this.tableName;
    }

    $beforeInsert() {
        this.created_at = new Date().toISOString();
    }

    $beforeUpdate() {
        this.updated_at = new Date().toISOString();
    }

    static get relationMappings() {
        const Car = require('@socar/socar-test/models/car');
        return {
            car: {
                relation: Model.HasOneRelation,
                modelClass: Car,
                join: {
                    from: 'car_availability.car_id',
                    to: 'cars.id'
                }
            }
        };
    }
}

module.exports = CarAvailability;
