import {doNothing} from "../src/empty";

describe("Empty", () => {

  test("do nothing", async () => {
    console.log("starting test");
    doNothing();
  });

});

