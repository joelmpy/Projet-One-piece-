import React from 'react'
import '../Card/Card.css'
import logo from "../../assets/logo.webp"
function Card({perso}) {

    const {age, armes, genre, image, poster_path, prime, reve, taille, affiliations, nom} = perso

  return (
    <div>
  <div className="cards">
                <img className="cards__img" src={image ? image : logo}  alt="" srcset="" />
                <div className="cards__overlay">
                    <div className="card__title">{nom}</div>
                    <div className="card__runtime">
                        {age}ans
                        <span className="card__rating">{taille}</span>
                    </div>
                    <div className="card__description">{reve}<i className="fas fa-star" /></div>
                </div>
            </div>
    </div>
  )
}

export default Card