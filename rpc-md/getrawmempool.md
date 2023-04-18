
    ---
    sidebar_position: 17
    ---
    # getrawmempool

Returns all transaction ids in memory pool as a json array of string transaction ids.

Hint: use getmempoolentry to fetch a specific transaction from the mempool.

## Argument #1 - verbose

**Type:** boolean, optional, default=false

True for a json object, false for array of transaction ids

## Argument #2 - mempool\_sequence

**Type:** boolean, optional, default=false

If verbose=false, returns a json object with transaction list and mempool sequence number attached.

## Result (for verbose = false)

## Result (for verbose = true)

## Result (for verbose = false and mempool\_sequence = true)

## Examples

`curl --user myusername --data-binary '{"jsonrpc": "1.0", "id": "curltest", "method": "getrawmempool", "params": [true]}' -H 'content-type: text/plain;' http://127.0.0.1:8332/

`