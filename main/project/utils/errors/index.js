/**
 * Socar Error class
 */
class SocarError extends Error {
    constructor(message, errorCode = 1000, httpStatusCode = 400) {
        super();
        this.name = 'SocarError';
        this.message = message;
        this.httpStatusCode = httpStatusCode;
        this.errorCode = errorCode;
    }

    getMessage() {
        return { 'Error': this.message };
    }
}


module.exports = {
    SocarError
};
