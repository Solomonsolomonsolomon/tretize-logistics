





import faceBook from './../images/icons8-facebook-48.png'
import gmail from './../images/icons8-gmail-48.png'
import instagram from './../images/icons8-instagram-48.png'
import twitter from './../images/icons8-twitter-48.png'
export default function Contact(){
  
    return(
        <div id="contactdiv">
            <p>CONTACT US</p>
            <p>Feel free to walk into our office and ask questions</p>
            <p>BUT FOR MORE ENQUIRES.</p>
     
            <p>TEL: +234-818-640-8365</p>
            <p>MOB: +234-803-609-0618</p>
            <p>OR LEAVE A MESSAGE</p>
            
<a href="mailto:tretize3ts@yahoo.com" id='mailicon'><img src={gmail}></img></a>
<span>or</span>
<a href="micmosd2@yahoo.com" id='mailicon'><img src={gmail}></img></a>

<p>copyright &copy; 2023</p>
<p>ALL RIGHTS RESERVED</p>
<p>developed by Solomon. Designed by miss3persin</p>
        </div>
    )
}