
/*
 needs lots more tests
 * algorithm:none, etc. (not actually sure what the lib does here)
 * unexpected/unknown algorithms, negotiation broadens attack surface too much, 
   pick an alg and bounce anything else
 * iat, exp (should be taken care of by the lib verification)
 * db validation
   * user existence
   * user enabled
   * user onlyAfter
 * need to write custom token generation logic to create truly gnarly edge-case 
   tokens that attackers will generate.   
*/


describe("Start", () => {
  
  test("it does stuff", () => {
    console.log("go go go");
  });
  
});

