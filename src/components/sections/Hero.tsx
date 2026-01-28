import React from 'react';
import { THEME } from '../../config/theme';

import type { SectionProps } from '../../types';

export const Hero: React.FC<SectionProps> = ({ id }) => {
    return (
        <header id={id} className="h-screen flex flex-col justify-center items-center px-4 relative overflow-hidden">
            <h1 className="text-[15vw] leading-[0.8] tracking-tighter text-center whitespace-nowrap" style={{ fontFamily: THEME.fonts.serif }}>
                OJCIEC
                <br />
                <span className="italic relative z-10 font-serif">KTÓRY</span>
                <br />
                JEST.
            </h1>

            <div className="absolute bottom-12 w-full flex justify-between px-6 md:px-12 text-xs md:text-sm uppercase tracking-widest text-[#2F4F4F]">
                <span>Świadomość</span>
                <span>Siła & Wrażliwość</span>
                <span>Obecność</span>
            </div>
        </header>
    );
};
