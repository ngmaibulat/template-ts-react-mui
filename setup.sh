#!/bin/bash

# npx @teambit/bvm install

pnpm install

cd frontend
pnpm install

cd ../catalog
pnpm install

cd ..

pnpm build

mkcert -install
mkcert localhost  #mkcert otherhostname
