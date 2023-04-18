
    ---
    sidebar_position: 49
    ---
    # getnodeaddresses

Return known addresses which can potentially be used to find new nodes in the network

## Argument #1 - count

**Type:** numeric, optional, default=1

The maximum number of addresses to return. Specify 0 to return all known addresses.

## Result

## Examples

`curl --user myusername --data-binary '{"jsonrpc": "1.0", "id": "curltest", "method": "getnodeaddresses", "params": [8]}' -H 'content-type: text/plain;' http://127.0.0.1:8332/

`