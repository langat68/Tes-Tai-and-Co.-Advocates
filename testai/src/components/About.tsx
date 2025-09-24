import { Scale, ShieldCheck, Target } from "lucide-react";
import "../Styling/About.scss";

const About: React.FC = () => {
    return (
        <section id="about" className="about">
            <div className="about__container">
                {/* Left Column */}
                <div className="about__content">
                    <h2 className="about__title">About Tes Tai Law Firm</h2>
                    <p className="about__text">
                        At <strong>Tes Tai Law Firm</strong>, we are dedicated to helping businesses
                        and individuals navigate the complexities of commercial law. With over two
                        decades of proven experience, our team provides tailored legal strategies
                        that safeguard your interests and drive long-term success.
                    </p>
                    <p className="about__text">
                        Built on the pillars of integrity, transparency, and client-first advocacy,
                        we pride ourselves on delivering practical solutions, not just legal
                        opinions. Whether it’s contract negotiations, corporate transactions, or
                        dispute resolution, our goal is to provide clarity and confidence in every
                        decision you make.
                    </p>

                    {/* Values */}
                    <div className="about__values">
                        <div className="about__value">
                            <Scale className="about__icon" />
                            <h3 className="about__value-title">Integrity</h3>
                            <p>Upholding the highest ethical standards in every case we handle.</p>
                        </div>
                        <div className="about__value">
                            <ShieldCheck className="about__icon" />
                            <h3 className="about__value-title">Client-Centered</h3>
                            <p>Personalized attention and strategies designed around your needs.</p>
                        </div>
                        <div className="about__value">
                            <Target className="about__icon" />
                            <h3 className="about__value-title">Results-Driven</h3>
                            <p>Focused on achieving the best possible outcomes for your business.</p>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="about__image-box">
                    <div className="about__image-overlay"></div>
                    <img
                        src="https://images.unsplash.com/photo-1521791136064-7986c2920216"
                        alt="Lawyer working with client"
                        className="about__image"
                    />
                </div>
            </div>
        </section>
    );
};

export default About;
