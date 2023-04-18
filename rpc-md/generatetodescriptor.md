
    ---
    sidebar_position: 35
    ---
    # generatetodescriptor

Mine blocks immediately to a specified descriptor (before the RPC call returns)

## Argument #1 - num\_blocks

**Type:** numeric, required

How many blocks are generated immediately.

## Argument #2 - descriptor

**Type:** string, required

The descriptor to send the newly generated bitcoin to.

## Argument #3 - maxtries

**Type:** numeric, optional, default=1000000

How many iterations to try.

## Result

## Examples

Generate 11 blocks to mydesc:

`bitcoin-cli generatetodescriptor 11 "mydesc"

`