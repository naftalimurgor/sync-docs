
    ---
    sidebar_position: 107
    ---
    # keypoolrefill

Fills the keypool.

Requires wallet passphrase to be set with walletpassphrase call if wallet is encrypted.

## Argument #1 - newsize

**Type:** numeric, optional, default=100

The new keypool size

## Result

## Examples

`curl --user myusername --data-binary '{"jsonrpc": "1.0", "id": "curltest", "method": "keypoolrefill", "params": []}' -H 'content-type: text/plain;' http://127.0.0.1:8332/

`