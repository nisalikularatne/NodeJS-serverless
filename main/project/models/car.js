const Model = require('./base');

class Car extends Model {
    static tableName = 'cars';

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
        const CarAvailability = require('@socar/socar-test/models/car_availability');
        return {
            car_availability: {
                relation: Model.BelongsToOneRelation,
                modelClass: CarAvailability,
                join: {
                    from: 'cars.id',
                    to: 'car_availability.car_id'
                }
            }
        };
    }
}

module.exports = Car;
