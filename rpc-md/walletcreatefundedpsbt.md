
    ---
    sidebar_position: 134
    ---
    # walletcreatefundedpsbt

Creates and funds a transaction in the Partially Signed Transaction format.

Implements the Creator and Updater roles.

## Argument #1 - inputs

**Type:** json array, optional

Leave empty to add inputs automatically. See add\_inputs option.

## Argument #2 - outputs

**Type:** json array, required

The outputs (key-value pairs), where none of the keys are duplicated.

That is, each address can only appear once and there can only be one ‘data’ object. For compatibility reasons, a dictionary, which holds the key-value pairs directly, is also accepted as second parameter.

## Argument #3 - locktime

**Type:** numeric, optional, default=0

Raw locktime. Non-0 value also locktime-activates inputs

## Argument #4 - options

**Type:** json object, optional

“replaceable”: bool, (boolean, optional, default=wallet default) Marks this transaction as BIP125 replaceable.

Allows this transaction to be replaced by a transaction with higher fees “conf\_target”: n, (numeric, optional, default=wallet -txconfirmtarget) Confirmation target in blocks “estimate\_mode”: “str”, (string, optional, default=unset) The fee estimate mode, must be one of (case insensitive): “unset” “economical” “conservative” }

## Argument #5 - bip32derivs

**Type:** boolean, optional, default=true

Include BIP 32 derivation paths for public keys if we know them

## Result

## Examples

Create a transaction with no inputs:

`bitcoin-cli walletcreatefundedpsbt "[{\"txid\":\"myid\",\"vout\":0}]" "[{\"data\":\"00010203\"}]"

`