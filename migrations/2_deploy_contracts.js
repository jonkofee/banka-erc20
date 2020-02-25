const ConvertLib = artifacts.require("ConvertLib");
const Banka = artifacts.require("Banka");

module.exports = function(deployer) {
  deployer.deploy(Banka);
};
