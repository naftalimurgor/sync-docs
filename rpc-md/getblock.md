
    ---
    sidebar_position: 3
    ---
    # getblock

If verbosity is 0, returns a string that is serialized, hex-encoded data for block ‘hash’.

If verbosity is 1, returns an Object with information about block ‘hash’.

If verbosity is 2, returns an Object with information about block ‘hash’ and information about each transaction.

## Argument #1 - blockhash

**Type:** string, required

The block hash

## Argument #2 - verbosity

**Type:** numeric, optional, default=1

0 for hex-encoded data, 1 for a json object, and 2 for json object with transaction data

## Result (for verbosity = 0)

| Name | Type   | Description                                                    |
| ---- | ------ | -------------------------------------------------------------- |
| hex  | string | A string that is serialized, hex-encoded data for block ‘hash’ |

## Result (for verbosity = 1)

## Result (for verbosity = 2)

## Examples

`curl --user myusername --data-binary '{"jsonrpc": "1.0", "id": "curltest", "method": "getblock", "params": ["00000000c937983704a73af28acdec37b049d214adbda81d7e2a3dd146f6ed09"]}' -H 'content-type: text/plain;' http://127.0.0.1:8332/

`