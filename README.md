### The Stack

- Typescript
- React
- Styled Components
- MUI
- React Router
- React Query
- ESBuild

### Use

#### Clone repo

```bash
git clone https://github.com/ngmaibulat/template-ts-react-mui prjname

cd prjname
rm -rf .git
```

#### Update metadata

- update package.json metadata: name, author, etc

#### Prepare TLS certificates

```
brew install mkcert
mkcert -install
mkcert localhost
```

#### Start dev

```bash
npm install

# run the following 2 commands in parallel
# for example, in 2 terminal windows
npm run build:watch
npm run dev
```

#### Browse

- https://localhost:3000
- not HTTP, use HTTPS
- not 127.0.0.1, use localhost. as the tls cert is issued for `localhost`
- livereload should work fine, edit your files and see results without manual reload
