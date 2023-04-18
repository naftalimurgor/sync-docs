
    ---
    sidebar_position: 5
    ---
    # getblockcount

Returns the height of the most-work fully-validated chain.

The genesis block has height 0.

## Result

| Name | Type    | Description             |
| ---- | ------- | ----------------------- |
| n    | numeric | The current block count |

## Examples

`curl --user myusername --data-binary '{"jsonrpc": "1.0", "id": "curltest", "method": "getblockcount", "params": []}' -H 'content-type: text/plain;' http://127.0.0.1:8332/

`