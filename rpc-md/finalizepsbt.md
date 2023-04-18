
    ---
    sidebar_position: 64
    ---
    # finalizepsbt

Finalize the inputs of a PSBT. If the transaction is fully signed, it will produce a network serialized transaction which can be broadcast with sendrawtransaction. Otherwise a PSBT will be created which has the final\_scriptSig and final\_scriptWitness fields filled for inputs that are complete.

Implements the Finalizer and Extractor roles.

## Argument #1 - psbt

**Type:** string, required

A base64 string of a PSBT

## Argument #2 - extract

**Type:** boolean, optional, default=true

If true and the transaction is complete,

extract and return the complete transaction in normal network serialization instead of the PSBT.

## Result

## Examples

`bitcoin-cli finalizepsbt "psbt"

`