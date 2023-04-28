#!/bin/bash
# write to stdout the status of the request
url="$1" ; status=$(curl -s -o /dev/null -w '%{http_code}' "$url") ; echo "$status"
