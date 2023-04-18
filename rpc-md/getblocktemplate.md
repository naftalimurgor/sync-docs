
    ---
    sidebar_position: 36
    ---
    # getblocktemplate

If the request parameters include a ‘mode’ key, that is used to explicitly select between the default ‘template’ request or a ‘proposal’.

It returns data needed to construct a block to work on.

For full specification, see BIPs 22, 23, 9, and 145:

> 

## Argument #1 - template\_request

**Type:** json object, optional, default={}

Format of the template

“rules”: \[ (json array, required) A list of strings “segwit”, (string, required) (literal) indicates client side segwit support “str”, (string) other client side supported softfork deployment … \], }

## Result

## Examples

`curl --user myusername --data-binary '{"jsonrpc": "1.0", "id": "curltest", "method": "getblocktemplate", "params": [{"rules": ["segwit"]}]}' -H 'content-type: text/plain;' http://127.0.0.1:8332/

`