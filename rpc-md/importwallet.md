
    ---
    sidebar_position: 106
    ---
    # importwallet

Imports keys from a wallet dump file (see dumpwallet). Requires a new wallet backup to include imported keys.

Note: Use “getwalletinfo” to query the scanning progress.

## Argument #1 - filename

**Type:** string, required

The wallet file

## Result

## Examples

Dump the wallet:

Import the wallet:

Import using the json rpc call:

`curl --user myusername --data-binary '{"jsonrpc": "1.0", "id": "curltest", "method": "importwallet", "params": ["test"]}' -H 'content-type: text/plain;' http://127.0.0.1:8332/

`