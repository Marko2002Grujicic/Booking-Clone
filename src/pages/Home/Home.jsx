import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header'
import Featured from '../../components/Featured/Featured'
import TripPlanner from '../../components/TripPlanner/TripPlanner'
import Property from '../../components/Property/Property'
import FeaturedProperties from '../../components/Property/FeaturedProperties/FeaturedProperties'
const Home = () => {
  return (
    <div id='homeWrapper'>
    <Navbar/>
    <Header/>
    <div className="homeContainer">
      <Featured/>
      <TripPlanner/>
      <Property/>
      <FeaturedProperties/>
    </div>
    </div>
    
  )
}

export default Home