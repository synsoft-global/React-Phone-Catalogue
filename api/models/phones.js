"use strict";
module.exports = (sequelize, DataTypes) => {
  var Product = sequelize.define(
    "Products",
    {
      id: {
        type: DataTypes.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        unique: true,
      },
      networkTechnology: {
        type: DataTypes.STRING,
      },
      lanch: {
        type: DataTypes.JSON,
      },
      body: {
        type: DataTypes.JSON,
      },
      imageFileName: {
        type: DataTypes.JSON,
      },
      display: {
        type: DataTypes.JSON,
      },
      platefrom: {
         type: DataTypes.JSON,
      },
      memory: {
        type: DataTypes.JSON,
      },
      mainCamera: {
        type: DataTypes.JSON,
      },
      selfieCamera: {
         type: DataTypes.JSON,
      },
      sound: {
         type: DataTypes.JSON,
      },
     comms: {
         type: DataTypes.JSON,
      },
       featurs: {
         type: DataTypes.JSON,
      },
       bettery: {
         type: DataTypes.JSON,
      },
       misc: {
         type: DataTypes.JSON,
      },
       tests: {
         type: DataTypes.JSON,
      },
    },
    {
      freezeTableName: true // Model tableName will be the same as the model name
    }
  );
  return Product;
};


// "id": 0,
// "name": "iPhone 7",
// "manufacturer": "Apple",
// "description": "lorem ipsum dolor sit amet consectetur.",
// "color": "black",
// "price": 769,
// "imageFileName": "IPhone_7.png",
// "screen": "4,7 inch IPS",
// "processor": "A10 Fusion",
// "ram": 2,
// "battery": 5000mh