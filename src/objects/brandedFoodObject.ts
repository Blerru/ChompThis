export default interface brandedFoodObject {
    items: Item[];
}

interface Item {
    barcode: string;
    name: string;
    brand: string;
    ingredients: string;
    package: Package;
    serving: Serving;
    categories: any[];
    nutrients: Nutrient[];
    diet_labels: DietLabels;
    diet_flags: any[];
    packaging_photos: PackagingPhotos;
    allergens: any[];
    brand_list: string[];
    countries: string[];
    country_details: CountryDetails;
    palm_oil_ingredients: any[];
    ingredient_list: string[];
    has_english_ingredients: boolean;
    minerals: any[];
    vitamins: any[];
    traces: any[];
    description?: any;
    keywords: string[];
}

interface CountryDetails {
    english_speaking: number;
    non_english_speaking: number;
}

interface PackagingPhotos {
    front: Front;
    nutrition: Nutrition;
    ingredients: Nutrition;
}

interface Nutrition {
    small?: any;
    thumb?: any;
    display?: any;
}

interface Front {
    small: string;
    thumb: string;
    display: string;
}

interface DietLabels {
    vegan: Vegan;
    vegetarian: Vegan;
    gluten_free: Vegan;
}

interface Vegan {
    name: string;
    is_compatible: boolean;
    compatibility_level: number;
    confidence: boolean;
    confidence_description: string;
}

interface Nutrient {
    name: string;
    per_100g: number;
    measurement_unit: string;
    rank?: any;
    data_points?: any;
    description?: any;
}

interface Serving {
    size?: any;
    measurement_unit?: any;
    size_fulltext?: any;
}

interface Package {
    quantity?: any;
    size: string;
}