// Здесь экспортируем все интерфейсы
export interface Info {
    name: string;
    logo: string;
}

export interface Rating {
    rating: number;
    reviews: number;
    premium: boolean;
}

export interface Agent {
    name: string;
    premium: boolean;
    rating: number;
    reviews: number;
    text: string;
    image: string;
}

export interface Card {
    id: number;
    name: string;
    image: string;
    price: string;
    subPriceText?: string;
    available: boolean;
    moving?: boolean;
    watching?: number;
    days?: string;
}

export interface SelectItem {
    id: number;
    name: string;
    quantity?: number;
    disabled: boolean;
}