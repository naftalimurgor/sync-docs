
    ---
    sidebar_position: 40
    ---
    # submitblock

Attempts to submit new block to network.

See  for full specification.

## Argument #1 - hexdata

**Type:** string, required

the hex-encoded block data to submit

## Argument #2 - dummy

**Type:** string, optional, default=ignored

dummy value, for compatibility with BIP22\. This value is ignored.

## Result

| Name | Type      | Description                                                         |
| ---- | --------- | ------------------------------------------------------------------- |
| null | json null | Returns JSON Null when valid, a string according to BIP22 otherwise |

## Examples

`curl --user myusername --data-binary '{"jsonrpc": "1.0", "id": "curltest", "method": "submitblock", "params": ["mydata"]}' -H 'content-type: text/plain;' http://127.0.0.1:8332/

`