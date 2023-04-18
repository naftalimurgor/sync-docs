
    ---
    sidebar_position: 77
    ---
    # signmessagewithprivkey

Sign a message with the private key of an address

## Argument #1 - privkey

**Type:** string, required

The private key to sign the message with.

## Argument #2 - message

**Type:** string, required

The message to create a signature of.

## Result

| Name | Type   | Description                                     |
| ---- | ------ | ----------------------------------------------- |
| str  | string | The signature of the message encoded in base 64 |

## Examples

Create the signature:

Verify the signature:

As a JSON-RPC call:

`curl --user myusername --data-binary '{"jsonrpc": "1.0", "id": "curltest", "method": "signmessagewithprivkey", "params": ["privkey", "my message"]}' -H 'content-type: text/plain;' http://127.0.0.1:8332/

`