const UserService = require('@socar/socar-test/service/user'),
    UserSchema = require('@socar/socar-test/schemas/users'),
    HttpStatusCodes = require('http-status-codes'),
    { schemaValidator } = require('@socar/socar-test/helpers');
exports.create = async (req, res) => {
    await schemaValidator(UserSchema.create, { ...req.query, ...req.body });
    const {
        name = null,
        license_number = null,
        location = null
    } = req.body;
    let user = await UserService.create({
        name,
        license_number,
        location
    });
    res.header('location', `/users/${user.id}`);
    res.status(HttpStatusCodes.CREATED);
    return user;
};
exports.login = async function (req, res) {
    const { name = null, expiry_date = null } = req.body;
    await schemaValidator(UserSchema.login, req.body);
    let loginResponse = await UserService.login({
        name,
        expiry_date
    });
    res.status(HttpStatusCodes.OK);
    return loginResponse;
};
