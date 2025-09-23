import React, { useState } from "react";
import { Menu, X, Scale } from "lucide-react";
import "../Styling/Navbar.scss";

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { href: "#", label: "Home" },
        { href: "#about", label: "About" },
        { href: "#practice-areas", label: "Practice Areas" },
        { href: "#blog", label: "Blog" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <nav className="navbar">
            <div className="navbar__container">
                <div className="navbar__content">
                    {/* Logo */}
                    <div className="navbar__logo">
                        <Scale className="navbar__logo-icon" />
                        <span className="navbar__logo-text">Tes Tai Legal</span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="navbar__links">
                        {navLinks.map((link) => (
                            <a key={link.label} href={link.href} className="navbar__link">
                                {link.label}
                            </a>
                        ))}
                        <a href="#contact" className="navbar__cta">
                            Book Consultation
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="navbar__menu-button"
                    >
                        {isMenuOpen ? (
                            <X className="navbar__menu-icon" />
                        ) : (
                            <Menu className="navbar__menu-icon" />
                        )}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="navbar__mobile">
                        <div className="navbar__mobile-links">
                            {navLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="navbar__mobile-link"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.label}
                                </a>
                            ))}
                            <a href="#contact" className="navbar__mobile-cta">
                                Book Consultation
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
