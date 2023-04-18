
    ---
    sidebar_position: 78
    ---
    # validateaddress

Return information about the given bitcoin address.

## Argument #1 - address

**Type:** string, required

The bitcoin address to validate

## Result

## Examples

`curl --user myusername --data-binary '{"jsonrpc": "1.0", "id": "curltest", "method": "validateaddress", "params": ["bc1q09vm5lfy0j5reeulh4x5752q25uqqvz34hufdl"]}' -H 'content-type: text/plain;' http://127.0.0.1:8332/

`