import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import "../Styling/CallToAction.scss"; // SCSS import

const CallToAction: React.FC = () => {
    return (
        <section className="cta">
            <div className="cta__wrapper">
                {/* Left */}
                <div className="cta__left">
                    <h2 className="cta__title">
                        Ready to Protect Your Business Interests?
                    </h2>
                    <p className="cta__text">
                        Don't let legal complexities hold your business back. Our experienced
                        commercial law team is ready to provide the strategic guidance you need
                        to navigate challenges and seize opportunities.
                    </p>

                    <div className="cta__buttons">
                        <button className="cta__button cta__button--primary">
                            Schedule Consultation
                        </button>
                        <button className="cta__button cta__button--outline">
                            Call Now: (555) 123-4567
                        </button>
                    </div>
                </div>

                {/* Right */}
                <div className="cta__right">
                    <div className="cta__contact">
                        <h3 className="cta__contact-title">Get In Touch</h3>
                        <div className="cta__item">
                            <Phone size={20} />
                            <span>(555) 123-4567</span>
                        </div>
                        <div className="cta__item">
                            <Mail size={20} />
                            <span>contact@naironilegal.com</span>
                        </div>
                        <div className="cta__item">
                            <MapPin size={20} />
                            <span>123 Business District, NY 10001</span>
                        </div>
                        <div className="cta__item">
                            <Clock size={20} />
                            <span>Mon-Fri: 8:00 AM - 6:00 PM</span>
                        </div>
                    </div>

                    <div className="cta__offer">
                        <h4 className="cta__offer-title">Free Initial Consultation</h4>
                        <p className="cta__offer-text">
                            Schedule a complimentary 30-minute consultation to discuss your
                            legal needs and how we can help your business thrive.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
