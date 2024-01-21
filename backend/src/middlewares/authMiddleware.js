const jwt = require('../utils/jwt');
const config = require('../config');
const errorHandler = require('../utils/error')


// exports.auth = async (req, res, next) => {
//     const token = req.cookies[config.TOKEN_KEY];

//     if (token) {
//         try {
//             const decodedToken = await jwt.verify(token, config.SECRET);
//             req.user = decodedToken;
//             res.locals.user = decodedToken;
//             res.locals.isAuthenticated = true;

//             next();
//         } catch (err) {
//             res.clearCookie(config.TOKEN_KEY);
//         }
//     } else {
//         next();
//     }
// }

exports.isAuth = (req, res, next) => {
    if (!req.user) {
       throw errorHandler(401, 'Not unauthorized')
    }
    next();
}