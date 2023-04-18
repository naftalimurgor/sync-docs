
    ---
    sidebar_position: 118
    ---
    # loadwallet

Loads a wallet from a wallet file or directory.

Note that all wallet command-line options used when starting bitcoind will be applied to the new wallet (eg -rescan, etc).

## Argument #1 - filename

**Type:** string, required

The wallet directory or .dat file.

## Argument #2 - load\_on\_startup

**Type:** boolean, optional, default=null

Save wallet name to persistent settings and load on startup. True to add wallet to startup list, false to remove, null to leave unchanged.

## Result

## Examples

`curl --user myusername --data-binary '{"jsonrpc": "1.0", "id": "curltest", "method": "loadwallet", "params": ["test.dat"]}' -H 'content-type: text/plain;' http://127.0.0.1:8332/

`