
    ---
    sidebar_position: 103
    ---
    # importprivkey

Adds a private key (as returned by dumpprivkey) to your wallet. Requires a new wallet backup.

Hint: use importmulti to import more than one private key.

Note: This call can take over an hour to complete if rescan is true, during that time, other rpc calls may report that the imported key exists but related transactions are still missing, leading to temporarily incorrect/bogus balances and unspent outputs until rescan completes.

Note: Use “getwalletinfo” to query the scanning progress.

## Argument #1 - privkey

**Type:** string, required

The private key (see dumpprivkey)

## Argument #2 - label

**Type:** string, optional, default=current label if address exists, otherwise “”

An optional label

## Argument #3 - rescan

**Type:** boolean, optional, default=true

Rescan the wallet for transactions

## Result

## Examples

Dump a private key:

Import the private key with rescan:

Import using a label and without rescan:

Import using default blank label and without rescan:

As a JSON-RPC call:

`curl --user myusername --data-binary '{"jsonrpc": "1.0", "id": "curltest", "method": "importprivkey", "params": ["mykey", "testing", false]}' -H 'content-type: text/plain;' http://127.0.0.1:8332/

`