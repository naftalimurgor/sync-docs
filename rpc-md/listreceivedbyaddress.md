
    ---
    sidebar_position: 111
    ---
    # listreceivedbyaddress

List balances by receiving address.

## Argument #1 - minconf

**Type:** numeric, optional, default=1

The minimum number of confirmations before payments are included.

## Argument #2 - include\_empty

**Type:** boolean, optional, default=false

Whether to include addresses that haven’t received any payments.

## Argument #3 - include\_watchonly

**Type:** boolean, optional, default=true for watch-only wallets, otherwise false

Whether to include watch-only addresses (see ‘importaddress’)

## Argument #4 - address\_filter

**Type:** string, optional

If present, only return information on this address.

## Result

## Examples

`curl --user myusername --data-binary '{"jsonrpc": "1.0", "id": "curltest", "method": "listreceivedbyaddress", "params": [6, true, true, "bc1q09vm5lfy0j5reeulh4x5752q25uqqvz34hufdl"]}' -H 'content-type: text/plain;' http://127.0.0.1:8332/

`