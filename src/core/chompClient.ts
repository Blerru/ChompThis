import { Axios } from "axios";
import brandedFoodObject from "../objects/brandedFoodObject";

interface IGetFoodBrandedBarcode {
    code: string;
    userId?: string;
}

interface IGetFoodBrandedName {
    name: string;
    limit?: number;
    page?: number;
    userId?: string;
}

interface IGetFoodBrandedSearch {
    allergen?: string;
    brand?: string;
    category?: string;
    country?: string;
    diet?: "Vegan" | "Vegetarian" | "Gluten Free",
    ingredient?: string;
    keyword?: string;
    mineral?: string;
    nutrient?: string;
    palm_oil?: string;
    trace?: string;
    vitamin?: string;
    limit?: number;
    page?: number;
    userId?: string;
}

interface IGetFoodIngredientSearch {
    find: string;
    limit?: number;
    userId?: string;
}



export default class ChompClient {
    private apiKey: string;
    private apiBaseUrl: string;
    private axiosClient: Axios;

    constructor(apiKey: string, apiBaseUrl: string = "https://chompthis.com/api/v2/") {
        this.apiKey = apiKey;
        this.apiBaseUrl = apiBaseUrl;

        // create a new axios client with api key 
        this.axiosClient = new Axios({
            baseURL: this.apiBaseUrl,
            params: {
                "api_key": this.apiKey
            }
        });
    }

    // get a food item using a barcode
    async getFoodBrandedBarcode(params: IGetFoodBrandedBarcode) {
        const response = await this.axiosClient.get("/food/branded/barcode.php", { params });

        return <brandedFoodObject>JSON.parse(response.data);
    }

    // get a food item using a name
    async getFoodBrandedName(params: IGetFoodBrandedName) {
        const response = await (await this.axiosClient.get("/food/branded/name.php", { params }));

        return <brandedFoodObject>JSON.parse(response.data);
    }

    // get a food item using various parameters
    async getFoodBrandedSearch(params: IGetFoodBrandedSearch) {
        const response = await this.axiosClient.get("/food/branded/search.php", { params });

        return <brandedFoodObject>JSON.parse(response.data);
    }

    // get an ingredient using various parameters
    async getFoodIngredientSearch(params: IGetFoodIngredientSearch) {
        const response = await this.axiosClient.get("/food/ingredient/search.php", { params });

        return <brandedFoodObject>JSON.parse(response.data);
    }
}