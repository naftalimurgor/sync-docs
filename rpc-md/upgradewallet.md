
    ---
    sidebar_position: 133
    ---
    # upgradewallet

Upgrade the wallet. Upgrades to the latest version if no version number is specified.

New keys may be generated and a new wallet backup will need to be made.

## Argument #1 - version

**Type:** numeric, optional, default=169900

The version number to upgrade to. Default is the latest wallet version.

## Result

## Examples

`curl --user myusername --data-binary '{"jsonrpc": "1.0", "id": "curltest", "method": "upgradewallet", "params": [169900]}' -H 'content-type: text/plain;' http://127.0.0.1:8332/

`