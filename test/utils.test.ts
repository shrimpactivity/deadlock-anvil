import { ITEMS } from "../src/config/items.config";
import { getItemByName, getItemCost } from "../src/lib/utils";

describe("getItemByName should", () => {
    test("get the correct item", () => {
        const item = ITEMS[0];

        const getItem = getItemByName(item.name);
        expect(getItem.name).toBe(item.name);
        expect(getItem.category).toBe(item.category);
    });

    test("throws an error for item that doesn't exist", () => {
        expect(() => getItemByName("Daisy")).toThrow("Invalid item name: Daisy");
    })
});

describe("getItemCost", () => {
    test("returns correct cost for component-less item", () => {
        const item = getItemByName("Basic Magazine")
        expect(getItemCost(item)).toBe(500);
    })

    test("returns correct cost for item with component", () => {
        const item = getItemByName("Titanic Magazine")
        expect(getItemCost(item)).toBe(3500);
    }) 
})
