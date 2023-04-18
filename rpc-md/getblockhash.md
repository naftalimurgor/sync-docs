
    ---
    sidebar_position: 7
    ---
    # getblockhash

Returns hash of block in best-block-chain at height provided.

## Argument #1 - height

**Type:** numeric, required

The height index

## Result

| Name | Type   | Description    |
| ---- | ------ | -------------- |
| hex  | string | The block hash |

## Examples

`curl --user myusername --data-binary '{"jsonrpc": "1.0", "id": "curltest", "method": "getblockhash", "params": [1000]}' -H 'content-type: text/plain;' http://127.0.0.1:8332/

`