var VrToken = artifacts.require("./VrToken.sol");
var VrTokenSale = artifacts.require("./VrTokenSale.sol");

module.exports = function(deployer) {
 deployer.deploy(VrToken, 1000000).then(function() {
    // Token price is 0.001 Ether
    var tokenPrice = 1000000000000000;
    return deployer.deploy(VrTokenSale, VrToken.address, tokenPrice);
  });
};
