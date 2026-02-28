import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { fadeInUp, staggerContainer } from './animations';

export const ContactSection = () => {
    return (
        <section id="contact" className="py-24 bg-card w-full relative border-t border-border">
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
                        <span className="text-primary font-bold tracking-widest text-sm uppercase">Find Us</span>
                        <div className="h-[2px] w-8 bg-primary"></div>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-foreground mb-6">
                        Step Into The <br /> <span className="text-muted-foreground">Arena</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                    {/* Contact Info & Form */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={staggerContainer}
                        className="space-y-12"
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <motion.div variants={fadeInUp} className="flex gap-4">
                                <div className="w-12 h-12 bg-muted rounded-sm flex items-center justify-center text-primary shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-foreground uppercase tracking-wider mb-2">Location</h4>
                                    <p className="text-muted-foreground font-medium">
                                        123 Fighter Ave<br />
                                        Los Angeles, CA 90210
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div variants={fadeInUp} className="flex gap-4">
                                <div className="w-12 h-12 bg-muted rounded-sm flex items-center justify-center text-primary shrink-0">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-foreground uppercase tracking-wider mb-2">Phone</h4>
                                    <p className="text-muted-foreground font-medium">
                                        (555) 123-4567<br />
                                        Mon-Sat, 6am-10pm
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div variants={fadeInUp} className="flex gap-4">
                                <div className="w-12 h-12 bg-muted rounded-sm flex items-center justify-center text-primary shrink-0">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-foreground uppercase tracking-wider mb-2">Email</h4>
                                    <p className="text-muted-foreground font-medium">
                                        train@ozonemma.com<br />
                                        info@ozonemma.com
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div variants={fadeInUp} className="flex gap-4">
                                <div className="w-12 h-12 bg-muted rounded-sm flex items-center justify-center text-primary shrink-0">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-foreground uppercase tracking-wider mb-2">Hours</h4>
                                    <p className="text-muted-foreground font-medium">
                                        Mon-Fri: 6am - 10pm<br />
                                        Sat-Sun: 8am - 4pm
                                    </p>
                                </div>
                            </motion.div>
                        </div>

                        <motion.form variants={fadeInUp} className="space-y-6 pt-8 border-t border-border">
                            <h3 className="text-2xl font-bold uppercase text-foreground tracking-wide mb-6">Send a Message</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <input type="text" placeholder="Your Name" className="w-full px-6 py-4 bg-background border border-border text-foreground placeholder-muted-foreground rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
                                <input type="email" placeholder="Your Email" className="w-full px-6 py-4 bg-background border border-border text-foreground placeholder-muted-foreground rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <input type="tel" placeholder="Phone Number" className="w-full px-6 py-4 bg-background border border-border text-foreground placeholder-muted-foreground rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
                                <input type="text" placeholder="Subject" className="w-full px-6 py-4 bg-background border border-border text-foreground placeholder-muted-foreground rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
                            </div>
                            <textarea placeholder="Your Message" rows={5} className="w-full px-6 py-4 bg-background border border-border text-foreground placeholder-muted-foreground rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"></textarea>
                            <button type="button" className="w-full py-4 bg-primary text-primary-foreground font-bold uppercase tracking-wider rounded-sm hover:bg-red-700 transition-colors shadow-[0_0_15px_rgba(211,47,47,0.3)] hover:shadow-[0_0_25px_rgba(211,47,47,0.6)]">
                                Send Message
                            </button>
                        </motion.form>
                    </motion.div>

                    {/* Map */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="h-full min-h-[500px] w-full bg-muted rounded-sm overflow-hidden border border-border relative grayscale hover:grayscale-0 transition-all duration-700"
                    >
                        {/* Using a generic Google Maps iframe embed pointing to Los Angeles */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.823293910328!2d-118.24368492376664!3d34.04838037315809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c648fa1d4803%3A0xdec27bf11f9fd336!2sDowntown%20Los%20Angeles%2C%20Los%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1709088000000!5m2!1sen!2sus"
                            className="absolute inset-0 w-full h-full border-0"
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
