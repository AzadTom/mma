import { motion } from 'motion/react';
import { fadeInUp, staggerContainer } from './animations';

export const ClassSchedule = () => {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const scheduleData = [
        { time: '06:00 AM', class: 'BJJ Fundamentals', instructor: 'Marcus Silva', type: 'bjj' },
        { time: '07:30 AM', class: 'Muay Thai All Levels', instructor: 'Sarah Jenkins', type: 'striking' },
        { time: '12:00 PM', class: 'No-Gi Grappling', instructor: 'Marcus Silva', type: 'bjj' },
        { time: '05:00 PM', class: 'Kids MMA (Ages 7-12)', instructor: 'David Chen', type: 'mma' },
        { time: '06:30 PM', class: 'Advanced Striking', instructor: 'Sarah Jenkins', type: 'striking' },
        { time: '08:00 PM', class: 'MMA Sparring (Pro/Am)', instructor: 'David Chen', type: 'mma' },
    ];

    const getClassColor = (type: string) => {
        switch (type) {
            case 'bjj': return 'border-l-4 border-blue-500 bg-blue-500/10 text-blue-500';
            case 'striking': return 'border-l-4 border-red-500 bg-red-500/10 text-red-500';
            case 'mma': return 'border-l-4 border-emerald-500 bg-emerald-500/10 text-emerald-500';
            default: return 'border-l-4 border-muted-foreground bg-muted text-foreground';
        }
    };

    return (
        <section id="schedule" className="py-24 bg-background relative border-t border-border">
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
                        <span className="text-primary font-bold tracking-widest text-sm uppercase">Timetable</span>
                        <div className="h-[2px] w-8 bg-primary"></div>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-foreground mb-6">
                        A Day In The <br /> <span className="text-muted-foreground">Gym</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-muted-foreground text-lg font-medium">
                        We offer classes from dawn until dusk. Find a time that works for your schedule and commit to the daily grind.
                    </p>
                </motion.div>

                {/* Legend */}
                <div className="flex flex-wrap justify-center gap-6 mb-12">
                    <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-foreground">
                        <div className="w-3 h-3 rounded-full bg-blue-500"></div> BJJ / Grappling
                    </div>
                    <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-foreground">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div> Muay Thai / Striking
                    </div>
                    <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-foreground">
                        <div className="w-3 h-3 rounded-full bg-emerald-500"></div> MMA / Wrestling
                    </div>
                </div>

                {/* Schedule Grid */}
                <div className="w-full overflow-x-auto pb-8">
                    <div className="min-w-[800px]">
                        {/* Header Row */}
                        <div className="grid grid-cols-7 gap-4 mb-4">
                            <div className="font-black uppercase text-muted-foreground tracking-wider p-4 text-center border-b border-border">Time</div>
                            {days.map(day => (
                                <div key={day} className="font-black uppercase text-foreground tracking-wider p-4 text-center border-b border-border bg-muted/30">
                                    {day}
                                </div>
                            ))}
                        </div>

                        {/* Data Rows */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                            className="flex flex-col gap-4"
                        >
                            {scheduleData.map((slot, index) => (
                                <motion.div variants={fadeInUp} key={index} className="grid grid-cols-7 gap-4 items-center">
                                    {/* Time Column */}
                                    <div className="font-bold text-muted-foreground text-center py-4">
                                        {slot.time}
                                    </div>

                                    {/* Class Columns (Mocking the same class across the week for visual density) */}
                                    {days.map(day => {
                                        // Add some randomness so Sunday/Saturday look different, but keep it simple for now
                                        const isRestDay = (day === 'Sunday' || (day === 'Saturday' && index > 2));

                                        if (isRestDay) return <div key={`${day}-${index}`} className="p-4 bg-muted/10 rounded-sm border border-border flex items-center justify-center opacity-50"><span className="text-xs uppercase font-bold text-muted-foreground">Open Mat</span></div>;

                                        return (
                                            <div key={`${day}-${index}`} className={`p-4 rounded-sm flex flex-col justify-center h-full transition-transform hover:scale-[1.02] cursor-default shadow-sm ${getClassColor(slot.type)}`}>
                                                <span className="font-bold text-sm leading-tight mb-1">{slot.class}</span>
                                                <span className="text-xs font-semibold opacity-80">{slot.instructor}</span>
                                            </div>
                                        )
                                    })}
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
