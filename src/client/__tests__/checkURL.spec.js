const { checkValidURL } = require("../js/checkURL");

describe("Testing the functionality of validating the input URL", () => {
  test("Testing the checkURL() function", () => {
    expect(checkValidURL).toBeDefined();
    expect(checkValidURL("Normal_text")).toBeFalsy();
    expect(checkValidURL(1000)).toBeFalsy();
    expect(checkValidURL("## HH %% &2736@! ")).toBeFalsy();
    expect(
      checkValidURL("https://en.wikipedia.org/wiki/Formal_concept_analysis")
    ).toBeTruthy();
  });
});
