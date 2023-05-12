### INSTALLAZIONE

`npm create vite@latest`

nome progetto
Select a framewor: Others
> create vite Extra
> ssr-react
> Typescript

cd progetto
npm i
npm dev


hai due file
 - entry-server.tsx per SSR
 - entry-client.tsx

puoi creare build client e server


### COMPRESSIONE

`npm i vite-plugin-compression -D`

e dentro vite.config.ts

import viteCompression from 'vite-plugin-compression'; 

plugins: [react(), viteCompression({
    algorithm: 'brotliCompress',
    deleteOriginFile: true
  })]

### Eslint

### Eslint-airbnb-config


### UNIT TEST 
### vitest
### jsdom

### @testing-library

### react-router


