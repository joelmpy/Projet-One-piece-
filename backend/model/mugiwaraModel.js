const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const crewSchema = new Schema({
    nom: {
        type: String,
        required: true
      },
      armes:{
        type: [String],
      }, 
      fruit_du_demon : {
        type : String
      },
      taille: {
        type: String,
        // required: true
      },
      age: {
        type: Number,
        // required: true
      },
      genre: {
        type: String,
        enum: ['Homme', 'Femme'],
        // required: true
      },
      ile_de_naissance: {
        type: String,
        // required: true
      },
      reve: {
        type: String,
        // required: true
      },
      prime: {
        type: String,
        // required: true
      },
      affiliations: {
        type: [String],
        // required: true
      }, 
      image : {
        type : String
      },
      poster_path : {
        type : String
      }
})

const crewModel = mongoose.model('Mugiwara', crewSchema)

module.exports = crewModel

