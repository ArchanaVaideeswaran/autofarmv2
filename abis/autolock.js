module.exports = {
    address:"0x28493E97F18b1b4Bb0b95507a876ED458AF27494" ,
    abi:  [
        {
          "inputs": [
            {
              "internalType": "address payable",
              "name": "_devWalletAddress",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "_minDelay",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_minDelayReduced",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "id",
              "type": "bytes32"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "index",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "target",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            }
          ],
          "name": "CallExecuted",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "id",
              "type": "bytes32"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "index",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "target",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            },
            {
              "indexed": false,
              "internalType": "bytes32",
              "name": "predecessor",
              "type": "bytes32"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "delay",
              "type": "uint256"
            }
          ],
          "name": "CallScheduled",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "id",
              "type": "bytes32"
            }
          ],
          "name": "Cancelled",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "oldDuration",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "newDuration",
              "type": "uint256"
            }
          ],
          "name": "MinDelayChange",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "oldDuration",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "newDuration",
              "type": "uint256"
            }
          ],
          "name": "MinDelayReducedChange",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "previousAdminRole",
              "type": "bytes32"
            },
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "newAdminRole",
              "type": "bytes32"
            }
          ],
          "name": "RoleAdminChanged",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "account",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "sender",
              "type": "address"
            }
          ],
          "name": "RoleGranted",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "account",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "sender",
              "type": "address"
            }
          ],
          "name": "RoleRevoked",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "id",
              "type": "bytes32"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "index",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "_pid",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "_allocPoint",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "bool",
              "name": "_withUpdate",
              "type": "bool"
            },
            {
              "indexed": false,
              "internalType": "bytes32",
              "name": "predecessor",
              "type": "bytes32"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "delay",
              "type": "uint256"
            }
          ],
          "name": "SetScheduled",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "id",
              "type": "bytes32"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "index",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "target",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            },
            {
              "indexed": false,
              "internalType": "bytes32",
              "name": "predecessor",
              "type": "bytes32"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "delay",
              "type": "uint256"
            }
          ],
          "name": "SetScheduled",
          "type": "event"
        },
        {
          "inputs": [],
          "name": "DEFAULT_ADMIN_ROLE",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "EXECUTOR_ROLE",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "PROPOSER_ROLE",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "TIMELOCK_ADMIN_ROLE",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_autofarmAddress",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "_want",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "_withUpdate",
              "type": "bool"
            },
            {
              "internalType": "address",
              "name": "_strat",
              "type": "address"
            }
          ],
          "name": "add",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "id",
              "type": "bytes32"
            }
          ],
          "name": "cancel",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_stratAddress",
              "type": "address"
            }
          ],
          "name": "deleverageOnce",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "devWalletAddress",
          "outputs": [
            {
              "internalType": "address payable",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_stratAddress",
              "type": "address"
            }
          ],
          "name": "earn",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "target",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            },
            {
              "internalType": "bytes32",
              "name": "predecessor",
              "type": "bytes32"
            },
            {
              "internalType": "bytes32",
              "name": "salt",
              "type": "bytes32"
            }
          ],
          "name": "execute",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address[]",
              "name": "targets",
              "type": "address[]"
            },
            {
              "internalType": "uint256[]",
              "name": "values",
              "type": "uint256[]"
            },
            {
              "internalType": "bytes[]",
              "name": "datas",
              "type": "bytes[]"
            },
            {
              "internalType": "bytes32",
              "name": "predecessor",
              "type": "bytes32"
            },
            {
              "internalType": "bytes32",
              "name": "salt",
              "type": "bytes32"
            }
          ],
          "name": "executeBatch",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_autofarmAddress",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "_pid",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_allocPoint",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "_withUpdate",
              "type": "bool"
            },
            {
              "internalType": "bytes32",
              "name": "predecessor",
              "type": "bytes32"
            },
            {
              "internalType": "bytes32",
              "name": "salt",
              "type": "bytes32"
            }
          ],
          "name": "executeSet",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_stratAddress",
              "type": "address"
            }
          ],
          "name": "farm",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "getMinDelay",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "duration",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            }
          ],
          "name": "getRoleAdmin",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "internalType": "uint256",
              "name": "index",
              "type": "uint256"
            }
          ],
          "name": "getRoleMember",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            }
          ],
          "name": "getRoleMemberCount",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "id",
              "type": "bytes32"
            }
          ],
          "name": "getTimestamp",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "timestamp",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "name": "grantRole",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "name": "hasRole",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "target",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            },
            {
              "internalType": "bytes32",
              "name": "predecessor",
              "type": "bytes32"
            },
            {
              "internalType": "bytes32",
              "name": "salt",
              "type": "bytes32"
            }
          ],
          "name": "hashOperation",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "hash",
              "type": "bytes32"
            }
          ],
          "stateMutability": "pure",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address[]",
              "name": "targets",
              "type": "address[]"
            },
            {
              "internalType": "uint256[]",
              "name": "values",
              "type": "uint256[]"
            },
            {
              "internalType": "bytes[]",
              "name": "datas",
              "type": "bytes[]"
            },
            {
              "internalType": "bytes32",
              "name": "predecessor",
              "type": "bytes32"
            },
            {
              "internalType": "bytes32",
              "name": "salt",
              "type": "bytes32"
            }
          ],
          "name": "hashOperationBatch",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "hash",
              "type": "bytes32"
            }
          ],
          "stateMutability": "pure",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "id",
              "type": "bytes32"
            }
          ],
          "name": "isOperationDone",
          "outputs": [
            {
              "internalType": "bool",
              "name": "done",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "id",
              "type": "bytes32"
            }
          ],
          "name": "isOperationPending",
          "outputs": [
            {
              "internalType": "bool",
              "name": "pending",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "id",
              "type": "bytes32"
            }
          ],
          "name": "isOperationReady",
          "outputs": [
            {
              "internalType": "bool",
              "name": "ready",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_stratAddress",
              "type": "address"
            }
          ],
          "name": "leverageOnce",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "minDelay",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "minDelayReduced",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_stratAddress",
              "type": "address"
            }
          ],
          "name": "noTimeLockFunc1",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_stratAddress",
              "type": "address"
            }
          ],
          "name": "noTimeLockFunc2",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_stratAddress",
              "type": "address"
            }
          ],
          "name": "noTimeLockFunc3",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_stratAddress",
              "type": "address"
            }
          ],
          "name": "pause",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_stratAddress",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "_borrowRate",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_borrowDepth",
              "type": "uint256"
            }
          ],
          "name": "rebalance",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "name": "renounceRole",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "name": "revokeRole",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "target",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            },
            {
              "internalType": "bytes32",
              "name": "predecessor",
              "type": "bytes32"
            },
            {
              "internalType": "bytes32",
              "name": "salt",
              "type": "bytes32"
            },
            {
              "internalType": "uint256",
              "name": "delay",
              "type": "uint256"
            }
          ],
          "name": "schedule",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address[]",
              "name": "targets",
              "type": "address[]"
            },
            {
              "internalType": "uint256[]",
              "name": "values",
              "type": "uint256[]"
            },
            {
              "internalType": "bytes[]",
              "name": "datas",
              "type": "bytes[]"
            },
            {
              "internalType": "bytes32",
              "name": "predecessor",
              "type": "bytes32"
            },
            {
              "internalType": "bytes32",
              "name": "salt",
              "type": "bytes32"
            },
            {
              "internalType": "uint256",
              "name": "delay",
              "type": "uint256"
            }
          ],
          "name": "scheduleBatch",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_autofarmAddress",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "_pid",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_allocPoint",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "_withUpdate",
              "type": "bool"
            },
            {
              "internalType": "bytes32",
              "name": "predecessor",
              "type": "bytes32"
            },
            {
              "internalType": "bytes32",
              "name": "salt",
              "type": "bytes32"
            }
          ],
          "name": "scheduleSet",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address payable",
              "name": "_devWalletAddress",
              "type": "address"
            }
          ],
          "name": "setDevWalletAddress",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_stratAddress",
              "type": "address"
            }
          ],
          "name": "unpause",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "newDelay",
              "type": "uint256"
            }
          ],
          "name": "updateMinDelay",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "newDelay",
              "type": "uint256"
            }
          ],
          "name": "updateMinDelayReduced",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_tokenAddress",
              "type": "address"
            }
          ],
          "name": "withdrawBEP20",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "withdrawBNB",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_stratAddress",
              "type": "address"
            }
          ],
          "name": "wrapBNB",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "stateMutability": "payable",
          "type": "receive"
        }
      ]
}