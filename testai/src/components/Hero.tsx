import { ArrowRight, Award, Users, Briefcase } from "lucide-react";
import heroImage from "@/assets/hero-law-firm.jpg";
//import "./Hero.scss"; // ✅ SCSS import

const Hero: React.FC = () => {
    return (
        <section className="hero">
            {/* Background */}
            <div className="hero__background">
                <img
                    src={heroImage}
                    alt="Professional law firm office"
                    className="hero__image"
                />
                <div className="hero__overlay"></div>
            </div>

            {/* Content */}
            <div className="hero__content">
                <div className="hero__text">
                    <h1 className="hero__title">
                        Your Trusted Partner in{" "}
                        <span className="hero__highlight">Commercial Law</span>
                    </h1>

                    <p className="hero__subtitle">
                        Empowering businesses with expert legal counsel, strategic guidance, and
                        unwavering commitment to your success in the complex world of commercial law.
                    </p>

                    <div className="hero__buttons">
                        <a href="#contact" className="hero__button hero__button--primary">
                            Book a Consultation
                            <ArrowRight className="hero__button-icon" />
                        </a>
                        <a href="#about" className="hero__button hero__button--outline">
                            Learn More
                        </a>
                    </div>

                    {/* Stats */}
                    <div className="hero__stats">
                        <div className="hero__stat">
                            <Award className="hero__stat-icon" />
                            <div>
                                <div className="hero__stat-value">25+</div>
                                <div className="hero__stat-label">Years of Excellence</div>
                            </div>
                        </div>
                        <div className="hero__stat">
                            <Users className="hero__stat-icon" />
                            <div>
                                <div className="hero__stat-value">500+</div>
                                <div className="hero__stat-label">Satisfied Clients</div>
                            </div>
                        </div>
                        <div className="hero__stat">
                            <Briefcase className="hero__stat-icon" />
                            <div>
                                <div className="hero__stat-value">1000+</div>
                                <div className="hero__stat-label">Cases Won</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="hero__scroll">
                <div className="hero__scroll-box">
                    <div className="hero__scroll-dot"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
