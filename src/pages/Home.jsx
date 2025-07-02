import { team, bio, promos } from "../data/dentists"
import DentistCard from "../components/DentistCard"
import dentistryImg from '../assets/dentistry.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import PromoCard from "../components/PromoCard";

export default function Home(){
    return (
        <section className="meet-the-team">
            <div  data-aos="flip-left">
                <div>
                <PromoCard img={dentistryImg} desc={bio} btn={true} />
                <div data-aos="fade-up" className="promo">
                {promos.map((promo) => (
                    <PromoCard  key={promo.key} desc={promo.desc} img={promo.img}/>
                ))}
                </div>   
                </div>
            </div>
            <h2 className="team-header">Meet the Team</h2>
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