
    ---
    sidebar_position: 66
    ---
    # getrawtransaction

Return the raw transaction data.

By default this function only works for mempool transactions. When called with a blockhash argument, getrawtransaction will return the transaction if the specified block is available and the transaction is found in that block. When called without a blockhash argument, getrawtransaction will return the transaction if it is in the mempool, or if -txindex is enabled and the transaction is in a block in the blockchain.

Hint: Use gettransaction for wallet transactions.

If verbose is ‘true’, returns an Object with information about ‘txid’.

If verbose is ‘false’ or omitted, returns a string that is serialized, hex-encoded data for ‘txid’.

## Argument #1 - txid

**Type:** string, required

The transaction id

## Argument #2 - verbose

**Type:** boolean, optional, default=false

If false, return a string, otherwise return a json object

## Argument #3 - blockhash

**Type:** string, optional

The block in which to look for the transaction

## Result (if verbose is not set or set to false)

| Name | Type   | Description                                 |
| ---- | ------ | ------------------------------------------- |
| str  | string | The serialized, hex-encoded data for ‘txid’ |

## Result (if verbose is set to true)

## Examples

`bitcoin-cli getrawtransaction "mytxid" true "myblockhash"

`