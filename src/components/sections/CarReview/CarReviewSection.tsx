import React from 'react';
import { THEME } from '../../../config/theme';

import type { SectionProps } from '../../../types';

export const CarReviewSection: React.FC<SectionProps> = ({ id }) => {
    return (
        <section id={id} className="py-24 px-6 md:px-12 overflow-hidden">
            <h2 className="text-5xl md:text-7xl mb-12 text-right" style={{ fontFamily: THEME.fonts.serif }}>Dzieciowozy</h2>

            <div className="flex flex-col lg:flex-row gap-8 border-t border-b border-[#E0E0E0] py-12">
                <div className="lg:w-2/3">
                    <img
                        src="https://images.unsplash.com/photo-1533473359331-0135ef1bcfb0?auto=format&fit=crop&q=80&w=1200"
                        alt="Volvo V90"
                        className="w-full h-[400px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                </div>
                <div className="lg:w-1/3 flex flex-col justify-between">
                    <div>
                        <h3 className="text-3xl font-bold mb-2">Volvo V90 Cross Country</h3>
                        <p className="text-[#2F4F4F] mb-8">Pancerny krążownik.</p>

                        <div className="space-y-4 font-mono text-sm">
                            <div className="flex justify-between border-b border-[#E0E0E0] pb-2">
                                <span>ISOFIX</span>
                                <span className="font-bold">3x Tył</span>
                            </div>
                            <div className="flex justify-between border-b border-[#E0E0E0] pb-2">
                                <span>Bagażnik</span>
                                <span className="font-bold">560L</span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 lg:mt-0">
                        <span className="text-5xl text-[#E97451]" style={{ fontFamily: THEME.fonts.serif }}>9/10</span>
                        <span className="block text-xs uppercase tracking-widest text-[#2F4F4F] mt-2">Ocena Ojca</span>
                    </div>
                </div>
            </div>
        </section>
    );
};
