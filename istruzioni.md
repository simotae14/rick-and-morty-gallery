### INSTALLAZIONE

`npm create vite@latest`
Vite combina Esbuild e Rollup in una velocissima e bella dev exp


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

INSTALLAZIONE
`npm i eslint -D`

e poi una volta installato

`npx eslint --init`
> To check syntax and find problems
> JavaScript modules (import/export)
> React
> TS? Yes
> Browser
> config file? JavaScript

mi installa
eslint-plugin-reactòlatest @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest
con npm

mi crea un file eslintrc.cjs

poi devo installare

### Eslint-airbnb-config
è la style guide di airbnb per scrivere React

`npx install-peerdeps eslint-config-airbnb -D`

mi installa eslint-airbnb e anche le sue pair deependency: eslint-config-airbnb eslint eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks

ora posso aggiungerle al mio file di config eslint `.eslintrc.cjs`
```
  extends: [
    'airbnb',
    'airbnb/hooks',
```
airbnb sovrascrive config di eslint

per fixare quello che ti segnala airbnb Cmd + Shift + P => EsLint fix all auto fixable problems
mi applica formattazione di airbnb

Per supportare TS
`npm install eslint-config-airbnb-typescript -D`
e modifico il mio file di config eslint `.eslintrc.cjs`
```
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
```
così mi abilita eslint anche su typescript

inoltre sempre in config eslint `.eslintrc.cjs` devo specificare nelle parserOptions a eslint dove trovare
il nostro typescript config
```
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
```
devo anche modificare il `tsconfig.json` ed aggiunger in include il nome del mio file eslint
```
  "include": [
    "src",
    ".eslintrc.cjs"
  ],
```

installa estensione eslint di VSCode

ora se vado nei file ts e tsx vedrò errori

per aggiungere delle rule al mio eslint dentro `.eslintrc.cjs` le posso aggiungere
es: per disabilitare il dover importare react
```
  rules: {
    'react/react-in-jsx-scope': 0,
  },
```
così me la disabilita

### UNIT TEST 
### vitest
### jsdom

### @testing-library

### react-router


