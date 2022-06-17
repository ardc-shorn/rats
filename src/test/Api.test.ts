import {getRoot} from "../RaidApi";

const apiBase = "https://api.raid.org.au/v1";

describe("RaidApi", () => {
  
  test("root responds 200", async () => {
    console.log("starting test");

    const response = await getRoot();
    console.log("got", response);
  });
  
});

