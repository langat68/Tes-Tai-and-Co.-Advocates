import { Star, Quote } from "lucide-react";
import "../Styling/Testimonials.scss"; // ✅ SCSS import

const Testimonials: React.FC = () => {
    const testimonials = [
        {
            name: "Sarah Chen",
            company: "TechFlow Solutions",
            role: "CEO",
            content:
                "Naironi Legal provided exceptional guidance during our merger. Their expertise in commercial law and attention to detail gave us confidence throughout the entire process.",
            rating: 5,
        },
        {
            name: "Michael Rodriguez",
            company: "Global Enterprises",
            role: "General Counsel",
            content:
                "The team at Naironi Legal has been instrumental in protecting our intellectual property and negotiating complex commercial agreements. Highly recommended.",
            rating: 5,
        },
        {
            name: "Emily Johnson",
            company: "Innovative Startups",
            role: "Founder",
            content:
                "From startup incorporation to scaling our business, Naironi Legal has been our trusted partner. Their strategic advice has been invaluable to our growth.",
            rating: 5,
        },
        {
            name: "David Thompson",
            company: "Manufacturing Corp",
            role: "President",
            content:
                "When we faced a complex commercial dispute, Naironi Legal's expertise and dedication resulted in a favorable outcome. Their professionalism is unmatched.",
            rating: 5,
        },
    ];

    return (
        <section className="testimonials">
            <div className="testimonials__container">
                {/* Header */}
                <div className="testimonials__header">
                    <h2 className="testimonials__title">What Our Clients Say</h2>
                    <p className="testimonials__subtitle">
                        Don't just take our word for it. Here's what business leaders say about
                        our commercial law expertise and commitment to excellence.
                    </p>
                </div>

                {/* Grid */}
                <div className="testimonials__grid">
                    {testimonials.map((t, i) => (
                        <div key={i} className="testimonials__card">
                            <div className="testimonials__card-top">
                                <Quote className="testimonials__quote" size={32} />
                                <div className="testimonials__stars">
                                    {[...Array(t.rating)].map((_, idx) => (
                                        <Star key={idx} size={20} className="testimonials__star" />
                                    ))}
                                </div>
                            </div>

                            <p className="testimonials__content">"{t.content}"</p>

                            <div className="testimonials__author">
                                <div className="testimonials__avatar">
                                    <span>
                                        {t.name
                                            .split(" ")
                                            .map((n) => n[0])
                                            .join("")}
                                    </span>
                                </div>
                                <div className="testimonials__info">
                                    <div className="testimonials__name">{t.name}</div>
                                    <div className="testimonials__role">
                                        {t.role} at {t.company}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Rating Summary */}
                <div className="testimonials__summary">
                    <div className="testimonials__badge">
                        <Star className="testimonials__badge-icon" size={20} />
                        <span>4.9/5 Average Rating from 150+ Reviews</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
