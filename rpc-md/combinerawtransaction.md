---
sidebar_position: 57
---
# combinerawtransaction

`combinerawtransaction ["hexstring",...]`

Combine multiple partially signed transactions into one transaction.

The combined transaction may be another partially signed transaction or a fully signed transaction.

## Argument #1 - txs

**Type:** json array, required

The hex strings of partially signed transactions

[
  "hexstring",    (string) A hex-encoded raw transaction
  ...
]

## Result

| Name | Type   | Description                                       |
| ---- | ------ | ------------------------------------------------- |
| str  | string | The hex-encoded raw transaction with signature(s) |

## Examples

bitcoin-cli combinerawtransaction '["myhex1", "myhex2", "myhex3"]'