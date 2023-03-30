import React from "react";
import "../PersoList/PersoList.css";
import Card from "../../components/Card/Card";
import { useState, useEffect } from "react";

function PersoList() {
  const [list, setList] = useState([]);

  const listPerso = () => {
    let url = "http://localhost:8001/onepiece";
    fetch(url)
      .then((reponse) => {
        if (reponse.ok) {
          return reponse.json();
        }
        throw new Error("Something went wrong");
      })
      .then((data) => setList(data))
      .catch((error) => {
        console.log("Error", error);
      });
  };
  useEffect(() => {
    listPerso();
    window.scrollTo(0,0)
  }, []);

  return (
    <div className="movie__list">
      <h2 className="list__title">Perso List</h2>
      <div className="list__cards">
        {
          list.map((perso) => {
            return (
            <Card perso={perso}/>
            )
          })
        }
      </div>
    </div>
  );
}

export default PersoList;
