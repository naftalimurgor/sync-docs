
    ---
    sidebar_position: 131
    ---
    # signrawtransactionwithwallet

Sign inputs for raw transaction (serialized, hex-encoded).

The second optional argument (may be null) is an array of previous transaction outputs that this transaction depends on but may not yet be in the block chain.

Requires wallet passphrase to be set with walletpassphrase call if wallet is encrypted.

## Argument #1 - hexstring

**Type:** string, required

The transaction hex string

## Argument #2 - prevtxs

**Type:** json array, optional

The previous dependent transaction outputs

## Argument #3 - sighashtype

**Type:** string, optional, default=ALL

The signature hash type. Must be one of

“ALL” “NONE” “SINGLE” “ALL|ANYONECANPAY” “NONE|ANYONECANPAY” “SINGLE|ANYONECANPAY”

## Result

## Examples

`curl --user myusername --data-binary '{"jsonrpc": "1.0", "id": "curltest", "method": "signrawtransactionwithwallet", "params": ["myhex"]}' -H 'content-type: text/plain;' http://127.0.0.1:8332/

`