import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from '../../ui/Logo';
import { navItems } from '../../../data/content';
import { THEME } from '../../../config/theme';
import { useLenis } from '../../utils/LenisContext';

export const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const { lenis } = useLenis();

    const handleScroll = (id: string) => {
        setIsMenuOpen(false);
        if (lenis) {
            lenis.scrollTo(`#${id}`);
        } else {
            // Fallback for when lenis is not initialized yet or fails
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <>
            {/* --- NAVIGATION --- */}
            <nav className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-start mix-blend-multiply pointer-events-none">
                <div className="z-50 pointer-events-auto text-[#1A1A1A]">
                    <Logo className="h-6 md:h-8 w-auto" />
                </div>
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="group flex items-center gap-2 z-50 pointer-events-auto focus:outline-none"
                    aria-expanded={isMenuOpen}
                    aria-label="Menu"
                >
                    <span className="text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold">
                        {isMenuOpen ? 'Zamknij' : 'Menu'}
                    </span>
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* OVERLAY MENU */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-40 flex items-center justify-center bg-[#FDFDFD]">
                    <ul className="text-center space-y-8 text-4xl md:text-6xl text-[#1A1A1A]" style={{ fontFamily: THEME.fonts.serif }}>
                        {navItems.map((item) => (
                            <li
                                key={item.label}
                                onClick={() => handleScroll(item.id)}
                                className="cursor-pointer hover:text-[#E97451] transition-colors duration-300"
                            >
                                {item.label}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    );
};
