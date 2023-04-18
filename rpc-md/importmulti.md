
    ---
    sidebar_position: 102
    ---
    # importmulti

Import addresses/scripts (with private or public keys, redeem script (P2SH)), optionally rescanning the blockchain from the earliest creation time of the imported scripts. Requires a new wallet backup.

If an address/script is imported without all of the private keys required to spend from that address, it will be watchonly. The ‘watchonly’ option must be set to true in this case or a warning will be returned.

Conversely, if all the private keys are provided and the address/script is spendable, the watchonly option must be set to false, or a warning will be returned.

Note: This call can take over an hour to complete if rescan is true, during that time, other rpc calls may report that the imported keys, addresses or scripts exist but related transactions are still missing.

Note: Use “getwalletinfo” to query the scanning progress.

## Argument #1 - requests

**Type:** json array, required

Data to be imported

“range”: n or \[n,n\], (numeric or array) If a ranged descriptor is used, this specifies the end or the range (in the form \[begin,end\]) to import “internal”: bool, (boolean, optional, default=false) Stating whether matching outputs should be treated as not incoming payments (also known as change) “watchonly”: bool, (boolean, optional, default=false) Stating whether matching outputs should be considered watchonly. “label”: “str”, (string, optional, default=’’) Label to assign to the address, only allowed with internal=false “keypool”: bool, (boolean, optional, default=false) Stating whether imported public keys should be added to the keypool for when users request new addresses. Only allowed when wallet private keys are disabled }, … \]

## Argument #2 - options

**Type:** json object, optional

## Result

## Examples

`bitcoin-cli importmulti '[{ "scriptPubKey": { "address": "<my address>" }, "timestamp":1455191478 }]' '{ "rescan": false}'

`