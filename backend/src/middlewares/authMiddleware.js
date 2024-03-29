const jwt = require("../utils/jwt");
const config = require("../config");
const errorHandler = require("../utils/error");

exports.auth = async (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    try {
      const decodedToken = await jwt.verify(token, config.SECRET);
      req.user = decodedToken;
      res.locals.user = decodedToken;
      res.locals.isAuthenticated = true;

      next();
    } catch (err) {
      console.log("err", err);
    }
  } else {

    next();
  }
};

exports.isAuth = (req, res, next) => {

  // console.log(req.headers, 'headers');
  if(!req.headers.authorization){
    // console.log('headers(no-auth)', req.headers, 'headers');
  throw errorHandler(401, "Not authorized");

  }
  next();
};
