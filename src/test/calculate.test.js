import calculate from "../logic/calculate";

describe("Calculate tests", () => {
  it("ordinary key", () => {
    expect(
      calculate({ total: null, next: null, operation: null }, "9")
    ).toEqual({
      next: "9",
      total: null,
    });
  });
  it("ordinary key", () => {
    expect(
      calculate({ total: null, next: null, operation: null }, "0")
    ).toEqual({
      next: "0",
      total: null,
    });
  });
});
