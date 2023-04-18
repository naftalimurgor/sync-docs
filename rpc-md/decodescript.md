
    ---
    sidebar_position: 63
    ---
    # decodescript

Decode a hex-encoded script.

## Argument #1 - hexstring

**Type:** string, required

the hex-encoded script

## Result

## Examples

`curl --user myusername --data-binary '{"jsonrpc": "1.0", "id": "curltest", "method": "decodescript", "params": ["hexstring"]}' -H 'content-type: text/plain;' http://127.0.0.1:8332/

`