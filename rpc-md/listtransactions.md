
    ---
    sidebar_position: 114
    ---
    # listtransactions

If a label name is provided, this will return only incoming transactions paying to addresses with the specified label.

Returns up to ‘count’ most recent transactions skipping the first ‘from’ transactions.

## Argument #1 - label

**Type:** string, optional

If set, should be a valid label name to return only incoming transactions

with the specified label, or “\*” to disable filtering and return all transactions.

## Argument #2 - count

**Type:** numeric, optional, default=10

The number of transactions to return

## Argument #3 - skip

**Type:** numeric, optional, default=0

The number of transactions to skip

## Argument #4 - include\_watchonly

**Type:** boolean, optional, default=true for watch-only wallets, otherwise false

Include transactions to watch-only addresses (see ‘importaddress’)

## Result

## Examples

List the most recent 10 transactions in the systems:

List transactions 100 to 120:

As a JSON-RPC call:

`curl --user myusername --data-binary '{"jsonrpc": "1.0", "id": "curltest", "method": "listtransactions", "params": ["*", 20, 100]}' -H 'content-type: text/plain;' http://127.0.0.1:8332/

`