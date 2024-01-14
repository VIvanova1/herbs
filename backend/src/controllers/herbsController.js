const router = require("../routes");
const herbsController = require('../controllers/herbsController');
const herbsManager = require('../managers/herbsManager')

router.get('/catalog', async (req,res)=>{
    const herbs = await herbsManager.getAll().lean();
    res.render('herbs/catalog', {herbs})
})