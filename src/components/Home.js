import React from 'react'
import './Home.css'
import Kites from '../Kites'
import patang from './kite1.jpg'

const Home = () => {
    console.log(Kites);
  return (
    <div className='home_container'>
      {
        Kites.map((data,index)=>{
            return <div className='card' key={index}>
                <img src={patang} alt="kite.img" width={250} height={250} />
                <h2 style={{textAlign:'center'}}>{data.name}</h2>
            </div>
        })
      }
    </div>
  )
}

export default Home
