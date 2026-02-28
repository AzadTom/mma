
import { motion } from 'motion/react';
import { fadeInUp, staggerContainer } from './animations';

export const Coaches = () => {
    const coaches = [
        {
            name: 'Marcus "The Iron" Silva',
            role: 'Head Grappling & MMA',
            image: '/coach.png',
            record: '12-3',
            bio: '"My philosophy is simple: technique conquers all. We don\'t just build fighters; we build unbreakable mindsets."',
            accolades: ['3rd Degree BJJ Black Belt', 'Former Pro MMA Fighter']
        },
        {
            name: 'Sarah "The Surgeon" Jenkins',
            role: 'Head Striking Coach',
            image: '/coach_striking.png',
            record: '25-4',
            bio: '"Precision beats power, and timing beats speed. I will teach you how to dismantle your opponents before they even think about attacking."',
            accolades: ['Former Glory Kickboxer', 'Multiple-time Muay Thai Champ']
        },
        {
            name: 'David "The Tank" Chen',
            role: 'Wrestling & Conditioning',
            image: '/coach_wrestling.png',
            record: '15-2',
            bio: '"Fights are won in the gym. If you can outwork your opponent here, the cage is just an exhibition of your discipline."',
            accolades: ['NCAA Div 1 Wrestler', 'Elite S&C Specialist']
        }
    ];

    return (
        <section id="coaches" className="py-24 bg-card w-full relative border-t border-border">
            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    className="mb-16 md:flex justify-between items-end"
                >
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="h-[2px] w-8 bg-primary"></div>
                            <span className="text-primary font-bold tracking-widest text-sm uppercase">Authority</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-foreground">Train With <br /> <span className="text-muted-foreground">Champions</span></h2>
                    </div>
                    <p className="text-muted-foreground max-w-md mt-6 md:mt-0 font-medium border-l-2 border-border pl-6">
                        Our coaching staff has competed at the highest levels of combat sports. Learn from those who have walked the path.
                    </p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-3 gap-12"
                >
                    {coaches.map((coach, idx) => (
                        <motion.div key={idx} variants={fadeInUp} className="group relative">
                            <div className="relative h-[450px] mb-6 overflow-hidden rounded-sm border border-border">
                                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-overlay"></div>
                                <img src={coach.image} alt={coach.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105" />

                                <div className="absolute bottom-4 right-4 bg-background/90 backdrop-blur-sm border border-border px-4 py-2 rounded-sm z-20 flex flex-col items-center justify-center">
                                    <span className="text-xl font-black text-foreground">{coach.record}</span>
                                    <span className="text-primary font-bold text-[10px] uppercase tracking-widest">Pro Record</span>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-2xl font-bold uppercase text-foreground tracking-wide group-hover:text-primary transition-colors">{coach.name}</h3>
                                    <span className="text-primary font-bold text-sm tracking-widest uppercase">{coach.role}</span>
                                </div>

                                <p className="text-muted-foreground font-medium leading-relaxed italic border-l-2 border-border pl-4">
                                    {coach.bio}
                                </p>

                                <ul className="space-y-2 pt-2 text-foreground text-sm font-semibold tracking-wide">
                                    {coach.accolades.map((accolade, aIdx) => (
                                        <li key={aIdx} className="flex items-center gap-3">
                                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                                            {accolade}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
