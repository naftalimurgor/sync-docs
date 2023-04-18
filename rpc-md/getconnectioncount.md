
    ---
    sidebar_position: 46
    ---
    # getconnectioncount

Returns the number of connections to other nodes.

## Result

| Name | Type    | Description          |
| ---- | ------- | -------------------- |
| n    | numeric | The connection count |

## Examples

`curl --user myusername --data-binary '{"jsonrpc": "1.0", "id": "curltest", "method": "getconnectioncount", "params": []}' -H 'content-type: text/plain;' http://127.0.0.1:8332/

`