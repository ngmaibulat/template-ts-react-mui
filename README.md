### The Stack

- Typescript
- React
- Styled Components
- MUI
- React Router
- React Query
- ESBuild
- Ladle as the components catalog, (instead of StoryBook)
- PNPM as the recommended package manager
- mkcert to generate TLS certificates

### Clone repo

```bash
mkdir project-01
cd project-01

git clone https://github.com/ngmaibulat/template-ts-react-mui  .

rm -rf .git
npm run setup
```

### Prepare TLS certificates

```bash
brew install mkcert
mkcert -install
mkcert localhost  #mkcert otherhostname
```

### Start Dev

```bash
pnpm install

# run the following 2 commands in parallel
# for example, in 2 terminal windows
pnpm run build:watch
pnpm run dev
```

### Browse

- https://localhost:3000
- use `https`, not `http`
- use `localhost`, not `127.0.0.1`. As the tls cert would be issued by `fqdn`
- livereload should work fine `=>` edit your files and see results without manual reload
