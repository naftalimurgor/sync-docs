
    ---
    sidebar_position: 97
    ---
    # gettransaction

Get detailed information about in-wallet transaction <txid>

## Argument #1 - txid

**Type:** string, required

The transaction id

## Argument #2 - include\_watchonly

**Type:** boolean, optional, default=true for watch-only wallets, otherwise false

Whether to include watch-only addresses in balance calculation and details\[\]

## Argument #3 - verbose

**Type:** boolean, optional, default=false

Whether to include a decoded field containing the decoded transaction (equivalent to RPC decoderawtransaction)

## Result

## Examples

`curl --user myusername --data-binary '{"jsonrpc": "1.0", "id": "curltest", "method": "gettransaction", "params": ["1075db55d416d3ca199f55b6084e2115b9345e16c5cf302fc80e9d5fbf5d48d"]}' -H 'content-type: text/plain;' http://127.0.0.1:8332/

`