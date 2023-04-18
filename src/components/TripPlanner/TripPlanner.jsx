import React, { useState } from 'react'
import '../Featured/Featured.css'
import './TripPlanner.css'
import { FaCity} from 'react-icons/fa'
import { AiOutlineHeart} from 'react-icons/ai'
import {TbBike, TbBeach} from 'react-icons/tb'
import Romance from './Categories/Romance'
import { Outdoors } from './Categories/Outdoors'
import Beach from './Categories/Beach'
import City from './Categories/City'
const TripPlanner = () => {
    const [category, setCategory] = useState('Romance')
  return (
    <div className='tripPlanner-container'>
        <div className='titles'>
            <h2 className='exploreTitle'>Quick and easy trip planner</h2>
            <p className='exploreSubtitle'>Pick a vibe and explore the top destinations in Serbia</p>
        </div>
        <div className="list">
            <div className={`${category === 'Romance'? 'category active' : 'category'}`} onClick={()=>setCategory('Romance')}>
               <AiOutlineHeart className='icon'/> <span>Romance</span>
            </div>
            <div className={`${category === 'Outdoors'? 'category active' : 'category'}`} onClick={()=>setCategory('Outdoors')}>
            <TbBike className='icon'/> <span>Outdoors</span>
            </div>
            <div className={`${category === 'Beach'? 'category active' : 'category'}`} onClick={()=>setCategory('Beach')}>
            <TbBeach className='icon'/> <span>Beach</span>
            </div>
            <div className={`${category === 'City'? 'category active' : 'category'}`} onClick={()=>setCategory('City')}>
            <FaCity className='icon'/> <span>City</span>
            </div>
        </div>
        <div>
            {category === 'Romance' ? <Romance/> : ''}
            {category === 'Outdoors' ? <Outdoors/> : ''}
            {category === 'Beach' ? <Beach/> : ''}
            {category === 'City' ? <City/> : ''}
        </div>
    </div>
  )
}

export default TripPlanner