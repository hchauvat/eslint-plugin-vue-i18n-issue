# Summary
Issue with where the `@intlify/vue-i18n/no-unused-keys` rule is not working

## Install
```shell
nvm v16.xx
yarn install
npx eslint --ext .js,.vue,.json src
```

## Actual
```shell
eslint-plugin-vue-i18n-issue/src/i18n/en.json
  2:9  error  Parsing error: Missing semicolon. (2:9)

eslint-plugin-vue-i18n-issue/src/i18n/fr.json
  2:9  error  Parsing error: Missing semicolon. (2:9)
```
## Expected
Errors regarding `unusedKey` key in both fr and en.json files.