import { Scale, Phone, Mail, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";
import "../Styling/Footer.scss"
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
        <footer className="bg-gray-900 text-gray-200">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
                    {/* Company Info */}
                    <div>
                        <div className="flex items-center space-x-2 mb-6">
                            <Scale className="h-8 w-8 text-yellow-500" />
                            <span className="text-2xl font-serif font-bold">Naironi Legal</span>
                        </div>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Your trusted partner in commercial law, providing expert legal counsel
                            and strategic guidance to businesses of all sizes.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-yellow-500 transition" aria-label="LinkedIn">
                                <Linkedin className="h-6 w-6" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-yellow-500 transition" aria-label="Twitter">
                                <Twitter className="h-6 w-6" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-yellow-500 transition" aria-label="Facebook">
                                <Facebook className="h-6 w-6" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-serif font-semibold mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-yellow-500 transition"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Practice Areas */}
                    <div>
                        <h3 className="text-lg font-serif font-semibold mb-6">Practice Areas</h3>
                        <ul className="space-y-3">
                            {practiceAreas.map((area) => (
                                <li key={area}>
                                    <a
                                        href="#practice-areas"
                                        className="text-gray-400 hover:text-yellow-500 transition"
                                    >
                                        {area}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-serif font-semibold mb-6">Contact Info</h3>
                        <div className="space-y-4">
                            <div className="flex items-start space-x-3">
                                <MapPin className="h-5 w-5 text-yellow-500 mt-0.5" />
                                <div>
                                    <div className="text-gray-400">
                                        123 Business District<br />
                                        New York, NY 10001
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Phone className="h-5 w-5 text-yellow-500" />
                                <a
                                    href="tel:+15551234567"
                                    className="text-gray-400 hover:text-yellow-500 transition"
                                >
                                    (555) 123-4567
                                </a>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Mail className="h-5 w-5 text-yellow-500" />
                                <a
                                    href="mailto:contact@naironilegal.com"
                                    className="text-gray-400 hover:text-yellow-500 transition"
                                >
                                    contact@naironilegal.com
                                </a>
                            </div>
                        </div>

                        <div className="mt-6 p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                            <div className="text-sm font-semibold text-yellow-500 mb-1">
                                Business Hours
                            </div>
                            <div className="text-sm text-gray-400">
                                Monday - Friday: 8:00 AM - 6:00 PM<br />
                                Saturday: 9:00 AM - 2:00 PM<br />
                                Sunday: Closed
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <div className="text-gray-500 text-sm mb-4 md:mb-0">
                        © {currentYear} Naironi Legal. All rights reserved.
                    </div>
                    <div className="flex space-x-6 text-sm">
                        <a href="#privacy" className="text-gray-500 hover:text-yellow-500 transition">
                            Privacy Policy
                        </a>
                        <a href="#terms" className="text-gray-500 hover:text-yellow-500 transition">
                            Terms of Service
                        </a>
                        <a href="#disclaimer" className="text-gray-500 hover:text-yellow-500 transition">
                            Legal Disclaimer
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
