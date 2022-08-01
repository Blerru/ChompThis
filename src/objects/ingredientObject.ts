export default interface ingredientObject {
    items: Item[];
}

interface Item {
    name: string;
    categories: string[];
    nutrients: Nutrient[];
    calorie_conversion_factor: CalorieConversionFactor;
    protein_conversion_factor: ProteinConversionFactor;
    components: any[];
    portions: Portion[];
    common_name?: any;
    footnote?: any;
    search_term: string;
    score: number;
}

interface Portion {
    measurement_unit: string;
    description?: any;
    modifier: string;
    gram_weight: number;
    data_points?: any;
    footnote?: any;
}

interface ProteinConversionFactor {
    protein_value: number;
}

interface CalorieConversionFactor {
    protein_value?: any;
    fat_value?: any;
    carbohydrate_value?: any;
}

interface Nutrient {
    name: string;
    per_100g: number;
    measurement_unit: string;
    min: number;
    max: number;
    median: number;
    rank: number;
    data_points: number;
    footnote: string;
    description: string;
}