
    ---
    sidebar_position: 135
    ---
    # walletlock

Removes the wallet encryption key from memory, locking the wallet.

After calling this method, you will need to call walletpassphrase again before being able to call any methods which require the wallet to be unlocked.

## Result

## Examples

Set the passphrase for 2 minutes to perform a transaction:

Perform a send (requires passphrase set):

Clear the passphrase since we are done before 2 minutes is up:

As a JSON-RPC call:

`curl --user myusername --data-binary '{"jsonrpc": "1.0", "id": "curltest", "method": "walletlock", "params": []}' -H 'content-type: text/plain;' http://127.0.0.1:8332/

`