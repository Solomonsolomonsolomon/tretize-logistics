

import Heading from './components/heading'
import Images from './components/images.js'
import React,{useEffect, useLayoutEffect, useState} from 'react'
import Choose from './components/choose'
import AboutUS from './components/aboutus'
import Contact from './components/contact'
function App() {

  
  useEffect(()=>{
  console.log('.')
   
  
  })
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

export default App;
