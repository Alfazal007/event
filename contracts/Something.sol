// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;


contract Something {
    uint256 public number;
    event some_event(uint256 number1);
    constructor() {
        number = 10;
    }
    function update() external {
        number = number + 12;
        emit some_event(number);
    }
    function get() public view returns(uint256) {
        return number;
    }
}
