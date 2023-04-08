import React from 'react'
import { useState, useEffect } from 'react';

function CardForm({ id, perso, setList, refresh }) {

    const [values, setValues] = useState(null)

    useEffect(() => {
        console.log(values)
        setValues(perso)
        console.log(perso, id)
    }, [perso, id])


    const handleSubmit =  async () => {
        // console.log(values)
        await fetch(`http://localhost:8001/Onepiece/${perso._id}`, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
              method: 'PATCH',
              body: JSON.stringify(values)
            })

        console.log("ok", values);
        setList(values)
    }


    const handleChange = event => {
        const { value, name } = event.target
        setValues({...values, [name]:value})
    }

    if (!values) return null

    return (
        <div>
            <label htmlFor="name">Name:</label>
            <p>{values.nom}</p>
            <input type="text" name="nom" onChange={handleChange} />
            <label htmlFor="email">Age : </label>
            <input type="number" name="age" onChange={handleChange} />
            {/* <button className="btn-change" style={{ backgroundColor: "red" }} onClick={handleDelte}>Supprimer</button> */}
            <button type="submit" style={{ backgroundColor: "blue" }} onClick={handleSubmit} className='btn-change'>Confirmer</button>
        </div>
    )
}

export default CardForm