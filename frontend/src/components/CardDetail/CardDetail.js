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
        <div className='list'>
            <h1>Profil de l'utilisateur</h1>
            <p>Nom : {list.nom}</p>
            <p>Email : {list.age}</p>
            <img src={list.poster_path} alt="" srcset="" />
        </div>
    )
}

export default CardDetail