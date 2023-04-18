
    ---
    sidebar_position: 9
    ---
    # getblockstats

Compute per block statistics for a given window. All amounts are in satoshis.

It won’t work for some heights with pruning.

## Argument #1 - hash\_or\_height

**Type:** string or numeric, required

The block hash or height of the target block

## Argument #2 - stats

**Type:** json array, optional, default=all values

Values to plot (see result below)

## Result

## Examples

`curl --user myusername --data-binary '{"jsonrpc": "1.0", "id": "curltest", "method": "getblockstats", "params": [1000, ["minfeerate","avgfeerate"]]}' -H 'content-type: text/plain;' http://127.0.0.1:8332/

`