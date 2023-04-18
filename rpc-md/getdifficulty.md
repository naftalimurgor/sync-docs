
    ---
    sidebar_position: 12
    ---
    # getdifficulty

Returns the proof-of-work difficulty as a multiple of the minimum difficulty.

## Result

| Name | Type    | Description                                                           |
| ---- | ------- | --------------------------------------------------------------------- |
| n    | numeric | the proof-of-work difficulty as a multiple of the minimum difficulty. |

## Examples

`curl --user myusername --data-binary '{"jsonrpc": "1.0", "id": "curltest", "method": "getdifficulty", "params": []}' -H 'content-type: text/plain;' http://127.0.0.1:8332/

`