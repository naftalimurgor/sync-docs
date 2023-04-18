
    ---
    sidebar_position: 101
    ---
    # importdescriptors

Import descriptors. This will trigger a rescan of the blockchain based on the earliest timestamp of all descriptors being imported. Requires a new wallet backup.

Note: This call can take over an hour to complete if using an early timestamp; during that time, other rpc calls may report that the imported keys, addresses or scripts exist but related transactions are still missing.

## Argument #1 - requests

**Type:** json array, required

Data to be imported

## Result

## Examples

`bitcoin-cli importdescriptors '[{ "desc": "<my descriptor>", "timestamp":1455191478, "active": true, "range": [0,100], "label": "<my bech32 wallet>" }]'

`