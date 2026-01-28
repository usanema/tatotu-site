import React from 'react';
import { Flame, Clock, Check } from 'lucide-react';
import { recipe } from '../../../data/recipe';
import { THEME } from '../../../config/theme';

import type { SectionProps } from '../../../types';

export const RecipeSection: React.FC<SectionProps> = ({ id }) => {
    return (
        <section id={id} className="py-24 px-6 md:px-12 bg-[#F7F7F7]">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center justify-between mb-12">
                    <h2 className="text-4xl md:text-5xl text-[#E97451] flex items-center gap-3" style={{ fontFamily: THEME.fonts.serif }}>
                        <Flame size={32} /> Hurryfooder
                    </h2>
                    <div className="flex items-center gap-2 text-sm font-bold">
                        <Clock size={16} /> 15 MIN
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-2xl font-bold mb-6">{recipe.name}</h3>
                        <p className="mb-8 text-[#2F4F4F]">{recipe.description}</p>

                        <ul className="space-y-4">
                            {recipe.ingredients.map((ing, i) => (
                                <li key={i} className="flex items-center gap-4 group cursor-pointer">
                                    <div className="w-6 h-6 border border-[#1A1A1A] flex items-center justify-center group-hover:bg-[#1A1A1A] group-hover:text-white transition-colors">
                                        <Check size={14} />
                                    </div>
                                    <span className="font-mono text-sm uppercase">{ing}</span>
                                </li>
                            ))}
                        </ul>

                        <button className="mt-12 bg-[#1A1A1A] text-white px-8 py-4 text-xs uppercase tracking-widest hover:bg-[#E97451] transition-colors">
                            Zobacz Instrukcję
                        </button>
                    </div>

                    <div className="relative h-full min-h-[300px]">
                        <img
                            src={recipe.image}
                            alt="Dish"
                            className="absolute inset-0 w-full h-full object-cover grayscale contrast-125"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
