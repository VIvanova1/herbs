const router = require('express').Router();
const herbsControllers = require('./controllers/herbsController')
const userControllers = require('./controllers/userController')

router.use('/api/herbs', herbsControllers);

module.exports = router;