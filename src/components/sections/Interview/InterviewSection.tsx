import React from 'react';
import { ArrowRight } from 'lucide-react';
import { THEME } from '../../../config/theme';

import type { SectionProps } from '../../../types';

export const InterviewSection: React.FC<SectionProps> = ({ id }) => {
    return (
        <section id={id} className="py-24 bg-[#1A1A1A] text-[#FDFDFD]">
            <div className="px-6 md:px-12">
                <div className="flex items-center gap-4 mb-20 text-[#2F4F4F]">
                    <span className="text-[#FDFDFD] text-4xl" style={{ fontFamily: THEME.fonts.serif }}>300 OJCÓW</span>
                    <div className="h-px flex-grow bg-[#2F4F4F] opacity-30"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-5 relative">
                        <div className="aspect-[3/4] overflow-hidden grayscale">
                            <img
                                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800"
                                alt="Marek"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="lg:col-span-7 relative">
                        <span className="block text-[#E97451] text-xs uppercase tracking-[0.2em] mb-6">
                            Wywiad #042 — Marek, Architekt
                        </span>
                        <blockquote className="text-4xl md:text-6xl leading-tight mb-8" style={{ fontFamily: THEME.fonts.serif }}>
                            "Siła nie leży w tym, ile uniesiesz, ale w tym, jak delikatnie potrafisz to odłożyć."
                        </blockquote>
                        <p className="text-gray-400 max-w-md text-lg leading-relaxed mb-12">
                            Rozmowa o budowaniu fundamentów, nie tylko tych z betonu. O tym, jak bycie obecnym zmienia perspektywę sukcesu zawodowego.
                        </p>
                        <button className="group flex items-center gap-4 text-sm uppercase tracking-widest hover:text-[#E97451] transition-colors">
                            Czytaj całość <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
