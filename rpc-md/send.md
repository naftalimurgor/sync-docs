
    ---
    sidebar_position: 123
    ---
    # send

EXPERIMENTAL warning: this call may be changed in future releases.

Send a transaction.

## Argument #1 - outputs

**Type:** json array, required

The outputs (key-value pairs), where none of the keys are duplicated.

That is, each address can only appear once and there can only be one ‘data’ object. For convenience, a dictionary, which holds the key-value pairs directly, is also accepted.

## Argument #2 - conf\_target

**Type:** numeric, optional, default=wallet -txconfirmtarget

Confirmation target in blocks

## Argument #3 - estimate\_mode

**Type:** string, optional, default=unset

The fee estimate mode, must be one of (case insensitive):

“unset” “economical” “conservative”

## Argument #4 - fee\_rate

**Type:** numeric or string, optional, default=not set, fall back to wallet fee estimation

Specify a fee rate in sat/vB.

## Argument #5 - options

**Type:** json object, optional

“locktime”: n, (numeric, optional, default=0) Raw locktime. Non-0 value also locktime-activates inputs

“lock\_unspents”: bool, (boolean, optional, default=false) Lock selected unspent outputs “psbt”: bool, (boolean, optional, default=automatic) Always return a PSBT, implies add\_to\_wallet=false. “subtract\_fee\_from\_outputs”: \[ (json array, optional, default=empty array) Outputs to subtract the fee from, specified as integer indices. The fee will be equally deducted from the amount of each specified output. Those recipients will receive less bitcoins than you enter in their corresponding amount field. If no outputs are specified here, the sender pays the fee. vout\_index, (numeric) The zero-based output index, before a change output is added. … \], “replaceable”: bool, (boolean, optional, default=wallet default) Marks this transaction as BIP125 replaceable. Allows this transaction to be replaced by a transaction with higher fees }

## Result

## Examples

Send 0.1 BTC with a confirmation target of 6 blocks in economical fee estimate mode:

Send 0.2 BTC with a fee rate of 1.1 sat/vB using positional arguments:

Send 0.2 BTC with a fee rate of 1 sat/vB using the options argument:

Send 0.3 BTC with a fee rate of 25 sat/vB using named arguments:

Create a transaction that should confirm the next block, with a specific input, and return result without adding to wallet or broadcasting to the network:

`bitcoin-cli send '{"bc1q09vm5lfy0j5reeulh4x5752q25uqqvz34hufdl": 0.1}' 1 economical '{"add_to_wallet": false, "inputs": [{"txid":"a08e6907dbbd3d809776dbfc5d82e371b764ed838b5655e72f463568df1aadf0", "vout":1}]}'

`