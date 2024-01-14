const router = require('express').Router();
const herbsControllers = require('./controllers/herbsController')

router.use('/herbs', herbsControllers);


module.exports = router;