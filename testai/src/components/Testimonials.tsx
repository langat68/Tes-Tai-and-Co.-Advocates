import { Star, Quote } from "lucide-react";
import styles from "./Testimonials.module.scss";

const Testimonials = () => {
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
        <section className={styles.testimonials}>
            <div className={styles.container}>
                {/* Header */}
                <div className={styles.header}>
                    <h2>What Our Clients Say</h2>
                    <p>
                        Don't just take our word for it. Here's what business leaders say about
                        our commercial law expertise and commitment to excellence.
                    </p>
                </div>

                {/* Grid */}
                <div className={styles.grid}>
                    {testimonials.map((t, i) => (
                        <div key={i} className={styles.card}>
                            <div className={styles.top}>
                                <Quote size={32} color="var(--color-accent-gold)" />
                                <div className={styles.stars}>
                                    {[...Array(t.rating)].map((_, idx) => (
                                        <Star key={idx} size={20} />
                                    ))}
                                </div>
                            </div>

                            <p>"{t.content}"</p>

                            <div className={styles.author}>
                                <div className={styles.avatar}>
                                    <span>
                                        {t.name
                                            .split(" ")
                                            .map((n) => n[0])
                                            .join("")}
                                    </span>
                                </div>
                                <div className={styles.info}>
                                    <div className={styles.name}>{t.name}</div>
                                    <div className={styles.role}>
                                        {t.role} at {t.company}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Rating Summary */}
                <div className={styles.ratingSummary}>
                    <div className={styles.badge}>
                        <Star size={20} />
                        <span>4.9/5 Average Rating from 150+ Reviews</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
