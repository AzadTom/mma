import React from 'react';
import { motion } from 'motion/react';
import { Shield, Trophy, Users } from 'lucide-react';
import { fadeInUp } from './animations';

export const Programs = () => {
    const programs = [
        {
            title: "Brazilian Jiu-Jitsu",
            desc: "Master the ground game. Learn submissions, escapes, and positional dominance.",
            img: "/bjj.png",
            icon: <Shield className="w-6 h-6 text-primary" />
        },
        {
            title: "Muay Thai",
            desc: "The art of eight limbs. Build explosive power with world-class striking.",
            img: "/muay_thai.png",
            icon: <Trophy className="w-6 h-6 text-primary" />
        },
        {
            title: "Mixed Martial Arts",
            desc: "Blend striking and grappling. Wall walking, cage control, and ground-and-pound.",
            img: "/hero_bg.png",
            icon: <Users className="w-6 h-6 text-primary" />
        }
    ];

    return (
        <section id="programs" className="py-24 bg-background w-full relative">
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
                            <span className="text-primary font-bold tracking-widest text-sm uppercase">Disciplines</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-foreground">Choose Your <br /> <span className="text-muted-foreground">Weapon</span></h2>
                    </div>
                    <p className="text-muted-foreground max-w-md mt-6 md:mt-0 font-medium border-l-2 border-border pl-6">
                        We offer specialized curriculums designed by world champions to turn raw potential into lethal skill, regardless of your starting point.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {programs.map((program, idx) => (
                        <motion.div
                            key={idx}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0, transition: { delay: idx * 0.2, duration: 0.5 } }
                            }}
                            className="group relative h-[450px] overflow-hidden rounded-sm bg-card block cursor-pointer border border-border"
                        >
                            <div className="absolute inset-0 z-0">
                                <div className="absolute inset-0 bg-background/30 group-hover:bg-transparent transition-colors duration-500 z-10" />
                                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-10" />
                                <img src={program.img} alt={program.title} className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700 ease-out opacity-60 group-hover:opacity-80" />
                            </div>

                            <div className="absolute inset-x-0 bottom-0 z-20 p-8 flex flex-col justify-end">
                                <div className="w-12 h-12 bg-muted rounded-sm flex items-center justify-center mb-6 transform -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                    {program.icon}
                                </div>
                                <h3 className="text-2xl font-black uppercase text-card-foreground tracking-wider mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{program.title}</h3>
                                <p className="text-muted-foreground font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                    {program.desc}
                                </p>
                            </div>
                            <div className="absolute top-0 left-0 w-full h-1 bg-primary transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 z-20"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
