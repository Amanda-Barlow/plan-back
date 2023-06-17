const db = require('../models')
const Plan = require('../models/plan');
const express = require('express');
const router = express.Router();


// READ ROUTE GET/api/plans
const getPlan = (req, res) => {
    Plan.find({ user:req.user})
    .then((foundPlan) => {
        if(!foundPlan){
            res.status(404).json({message: 'Cannot find Plan'})
        } else {
            res.status(200).json({data: foundPlan})
        }
    })
}


// CREATE ROUTE POST/api/plans
const createPlan = async (req, res) => {
    try {
      const createdPlan = await Plan.create(req.body);
      res.status(201).json({ data: createdPlan });
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
  };


// UPDATE ROUTE
const updatePlan = (req, res) => {
    Plan.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then((updatedPlan) => {
        if(!updatedPlan){
            res.status(400).json({Message: 'Could not update plan'})
        } else {
            res.status(200).json({Data: updatedPlan, Message: "Plan updated"})
        }
    })
}

// DESTROY ROUTE
const deletePlan = (req, res) => {
    Plan.findByIdAndDelete(req.params.id)
    .then((deletedPlan) => {
        if(!deletedPlan){
            res.status(400).json({Message: 'Could not delete plan'})
        } else {
            res.status(200).json({Data: deletedPlan, Message: "P deleted"})
        }
    })
}



router.get('/plan', getPlan);
router.post('/plan', createPlan);
router.put('/plan/:id', updatePlan);
router.delete('/plan/:id', deletePlan);

module.exports = {
    getPlan, 
    createPlan,
    updatePlan,
    deletePlan,
    router
}
