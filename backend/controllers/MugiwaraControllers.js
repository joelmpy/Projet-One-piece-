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
    // console.log(user);
       res.json(user[0])
 }

 const crewPost = async (req, res) => {
    console.log(req.files)
    req.body.image = `http://localhost:8001/uploads/${req.files[0].filename}`
    req.body.poster_path = `http://localhost:8001/uploads/${req.files[1].filename}`
    req.body.prime_poster = `http://localhost:8001/uploads/${req.files[2].filename}`
    const crew = new MugiwaraModel(req.body)
    try {
       await crew.save()
        res.json(crew)
    } catch (error) {
       res.status(500).json({ message: error.message});
    }
 }


 const patchCrew = async (req, res) => {
    const crew = await MugiwaraModel.findByIdAndUpdate(req.params.id, req.body)
    await crew.save()
    if(!crew){
        res.status(500).send('Serveur a pas udapte la page')
    }
    res.status(200)
    res.json(crew)
       console.log(`Patch change ==> ${crew}`)
 }



 const deleteCrew = async (req, res) => {
    const crew = await MugiwaraModel.findByIdAndDelete({_id : req.params.id})
    if(!crew){
        res.status(500).send('Serveur a pas trouver la page')
    }
    res.status(200)
    res.json(crew)
 }

module.exports = {
singleCrew,
AllCrew,
crewPost,
patchCrew,
deleteCrew
}