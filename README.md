# Angular Dark mode

## Steps migrar para o jest

#### Remover as dependencias do jasmine
```bash
npm uninstall karma karma-chrome-launcher karma-coverage-istanbul-reporter karma-jasmine karma-jasmine-html-reporter @types/jasmine @types/jasminewd2 jasmine-core jasmine-spec-reporter

```

#### No angular.json, remover o campo test
```json
    {
        ...,
        "test": {....}
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
  "files": ["src/app/setup.jest.ts"],
  "include": [
    "src/**/*.spec.ts",
    "src/**/*.d.ts"
  ]
}

```

#### Criar o arquivo **jest.config.js**, com a seguinte configuração:

```js
module.exports = {
    preset: "jest-preset-angular",
    setupFilesAfterEnv: ['<rootDir>/src/app/setup.jest.ts'],
        // '^.+\\.(ts|mjs|js|html)$': 'jest-preset-angular',
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
    }
      
}
```