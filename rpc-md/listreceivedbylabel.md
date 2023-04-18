
    ---
    sidebar_position: 112
    ---
    # listreceivedbylabel

List received transactions by label.

## Argument #1 - minconf

**Type:** numeric, optional, default=1

The minimum number of confirmations before payments are included.

## Argument #2 - include\_empty

**Type:** boolean, optional, default=false

Whether to include labels that haven’t received any payments.

## Argument #3 - include\_watchonly

**Type:** boolean, optional, default=true for watch-only wallets, otherwise false

Whether to include watch-only addresses (see ‘importaddress’)

## Result

## Examples

`curl --user myusername --data-binary '{"jsonrpc": "1.0", "id": "curltest", "method": "listreceivedbylabel", "params": [6, true, true]}' -H 'content-type: text/plain;' http://127.0.0.1:8332/

`