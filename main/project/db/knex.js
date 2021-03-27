const Config = require('@socar/socar-test/config');
const environment = Config.NODE_ENV;
const knexFile = require('../knexfile');
let config = knexFile[environment];
/*Important note: This code is a workaround solution to enable read replica from different DB*/
const knexMaster = require('knex')(config);
module.exports = knexMaster;

