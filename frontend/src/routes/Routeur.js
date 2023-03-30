import React from 'react'
import {Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import PersoList from '../pages/PersoList/PersoList'
import Header from '../components/Header/Header'
import CardDetail from '../components/CardDetail/CardDetail'


function Routeur() {
  return (
    <>
    <Header/>
    <Routes>
       <Route path='/' element={<Home/>}></Route>
       <Route path='/Personnage' element={<PersoList/>}></Route>
       <Route path='/perso/:slug' element={<CardDetail/>}></Route>
    </Routes>
    </>
  )
}

export default Routeur