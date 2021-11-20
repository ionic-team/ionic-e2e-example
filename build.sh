cd ../ionic-e2e
npm run build:cli && npm pack
cd ../ionic-e2e-example
npm install ../ionic-e2e/*.tgz

