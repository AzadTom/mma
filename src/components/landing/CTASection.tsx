import { motion } from 'motion/react';
import { fadeInUp } from './animations';

export const CTASection = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-primary">
            <div className="absolute inset-0 z-0">
                <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-foreground via-primary to-background opacity-80 mix-blend-multiply"></div>
            </div>

            <div className="container relative z-10 mx-auto px-6 md:px-12 text-center">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="max-w-3xl mx-auto space-y-8">
                    <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-primary-foreground drop-shadow-lg">
                        Ready to step <br /> on the mats?
                    </h2>
                    <div className="mt-10 flex justify-center">
                        <a href="#contact" className="px-10 py-5 text-lg font-black tracking-wider rounded-sm transition-all hover:scale-105 whitespace-nowrap shadow-2xl inline-block cursor-pointer bg-black text-white dark:bg-white dark:text-black">
                            Claim Your Free Trial Now
                        </a>
                    </div>
                    <p className="text-sm text-primary-foreground/60 font-medium pt-4">No commitment. No credit card required. Cancel anytime.</p>
                </motion.div>
            </div>
        </section>
    );
};
