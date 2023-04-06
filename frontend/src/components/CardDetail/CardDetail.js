import React from 'react'
import "../CardDetail/CardDetail.css"
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";


function CardDetail() {

    const [list, setList] = useState(null)
    const [loading, setLoading] = useState(true);
    const { slug } = useParams()

    const listPerso = () => {
        fetch(`http://localhost:8001/onepiece/${slug}`)
            .then((reponse) => {
                if (reponse.ok) {
                    return reponse.json()
                }
                throw new Error("Something went wrong");
            })
            .then(data => {
                setList(data)
                setLoading(false);
            })
            .catch((error) => {
                console.log("Error", error);
            })

    }

    useEffect(() => {
        listPerso()
        window.scrollTo(0, 0);
    }, [slug])

    if (loading) {
        return <div>Chargement...</div>;
    }

    return (
        <div className='card-detail'>
            <div className='card-detail-poster'>
                <img src={list.poster_path} alt="" srcset="" />
                <figcaption className='overlay'></figcaption>
            </div>
            <div className='card-poster_path'>
                <img src={list.prime_poster} alt="" className='poster_path_prime' />
                <div className='list-detail'>
                <p><span>Nom : </span>{list.nom}</p>
                <p><span>Fruits du démon : </span>{list.fruit_du_demon}</p>
                <p><span>Armes : </span>{list.armes}</p>
                <p><span>Taille :</span>{list.taille}</p>
                <p><span>Age :</span>{list.age}ans</p>
                <p><span>Genre : </span>{list.genre}</p>
                <p><span>Reve : </span>{list.reve}</p>
                <p><span>Affiliations : </span>{list.affiliations[0]}{list.affiliations[1]}</p>
                </div>
            </div>
         

        </div>
    )
}

export default CardDetail