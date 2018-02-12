# Create a new release
echo "$1"
curl https://sentry.io/api/0/organizations/g3rm4n/releases/ \
  -X POST \
  -H "Authorization: Bearer $1" \
  -H 'Content-Type: application/json' \
  -d "
{
    \"version\": \"$2\",
    \"refs\": [{
        \"repository\":\"ImaMonsta/toc-toc\",
        \"commit\":\"$2\"
    }],
    \"projects\":[\"toctoc\"]
}
"