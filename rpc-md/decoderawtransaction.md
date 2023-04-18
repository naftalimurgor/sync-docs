
    ---
    sidebar_position: 62
    ---
    # decoderawtransaction

Return a JSON object representing the serialized, hex-encoded transaction.

## Argument #1 - hexstring

**Type:** string, required

The transaction hex string

## Argument #2 - iswitness

**Type:** boolean, optional, default=depends on heuristic tests

Whether the transaction hex is a serialized witness transaction.

If iswitness is not present, heuristic tests will be used in decoding. If true, only witness deserialization will be tried. If false, only non-witness deserialization will be tried. This boolean should reflect whether the transaction has inputs (e.g. fully valid, or on-chain transactions), if known by the caller.

## Result

## Examples

`curl --user myusername --data-binary '{"jsonrpc": "1.0", "id": "curltest", "method": "decoderawtransaction", "params": ["hexstring"]}' -H 'content-type: text/plain;' http://127.0.0.1:8332/

`