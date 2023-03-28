const MugiwaraModel = require("../model/mugiwaraModel");

const AllCrew = async (req, res) => {
    try {
        const users = await MugiwaraModel.find({})
        res.json(users)
    } catch (error){
        res.status(500).json({message : error.message})
    }
}

const singleCrew = async (req, res) => {
    try {
        const user = await MugiwaraModel.find({_id : req.params.id})
       res.json(user[0])
      } catch (err) {
      res.status(500).json({ message: err.message });
      }
 }

 const crewPost = async (req, res) => {
    const crew = new MugiwaraModel(req.body)
    try {
       await crew.save()
        res.json(crew)
    } catch (error) {
       res.status(500).json({ message: error.message});
    }
 }

module.exports = {
singleCrew,
AllCrew,
crewPost
}