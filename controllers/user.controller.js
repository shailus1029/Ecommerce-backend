const services = require("../services/user.service");
const uuidv4 = require("uuid/v4");
const { handleError } = require("../utils/error.handler");
const logger = require("../utils/logger");

exports.createUser = function(req, res) {
  let errors = [];
  let isError = false;
  const body = req.body.data;

  return new Promise((resolve, reject) => {
    if (Object.keys(body).length === 0) {
      isError = true;
      handleError("noPayload", errors);
      logger.error(errors);
      return res.status(400).json({ errors: errors });
    }
    if (!body.firstname) {
      isError = true;
      handleError("invalidFirstname", errors);
    }
    if (!body.email) {
      isError = true;
      handleError("invalidEmail", errors);
    }
    if (!body.password) {
      isError = true;
      handleError("invalidPassword", errors);
    }
    if (!body.username) {
      isError = true;
      handleError("invalidUsername", errors);
    }
    if (isError) {
      return reject(errors);
    } else {
      return resolve(true);
    }
  })
    .then(resolved => {
      body.userId = uuidv4();
      return services.createUser(body);
    })
    .then(data => {
      res.status(200).json({ success: true, data: data });
    })
    .catch(err => {
      logger.error(err);
      res.status(400).json({ success: false, errors: err });
    });
};

exports.getUserList = function(req, res) {
  return new Promise((resolve, reject) => {
    return resolve(true);
  })
    .then(resolved => {
      return services.userList();
    })
    .then(data => {
      const filterdData = data.map(user => {
        let obj = {};
        obj.id = user._id;
        obj.userId = user.userId;
        obj.firstname = user.firstname;
        obj.lastname = user.lastname;
        obj.email = user.email;
        obj.username = user.username;
        return obj;
      })
      res.status(200).json({ success: true, userList: filterdData });
    })
    .catch(err => {
      logger.error(err);
      res.status(400).json({ success: false, errors: err });
    });
};

exports.getUserById = function(req, res) {
  return new Promise((resolve, reject) => {
    resolve(true);
  })
    .then(resolved => {
      return services.getUser(req.params.id);
    })
    .then(data => {
      res.status(200).json({ success: true, data: data });
    })
    .catch(err => {
      logger.error(err);
      res.status(400).json({ success: false, errors: err });
    });
};

exports.updateUser = function(req, res) {
  let errors = [];
  const body = req.body.data;
  return new Promise((resolve, reject) => {
    if (Object.keys(body).length === 0) {
      handleError("noPayload", errors);
      logger.error(errors);
      return res.status(400).json({ success: false, errors: errors });
    }

    resolve(true);
  })
    .then(resolved => {
      return services.updateUser(req.params.id, body);
    })
    .then(data => {
      res.status(200).json({ success: true, data: data });
    })
    .catch(err => {
      logger.error(err);
      res.status(400).json({ success: false, errors: err });
    });
};

exports.deleteUser = function(req, res) {
  return new Promise((resolve, reject) => {
    resolve(true);
  })
    .then(resolved => {
      return services.deleteUser(req.params.id);
    })
    .then(data => {
      res.status(200).json({ success: true, data: "user is deleted successfullty" });
    })
    .catch(err => {
      logger.error(err);
      res.status(500).json({ success: false, errors: err });
    });
};
