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
    const user = await MugiwaraModel.find({slug : req.params.slug})
    console.log(user);
       res.json(user[0])
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