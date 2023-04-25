

import Heading from './components/heading'
import Images from './components/images.js'
import React,{useEffect, useLayoutEffect, useState} from 'react'
import Choose from './components/choose'
import AboutUS from './components/aboutus'
import Privacy from './components/privacypolicy'
import Terms from './components/termsandconditions'




function Contact(){
  return(
      <>
      <div id="contactdiv">
          <div id='contact'>
          <p>CONTACT US</p>
          <p>TEL:<a href='phone:08186408365'>+234-818-640-8365</a> </p>
          <p>MOB: <a href='phone:08036090618'>+234-803-609-0618</a></p>
          <p>MAIL:<a href="mailto:tretize3ts@yahoo.com" id='mailicon'>tretize3ts@yahoo.com</a></p>
          <p>MAIL2:<a href="mailto:micmosd2@yahoo.com" id='mailicon'>microsd2@yahoo.com</a></p>
          </div>
      <div>
          <p>INFORMATION</p>
        <button id='abouta'>About us</button>
        <button  id='button'>Privacy policy</button>
         <button id="terms">Terms and Conditions</button>
      </div>
      </div>
      <footer>
<small> 
<p>TRETIZE ROYALE LOGISTICS LTD 2023</p>
<p>ALL RIGHTS RESERVED</p>
<p>developed by Solomon. Designed by miss3persin</p></small>
      </footer>
      </>
  )
}


let item=false;
function App() {
  
  let [state,setState]=useState('unclicked')
 
  useEffect(()=>{
    const button=document.getElementById('button')
    button.addEventListener('click',()=>{
      setState('clicked');
    })
document.getElementById('terms').addEventListener('click',()=>{
  setState('termsClicked')
  
})
 
  })
  if(state=='unclicked'){

    return (
   
      <>
     
        <Heading/>
        <Images/>
        <Choose/>
        <AboutUS/>
        <Contact/>
       
      </>
      
     
    
    
       
      );
  }
   if(state=='termsClicked'){
           return(<Terms/>)
  }
  
  else{
    return(<Privacy/>)
  }
}

export default App;
