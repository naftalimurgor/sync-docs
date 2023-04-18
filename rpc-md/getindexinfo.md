
    ---
    sidebar_position: 76
    ---
    # getindexinfo

Returns the status of one or all available indices currently running in the node.

## Argument #1 - index\_name

**Type:** string, optional

Filter results for an index with a specific name.

## Result

## Examples

`curl --user myusername --data-binary '{"jsonrpc": "1.0", "id": "curltest", "method": "getindexinfo", "params": [txindex]}' -H 'content-type: text/plain;' http://127.0.0.1:8332/

`