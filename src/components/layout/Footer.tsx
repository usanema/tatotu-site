import React from 'react';
import { Logo } from '../ui/Logo';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-[#1A1A1A] text-[#FDFDFD] py-12 px-6 md:px-12 border-t border-[#2F4F4F]">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
                <div>
                    <div className="text-[#FDFDFD] mb-4">
                        <Logo className="h-8 md:h-12 w-auto" />
                    </div>
                    <p className="text-[#E0E0E0] text-sm max-w-xs opacity-60">
                        Minimalizm w formie. Maksymalizm w treści.
                        Manifest świadomego rodzicielstwa.
                    </p>
                </div>

                <div className="flex gap-8 text-xs uppercase tracking-widest text-[#E97451]">
                    <a href="#" className="hover:text-white transition-colors">Instagram</a>
                    <a href="#" className="hover:text-white transition-colors">Newsletter</a>
                </div>
            </div>

            <div className="mt-12 pt-8 border-t border-[#2F4F4F] text-[10px] text-gray-600 flex justify-between">
                <span>© 2024 TATOTU. Designed with silence.</span>
            </div>
        </footer>
    );
};
