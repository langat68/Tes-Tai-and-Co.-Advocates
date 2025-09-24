import { Scale, Briefcase, FileText, Gavel, ShieldCheck, Users } from "lucide-react";
import "../Styling/PracticeAreas.scss";

const PracticeAreas: React.FC = () => {
    const areas = [
        {
            icon: <Briefcase />,
            title: "Corporate Law",
            desc: "Guiding businesses through formation, governance, and regulatory compliance."
        },
        {
            icon: <FileText />,
            title: "Contract Negotiations",
            desc: "Drafting, reviewing, and negotiating contracts that protect your interests."
        },
        {
            icon: <Gavel />,
            title: "Commercial Litigation",
            desc: "Defending your business in disputes with practical, results-focused strategies."
        },
        {
            icon: <ShieldCheck />,
            title: "Employment Law",
            desc: "Helping companies manage workplace compliance, contracts, and disputes."
        },
        {
            icon: <Scale />,
            title: "Mergers & Acquisitions",
            desc: "Advising on complex business transactions, due diligence, and structuring."
        },
        {
            icon: <Users />,
            title: "Intellectual Property",
            desc: "Protecting innovations, trademarks, and creative assets with tailored solutions."
        },
    ];

    return (
        <section id="practice-areas" className="practice">
            <div className="practice__container">
                <h2 className="practice__title">Our Practice Areas</h2>
                <p className="practice__subtitle">
                    Tes Tai Law Firm provides a wide range of legal expertise to help your business thrive.
                </p>

                <div className="practice__grid">
                    {areas.map((area, index) => (
                        <div key={index} className="practice__card">
                            <div className="practice__icon">{area.icon}</div>
                            <h3 className="practice__card-title">{area.title}</h3>
                            <p className="practice__card-desc">{area.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PracticeAreas;
