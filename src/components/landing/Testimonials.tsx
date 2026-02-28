import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';
import { fadeInUp, staggerContainer } from './animations';

export const Testimonials = () => {
    const testimonials = [
        {
            name: "Sarah Jenkins",
            role: "BJJ Blue Belt",
            quote: "Training here completely changed my life. The coaches care about your technique and your mindset. It's truly a family.",
            rating: 5
        },
        {
            name: "David Chen",
            role: "Amateur Fighter",
            quote: "The facility is top-notch and the sparring rounds are high quality. If you want to test yourself, this is the place to be.",
            rating: 5
        },
        {
            name: "Marcus Thorne",
            role: "Fitness Member",
            quote: "I came in to lose weight and ended up falling in love with Muay Thai. I've lost 40lbs and gained a whole new confidence.",
            rating: 5
        }
    ];

    return (
        <section id="testimonials" className="py-24 bg-muted/20 w-full relative border-t border-border">
            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    className="mb-16 text-center"
                >
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <div className="h-[2px] w-8 bg-primary"></div>
                        <span className="text-primary font-bold tracking-widest text-sm uppercase">Real Results</span>
                        <div className="h-[2px] w-8 bg-primary"></div>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-foreground">
                        Forged in the <br /> <span className="text-muted-foreground">Fire</span>
                    </h2>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {testimonials.map((testimonial, idx) => (
                        <motion.div
                            key={idx}
                            variants={fadeInUp}
                            className="bg-card border border-border p-8 rounded-sm relative overflow-hidden group hover:border-primary/50 transition-colors"
                        >
                            <Quote className="absolute -top-4 -left-4 w-24 h-24 text-muted/30 transform -rotate-12 group-hover:text-primary/10 transition-colors" />

                            <div className="relative z-10">
                                <div className="flex gap-1 mb-6">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                                    ))}
                                </div>

                                <p className="text-muted-foreground font-medium italic mb-8 leading-relaxed">
                                    "{testimonial.quote}"
                                </p>

                                <div className="flex items-center gap-4 border-t border-border pt-6">
                                    <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center font-bold text-lg text-foreground uppercase">
                                        {testimonial.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-foreground tracking-wide uppercase">{testimonial.name}</h4>
                                        <span className="text-sm font-semibold text-primary uppercase tracking-wider">{testimonial.role}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
