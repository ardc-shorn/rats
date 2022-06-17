import {decode} from "jsonwebtoken";

describe("JWT", () => {

  test("decode", async () => {
    const result = decode("not a valid jwt");
    expect(result).toBeNull();
  });

});

