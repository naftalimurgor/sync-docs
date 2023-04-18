
    ---
    sidebar_position: 109
    ---
    # listlabels

Returns the list of all labels, or labels that are assigned to addresses with a specific purpose.

## Argument #1 - purpose

**Type:** string, optional

Address purpose to list labels for (‘send’,’receive’). An empty string is the same as not providing this argument.

## Result

## Examples

List all labels:

List labels that have receiving addresses:

List labels that have sending addresses:

As a JSON-RPC call:

`curl --user myusername --data-binary '{"jsonrpc": "1.0", "id": "curltest", "method": "listlabels", "params": [receive]}' -H 'content-type: text/plain;' http://127.0.0.1:8332/

`