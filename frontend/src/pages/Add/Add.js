import React from 'react'
import { useState } from 'react'
import "./Add.css"

function Add() {

  const [add, setAdd] = useState({})
  const [profileImage, setProfileImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const [primeImage, setPrimeImage] = useState(null);


  const handleProfileImageChange = event => {
    setProfileImage(event.target.files[0]);
  };

  const handleCoverImageChange = event => {
    setCoverImage(event.target.files[0]);
  };

  const handlePrimeImageChange = event => {
    setPrimeImage(event.target.files[0])
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData()
      // add.age = undefined 
      // if (add.age !== undefined && add.age !== null && add.age !== '') {
      //   const ageNumber = parseInt(add.age);
      //   console.log(ageNumber);
      // } else {
      //   console.log("L'âge n'est pas défini ou n'est pas un nombre valide.");
      // }
      formData.append('nom', add.nom)
      formData.append('age', add.age)
      formData.append('slug', add.slug)
      // formData.append('armes', add.armes)    
      // formData.append('fruit_du_demon', add.fruit_du_demon)    
      // formData.append('taille', add.taille)    
      // formData.append('reve', add.reve)  
      // formData.append('prime', add.prime) 
      // formData.append('affiliations', add.affiliations)
      formData.append('files', profileImage)
      formData.append('files', coverImage)
      formData.append('files', primeImage) 
  

    // const url = "http://localhost:8001/onepiece"
    fetch("http://localhost:8001/Onepiece", {
      method: "POST",
      body: formData
    })
      .then(reponse => {
        if (reponse.ok) {
          return reponse.json()
      }
      throw new Error("Something went wrong");
      })
      .then(data => {
        console.log(data)
        setAdd(data)
      }).catch((error) => {
        console.log(error)
      })
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAdd({ ...add, [name]: value })
  }


  // if(name === 'image'){
  //   setAdd({...add, [name] : files[0]})
  // } else if (name === "poster_path"){
  //   setAdd({...add, [name] : files[1]})
  // } else if (name === 'prime_poster'){
  //   setAdd({...add, [name] : files[2]})
  // } else {
  //   setAdd({...add, [name] : value})
  // }



  return (
    <div>
      <h1>Add Perso</h1>
      <form onSubmit={handleSubmit} className="form-add">
        <label htmlFor="name">Name:</label>
        <input type="text" name="nom" onChange={handleChange} />

        <label htmlFor="name">Slug:</label>
        <input type="text" name="slug" onChange={handleChange} />

        <label htmlFor="text">Age : </label>
        <input type="number" name="age" onChange={handleChange} />

        <label htmlFor="email">Profil Image : </label>
        <input type="file" name="files" onChange={handleProfileImageChange}></input>
        <label htmlFor="email">Poster Image : </label>
        <input type="file" name="files" onChange={handleCoverImageChange}></input>
        <label htmlFor="email">Prime Image : </label>
        <input type="file" name="files" onChange={handlePrimeImageChange}></input>


        <button type="submit" className='btn-submit'>Envoyer</button>
      </form>
    </div>
  )
}

export default Add