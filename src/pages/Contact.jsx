import React, { useState } from 'react';
import emailjs from 'emailjs-com'
import AOS from 'aos';
import 'aos/dist/aos.css';



export default function Contact(){
    
    const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    timeReq: '',
    phone: '',
  });

    const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();


        emailjs.send(
      'service_vahfles',
      'template_jj29zep',
      formData,
      'eRyGPiF5PC3YxLl_G'
    )
    .then((result) => {
      alert("Quote request sent! We'll get back to you shortly.");
      console.log(result.text);
    }, (error) => {
      alert("Something went wrong. Please try again later.");
      console.error(error.text);
    });
  };
    return (
        <div className='conPage' data-aos="fade-up">
            <h3 className='head'>Have any questions about your oral health?</h3>
            <i class="fa-solid fa-face-laugh-beam"></i>
            <div className="hero">
            <h3>Give us a call:</h3>
            <p>(705) 999-9999</p>
            </div>
        <div className='appointmentDiv'>
        <form onSubmit={handleSubmit} className="quote-form">
            <h3>Request an Appointment</h3>
            <p>Please give us at least 2 business days notice for appointments</p>
            <input name="name" type="text" placeholder="Name" required onChange={handleChange} />
            <input name="phone" type="text" placeholder="Your Phone Number" required onChange={handleChange} />
            <input name="email" type="email" placeholder="Email" required onChange={handleChange} />
            <select name="timeReq" onChange={handleChange}>
            <option value="">Select Time</option>
            <option value="Morning">Morning</option>
            <option value="Early Afternoon">Early Afternoon</option>
            <option value="Late Afternoon">Late Afternoon</option>
            </select>
            <input name="date" type="date" required onChange={handleChange} />
            <button className="quoteBtn" type="submit">Request Appointment</button>
        </form>
        </div>
        <div className='hero'>
            <h3>Visit us in-person</h3>
            <div className='iframe'>
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.269250932819!2d-79.38963708735747!3d43.642566170982064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d68bf33a9b%3A0x15edd8c4de1c7581!2sCN%20Tower!5e0!3m2!1sen!2sca!4v1749073286572!5m2!1sen!2sca"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            />
            </div>
                <h3 className='hoo'>Hours of Operation</h3>
                <p>Monday: 9:00AM-5:00PM</p>
                <p>Tuesday: 9:00AM-5:00PM</p>
                <p>Wednesday: 9:00AM-5:00PM</p>
                <p>Thursday: 9:00AM-5:00PM</p>
                <p>Friday: 9:00AM-5:00PM</p>
                <p>Saturday: <strong>Closed</strong></p>
                <p>Sunday: <strong>Closed</strong></p>
            </div>
        </div>
    )
}