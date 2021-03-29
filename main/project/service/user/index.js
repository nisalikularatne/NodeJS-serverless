const User = require('@socar/socar-test/models/user');
require('dotenv').config({ path: '../../.env' });
const jwt = require('jsonwebtoken');
const config = require('@socar/socar-test/config');
exports.create = ({ name, license_number, location }) => {
    return User.query().insert({
        name, location, license_number

    });
};

exports.login = async (identity = {}) => {
    let user = await User.query().where('name', identity.name).first();
    const token = jwt.sign({
        user_name: user.name,
        user_id: user.id
    }, config.ACCESS_TOKEN_SECRET, { expiresIn: 60 * 60 });
    return { token: token };
};
