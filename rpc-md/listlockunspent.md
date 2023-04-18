
    ---
    sidebar_position: 110
    ---
    # listlockunspent

Returns list of temporarily unspendable outputs.

See the lockunspent call to lock and unlock transactions for spending.

## Result

## Examples

List the unspent transactions:

Lock an unspent transaction:

List the locked transactions:

Unlock the transaction again:

As a JSON-RPC call:

`curl --user myusername --data-binary '{"jsonrpc": "1.0", "id": "curltest", "method": "listlockunspent", "params": []}' -H 'content-type: text/plain;' http://127.0.0.1:8332/

`