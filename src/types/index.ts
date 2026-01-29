export interface LogoProps {
    className?: string;
}

export interface InventoryItem {
    id: number;
    name: string;
    category: string;
    rating: 'Must Have' | 'Polecane' | 'OK';
    image: string;
}

export interface RecipeItem {
    name: string;
    description: string;
    ingredients: string[];
    image: string;
}

export interface SectionProps {
    id?: string;
    className?: string;
}
