const { SubmitHandler } = require("../js/handleSubmit");

describe("Check Submitting URL to fetch data from the server", () => {
  test("testing handleSubmit() function", () => {
    expect(SubmitHandler).toBeDefined();
  });
});
