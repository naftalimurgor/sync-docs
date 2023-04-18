
    ---
    sidebar_position: 70
    ---
    # testmempoolaccept

Returns result of mempool acceptance tests indicating if raw transaction (serialized, hex-encoded) would be accepted by mempool.

This checks if the transaction violates the consensus or policy rules.

See sendrawtransaction call.

## Argument #1 - rawtxs

**Type:** json array, required

An array of hex strings of raw transactions.

Length must be one for now.

## Argument #2 - maxfeerate

**Type:** numeric or string, optional, default=0.10

Reject transactions whose fee rate is higher than the specified value, expressed in BTC/kB

## Result

## Examples

Create a transaction:

Sign the transaction, and get back the hex:

Test acceptance of the transaction (signed hex):

As a JSON-RPC call:

`curl --user myusername --data-binary '{"jsonrpc": "1.0", "id": "curltest", "method": "testmempoolaccept", "params": [["signedhex"]]}' -H 'content-type: text/plain;' http://127.0.0.1:8332/

`