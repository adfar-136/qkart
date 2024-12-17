// CRIO_SOLUTION_START_MODULE_AUTH
// CRIO_SOLUTION_END_MODULE_AUTH
const { userOne } = require("../fixtures/user.fixture");
const { tokenService } = require("../../src/services");

describe("User test", () => {
  describe("Generate auth tokens", () => {
    it("should return tokens", async () => {
      let tokenResponse = await tokenService.generateAuthTokens(userOne);
      expect(tokenResponse.access).toEqual(
        expect.objectContaining({
          token: expect.any(String),
          expires: expect.any(Date),
        })
      );
    });
  });
  // CRIO_SOLUTION_START_MODULE_AUTH
  // FIXME - Add test cases to check if the expiration time is set correctly - confusing expiresIn vs exp case
  // CRIO_SOLUTION_END_MODULE_AUTH
});
