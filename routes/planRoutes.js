const router = require('express').Router();
const { planCtrl } = require('../controllers') 

// ROUTES - METHODS //
router.get('/', planCtrl.getPlan)
router.post('/', planCtrl.createPlan)


// ROUTES - METHODS //
router.get('/', planCtrl.getPlan)
router.post('/', planCtrl.createPlan)
router.put('/:id', planCtrl.updatePlan)
router.delete('/:id', planCtrl.deletePlan)

module.exports = router;

