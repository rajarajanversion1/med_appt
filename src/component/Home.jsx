import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {

    return (

        <div className="home-container">

            <div className="hero-section">

                <div className="hero-circle"></div>

                <h1>
                    Your Health <br />
                    <span>Our Responsibility</span>
                </h1>

                <p>
                    Search and connect with trusted healthcare professionals
                    anytime and anywhere.
                </p>
                <Link to="/getstarted">
                    <button>Get Started</button>
                </Link>

            </div>

            <div className="cards-container">

                <div className="card">

                    <div className="icon">🩺</div>

                    <h3>Find Doctors</h3>

                    <p>
                        Search and connect with qualified healthcare
                        professionals in your area.
                    </p>

                </div>

                <div className="card">

                    <div className="icon">📅</div>

                    <h3>Book Appointments</h3>

                    <p>
                        Schedule appointments online at your convenience, 24/7.
                    </p>

                </div>

                <div className="card">

                    <div className="icon">💊</div>

                    <h3>Health Records</h3>

                    <p>
                        Keep track of your medical history and appointments in one place.
                    </p>

                </div>

            </div>

        </div>
    );
}