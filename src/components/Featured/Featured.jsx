import React from 'react'
import './Featured.css'

const Featured = () => {
  return (
    <div className='wrapper'>
    <h2 className='exploreTitle'>Explore Serbia</h2>
    <p className='exploreSubtitle'>These popular destinations have a lot to offer</p>
    <br/>
<div className='featured'>
        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/city/600x600/637152.jpg?k=e0c8290998356aa03d1ab85530d425b75a4958f5b06aca8c1bc55a638a988d7f&o=" alt="Belgrade" className='featuredImg' />
            <div className="featuredTitles">
                <h2>Belgrade</h2>
                <span  className='exploreSubtitle'>3387 properties</span>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/city/600x600/644804.jpg?k=f781c6ce446353fa3d7a3463d5a4e686e460fcede6bc506ce68fe4e00d363bd7&o=" alt="Zlatibor" className='featuredImg' />
            <div className="featuredTitles">
                <h2>Zlatibor</h2>
                <span  className='exploreSubtitle'>1601 properties</span>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/city/600x600/638266.jpg?k=e400af34c312614dd3bf1172aab0fa961486151a440c459e01c7767a92786bf9&o=" alt="Novi Sad" className='featuredImg' />
            <div className="featuredTitles">
                <h2>Novi Sad</h2>
                <span  className='exploreSubtitle'>1303 properties</span>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://r-xx.bstatic.com/xdata/images/city/600x600/691607.jpg?k=2f49ed5b5ba1c9638fcd18d95758f4439632a5c30f6ab98ad3af58d71c18ae21&o=" alt="Kopaonik" className='featuredImg' />
            <div className="featuredTitles">
                <h2>Kopaonik</h2>
                <span  className='exploreSubtitle'>818 properties</span>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://q-xx.bstatic.com/xdata/images/region/600x600/37573.jpg?k=be939f550200d0f137c93219549351b323e640da3d9a42eb1410df2a7bbae54f&o=" alt="Novi Sad" className='featuredImg' />
            <div className="featuredTitles">
                <h2>Vrnjacka Banja</h2>
                <span className='exploreSubtitle'>432 properties</span>
            </div>
        </div>
        </div>
    </div>
    
  )
}

export default Featured