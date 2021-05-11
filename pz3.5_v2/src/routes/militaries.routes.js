const express =require('express');
const router =express.Router();

const militaryController= require('../controllers/militaries.controller.js');
console.log(militaryController);
router.get('/',militaryController.findAll);

router.post('/',militaryController.create);

router.get('/:id',militaryController.findById);

router.put('/:id',militaryController.update);

router.delete('/:id',militaryController.delete);

module.exports = router;