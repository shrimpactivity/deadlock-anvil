import { underscoreToUpperCase } from "../src/lib/utils";

describe("Underscore to upper case conversion should", () => {
    test("return empty for empty string", () => {
        const result = underscoreToUpperCase("");
        expect(result).toBe("");
    });

    test("return capitalized single word", () => {
        expect(underscoreToUpperCase("daisy")).toBe("Daisy");
    });

    test("returns correct capital case", () => {
        expect(underscoreToUpperCase("this_is_a_test")).toBe("This Is A Test");
    });
});
