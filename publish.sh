rm -rf dist/
npx tsc
cp package.json dist
cd dist
npm publish