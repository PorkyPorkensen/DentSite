import { team, bio } from "../data/dentists"
import DentistCard from "../components/DentistCard"
import dentistryImg from '../assets/dentistry.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home(){
    return (
        <section className="meet-the-team">
            <div className="abt" data-aos="flip-left">
                <img src={dentistryImg} alt="" className="dentist-image" />
                <p>{bio}</p>
            </div>
            <h2>Meet the Team</h2>
            <div className="team-grid" >
                {team.map((dentist, idx) => (
                <div data-aos="fade-up" key={idx}>
                    <DentistCard {...dentist} />
                </div>
                ))}
            </div>
            </section>
    )
}