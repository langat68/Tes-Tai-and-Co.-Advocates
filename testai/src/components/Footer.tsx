import { Scale, Phone, Mail, Linkedin, Twitter, Facebook } from "lucide-react";
import "../Styling/Footer.scss";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { label: "About", href: "#about" },
        { label: "Services", href: "#services" },
        { label: "Contact", href: "#contact" },
        { label: "Privacy", href: "#privacy" },
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
                            Expert legal counsel for businesses of all sizes.
                        </p>
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

                    {/* Contact Info */}
                    <div className="footer-section">
                        <h3 className="footer-title">Contact</h3>
                        <div className="footer-contact">
                            <div className="contact-item">
                                <Phone className="icon" />
                                <a href="tel:+15551234567">(555) 123-4567</a>
                            </div>
                            <div className="contact-item">
                                <Mail className="icon" />
                                <a href="mailto:contact@testailegal.com">
                                    contact@testailegal.com
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="footer-section">
                        <h3 className="footer-title">Follow Us</h3>
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
                </div>

                {/* Bottom Bar */}
                <div className="footer-bottom">
                    <div className="footer-copy">
                        © {currentYear} Tes tai Legal. All rights reserved.
                    </div>
                    <div className="footer-links">
                        <a href="#privacy">Privacy</a>
                        <a href="#terms">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;