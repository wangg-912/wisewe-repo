cat package.json \
| grep -v '"private":' \
| grep -v '"version":' \
| sed "s/\(\"name\": \"element-plus\"\)/\1,\n  \"version\": \"${TAG_VERSION}\"/g" > package.json.bak

cat package.json.bak > package.json
npm publish --registry ${REGISTRY}