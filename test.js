const getMessage = require("./utils");

describe("message", () => {
  test("message", () => {
    const message = getMessage();
    expect(message).toEqual("Hello, World!");
  });
});
