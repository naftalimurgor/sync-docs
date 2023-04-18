
    ---
    sidebar_position: 27
    ---
    # getmemoryinfo

Returns an object containing information about memory usage.

## Argument #1 - mode

**Type:** string, optional, default=”stats”

determines what kind of information is returned.

* “stats” returns general statistics about memory usage in the daemon.
* “mallocinfo” returns an XML string describing low-level heap state (only available if compiled with glibc 2.10+).

## Result (mode “stats”)

## Result (mode “mallocinfo”)

| Name | Type   | Description             |
| ---- | ------ | ----------------------- |
| str  | string | “<malloc version=”1”>…” |

## Examples

`curl --user myusername --data-binary '{"jsonrpc": "1.0", "id": "curltest", "method": "getmemoryinfo", "params": []}' -H 'content-type: text/plain;' http://127.0.0.1:8332/

`