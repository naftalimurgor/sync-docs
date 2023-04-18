
    ---
    sidebar_position: 90
    ---
    # getaddressinfo

Return information about the given bitcoin address.

Some of the information will only be present if the address is in the active wallet.

## Argument #1 - address

**Type:** string, required

The bitcoin address for which to get information.

## Result

## Examples

`curl --user myusername --data-binary '{"jsonrpc": "1.0", "id": "curltest", "method": "getaddressinfo", "params": ["bc1q09vm5lfy0j5reeulh4x5752q25uqqvz34hufdl"]}' -H 'content-type: text/plain;' http://127.0.0.1:8332/

`