# Angular Dark mode

## Steps migrar para o jest

#### Remover as dependencias do jasmine
```bash
npm uninstall karma karma-chrome-launcher karma-coverage-istanbul-reporter karma-jasmine karma-jasmine-html-reporter @types/jasmine @types/jasminewd2 jasmine-core jasmine-spec-reporter
```

#### Adicionar o jest e o @types/jest para ter autocomplete e jest-preset-angular para facilitar as configurações em projeto angular
```bash
npm install --save-dev @types/jest jest jest-preset-angular
```

#### No angular.json, remover o campo test
```json
    {
        ...,
        "test": {....}
    }
```

#### Criar um arquivo **setup.jest.ts** dentro da pasta src
```ts
import "jest-preset-angular/setup-jest";

```

#### Criar o arquivo **jest.config.js** na raiz do projeto com a seguinte configuração:

```js
module.exports = {
    preset: "jest-preset-angular",
    setupFilesAfterEnv: ['<rootDir>/src/setup.jest.ts'],
    testPathIgnorePatterns: [
        "<rootDir>/node_modules",
        "<rootDir>/dist"
    ],
    globals: {
        "ts-jest": {
            tsConfig: "<rootDir>/tsconfig.spec.json",
            stringifyContentPathRegex: "\\.html$"
        }
    }    
}
```


#### Alterar o tsconfig.spec.ts para:
```js
/* To learn more about this file see: https://angular.io/config/tsconfig. */
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "./out-tsc/spec",
    "types": [
      "jest", "node"
    ]
  },
  // "module": "commonjs",
  "files": ["src/setup.jest.ts", "src/polyfills.ts"],
  "include": [
    "src/**/*.spec.ts",
    "src/**/*.d.ts"
  ]
}
```

#### Alterar/criar o script do package.json

```json
{
  ...,
  "script": {
    ...,
    "test": "jest",
    "test:coverage": "jest --coverage"
  }
}
```
