import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function DentistCard({ name, title, image, bio }) {
  return (
    <div data-aos="fade-up" className="dc">
        <div className="dentist-card" >
        <img src={image} alt={name} className="dentist-image" />
        <div className="dentist-card-content">
            <h3 className="dentist-name">{name}</h3>
            <p className="dentist-title">{title}</p>
            <p className="dentist-bio">{bio}</p>
        </div>
        </div>
    </div>
  );
}