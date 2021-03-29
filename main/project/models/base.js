const { Model } = require('objection');
const config = require('@socar/socar-test/config');
const knexInstanceFile = require('@socar/socar-test/knexfile');
const knex = require('knex');
Model.knex(knex(knexInstanceFile[config.NODE_ENV]));

module.exports = Model;
