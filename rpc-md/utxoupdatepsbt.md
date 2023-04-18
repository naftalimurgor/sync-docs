
    ---
    sidebar_position: 71
    ---
    # utxoupdatepsbt

Updates all segwit inputs and outputs in a PSBT with data from output descriptors, the UTXO set or the mempool.

## Argument #1 - psbt

**Type:** string, required

A base64 string of a PSBT

## Argument #2 - descriptors

**Type:** json array, optional

An array of either strings or objects

## Result

| Name | Type   | Description                                                         |
| ---- | ------ | ------------------------------------------------------------------- |
| str  | string | The base64-encoded partially signed transaction with inputs updated |

## Examples

`bitcoin-cli utxoupdatepsbt "psbt"

`