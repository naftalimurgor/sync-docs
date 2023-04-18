
    ---
    sidebar_position: 6
    ---
    # getblockfilter

Retrieve a BIP 157 content filter for a particular block.

## Argument #1 - blockhash

**Type:** string, required

The hash of the block

## Argument #2 - filtertype

**Type:** string, optional, default=basic

The type name of the filter

## Result

## Examples

`curl --user myusername --data-binary '{"jsonrpc": "1.0", "id": "curltest", "method": "getblockfilter", "params": ["00000000c937983704a73af28acdec37b049d214adbda81d7e2a3dd146f6ed09", "basic"]}' -H 'content-type: text/plain;' http://127.0.0.1:8332/

`