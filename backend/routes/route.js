const express = require('express')
const router = express.Router();
const {singleCrew, AllCrew, crewPost, patchCrew, deleteCrew} = require('../controllers/MugiwaraControllers')
const multer = require('multer')


// Configuration de Multer
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function(req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })
  


// get All //
router.get('/Onepiece', AllCrew)

// get single perso //
router.get('/Onepiece/:slug', singleCrew)

// method Post new Perso // 
router.post('/Onepiece', upload.array('files'), crewPost)

// method Patch //
router.patch('/Onepiece/:id', patchCrew)


// method Delete // 
router.delete('/Onepiece/:id', deleteCrew)

module.exports = router