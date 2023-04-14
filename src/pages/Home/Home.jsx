import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header'
import Featured from '../../components/Featured/Featured'
const Home = () => {
  return (
    <div id='homeWrapper'>
    <Navbar/>
    <Header/>
    <div className="homeContainer">
      <Featured/>
      <h1 className='homeTitle'>Browse by property type</h1>
    </div>
    </div>
    
  )
}

export default Home