
    ---
    sidebar_position: 113
    ---
    # listsinceblock

Get all transactions in blocks since block \[blockhash\], or all transactions if omitted.

If “blockhash” is no longer a part of the main chain, transactions from the fork point onward are included.

Additionally, if include\_removed is set, transactions affecting the wallet which were removed are returned in the “removed” array.

## Argument #1 - blockhash

**Type:** string, optional

If set, the block hash to list transactions since, otherwise list all transactions.

## Argument #2 - target\_confirmations

**Type:** numeric, optional, default=1

Return the nth block hash from the main chain. e.g. 1 would mean the best block hash. Note: this is not used as a filter, but only affects \[lastblock\] in the return value

## Argument #3 - include\_watchonly

**Type:** boolean, optional, default=true for watch-only wallets, otherwise false

Include transactions to watch-only addresses (see ‘importaddress’)

## Argument #4 - include\_removed

**Type:** boolean, optional, default=true

Show transactions that were removed due to a reorg in the “removed” array

(not guaranteed to work on pruned nodes)

## Result

## Examples

`curl --user myusername --data-binary '{"jsonrpc": "1.0", "id": "curltest", "method": "listsinceblock", "params": ["000000000000000bacf66f7497b7dc45ef753ee9a7d38571037cdb1a57f663ad", 6]}' -H 'content-type: text/plain;' http://127.0.0.1:8332/

`