import React from 'react'



import roseBox from './../images/rosebox-BFdSCxmqvYc-unsplash.webp'
import pic1 from './../images/Pic3.webp';
import pic2 from './../images/Pic2.webp'
export default function images(){

    return(
<>

<div id="offer-place">
   <p>what do we offer</p>
</div>
        <div id='services'>
         
           <div>
            <img src={roseBox}></img>
            <p>PACKAGING</p>
            <p>our services involve designing , producing and using materials to protect and transport goods throughout the supply chain</p>
           </div>

           <div>
            <img src={pic1}></img>
            <p>WAREHOUSING</p>
            <p>Our responsibility involves the storage of goods in a facility before they are shipped to their final destination</p>
           </div>

           <div>
            <img src={pic2}></img>
            <p>TRANSPORTATION</p>
            <p>Transportation in Logistics refers to the movement of goods from one location to another through various modes such as air,sea,road and rail</p>
           </div>

        </div>
        </>
    )
}