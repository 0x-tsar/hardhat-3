const { expect } = require("chai");

describe("Token contract", () => {
  let Token, token, owner, addr1, addr2;

  beforeEach(async () => {
    Token = await ethers.getContractFactory("Token");
    token = await Token.deploy();
    [owner, addr1, addr2, _] = await ethers.getSigners();
  });

  describe("Deployment", () => {
    it("Should set the right owner", async () => {
      expect(await token.owner()).to.equal(owner.address);
    });

    it("Should assigned total supply of tokens to the owner", async () => {
      const ownerBalance = await token.balanceOf(owner.address);
    });
  });
});
