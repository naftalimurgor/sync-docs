
    ---
    sidebar_position: 45
    ---
    # getaddednodeinfo

Returns information about the given added node, or all added nodes (note that onetry addnodes are not listed here)

## Argument #1 - node

**Type:** string, optional, default=all nodes

If provided, return information about this specific node, otherwise all nodes are returned.

## Result

## Examples

`curl --user myusername --data-binary '{"jsonrpc": "1.0", "id": "curltest", "method": "getaddednodeinfo", "params": ["192.168.0.201"]}' -H 'content-type: text/plain;' http://127.0.0.1:8332/

`