import { Phone, Mail, MapPin, Clock } from "lucide-react";
import styles from "./CallToAction.module.scss";

const CallToAction = () => {
    return (
        <section className={styles.callToAction}>
            <div className={styles.container}>
                {/* Left Column */}
                <div>
                    <h2>Ready to Protect Your Business Interests?</h2>
                    <p>
                        Don't let legal complexities hold your business back. Our experienced
                        commercial law team is ready to provide the strategic guidance you need
                        to navigate challenges and seize opportunities.
                    </p>

                    <div className={styles.buttons}>
                        <button className={styles.primary}>Schedule Your Consultation</button>
                        <button className={styles.outline}>Call Now: (555) 123-4567</button>
                    </div>
                </div>

                {/* Right Column */}
                <div>
                    <div className={styles.infoBox}>
                        <h3>Get In Touch</h3>
                        <div className={styles.contactItem}>
                            <Phone size={20} />
                            <span>(555) 123-4567</span>
                        </div>
                        <div className={styles.contactItem}>
                            <Mail size={20} />
                            <span>contact@naironilegal.com</span>
                        </div>
                        <div className={styles.contactItem}>
                            <MapPin size={20} />
                            <span>123 Business District, NY 10001</span>
                        </div>
                        <div className={styles.contactItem}>
                            <Clock size={20} />
                            <span>Mon-Fri: 8:00 AM - 6:00 PM</span>
                        </div>
                    </div>

                    <div className={styles.highlightBox}>
                        <h4>Free Initial Consultation</h4>
                        <p>
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
