export const Footer = () => {
    return (
        <footer className="bg-foreground text-background py-16 border-t-[8px] border-primary transition-colors duration-500">
            <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
                {/* Brand Logo */}
                <div className="text-3xl font-black tracking-tighter uppercase flex items-center gap-2">
                    <div className="w-10 h-10 bg-primary rounded-sm flex items-center justify-center transform -skew-x-12">
                        <span className="text-primary-foreground text-xl leading-none skew-x-12">M</span>
                    </div>
                    Antigravity<span className="text-primary">MMA</span>
                </div>

                {/* Copyright */}
                <p className="text-background/70 font-medium text-center md:text-left">
                    &copy; {new Date().getFullYear()} Antigravity MMA. All rights reserved. (Demo)
                </p>
            </div>
        </footer>
    );
};
