import "./getstarted.css";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Instant Consultation",
    image: "/images/instant-consultation.svg",
    link: "/instant-consultation",
  },
  {
    title: "Book an Appointment",
    image: "/images/book-appointment.svg",
    link: "/search/doctors",
  },
  {
    title: "Self Checkup",
    image: "/images/self-checkup.svg",
    link: "#",
  },
  {
    title: "Health Tips and Guidance",
    image: "/images/health-tips.svg",
    link: "/healthblog",
  },
];

export default function GetStarted() {
  return (
    <section className="getstarted-section" id="services">
      <div className="getstarted-header">
        <h1>Best Services</h1>
        <p>Love yourself enough to live a healthy lifestyle.</p>
      </div>

      <div className="getstarted-cards">
        {services.map((service) => (
          <Link
            key={service.title}
            to={service.link}
            className="getstarted-card"
          >
            <div className="getstarted-card-image">
              <img src={service.image} alt={service.title} />
            </div>
            <h3>{service.title}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
}
