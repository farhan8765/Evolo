import React from 'react'
import EmpHero from '../components/Emp-hero'
import EmpChoose from '../components/Emp-choose'
import EmpGraph from '../components/Emp-graph'
import EmpFeatureCards from '../components/Empfeaturecards'
import EmpTestimonials from '../components/Emptestmonials'
import GetinTouch from '../components/Getintouch'
import EmpdiscoverTalent from '../components/EmpdiscoverTalent'
import EmpTransforming from '../components/EmpTransforming'

const Employee = () => {
  return (
    <div>
      <EmpHero/>
      <EmpChoose/>
        <EmpGraph/>
      <EmpTransforming/>
      <EmpdiscoverTalent/>
    
    
      <EmpTestimonials/>
        <EmpFeatureCards/>
      <GetinTouch/>
      
    </div>
  )
}

export default Employee
