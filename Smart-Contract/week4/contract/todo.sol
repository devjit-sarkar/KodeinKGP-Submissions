// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

contract todo{
    uint8 public count = 0;
    mapping (uint8 => string) public todoList;

    function getTodo(string memory item)public{
        todoList[count] = item;
        count++;
    }
}

//getTodo(session with you)
//0 session with you
//count = 1

//getTodo(session with you)
//1 do some other work
//count = 2

//0x5B38Da6a701c568545dCfcB03FcB875f56beddC4