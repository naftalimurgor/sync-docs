
    ---
    sidebar_position: 69
    ---
    # signrawtransactionwithkey

Sign inputs for raw transaction (serialized, hex-encoded).

The second argument is an array of base58-encoded private keys that will be the only keys used to sign the transaction.

The third optional argument (may be null) is an array of previous transaction outputs that this transaction depends on but may not yet be in the block chain.

## Argument #1 - hexstring

**Type:** string, required

The transaction hex string

## Argument #2 - privkeys

**Type:** json array, required

The base58-encoded private keys for signing

## Argument #3 - prevtxs

**Type:** json array, optional

The previous dependent transaction outputs

## Argument #4 - sighashtype

**Type:** string, optional, default=ALL

The signature hash type. Must be one of:

“ALL” “NONE” “SINGLE” “ALL|ANYONECANPAY” “NONE|ANYONECANPAY” “SINGLE|ANYONECANPAY”

## Result

## Examples

`curl --user myusername --data-binary '{"jsonrpc": "1.0", "id": "curltest", "method": "signrawtransactionwithkey", "params": ["myhex", "[\"key1\",\"key2\"]"]}' -H 'content-type: text/plain;' http://127.0.0.1:8332/

`