
    ---
    sidebar_position: 83
    ---
    # backupwallet

Safely copies current wallet file to destination, which can be a directory or a path with filename.

## Argument #1 - destination

**Type:** string, required

The destination directory or file

## Result

## Examples

`curl --user myusername --data-binary '{"jsonrpc": "1.0", "id": "curltest", "method": "backupwallet", "params": ["backup.dat"]}' -H 'content-type: text/plain;' http://127.0.0.1:8332/

`