#!/bin/bash

pnpm install
npx @teambit/bvm install

cd frontend
pnpm install

cd ..

pnpm build

mkcert -install
mkcert localhost  #mkcert otherhostname
