# Create a new release
curl https://sentry.io/api/0/organizations/g3rm4n/releases/ \
  -X POST \
  -H 'Authorization: Bearer ${SENTRY_TOKEN}' \
  -H 'Content-Type: application/json' \
  -d '
  {
    "version": "${TRAVIS_COMMIT}",
    "refs": [{
        "repository":"imamonsta/toc-toc",
        "commit":"${TRAVIS_COMMIT}",
    }],
    "projects":["TocToc"]
}
'