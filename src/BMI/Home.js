import React from 'react'
import './Home.css'
import { useState } from 'react'
import Button from '../Shared/Button'
import Input from '../Shared/Input'
const Home = () => {
let [weight,setWeight]=useState(0);
let [height,setHeight]=useState(0);
let [bmi,setBmi]=useState(0);
let [errorWeight,setErrorWeight]=useState(false)
let [errorHeight,setErrorHeight]=useState(false)
  const cal=()=>{
  if(weight===0){
    setErrorWeight(true)
  }else if(height===0){
    setErrorHeight(true)
  }else{
    setErrorWeight(false)
    setErrorHeight(false)
    setBmi(((weight/(Math.pow(height,2)))*10000).toFixed(1))
  }


  }
  const reset=()=>{
    setBmi(0)
    setHeight(0)
    setWeight(0)
    setErrorWeight(false)
    setErrorHeight(false)
    
  }
  return (
    <div >
      <div>
      
      </div>
     
 <div className='homes-div'>
      <h4>Your Weight (kilograms)</h4>
      <div>
      <Input className='home-div' 
      value={weight}
      onChange={(e)=>setWeight(e.target.value)}
      />
     {errorWeight &&<h5 className='validation'>Enter your weight(kg)</h5>}  
      </div>
       <h4>Your Height (centimeters)</h4>
       <div>
       <Input className='home-div' 
      value={height}
      onChange={(e)=>setHeight(e.target.value)}
      />
      {errorHeight && <h5 className='validation'>Enter your height(cm)</h5>}
       </div>
       
     
    <Button text='Calculate' onClick={cal} className='cal'/>
    <Button text='Reset' onClick={reset} className='reset'/>
    </div>
    {bmi>0 && <div class="confetti">
    <div class="confetti-piece"></div>
    <div class="confetti-piece"></div>
    <div class="confetti-piece"></div>
    <div class="confetti-piece"></div>
    <div class="confetti-piece"></div>
    <div class="confetti-piece"></div>
    <div class="confetti-piece"></div>
    <div class="confetti-piece"></div>
    <div class="confetti-piece"></div>
    <div class="confetti-piece"></div>
    <div class="confetti-piece"></div>
    <div class="confetti-piece"></div>
    <div class="confetti-piece"></div>
</div>}
    
   {bmi>0 && <p>Your BMI is {bmi}</p>}
    </div>
   
  )
}

export default Home
