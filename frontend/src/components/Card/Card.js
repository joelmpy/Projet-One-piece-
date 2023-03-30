import React from 'react'
import '../Card/Card.css'
import logo from "../../assets/logo.webp"
import { Link } from 'react-router-dom'


function Card({ perso }) {
    const { age, armes, genre, image, poster_path, prime, reve, taille, affiliations, nom, id } = perso

    return (
        <div>
        <Link key={perso.id} to={`/perso/${perso.slug}`}>
            <div className="cards">
                <img className="cards__img" src={image ? image : logo} alt="" srcset="" />
                <div className="cards__overlay">
                    <div className="card__title">{nom}</div>
                    <div className="card__runtime">
                        {age}ans
                        <span className="card__rating">{taille}</span>
                    </div>
                    <div className="card__description">{reve}<i className="fas fa-star" /></div>
                </div>
            </div>
            </Link>
        </div>
    )
}

export default Card