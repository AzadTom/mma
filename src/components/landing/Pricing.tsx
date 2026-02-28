import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { fadeInUp, staggerContainer } from './animations';

export const Pricing = () => {
    const plans = [
        {
            name: "Fundamentals",
            price: "129",
            period: "/mo",
            desc: "Perfect for beginners starting their journey.",
            features: [
                "2 Classes per week",
                "Access to basic equipment",
                "White belt curriculum",
                "Locker room access"
            ],
            popular: false,
            cta: "Start Fundamentals"
        },
        {
            name: "Unlimited",
            price: "189",
            period: "/mo",
            desc: "For the dedicated martial artist.",
            features: [
                "Unlimited classes",
                "Access to all disciplines",
                "Open mat access",
                "Monthly progress assessment",
                "Guest passes (2/mo)"
            ],
            popular: true,
            cta: "Go Unlimited"
        },
        {
            name: "Competitor",
            price: "249",
            period: "/mo",
            desc: "Elite training for serious fighters.",
            features: [
                "Everything in Unlimited",
                "Pro team sparring rounds",
                "1 Private lesson per month",
                "Fight camp programming",
                "Nutrition consultation"
            ],
            popular: false,
            cta: "Join the Team"
        }
    ];

    return (
        <section id="pricing" className="py-24 bg-background w-full relative">
            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    className="mb-16 text-center max-w-2xl mx-auto"
                >
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <div className="h-[2px] w-8 bg-primary"></div>
                        <span className="text-primary font-bold tracking-widest text-sm uppercase">Memberships</span>
                        <div className="h-[2px] w-8 bg-primary"></div>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-foreground mb-6">
                        Invest in Your <br /> <span className="text-primary">Evolution</span>
                    </h2>
                    <p className="text-muted-foreground font-medium">
                        No hidden fees. No long-term contracts. Just pure, unadulterated training to help you reach your maximum potential.
                    </p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
                >
                    {plans.map((plan, idx) => (
                        <motion.div
                            key={idx}
                            variants={fadeInUp}
                            className={`bg-card rounded-sm relative border ${plan.popular ? 'border-primary shadow-[0_0_30px_rgba(211,47,47,0.15)] md:-translate-y-4' : 'border-border'}`}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest py-1 px-4 rounded-full">
                                    Most Popular
                                </div>
                            )}

                            <div className="p-8 border-b border-border">
                                <h3 className="text-2xl font-black uppercase tracking-wider text-foreground mb-2">{plan.name}</h3>
                                <p className="text-muted-foreground text-sm font-medium h-10">{plan.desc}</p>
                                <div className="mt-6 flex items-baseline gap-1 text-foreground">
                                    <span className="text-5xl font-black tracking-tighter">${plan.price}</span>
                                    <span className="text-muted-foreground font-bold">{plan.period}</span>
                                </div>
                            </div>

                            <div className="p-8">
                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature, fIdx) => (
                                        <li key={fIdx} className="flex items-start gap-3 text-muted-foreground font-medium">
                                            <Check className="w-5 h-5 text-primary shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button
                                    className={`w-full py-4 font-bold uppercase tracking-wider transition-all rounded-sm ${plan.popular
                                            ? 'bg-primary text-primary-foreground hover:bg-red-700 shadow-[0_0_15px_rgba(211,47,47,0.3)] hover:shadow-[0_0_25px_rgba(211,47,47,0.6)]'
                                            : 'bg-muted text-foreground hover:bg-border'
                                        }`}
                                >
                                    {plan.cta}
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
