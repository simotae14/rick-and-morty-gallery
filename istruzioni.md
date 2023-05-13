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

### PRETTIER

per formattazione testo, rimandi a capo etc
e installo anche delle dependency con eslint per disabilitare eventuali conflitti
`npm install prettier eslint-config-prettier eslint-plugin-prettier -D`

e creo il file di configurazione `.prettierrc.cjs` e aggiungo i settings base

```
module.exports = {
  trailingComma: "es5",
  tabWidth: 2,
  semi: true,
  singleQuote: true,
};
```

poi dobbiamo aggiungere i plugin prettier a eslint dentro `.eslintrc.cjs` nei plugin

```
  plugins: [
    'react',
    '@typescript-eslint',
    'prettier',
  ],
```

e per abilitare le prettier rules basta che dentro extends le aggiungo

```
  extends: [
...
    'plugin:prettier/recommended',
  ],
```

e comincia a mostrare errori

### UNIT TEST

### vitest

INSTALLAZIONE
`npm install -D vitest`

e per configurarlo dentro al file `vite.config.ts`

```
/// <reference types="vitest" />
/// <reference types="vite/client" />
...
export default defineConfig({
  ...
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
  },
});
```

ora devo creare un file che verrà runnato all'inizio di ogni test run, `./src/setupTests.ts`

### @testing-library e jsdom

ora installo la testing library, perchè vitest esegue solo i test
jsdom ti permette di fare cose da browser senza essere nel browser (avrò accesso ai vari .toBe)

`npm i -D @testing-library/react @testing-library/jest-dom`

configuro vitest con jsdom di testing library quindi dentro `./src/setupTests.ts`

```
/* eslint-disable import/no-extraneous-dependencies */
import matchers from '@testing-library/jest-dom/matchers';
import { expect } from 'vitest';

expect.extend(matchers);
```

ora posso creare il primo test

e creo anche lo script di test

```
    "test": "vitest"
```

### react-router

INSTALLAZIONE
`npm i react-router-dom@6`

ora dentro src/App.tsx invece di wrappare App con react router dom creo un component WrappedApp dove metto tutti i wrapper che nn devo testare
e uso HashRouter (ti mette #) perchè diversamente da BrowserRouter che usa history API e lo state per gestire le pagine in cui sei

### PRE COMMIT HOOK CON HUSKY

installazione husky e lint-staged
`npm install husky lint-staged --save-dev`
e
`npm install tsc-files --save-dev`

creiamo file `lint-staged.js` alla root progetto

```
module.exports = {
    '*.{js,jsx,ts,tsx}': [
        'eslint --max-warnings=0',
        'react-scripts test --bail --watchAll=false --findRelatedTests --passWithNoTests',
        () => 'tsc-files --noEmit',
    ],
    '*.{js,jsx,ts,tsx,json,css,js}': ['prettier --write'],
}
```

aggiungo lo script in package.json

```
"lint-staged": "lint-staged --config lint-staged.js",
```

e aggiungo lo script di pre-commit

```
"husky-install": "husky install"
```

e lo eseguo con

```
npm run husky-install
```

ora creo il nostro hook col comando

```
npx husky add .husky/pre-commit "npm run lint-staged"
```

mi genera questo file nella root della cartella .husky (pre-commit)

```
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npm run lint-staged
```
