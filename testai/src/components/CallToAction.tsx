import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, ArrowRight, CheckCircle, Calendar, MessageCircle } from "lucide-react";
import "../Styling/CallToAction.scss";

const CallToAction: React.FC = () => {
    const [hoveredButton, setHoveredButton] = useState<string | null>(null);
    const [animateStats, setAnimateStats] = useState(false);

    React.useEffect(() => {
        const timer = setTimeout(() => setAnimateStats(true), 500);
        return () => clearTimeout(timer);
    }, []);

    const handleScheduleConsultation = () => {
        console.log("Schedule consultation clicked");
    };

    const handleCallNow = () => {
        window.location.href = "tel:+5551234567";
    };

    const handleEmailClick = () => {
        window.location.href = "mailto:contact@naironilegal.com";
    };

    return (
        <section className="cta">
            <div className="cta__container">
                {/* Left Content */}
                <div className="cta__left">
                    <div className="cta__badge">
                        <CheckCircle size={16} />
                        <span>Trusted Legal Partner</span>
                    </div>

                    <div className="cta__heading">
                        <h2>Ready to Protect Your Business Interests?</h2>
                        <p>
                            Don&apos;t let legal complexities hold your business back. Our experienced
                            commercial law team is ready to provide the strategic guidance you need
                            to navigate challenges and seize opportunities.
                        </p>
                    </div>

                    <div className="cta__stats">
                        {[
                            { number: "500+", label: "Cases Won" },
                            { number: "15+", label: "Years Experience" },
                            { number: "98%", label: "Success Rate" }
                        ].map((stat, index) => (
                            <div
                                key={index}
                                className={`cta__stat ${animateStats ? "cta__stat--animate" : ""}`}
                            >
                                <div className="cta__stat-number">{stat.number}</div>
                                <div className="cta__stat-label">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    <div className="cta__buttons">
                        <button
                            className={`cta__btn cta__btn--primary ${hoveredButton === "primary" ? "hovered" : ""}`}
                            onClick={handleScheduleConsultation}
                            onMouseEnter={() => setHoveredButton("primary")}
                            onMouseLeave={() => setHoveredButton(null)}
                        >
                            <Calendar size={20} />
                            <span>Schedule Consultation</span>
                            <ArrowRight size={20} />
                        </button>

                        <button
                            className={`cta__btn cta__btn--secondary ${hoveredButton === "secondary" ? "hovered" : ""}`}
                            onClick={handleCallNow}
                            onMouseEnter={() => setHoveredButton("secondary")}
                            onMouseLeave={() => setHoveredButton(null)}
                        >
                            <Phone size={20} />
                            <span>Call: (555) 123-4567</span>
                            <MessageCircle size={20} />
                        </button>
                    </div>
                </div>

                {/* Right Content */}
                <div className="cta__right">
                    <div className="cta__contact">
                        <h3>Get In Touch</h3>
                        <div className="cta__contact-list">
                            <div className="cta__contact-item">
                                <Phone size={20} />
                                <span>(555) 123-4567</span>
                            </div>
                            <div
                                className="cta__contact-item clickable"
                                onClick={handleEmailClick}
                            >
                                <Mail size={20} />
                                <span>contact@naironilegal.com</span>
                            </div>
                            <div className="cta__contact-item">
                                <MapPin size={20} />
                                <span>123 Business District, Nairobi</span>
                            </div>
                            <div className="cta__contact-item">
                                <Clock size={20} />
                                <span>Mon-Fri: 8:00 AM - 6:00 PM</span>
                            </div>
                        </div>
                    </div>

                    <div className="cta__offer">
                        <div className="cta__offer-header">
                            <CheckCircle size={24} />
                            <h4>Free Initial Consultation</h4>
                        </div>
                        <p>
                            Schedule a complimentary 30-minute consultation to discuss your
                            legal needs and discover how we can help your business thrive.
                        </p>
                        <div className="cta__offer-features">
                            {["No obligation assessment", "Personalized legal strategy", "Immediate actionable insights"].map((feature, index) => (
                                <div key={index} className="cta__feature">
                                    <CheckCircle size={16} />
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
