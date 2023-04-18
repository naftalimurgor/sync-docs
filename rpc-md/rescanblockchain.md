
    ---
    sidebar_position: 122
    ---
    # rescanblockchain

Rescan the local blockchain for wallet related transactions.

Note: Use “getwalletinfo” to query the scanning progress.

## Argument #1 - start\_height

**Type:** numeric, optional, default=0

block height where the rescan should start

## Argument #2 - stop\_height

**Type:** numeric, optional

the last block height that should be scanned. If none is provided it will rescan up to the tip at return time of this call.

## Result

## Examples

`curl --user myusername --data-binary '{"jsonrpc": "1.0", "id": "curltest", "method": "rescanblockchain", "params": [100000, 120000]}' -H 'content-type: text/plain;' http://127.0.0.1:8332/

`