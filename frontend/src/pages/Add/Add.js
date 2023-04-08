import React from 'react'
import { useState } from 'react'

function Add() {

  const [add, setAdd] = useState({})

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData()
    data.append('nom', add.nom)    
    data.append('armes', add.armes)    
    data.append('fruit_du_demon', add.fruit_du_demon)    
    data.append('taille', add.taille)    
    data.append('age', add.age)  
    data.append('genre', add.genre)  
    data.append('reve', add.reve)  
    data.append('prime', add.prime) 
    data.append('affiliations', add.affiliations)
    data.append('image', add.image)
    data.append('poster_path', add.poster_path)
    data.append('prime_poster', add.prime_poster) 
    data.append('slug', add.slug)
    
    const url = "http://localhost:8001/onepiece"
    fetch(url, {
      method: "POST",
      body: data
    })
      .then(reponse => reponse.json())
      .then(data => setAdd(data))
      .catch(error => console.log(error))
  }

  const handleChange = (event) => {
    const { name, value, files } = event.target;
    if(name === 'image'){
      setAdd({...add, [name] : files[0]})
    } else if (name === "poster_path"){
      setAdd({...add, [name] : files[1]})
    } else if (name === 'prime_poster'){
      setAdd({...add, [name] : files[2]})
    } else {
      setAdd({...add, [name] : value})
    }

  }


  return (
    <div>
      <h1>Add Perso</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="nom"  onChange={handleChange} />
        <label htmlFor="email">Age : </label>
        <input type="number" name="age" onChange={handleChange} />
        <label htmlFor="email">Image : </label>
        <input type="file" name="poster_path" onChange={handleChange}></input>
        <label htmlFor="email">Poster Image : </label>
        <input type="file" name="image" onChange={handleChange}></input>
        <label htmlFor="email">Prime Image : </label>
        <input type="file" name="prime_poster" onChange={handleChange}></input>
        <button type="submit" className='btn-submit'>Envoyer</button>
      </form>
    </div>
  )
}

export default Add