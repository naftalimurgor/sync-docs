
    ---
    sidebar_position: 23
    ---
    # savemempool

Dumps the mempool to disk. It will fail until the previous dump is fully loaded.

## Result

## Examples

`curl --user myusername --data-binary '{"jsonrpc": "1.0", "id": "curltest", "method": "savemempool", "params": []}' -H 'content-type: text/plain;' http://127.0.0.1:8332/

`