import React from 'react';
import { Navbar } from './sections/Navigation/Navbar';
import { Hero } from './sections/Hero';
import { InventorySection } from './sections/Inventory/InventorySection';
import { InterviewSection } from './sections/Interview/InterviewSection';
import { CarReviewSection } from './sections/CarReview/CarReviewSection';
import { RecipeSection } from './sections/Recipe/RecipeSection';
import { Footer } from './layout/Footer';
import { THEME } from '../config/theme';
import { LenisProvider } from './utils/LenisContext';

const TatotuApp: React.FC = () => {
    return (
        <LenisProvider>
            <div
                className="min-h-screen w-full selection:bg-[#E97451] selection:text-white relative"
                style={{ backgroundColor: THEME.colors.bg, color: THEME.colors.text, fontFamily: THEME.fonts.sans }}
            >
                <Navbar />
                <Hero />
                <InventorySection id="inventory" />
                <InterviewSection id="interview" />
                <CarReviewSection id="car-reviews" />
                <RecipeSection id="recipes" />
                <Footer />
            </div>
        </LenisProvider>
    );
};

export default TatotuApp;