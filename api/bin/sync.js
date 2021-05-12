#!/usr/bin/env node
const dbconfig = require("../db-config");
var env = "test";
var models = require("../models")(env);

if (dbconfig.syncDB) {
  models.sequelize.sync({
    force: true,
    logging: false,
    alter: true,
    preserveColumnsOnSync: true 
  })
  .then(() => {
    console.log(`Database & tables created!`);
  });
}
