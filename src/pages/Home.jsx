import React from 'react'
import Leftsidebar from '../Components/Leftsidebar/Leftsidebar'
import Rightsidebar from '../Components/Rightside/Rightside'
import Homemainbar from '../Components/Homemainbar/Homemainbar'
import '../App.css'
function Home({slidein}) {
  return (
   <div className='home-container-1'>
    <Leftsidebar slidein={slidein}/>
    <div className="home-container-2">
    <Homemainbar/>
    <Rightsidebar/>
    </div>
   </div>
  )
}

export default Home