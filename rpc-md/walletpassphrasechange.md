
    ---
    sidebar_position: 137
    ---
    # walletpassphrasechange

Changes the wallet passphrase from ‘oldpassphrase’ to ‘newpassphrase’.

## Argument #1 - oldpassphrase

**Type:** string, required

The current passphrase

## Argument #2 - newpassphrase

**Type:** string, required

The new passphrase

## Result

## Examples

`curl --user myusername --data-binary '{"jsonrpc": "1.0", "id": "curltest", "method": "walletpassphrasechange", "params": ["old one", "new one"]}' -H 'content-type: text/plain;' http://127.0.0.1:8332/

`