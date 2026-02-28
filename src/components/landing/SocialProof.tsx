import { motion } from 'motion/react';

export const SocialProof = () => {
    // Array of promotions to display
    const promotions = ["UFC", "BELLATOR", "PFL", "ONE", "GLORY", "KSW", "RIZIN"];

    // Duplicate the array to create a seamless infinite loop effect
    const duplicatedPromotions = [...promotions, ...promotions];

    return (
        <div className="w-full bg-muted/30 py-10 border-y border-border relative z-20 overflow-hidden">
            <div className="container mx-auto px-6 mb-4 flex justify-center">
                <span className="text-sm font-bold tracking-widest uppercase text-muted-foreground opacity-60">Our fighters compete in</span>
            </div>

            <div className="relative w-full flex items-center h-12 overflow-hidden mask-image-linear-gradient-to-r">
                {/* 
                    We animate from x: 0 to x: "-50%".
                    Because we duplicated the items, when it reaches -50%, it looks exactly like the start state.
                */}
                <motion.div
                    className="flex gap-16 font-black text-2xl tracking-tighter italic text-foreground opacity-60 whitespace-nowrap px-8"
                    animate={{ x: [0, "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 20 // Adjust duration to control speed
                    }}
                >
                    {duplicatedPromotions.map((promo, idx) => (
                        <span key={idx}>{promo}</span>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};
