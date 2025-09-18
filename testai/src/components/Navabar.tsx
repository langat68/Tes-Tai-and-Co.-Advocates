import { useState } from "react";
import { Menu, X, Scale } from "lucide-react";
import "../Styling/Navbar.scss"

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
        <nav className="bg-background border-b border-border sticky top-0 z-50 shadow-elegant">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <Scale className="h-8 w-8 text-accent-gold" />
                        <span className="text-xl font-serif font-semibold text-primary">
                            Naironi Legal
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-foreground hover:text-accent-gold transition-colors font-medium"
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            className="px-4 py-2 rounded-lg bg-accent-gold hover:bg-accent-gold/90 text-accent-gold-foreground font-medium transition-colors"
                        >
                            Book Consultation
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden text-foreground hover:text-accent-gold transition-colors"
                    >
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 border-t border-border">
                        <div className="flex flex-col space-y-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="text-foreground hover:text-accent-gold transition-colors font-medium"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.label}
                                </a>
                            ))}
                            <a
                                href="#contact"
                                className="px-4 py-2 rounded-lg bg-accent-gold hover:bg-accent-gold/90 text-accent-gold-foreground font-medium mt-4 transition-colors text-center"
                            >
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
