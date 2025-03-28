# createmultisig

`createmultisig nrequired ["key",...] ( "address_type" )`

Creates a multi-signature address with n signature of m keys required.

It returns a json object with the address and redeemScript.

## Argument #1 - nrequired

**Type:** numeric, required

The number of required signatures out of the n keys.

## Argument #2 - keys

**Type:** json array, required

The hex-encoded public keys.

[
  "key",      (string) The hex-encoded public key
  ...
]

## Argument #3 - address\_type

**Type:** string, optional, default=legacy

The address type to use. Options are “legacy”, “p2sh-segwit”, and “bech32”.

## Result

{                            (json object)
  "address" : "str",         (string) The value of the new multisig address.
  "redeemScript" : "hex",    (string) The string value of the hex-encoded redemption script.
  "descriptor" : "str"       (string) The descriptor for this multisig
}

## Examples

Create a multisig address from 2 public keys:

bitcoin-cli createmultisig 2 "[\"03789ed0bb717d88f7d321a368d905e7430207ebbd82bd342cf11ae157a7ace5fd\",\"03dbc6764b8884a92e871274b87583e6d5c2a58819473e17e107ef3f6aa5a61626\"]"

As a JSON-RPC call:

curl --user myusername --data-binary '{"jsonrpc": "1.0", "id": "curltest", "method": "createmultisig", "params": [2, "[\"03789ed0bb717d88f7d321a368d905e7430207ebbd82bd342cf11ae157a7ace5fd\",\"03dbc6764b8884a92e871274b87583e6d5c2a58819473e17e107ef3f6aa5a61626\"]"]}' -H 'content-type: text/plain;' http://127.0.0.1:8332/