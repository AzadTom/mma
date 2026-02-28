import { motion } from 'motion/react';
import { ChevronRight, Play } from 'lucide-react';
import { fadeInUp, staggerContainer } from './animations';

export const Hero = () => {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img src="/hero_bg.png" alt="MMA Fighters Sparring" className="w-full h-full object-cover object-center opacity-30 mix-blend-overlay scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent" />
            </div>

            <div className="container relative z-10 mx-auto px-6 md:px-12 pt-20">
                <div className="max-w-3xl">
                    <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-6">
                        <motion.div variants={fadeInUp} className="flex items-center gap-2 mb-4">
                            <div className="h-[2px] w-8 bg-primary"></div>
                            <span className="text-primary font-bold tracking-[0.2em] text-sm uppercase">Elite Training Facility</span>
                        </motion.div>

                        <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] text-foreground">
                            Unleash <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-muted-foreground">Your Inner</span> <br />
                            <span className="text-primary">Warrior.</span>
                        </motion.h1>

                        <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground max-w-xl font-medium pt-4">
                            Elite MMA, BJJ, and Muay Thai training for all skill levels. Step onto the mats and transform your life with world-class coaches.
                        </motion.p>

                        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 pt-8">
                            <a href="#contact" className="group relative px-8 py-4 bg-primary text-primary-foreground font-bold uppercase tracking-wider overflow-hidden rounded-sm transition-transform active:scale-95 flex items-center justify-center gap-2 cursor-pointer">
                                <div className="absolute inset-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-out"></div>
                                <span>Claim 7-Day Free Trial</span>
                                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </a>

                            <a href="#schedule" className="px-8 py-4 border border-border hover:border-foreground text-foreground font-bold uppercase tracking-wider backdrop-blur-sm transition-all flex items-center justify-center gap-3 cursor-pointer">
                                <Play size={18} fill="currentColor" />
                                View Schedule
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
            </motion.div>
        </section>
    );
};
