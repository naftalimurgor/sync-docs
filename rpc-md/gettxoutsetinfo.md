
    ---
    sidebar_position: 20
    ---
    # gettxoutsetinfo

Returns statistics about the unspent transaction output set.

Note this call may take some time.

## Argument #1 - hash\_type

**Type:** string, optional, default=hash\_serialized\_2

Which UTXO set hash should be calculated. Options: ‘hash\_serialized\_2’ (the legacy algorithm), ‘none’.

## Result

## Examples

`curl --user myusername --data-binary '{"jsonrpc": "1.0", "id": "curltest", "method": "gettxoutsetinfo", "params": []}' -H 'content-type: text/plain;' http://127.0.0.1:8332/

`