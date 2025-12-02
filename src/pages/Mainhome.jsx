import React from 'react'
import Homehero from '../components/Homehero'
import HomePlatform from '../components/HomePlatform'
import HomeWho from '../components/HomeWho'
import ConnectStudent from '../components/ConnectStudent'
import Aboutstay from '../components/Aboutstay'
import NewVideo from '../components/NewVideo'
import Homecardsdetail from '../components/Homecardsdetail'



const Mainhome = () => {
  return (
    <div>
      <Homehero/>
        <NewVideo/>
         <HomeWho/>

      <HomePlatform/>
   
      <ConnectStudent/>
      <Homecardsdetail/>
      <Aboutstay/>
    </div>
  )
}

export default Mainhome
