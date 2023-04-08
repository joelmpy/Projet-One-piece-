import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";

function Editer() {
    // const [list, setList] = useState(null)
    const [loading, setLoading] = useState(true);
    const [values, setValues] = useState(null)
    const [character, setCharacter] = useState(null)
    const { id } = useParams()


    // Requete pour le personnage //

    const listPerso = () => {
        fetch(`http://localhost:8001/onepiece/${id}`)
            .then((reponse) => {
                if (reponse.ok) {
                    return reponse.json()
                }
                throw new Error("Something went wrong");
            })
            .then(data => {
                setValues(data)
                setCharacter(data)
                setLoading(false);
            })
            .catch((error) => {
                console.log("Error", error);
            })

    }

    useEffect(() => {
        listPerso()
        window.scrollTo(0, 0);
    }, [id])

// Requete pour Editer le personnage //
    const handleSubmit =  async () => {
        console.log(id)
        await fetch(`http://localhost:8001/Onepiece/${character._id}`, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
              method: 'PATCH',
              body: JSON.stringify(values)
            })
        setCharacter(values)
        setValues(values)
    }


    const handleChange = event => {
        const { value, name } = event.target
        setValues({...values, [name]:value})
    }

    // Condition pour la page si elle est introuvable //

    if (loading) {
        return <div>Chargement...</div>;
    }



  return (
    <div>
        <h1>Editer personnage</h1>
        <div className='card-detail'>
            <div className='card-detail-poster'>
                <img src={character.poster_path} alt="" srcset="" />
                <figcaption className='overlay'></figcaption>
            </div>
            <div className='card-poster_path'>
                <img src={character.prime_poster} alt="" className='poster_path_prime' />
                <div className='list-detail'>
                <p><span>Nom : </span>{character.nom}</p>
                <p><span>Fruits du démon : </span>{character.fruit_du_demon}</p>
                <p><span>Armes : </span>{character.armes}</p>
                <p><span>Taille :</span>{character.taille}</p>
                <p><span>Age :</span>{character.age}ans</p>
                <p><span>Genre : </span>{character.genre}</p>
                <p><span>Reve : </span>{character.reve}</p>
                <p><span>Affiliations : </span>{character.affiliations}</p>
                </div>
            </div>
        </div>

        <div>
            <label htmlFor="name">Name:</label>
            <p>{values.nom}</p>
            <input type="text" name="nom" onChange={handleChange} />
            <label htmlFor="email">Age : </label>
            <input type="number" name="age" onChange={handleChange} />
            {/* <button className="btn-change" style={{ backgroundColor: "red" }} onClick={handleDelte}>Supprimer</button> */}
            <button type="submit" style={{ backgroundColor: "blue" }} onClick={handleSubmit} className='btn-change'>Confirmer</button>
        </div>

    </div>
  )
}

export default Editer