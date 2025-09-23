import { Scale, Phone, Mail, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";
import "../Styling/Footer.scss";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const practiceAreas = [
        "Corporate Law",
        "Contract Negotiations",
        "Mergers & Acquisitions",
        "Intellectual Property",
        "Commercial Litigation",
        "Employment Law",
    ];

    const quickLinks = [
        { label: "About Us", href: "#about" },
        { label: "Practice Areas", href: "#practice-areas" },
        { label: "Our Team", href: "#team" },
        { label: "Blog", href: "#blog" },
        { label: "Contact", href: "#contact" },
        { label: "Privacy Policy", href: "#privacy" },
    ];

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-grid">
                    {/* Company Info */}
                    <div className="footer-company">
                        <div className="footer-logo">
                            <Scale className="icon logo-icon" />
                            <span className="logo-text">Tes tai Legal</span>
                        </div>
                        <p className="footer-description">
                            Your trusted partner in commercial law, providing expert legal counsel
                            and strategic guidance to businesses of all sizes.
                        </p>
                        <div className="footer-socials">
                            <a href="#" aria-label="LinkedIn">
                                <Linkedin className="icon" />
                            </a>
                            <a href="#" aria-label="Twitter">
                                <Twitter className="icon" />
                            </a>
                            <a href="#" aria-label="Facebook">
                                <Facebook className="icon" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-section">
                        <h3 className="footer-title">Quick Links</h3>
                        <ul>
                            {quickLinks.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href}>{link.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Practice Areas */}
                    <div className="footer-section">
                        <h3 className="footer-title">Practice Areas</h3>
                        <ul>
                            {practiceAreas.map((area) => (
                                <li key={area}>
                                    <a href="#practice-areas">{area}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="footer-section">
                        <h3 className="footer-title">Contact Info</h3>
                        <div className="footer-contact">
                            <div className="contact-item">
                                <MapPin className="icon" />
                                <span>
                                    123 Business District <br /> Tom Mboya St
                                </span>
                            </div>
                            <div className="contact-item">
                                <Phone className="icon" />
                                <a href="tel:+15551234567">(555) 123-4567</a>
                            </div>
                            <div className="contact-item">
                                <Mail className="icon" />
                                <a href="mailto:contact@naironilegal.com">
                                    contact@testailegal.com
                                </a>
                            </div>
                        </div>

                        <div className="footer-hours">
                            <div className="hours-title">Business Hours</div>
                            <div className="hours-text">
                                Monday - Friday: 8:00 AM - 6:00 PM <br />
                                Saturday: 9:00 AM - 2:00 PM <br />
                                Sunday: Closed
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="footer-bottom">
                    <div className="footer-copy">
                        © {currentYear} Nairobi Legal. All rights reserved.
                    </div>
                    <div className="footer-links">
                        <a href="#privacy">Privacy Policy</a>
                        <a href="#terms">Terms of Service</a>
                        <a href="#disclaimer">Legal Disclaimer</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
