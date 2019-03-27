# vue-unit-test-with-jest
##需要特别说明的
###手动开启覆盖率提示：package.json文件内 jest下增加配置"collectCoverage": true,
###自定义测试文件"collectCoverageFrom": ["**/src/**.{js,vue}", "!**/node_modules/**","!**src/main.js**", "!**src/router.js**"]  此处设置为/src/下所有js和vue结尾的文件，排除main.js和router.js（本项目中无需测试）
###

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
