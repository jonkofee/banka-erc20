pragma solidity >=0.4.25 <0.7.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20Detailed.sol";

contract Banka is ERC20, ERC20Detailed {
    constructor() ERC20Detailed('420 Stable Coin', 'BANKA', 1) public {
        _mint(msg.sender, 100000000000);
    }
}