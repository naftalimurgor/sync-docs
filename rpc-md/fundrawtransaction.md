
    ---
    sidebar_position: 65
    ---
    # fundrawtransaction

If the transaction has no inputs, they will be automatically selected to meet its out value.

It will add at most one change output to the outputs.

No existing outputs will be modified unless “subtractFeeFromOutputs” is specified.

Note that inputs which were signed may need to be resigned after completion since in/outputs have been added.

The inputs added will not be signed, use signrawtransactionwithkey

or signrawtransactionwithwallet for that.

Note that all existing inputs must have their previous output transaction be in the wallet.

Note that all inputs selected must be of standard form and P2SH scripts must be in the wallet using importaddress or addmultisigaddress (to calculate fees).

You can see whether this is the case by checking the “solvable” field in the listunspent output.

Only pay-to-pubkey, multisig, and P2SH versions thereof are currently supported for watch-only

## Argument #1 - hexstring

**Type:** string, required

The hex string of the raw transaction

## Argument #2 - options

**Type:** json object, optional

for backward compatibility: passing in a true instead of an object will result in {“includeWatching”:true}

“replaceable”: bool, (boolean, optional, default=wallet default) Marks this transaction as BIP125 replaceable. Allows this transaction to be replaced by a transaction with higher fees “conf\_target”: n, (numeric, optional, default=wallet -txconfirmtarget) Confirmation target in blocks “estimate\_mode”: “str”, (string, optional, default=unset) The fee estimate mode, must be one of (case insensitive): “unset” “economical” “conservative” }

## Argument #3 - iswitness

**Type:** boolean, optional, default=depends on heuristic tests

Whether the transaction hex is a serialized witness transaction.

If iswitness is not present, heuristic tests will be used in decoding. If true, only witness deserialization will be tried. If false, only non-witness deserialization will be tried. This boolean should reflect whether the transaction has inputs (e.g. fully valid, or on-chain transactions), if known by the caller.

## Result

## Examples

Create a transaction with no inputs:

Add sufficient unsigned inputs to meet the output value:

Sign the transaction:

Send the transaction:

`bitcoin-cli sendrawtransaction "signedtransactionhex"

`