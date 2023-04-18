import React from 'react'
import './Property.css'
const Property = () => {
  return (
    <div className='content'>
        <h2 className='exploreTitle margin'>Browse by property type</h2>
        <div className='featured'>
        <div className="featuredItem">
            <img src="https://q-xx.bstatic.com/xdata/images/xphoto/600x600/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o=" alt="Hotels" className='featuredImg' />
            <div className="featuredTitles">
                <h2>Hotels</h2>
                <span  className='exploreSubtitle'>957,156 hotels</span>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://r-xx.bstatic.com/xdata/images/xphoto/600x600/119467716.jpeg?k=63b69100225782d08fbd4d0205bf949c0be894ab946a0366edb8ad48e9c0ef46&o=" alt="Apartments" className='featuredImg' />
            <div className="featuredTitles">
                <h2>Apartments</h2>
                <span  className='exploreSubtitle'>1,053,115 apartments</span>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://r-xx.bstatic.com/xdata/images/xphoto/600x600/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o=" alt="Resorts" className='featuredImg' />
            <div className="featuredTitles">
                <h2>Resorts</h2>
                <span  className='exploreSubtitle'>19,144 resorts</span>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://r-xx.bstatic.com/xdata/images/xphoto/600x600/100235855.jpeg?k=61ef6692e05b5971e2e8dc75687f844e6d0ad295a9a5ace17f7c713f167e61b5&o=" alt="Villas" className='featuredImg' />
            <div className="featuredTitles">
                <h2>Villas</h2>
                <span  className='exploreSubtitle'>569,370 villas</span>
            </div>
        </div>
        </div>
     
        
        </div>
  )
}

export default Property