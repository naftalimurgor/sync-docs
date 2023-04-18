
    ---
    sidebar_position: 18
    ---
    # gettxout

Returns details about an unspent transaction output.

## Argument #1 - txid

**Type:** string, required

The transaction id

## Argument #2 - n

**Type:** numeric, required

vout number

## Argument #3 - include\_mempool

**Type:** boolean, optional, default=true

Whether to include the mempool. Note that an unspent output that is spent in the mempool won’t appear.

## Result

## Examples

Get unspent transactions:

View the details:

As a JSON-RPC call:

`curl --user myusername --data-binary '{"jsonrpc": "1.0", "id": "curltest", "method": "gettxout", "params": ["txid", 1]}' -H 'content-type: text/plain;' http://127.0.0.1:8332/

`