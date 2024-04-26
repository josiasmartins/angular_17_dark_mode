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