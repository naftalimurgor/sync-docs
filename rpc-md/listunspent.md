
    ---
    sidebar_position: 115
    ---
    # listunspent

Returns array of unspent transaction outputs with between minconf and maxconf (inclusive) confirmations.

Optionally filter to only include txouts paid to specified addresses.

## Argument #1 - minconf

**Type:** numeric, optional, default=1

The minimum confirmations to filter

## Argument #2 - maxconf

**Type:** numeric, optional, default=9999999

The maximum confirmations to filter

## Argument #3 - addresses

**Type:** json array, optional, default=empty array

The bitcoin addresses to filter

## Argument #4 - include\_unsafe

**Type:** boolean, optional, default=true

Include outputs that are not safe to spend

See description of “safe” attribute below.

## Argument #5 - query\_options

**Type:** json object, optional

JSON with query options

## Result

## Examples

`curl --user myusername --data-binary '{"jsonrpc": "1.0", "id": "curltest", "method": "listunspent", "params": [6, 9999999, [] , true, { "minimumAmount": 0.005 } ]}' -H 'content-type: text/plain;' http://127.0.0.1:8332/

`