require('dotenv').config({ path: '../../.env' });
const ENV_VARS = process.env;
let config = {
    db: {
        dev: {
            client: ENV_VARS.DEV_DB_CLIENT,
            host: ENV_VARS.DEV_DB_HOST,
            name: ENV_VARS.DEV_DB_NAME,
            user: ENV_VARS.DEV_DB_USER,
            password: ENV_VARS.DEV_DB_PASSWORD,
            min_pool: ENV_VARS.DEV_DB_MIN_POOL || 0,
            max_pool: ENV_VARS.DEV_DP_MAX_POOL || 2
        },
        test: {
            client: ENV_VARS.TEST_DB_CLIENT,
            host: ENV_VARS.TEST_DB_HOST,
            name: ENV_VARS.TEST_DB_NAME,
            user: ENV_VARS.TEST_DB_USER,
            password: ENV_VARS.TEST_DB_PASSWORD,
            min_pool: ENV_VARS.TEST_DB_MIN_POOL || 0,
            max_pool: ENV_VARS.TEST_DP_MAX_POOL || 2
        },
        staging: {
            client: ENV_VARS.STAGING_DB_CLIENT,
            host: ENV_VARS.STAGING_DB_HOST,
            name: ENV_VARS.STAGING_DB_NAME,
            user: ENV_VARS.STAGING_DB_USER,
            password: ENV_VARS.STAGING_DB_PASSWORD,
            min_pool: ENV_VARS.STAGING_DB_MIN_POOL || 0,
            max_pool: ENV_VARS.STAGING_DB_MAX_POOL || 2
        },
        production: {
            min_pool: ENV_VARS.PRODUCTION_DB_MIN_POOL || 0,
            max_pool: ENV_VARS.PRODUCTION_DB_MAX_POOL || 10
        },
    },

    NODE_ENV: ENV_VARS.NODE_ENV || 'development',
    SERVICE_NAME: 'socar-test',
    ACCESS_TOKEN_SECRET:ENV_VARS.ACCESS_TOKEN_SECRET,
    STACK_ID: ENV_VARS.STACK_ID,
    MAX_ITEMS_PER_PAGE: 100,
    DEFAULT_ITEMS_PER_PAGE: 15,
    ENABLE_DB_REPLICA: ENV_VARS.ENABLE_DB_REPLICA || 'false',
    PORT: ENV_VARS.PORT || 8003,
    APP_URL: ENV_VARS.APP_URL
        || (ENV_VARS.STACK_ID === 'local' && 'http://localhost:8007')
        || (ENV_VARS.STACK_ID && `https://socar_test.${ENV_VARS.STACK_ID}.socar.cloud`)
        || 'http://localhost:8007'
};

module.exports = config;
