
    ---
    sidebar_position: 11
    ---
    # getchaintxstats

Compute statistics about the total number and rate of transactions in the chain.

## Argument #1 - nblocks

**Type:** numeric, optional, default=one month

Size of the window in number of blocks

## Argument #2 - blockhash

**Type:** string, optional, default=chain tip

The hash of the block that ends the window.

## Result

## Examples

`curl --user myusername --data-binary '{"jsonrpc": "1.0", "id": "curltest", "method": "getchaintxstats", "params": [2016]}' -H 'content-type: text/plain;' http://127.0.0.1:8332/

`