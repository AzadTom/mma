import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);

        // Initialize theme state
        setIsDark(document.documentElement.classList.contains('dark'));

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleTheme = () => {
        if (isDark) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setIsDark(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setIsDark(true);
        }
    };

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/90 backdrop-blur-md py-4 shadow-lg border-b border-border' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 md:px-12 flex justify-between items-center bg-transparent">
                <div className="text-2xl font-black tracking-tighter text-foreground uppercase flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center transform -skew-x-12">
                        <span className="text-primary-foreground text-lg leading-none skew-x-12">M</span>
                    </div>
                    Antigravity<span className="text-primary">MMA</span>
                </div>
                <div className="hidden md:flex gap-8 text-sm font-semibold tracking-wide text-muted-foreground mr-auto ml-12">
                    <a href="#programs" className="hover:text-primary hover:text-foreground transition-colors">PROGRAMS</a>
                    <a href="#coaches" className="hover:text-primary hover:text-foreground transition-colors">COACHES</a>
                    <a href="#contact" className="hover:text-primary hover:text-foreground transition-colors">CONTACT</a>
                </div>
                <div className="flex items-center gap-4">
                    <button
                        onClick={toggleTheme}
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-muted/50 hover:bg-muted text-foreground transition-all"
                        aria-label="Toggle theme"
                    >
                        {isDark ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    <a href="#contact" className="bg-primary hover:bg-red-700 text-primary-foreground px-6 py-2.5 rounded-sm font-bold tracking-wider text-sm transition-all shadow-[0_0_15px_rgba(211,47,47,0.3)] hover:shadow-[0_0_25px_rgba(211,47,47,0.6)] uppercase transform active:scale-95 hidden sm:block">
                        Join Free
                    </a>
                </div>
            </div>
        </nav>
    );
};
