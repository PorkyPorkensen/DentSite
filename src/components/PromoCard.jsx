import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

export default function PromoCard({img, desc, btn}){
    return (
                <div>
               { img ? <div className="abt"> <img src={img} alt="" className="promoImg" /> <p>{desc}</p> { btn === true ? <Link  className="boa" to='/contact#quote-form'><button className="boa">Book an Appointment</button></Link> : ''}</div> 
               : <div className="abt"><h3 className="promoText">{desc}</h3></div> }

                </div>
    )
}