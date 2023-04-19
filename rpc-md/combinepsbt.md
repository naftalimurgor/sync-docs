---
sidebar_position: 56
---
# combinepsbt

`combinepsbt ["psbt",...]`

Combine multiple partially signed Bitcoin transactions into one transaction.

Implements the Combiner role.

## Argument #1 - txs

**Type:** json array, required

The base64 strings of partially signed transactions

[
  "psbt",    (string) A base64 string of a PSBT
  ...
]

## Result

| Name | Type   | Description                                     |
| ---- | ------ | ----------------------------------------------- |
| str  | string | The base64-encoded partially signed transaction |

## Examples

bitcoin-cli combinepsbt '["mybase64_1", "mybase64_2", "mybase64_3"]'