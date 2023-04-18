import React from 'react'
import './FeaturedProperties.css'
const FeaturedProperties = () => {
  return (
    <div className='content' id='content'>
    <h2 className='exploreTitle'>Homes guests love</h2>
    <br/>
        <div className='featured'>
        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1" alt="Aparthotel Stare Miasto" className='featuredImg' />
            <div className="featuredTitles">
                <h2>Aparthotel Stare Miasto</h2>
                <span  className='exploreSubtitle'>Old Town, Poland, Krakow</span>
                <br/>
                <span  className='exploreSubtitle price'>Starting from <span className='priceTag'>RSD 11,533</span></span>
                <div className='rating'>
                    <button>8.6</button> 
                    <span className='exploreSubtitle'>
                    <b>Excellent</b> 2,141 reviews
                        </span></div>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=9a065fcd92168145d8c8358701662c76793535597b678efc8f6921c8e3c188e6&o=&s=1" alt="7Seasons Apartments Budapest" className='featuredImg' />
            <div className="featuredTitles">
                <h2>7Seasons Apartments Budapest</h2>
                <span  className='exploreSubtitle'>06. Terézváros, Hungary, Budapest</span>
                <br/>
                <span  className='exploreSubtitle price'>Starting from <span className='priceTag'>RSD 13,050</span></span>
                <div className='rating'>
                    <button>8.8</button> 
                    <span className='exploreSubtitle'>
                    <b>Excellent</b> 7,605 reviews
                        </span></div>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/352170812.webp?k=75ffc5f9eb3f3cc394b901714c1544757b05849dbbdf30e4fc8c6df53931c131&o=&s=1" alt="numa I Vita Apartments" className='featuredImg' />
            <div className="featuredTitles">
                <h2>numa I Vita Apartments</h2>
                <span  className='exploreSubtitle'>Fortezza da Basso, Italy, Florence</span>
                <br/>
                <span  className='exploreSubtitle price'>Starting from <span className='priceTag'>RSD 24,331</span></span>
                <div className='rating'>
                    <button>9.3</button> 
                    <span className='exploreSubtitle'>
                    <b>Wonderful</b> 997 reviews
                        </span></div>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/29466558.webp?k=fa323cf3e030ae6b41c8b475fe2853ae4e9e38148501d68dd5b915905dcea664&o=&s=1" alt="Cheval Three Quays at The Tower of London" className='featuredImg' />
            <div className="featuredTitles">
                <h2>Cheval Three Quays at The Tower of London</h2>
                <span  className='exploreSubtitle'>City of London, United Kingdom, London</span>
                <br/>
                <span  className='exploreSubtitle price'>Starting from <span className='priceTag'>RSD 83,708</span></span>
                <div className='rating'>
                    <button>9.5</button> 
                    <span className='exploreSubtitle'>
                    <b>Exceptional</b> 565 reviews
                        </span></div>
            </div>
        </div>
        
        </div>
    </div>
  )
}

export default FeaturedProperties