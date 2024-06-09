// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Counter {
    uint256 public count;

    constructor() {
        count = 0;
    }

    function increment() public {
        count++;
    }

    function decrement() public {
        require(count > 0, "Count cannot go below 0");
        count--;
    }

    function getCount() public view returns (uint256) {
        return count;
    }
}