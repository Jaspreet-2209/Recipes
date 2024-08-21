import './Medha.css';
import React from "react"; 
import 'bootstrap/dist/css/bootstrap.css';
import img4 from "./image/Web Designs (1).png";
import img5 from "./image/Web Designs.png";
import img7 from "./image/Web Designs (2).png";
import img6 from "./image/Web Designs (3).png";
import img9 from "./image/Web Designs (4).png";
import img8 from "./image/Web Designs (5).png";
import img10 from "./image/logo.png";
import img11 from "./image/Vector.png";
import img12 from "./image/Vector (1).png";
import { FaInstagram } from "react-icons/fa";
import img13 from "./image/Vector (2).png";




 
export default function Medha() { 
  return ( 
    <div>
      
          <div className='s1'>
            <span className='s1a'>My Projects</span><br></br>
            <span className='s2a'>
            Lorem ipsum dolor sit amet consectetur.Mollis erat duis aliquam mauris est risus
            </span><br></br>
            <span className='s3a'>
            lectus. Phasellus consequat urna tellus
            </span>
            <div className='m1'>
            <span className='m1a'>All</span>
            <div className='m2'>
            <span className='m2a'>UI/UX</span>
            </div>
            <div className='m3'>
            <span className='m3a'>Web&nbsp;Design</span>
            </div>
            <div className='m4'>
            <span className='m4a'>App&nbsp;Design</span>
            </div>
            <div className='m4'>
            <span className='m4a'>Graphic&nbsp;Design</span>
            </div>
          </div>
          <div className='g1'>
              <div className='g1a'>
              <img  className="img9" src={img5} alt="img9" ></img>
              <img  className="img10" src={img4} alt="img10" ></img>
              <span className='g1a1'>Web Design </span><br></br>
              <span className='h1a2'>AirCalling Landing Page Design  </span> 
              </div>
              
            </div>
            <div className='h1'>
              <div className='h1a'>
              <img  className="img12" src={img7} alt="img12" ></img>
              <img  className="img11" src={img6} alt="img11" ></img>
              <span className='h1a1'>Web Design </span><br></br>
              <span className='h1a2'>Business Landing Page Design </span> 
              
               
              </div>
            </div>
            <div className='i1'>
              <div className='i1a'>
              <img  className="img14" src={img9} alt="img14" ></img> 
              <img  className="img13" src={img8} alt="img13" ></img>
              <span className='i1a1'>Web Design </span><br></br>
              <span className='i1a2'>Ecom Web Page Design  </span> 
              
              </div>
            </div>
          </div>
          <div className='j1'>
            <div className='j1a'>
            <span className='j1a1'>Lets Design Together</span><br></br>
            <span className='j1a2'>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus</span> <br></br>
            <span className='j1a3'>netus in. Aliquet donec morbi convallis pretium </span>
            </div>
            <div className='k1'>
            <div className='k1a'>
            <span className='k1a1'>Enter Your Email</span>
            </div>
            <div className='l1'>
            <span className='l1a1'>Contact Me </span>
            </div>
          </div>
          </div>
         <div className='p1'>
          <div className='p1a' >
          <img  className="img15" src={img10} alt="img15" ></img>
          <div className='q1'>
            <div className='q1a'>
            <span className='q1a1'>Home</span>
            </div>
            <div className='r1'>
            <span className='r1a'>About Me</span>

            </div>
            <div className='t1'>
            <span className='t1a'>Services</span>

            </div>
            <div className='u1'>
            <span className='u1a'>Projects</span>

            </div>
            <div className='v1'>
            <span className='v1a'>Testimonials</span>

            </div>
            <div className='x1'>
            <span className='x1a'>Contact</span>
            </div>
          
          </div>
          <div className='a1'>
            <div className='a1a'>
            <img  className="img16" src={img11} alt="img16" ></img>
            </div>
            <div className='a1a1'>
            <img  className="img17" src={img12} alt="img17" ></img>
            </div>
            <FaInstagram className="a1a2"/>
            <div className='a1a3'>
            <img  className="img18" src={img13} alt="img18" ></img>
            </div>


          </div>
          <div className='b1'>
          <span className='b1a'>© 2023 <span className='b1a1'>Mumair</span> All Rights Reserved , Inc.</span>

          </div>
            
          
          
          </div>
          
         </div>
      
            
       
    </div> 
    
    
  ); 
}
