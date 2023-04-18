
    ---
    sidebar_position: 84
    ---
    # bumpfee

Bumps the fee of an opt-in-RBF transaction T, replacing it with a new transaction B.

An opt-in RBF transaction with the given txid must be in the wallet.

The command will pay the additional fee by reducing change outputs or adding inputs when necessary.

It may add a new change output if one does not already exist.

All inputs in the original transaction will be included in the replacement transaction.

The command will fail if the wallet or mempool contains a transaction that spends one of T’s outputs.

By default, the new fee will be calculated automatically using the estimatesmartfee RPC.

The user can specify a confirmation target for estimatesmartfee.

Alternatively, the user can specify a fee rate in sat/vB for the new transaction.

At a minimum, the new fee rate must be high enough to pay an additional new relay fee (incrementalfee returned by getnetworkinfo) to enter the node’s mempool.

\* WARNING: before version 0.21, fee\_rate was in BTC/kvB. As of 0.21, fee\_rate is in sat/vB. \*

## Argument #1 - txid

**Type:** string, required

The txid to be bumped

## Argument #2 - options

**Type:** json object, optional

## Result

## Examples

Bump the fee, get the new transaction’stxid:

`bitcoin-cli bumpfee <txid>

`