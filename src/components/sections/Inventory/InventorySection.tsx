import React from 'react';
import { Shield } from 'lucide-react';
import { inventory } from '../../../data/inventory';
import { THEME } from '../../../config/theme';

import type { SectionProps } from '../../../types';

export const InventorySection: React.FC<SectionProps> = ({ id }) => {
    return (
        <section id={id} className="py-24 px-6 md:px-12 border-t border-[#E0E0E0]">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                <h2 className="text-5xl md:text-7xl" style={{ fontFamily: THEME.fonts.serif }}>Zbrojownia</h2>
                <span className="text-[#E97451] uppercase tracking-widest text-xs font-bold mt-4 md:mt-0 flex items-center gap-2">
                    <Shield size={16} /> Arsenał codzienny
                </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-x-8 md:gap-y-24">
                {inventory.map((item) => (
                    <div key={item.id} className="group cursor-pointer">
                        <div className="aspect-[4/5] bg-[#F5F5F5] mb-6 overflow-hidden relative">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                                loading="lazy"
                            />
                            {item.rating === "Must Have" && (
                                <div className="absolute top-4 right-4 bg-[#E97451] text-white text-[10px] uppercase font-bold px-3 py-1">
                                    Must Have
                                </div>
                            )}
                        </div>
                        <div className="flex justify-between items-baseline border-b border-[#E0E0E0] pb-2 group-hover:border-[#1A1A1A] transition-colors">
                            <h3 className="text-xl font-medium">{item.name}</h3>
                            <span className="text-xs text-[#2F4F4F] uppercase tracking-widest">{item.category}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
