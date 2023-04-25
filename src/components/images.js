import React from 'react'



import roseBox from './../images/rosebox-BFdSCxmqvYc-unsplash.webp'
import pic1 from './../images/Pic3.webp';
import pic2 from './../images/Pic2.webp'
import pic4 from './../images/erwan-hesry-RJjY5Hpnifk-unsplash.webp'
import pic5 from './../images/alvaro-reyes-qWwpHwip31M-unsplash.webp'
import pic6 from './../images/john-simmons-gXlZtblI0bM-unsplash.webp'
export default function images(){

    return(
<>

<div id="offer-place">
   <p>what do we offer</p>
</div>
        <div id='services'>
         
           <div  className='grid'>
            <img src={roseBox}></img>
           <div>
            <p className='head'>PACKAGING</p>
            <p>Our packaging services provide businesses  with customized and efficient solutions to optimize their product packaging,labeling and assembly needs</p>
           </div>
           </div>

           <div className='grid'>
            <div>
            <p className='head'>TRANSPORTATION</p>
            <p>Our transport services provide reliable and timely delivery solution for businesses to move goods from one place to another</p>
            </div>
           
            <img src={pic2}></img>
            </div>

           <div  className='grid'>
            <img src={pic1}></img>
            <div>
            <p className='head'>WAREHOUSING</p>
            <p>Our responsibility involves the storage of goods in a facility before they are shipped to their final destination</p>
            </div>
           </div>
          
        <div  className='grid'>
            <div>
                <p className='head'>FREIGHT FORWARDING</p>
                <p>Our Freight forwarding services provide people with a comprehensive and hassle-free solution for international shipping,from custom clearance to documentation to ensure timely and safe delivery of goods</p>
            </div>
            <img src={pic4}></img>
        </div>


           <div  className='grid'>
          <img src={pic5}></img>
           <div>
         <p className='head'>SPECIAL PROJECTS</p>
         <p>Our special projects offer tailored logistics solutions for businesses with unique transport requirements,managing the project from start to finish</p>
           </div>
           </div>
<div  className='grid'>
    <div>
        <p className='head'>HAULAGE</p>
        <p>Our haulage services provide reliable and efficient transportation and efficient transportation of goods by road,ensuring timely and cost effective delivery</p>
    </div>
    <img src={pic6}></img>
</div>
        </div>
        </>
    )
}