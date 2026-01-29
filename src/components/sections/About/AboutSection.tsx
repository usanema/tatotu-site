import React from 'react';
import { THEME } from '../../../config/theme';
import type { SectionProps } from '../../../types';

export const AboutSection: React.FC<SectionProps> = ({ id }) => {
    return (
        <section id={id} className="py-24 px-6 md:px-12 bg-[#FDFDFD] text-[#1A1A1A]">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl mb-12" style={{ fontFamily: THEME.fonts.serif }}>
                    Co to jest TATOTU?
                </h2>

                <div className="space-y-8 text-lg md:text-xl leading-relaxed opacity-80" style={{ fontFamily: THEME.fonts.sans }}>
                    <p>
                        TATOTU to nie jest kolejny blog parentingowy.
                    </p>
                    <p>
                        To przestrzeń dla ojców, którzy szukają treści, a nie hałasu.
                        Dla tych, którzy budują relacje na obecności, a nie na gadżetach.
                    </p>
                    <p>
                        Tutaj znajdziesz zbrojownię codziennego użytku, rozmowy z ojcami,
                        którzy inspirują, i przepisy, które ratują życie (i nerwy).
                    </p>
                </div>

                <div className="mt-16 text-[#E97451] text-xs uppercase tracking-[0.2em] font-bold">
                    Manifest Świadomego Ojcostwa
                </div>
            </div>
        </section>
    );
};
