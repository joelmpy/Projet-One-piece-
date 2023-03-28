const express = require('express')
const router = express.Router();
const {singleCrew, AllCrew, crewPost} = require('../controllers/MugiwaraControllers')


// get All //
router.get('/Onepiece', AllCrew)

// get single perso //
router.get('/Onepiece/:id', singleCrew)

// method Post new Perso // 
router.post('/Onepiece', crewPost)

module.exports = router