# vue-unit-test-with-jest
## 需要特别说明的
### 本项目代码均为原创，如有引用请标明出处
### 手动开启覆盖率提示：package.json文件内 jest下增加配置"collectCoverage": true,
### 自定义测试文件
```json
"collectCoverageFrom": ["**/src/**.{js,vue}", "!**/node_modules/**","!**src/main.js**", "!**src/router.js**"]
```
#### 此处设置为/src/下所有js和vue结尾的文件，排除main.js和router.js（本项目中无需测试）
### 测试结果的截图放在了public目录下
### 本项目中尽量覆盖可能的测试情况，但是实际项目要更复杂，很多需要多个测试结合使用，强烈建议以搞懂测试思路为学习目标
### 本项目代码以教学和自我学习为目的，注释较多较繁琐，如遇不理解的地方欢迎提[issue](https://github.com/holylovelqq/vue-unit-test-with-jest/issues)，另附[说明文档](https://holylovelqq.github.io/vue/VueUnitTest.html#vue-unittest)

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
