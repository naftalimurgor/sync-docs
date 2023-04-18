
    ---
    sidebar_position: 129
    ---
    # setwalletflag

Change the state of the given wallet flag for a wallet.

## Argument #1 - flag

**Type:** string, required

The name of the flag to change. Current available flags: avoid\_reuse

## Argument #2 - value

**Type:** boolean, optional, default=true

The new state.

## Result

## Examples

`curl --user myusername --data-binary '{"jsonrpc": "1.0", "id": "curltest", "method": "setwalletflag", "params": ["avoid_reuse"]}' -H 'content-type: text/plain;' http://127.0.0.1:8332/

`