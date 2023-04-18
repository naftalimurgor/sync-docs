
    ---
    sidebar_position: 14
    ---
    # getmempooldescendants

If txid is in the mempool, returns all in-mempool descendants.

## Argument #1 - txid

**Type:** string, required

The transaction id (must be in mempool)

## Argument #2 - verbose

**Type:** boolean, optional, default=false

True for a json object, false for array of transaction ids

## Result (for verbose = false)

## Result (for verbose = true)

## Examples

`curl --user myusername --data-binary '{"jsonrpc": "1.0", "id": "curltest", "method": "getmempooldescendants", "params": ["mytxid"]}' -H 'content-type: text/plain;' http://127.0.0.1:8332/

`