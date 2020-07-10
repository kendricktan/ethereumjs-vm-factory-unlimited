const { expect } = require("chai");

describe("Example", function () {
  it("FactorySmall.build sucess", async function () {
    const Factory = await ethers.getContractFactory("FactorySmall");
    const factory = await Factory.deploy();

    // Fails here
    await factory.build();
  });

  it("FactoryBig.build fails", async function () {
    const Factory = await ethers.getContractFactory("FactoryBig");
    const factory = await Factory.deploy();

    // Fails here
    await factory.build();
  });
});
