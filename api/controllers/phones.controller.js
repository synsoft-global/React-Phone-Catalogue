const Sequelize = require("sequelize"),
  Op = Sequelize.Op;
let globals = require("../global.js"),
  configs = require("../config.js");

module.exports = function (models) {
  /**
   * Objective: "phone creation"
   * @param {object} req - request object
   * @param {object} res - response object
   **/
  let createPhone = async function (req, res) {
    try {
      let data = req.body;
      console.log("+++++++++++++++++", req.body);
      if (!!data.name) {
        models.Products.create(data)
          .then(function (responceData) {
            console.log("user responce data is here ", responceData);
            data = {};
            data.phone_info = responceData;
            data.statuscode = globals.OK;
            data.message = globals.Phone_CREATED_SUCCESS;
            res.send(data);
          })
          .catch(function (err) {
            console.log(err);
            let data = {};
            data.statuscode = globals.Failed;
            data.message = globals.SOMETHING_WENT_WRONG;
            res.send(data);
          });
      } else {
        data = {};
        data.statuscode = globals.Failed;
        data.message = globals.REQUIRED_FIELD_MISSING;
        res.send(data);
      }
    } catch (error) {
      console.log("phone creation error ", error);
      let data = {};
      data.statuscode = globals.Failed;
      data.message = globals.SOMETHING_WENT_WRONG;
      res.send(data);
    }
  };


  /**
    * 
    * @param {Object} param contains page and pagesize
    */

    function paginate({ page, pageSize }) {
        const offset = page * +pageSize;
        const limit = pageSize;

        return {
            offset,
            limit
        };
    }

  /**
   * Objective: list out out all phone prasent in db
   * @param {id} req - {}
   * @param {object} res - response array of  object
   *  @author Synsoft Global
   **/
  const getListPhone = function (req, res) {
    try {
      let data = req.query;
      console.log("resqest body is here ",data);
      const page = data.page ? parseInt(data.page)- 1 : 0;
      const pageSize = data.pageSize ?  parseInt(data.pageSize): configs.pageSize;
      const paginate1 = paginate({ page, pageSize });
       let query = {
            ...paginate1,   
         };
      query["order"] = [["createdAt", "ASC"]];
      models.Products.findAndCountAll(query)
        .then(function (phones) {
          if (phones && phones.rows.length > 0) {
            let data = {};
            data.statuscode = globals.OK;
            data.message = globals.Success;
            data.count = phones.count;
            data.userData = phones.rows;
            res.send(data);
          } else {
            let data = {};
            data.statuscode = globals.Failed;
            data.message = globals.NO_PHONE_FOUND;
            res.send(data);
          }
        })
        .catch(function (err) {
          console.log(err);
          let data = {};
          data.statuscode = globals.Failed;
          data.message = globals.SOMETHING_WENT_WRONG;
          res.send(data);
        });
    } catch (error) {
      console.log(error);
      let data = {};
      data.statuscode = globals.Failed;
      data.message = globals.SOMETHING_WENT_WRONG;
      res.send(data);
    }
  };

  /**
   * Objective: get phone detail by id using param
   * @param {id} req - request id
   * @param {object} res - response object
   *  @author Synsoft Global
   **/
  let getPhoneDetails = function (req, res) {
    try {
      let id = req.query.id;
      // console.log("user id for this methods is ",id);
      // console.log("user id for this methods is ",req);
      if (id) {
        models.Products.findAll({ where: { id: id } })
          .then(function (user) {
            // console.log("user id for this methods is ",user);
            if (user && user.length > 0) {
              let data = {};
              data.statuscode = globals.OK;
              data.message = globals.Success;
              data.phone_info = user;
              res.send(data);
            } else {
              let data = {};
              data.statuscode = globals.Failed;
              data.message = globals.NO_ACCOUNT_FOUND;
              res.send(data);
            }
          })
          .catch(function (err) {
            console.log(err);
            let data = {};
            data.statuscode = globals.Failed;
            data.message = globals.SOMETHING_WENT_WRONG;
            res.send(data);
          });
      } else {
        let data = {};
        data.statuscode = globals.Failed;
        data.message = globals.USER_ID_UNDIFIEND;
        res.send(data);
      }
    } catch (error) {
      console.log(error);
      let data = {};
      data.statuscode = globals.Failed;
      data.message = globals.SOMETHING_WENT_WRONG;
      res.send(data);
    }
  };

  /**
   * Objective: update user details
   * @param {id} req - request id and update data
   * @param {object} res - response object
   *  @author Synsoft Global
   **/

  let updatePhone = function (req, res) {
    try {
      // console.log("update user data is here ",req);
      let id = req.query.id;
      let updateData = req.body;
      console.log("update user data is here ", id);
      console.log("update user data is here ", updateData);
      if (id) {
        models.Products.update(updateData, { where: { id: id } })
          .then(function (user) {
            // console.log("updated user data",user)
            let data = {};
            data.statuscode = globals.OK;
            data.message = globals.Success;
            data.phone_info = updateData;
            res.send(data);
          })
          .catch(function (err) {
            console.log(err);
            let data = {};
            data.statuscode = globals.Failed;
            data.message = globals.SOMETHING_WENT_WRONG;
            res.send(data);
          });
      } else {
        let data = {};
        data.statuscode = globals.Failed;
        data.message = globals.USER_ID_UNDIFIEND;
        res.send(data);
      }
    } catch (error) {
      console.log(error);
      let data = {};
      data.statuscode = globals.Failed;
      data.message = globals.SOMETHING_WENT_WRONG;
      res.send(data);
    }
  };

  /**
   * Objective: delete user
   * @param {id} req - request id
   * @param {object} res - response object
   *  @author Synsoft Global
   **/

  let deletePhone = function (req, res) {
    try {
      let id = req.query.id;
      //    console.log("delete this user id is here ",id);
      if (id) {
        models.Products.destroy({ where: { id: id } })
          .then(function (user) {
            // console.log("updated user data",user)
            let data = {};
            data.statuscode = globals.OK;
            if (user) {
              data.message = globals.Phone_DELETE_SUCCESS;
            } else {
              data.message = globals.Phone_FAILED_SUCCESS;
            }
            data.responceData = user;
            res.send(data);
          })
          .catch(function (err) {
            console.log(err);
            let data = {};
            data.statuscode = globals.Failed;
            data.message = globals.SOMETHING_WENT_WRONG;
            res.send(data);
          });
        //  let data = {};
        // data.statuscode = globals.OK;
        // data.message = "delete this user id is here " + id;
        // res.send(data);
      } else {
        let data = {};
        data.statuscode = globals.Failed;
        data.message = globals.Phone_ID_UNDIFIEND;
        res.send(data);
      }
    } catch (error) {
      console.log(error);
      let data = {};
      data.statuscode = globals.Failed;
      data.message = globals.SOMETHING_WENT_WRONG;
      res.send(data);
    }
  };

  return {
    createPhone: createPhone,
    getListPhone: getListPhone,
    getPhoneDetails: getPhoneDetails,
    updatePhone: updatePhone,
    deletePhone: deletePhone,
  };
};
