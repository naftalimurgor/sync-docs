
    ---
    sidebar_position: 8
    ---
    # getblockheader

If verbose is false, returns a string that is serialized, hex-encoded data for blockheader ‘hash’.

If verbose is true, returns an Object with information about blockheader ‘hash’.

## Argument #1 - blockhash

**Type:** string, required

The block hash

## Argument #2 - verbose

**Type:** boolean, optional, default=true

true for a json object, false for the hex-encoded data

## Result (for verbose = true)

## Result (for verbose=false)

| Name | Type   | Description                                                    |
| ---- | ------ | -------------------------------------------------------------- |
| hex  | string | A string that is serialized, hex-encoded data for block ‘hash’ |

## Examples

`curl --user myusername --data-binary '{"jsonrpc": "1.0", "id": "curltest", "method": "getblockheader", "params": ["00000000c937983704a73af28acdec37b049d214adbda81d7e2a3dd146f6ed09"]}' -H 'content-type: text/plain;' http://127.0.0.1:8332/

`