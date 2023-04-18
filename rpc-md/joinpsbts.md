
    ---
    sidebar_position: 67
    ---
    # joinpsbts

Joins multiple distinct PSBTs with different inputs and outputs into one PSBT with inputs and outputs from all of the PSBTs No input in any of the PSBTs can be in more than one of the PSBTs.

## Argument #1 - txs

**Type:** json array, required

The base64 strings of partially signed transactions

## Result

| Name | Type   | Description                                     |
| ---- | ------ | ----------------------------------------------- |
| str  | string | The base64-encoded partially signed transaction |

## Examples

`bitcoin-cli joinpsbts "psbt"

`