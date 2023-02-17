import React from 'react'

import Image from './components/Image';
import Hero from './components/Hero'
import Imagehero from './components/imagehero';
import Footer from './components/Footer';
import data from './data'
// console.log(data)

function App() {
   const footer=data.map(item=>{
    return(
        <Footer
        key={item.id}
        img={item.coverImg}
        rate={item.stats.rating}
        rate1={item.stats.reviewCount}
        country={item.location}
        desc={item.description}
        title={item.title}
        price={item.price}
        openSports={item.openSpots}
        />
    );
   })
    
           
    return (
        <div>
            <Image />
            <Imagehero/>
            <Hero />  
            {footer}
        </div>
    );
}
export default App