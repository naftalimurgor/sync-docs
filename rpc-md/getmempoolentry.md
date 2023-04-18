
    ---
    sidebar_position: 15
    ---
    # getmempoolentry

Returns mempool data for given transaction

## Argument #1 - txid

**Type:** string, required

The transaction id (must be in mempool)

## Result

## Examples

`curl --user myusername --data-binary '{"jsonrpc": "1.0", "id": "curltest", "method": "getmempoolentry", "params": ["mytxid"]}' -H 'content-type: text/plain;' http://127.0.0.1:8332/

`