import ChompClient from "../index";
import "dotenv/config";

// initialize chomp client
const chompClient = new ChompClient(process.env["CHOMP_API_KEY"] || "");

test("Verify getFoodBrandedBarcode is working", async () => {
    const returnedData = await chompClient.getFoodBrandedBarcode({ code: "9310034000367" });

    expect(returnedData.items.length).toBeGreaterThan(0);
});

test("Verify getFoodBrandedName is working", async () => {
    const returnedData = await chompClient.getFoodBrandedName({ name: "Oreo" });

    expect(returnedData.items.length).toBeGreaterThan(0);
});

test("Verify getFoodBrandedSearch is working", async () => {
    const returnedData = await chompClient.getFoodBrandedSearch({ brand: "Post" });

    expect(returnedData.items.length).toBeGreaterThan(0);
});

test("Verify getFoodIngredientSearch is working", async () => {
    const returnedData = await chompClient.getFoodIngredientSearch({ find: "Coconut Oil" });

    expect(returnedData.items.length).toBeGreaterThan(0);
});