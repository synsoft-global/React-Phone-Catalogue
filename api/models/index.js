 const Sequelize = require("sequelize");
 const dbconfig = require("../db-config");
 const fs = require("fs");
const path = require("path");
module.exports = function (env) {
const sequelize = new Sequelize(dbconfig.database, dbconfig.username, dbconfig.password, {
  host: dbconfig.host,
  dialect: "mysql",
  port:dbconfig.port,
  pool: {
    max: 30,
    min: 2,
    acquire: 100*1000,
    idle: 20000
  }
});

// If database sync or alteration required.
const db = {};
 fs.readdirSync(__dirname).filter(function (file) {
    return (file.indexOf(".") !== 0) && (file !== "index.js");
  }).forEach(function (file) {
    const model = sequelize["import"](path.join(__dirname, file));
    db[model.name] = model;
  });

  Object.keys(db).forEach(function (modelName) {
    if ("associate" in db[modelName]) {
      db[modelName].associate(db);
    }
  });

    db.sequelize = sequelize;

  return db;
  }