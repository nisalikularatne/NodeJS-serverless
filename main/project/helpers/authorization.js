const { SocarError } = require('@socar/socar-test/utils/errors');
exports.authorization = async (requestFromMiddleware, userID) => {
    let { user_id } = requestFromMiddleware;
    if (user_id.toString() !== userID) {
        throw new SocarError('Forbidden access', 1000, 403);
    }

};
