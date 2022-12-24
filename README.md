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

### VSCode extensions

- prettier: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
- vscode-styled-components: https://marketplace.visualstudio.com/items?itemName=styled-components.vscode-styled-components

### Potential approaches to try instead of 'Styled Components':

- https://linaria.dev/
- https://stitches.dev/
- https://astroturfcss.github.io/astroturf/introduction/

### Why try zero-runtime CSS-in-JS ?

- Zero runtime
- Great performance
- Do everything at build time
- Still retain great DX
- Hopefully, better with TS/ESM compared to StyledComponents/Emotion
- https://github.com/emotion-js/emotion/issues/2730
- https://github.com/maddijoyce/emotion-esm-issue
- See: https://punits.dev/blog/zero-runtime-css-in-js/
