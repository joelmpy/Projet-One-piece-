import React from 'react'
import "../CardDetail/CardDetail.css"
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"

function CardDetail() {

    const [list, setList] = useState([])
    const {id} = useParams()

    const listPerso = () => {
        const url = `http://localhost:8001/onepiece${id}`
        fetch(url)
        .then((reponse) => {
            if(reponse.ok){
                return reponse.json()
            } 
            throw new Error("Something went wrong");
        })
        .then(data => setList(data))
        .catch((error) => {
            console.log("Error", error);
        })   
    
    }

    useEffect(() => {
        listPerso()
    }, [id])

  return (
    <div>
        
    </div>
  )
}

export default CardDetail