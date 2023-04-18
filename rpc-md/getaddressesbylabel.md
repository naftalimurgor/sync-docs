
    ---
    sidebar_position: 89
    ---
    # getaddressesbylabel

Returns the list of addresses assigned the specified label.

## Argument #1 - label

**Type:** string, required

The label.

## Result

## Examples

`curl --user myusername --data-binary '{"jsonrpc": "1.0", "id": "curltest", "method": "getaddressesbylabel", "params": ["tabby"]}' -H 'content-type: text/plain;' http://127.0.0.1:8332/

`