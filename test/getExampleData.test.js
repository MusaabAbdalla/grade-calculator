import getExampleData from "./getExampleData";

describe("getExampleData", () => {
  it("Return the correct maximum number of data", async () => {
    const data = await getExampleData(3);
    expect(data.length).toBeLessThanOrEqual(3);
  });
});
