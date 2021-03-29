const { SocarError } = require('@socar/socar-test/utils/errors');
require('dotenv').config({ path: '../../.env' });
const config = require('@socar/socar-test/config');
const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
    let authorizationHeader = req.headers.authorization || null;
    if (!authorizationHeader) {
        let error = new SocarError('UNAUTHORIZED', 1000, 401);
        res.status(401).send(error);
    }

    let token = authorizationHeader.substr(7, authorizationHeader.length - 1);
    if (token == null) return res.sendStatus(401);
    jwt.verify(token, config.ACCESS_TOKEN_SECRET, (err, user) => {
        // eslint-disable-next-line no-console
        console.log(err);
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};
