import React from 'react';
import type { LogoProps } from '../../types';

export const Logo: React.FC<LogoProps> = ({ className = "h-8" }) => (
    <svg viewBox="0 0 320 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="TATOTU Logo">
        {/* T */}
        <path d="M10 5 L50 5 M30 5 L30 55" stroke="currentColor" strokeWidth="6" strokeLinecap="square" />
        {/* A (Brama) */}
        <path d="M60 55 L60 25 A 15 15 0 0 1 90 25 L90 55" stroke="currentColor" strokeWidth="6" strokeLinecap="square" />
        {/* T */}
        <path d="M110 5 L150 5 M130 5 L130 55" stroke="currentColor" strokeWidth="6" strokeLinecap="square" />
        {/* O (Kapsuła) */}
        <rect x="160" y="5" width="30" height="50" rx="15" stroke="currentColor" strokeWidth="6" />
        {/* T */}
        <path d="M200 5 L240 5 M220 5 L220 55" stroke="currentColor" strokeWidth="6" strokeLinecap="square" />
        {/* U (Kielich) */}
        <path d="M250 5 L250 35 A 15 15 0 0 0 280 35 L280 5" stroke="currentColor" strokeWidth="6" strokeLinecap="square" />
    </svg>
);
