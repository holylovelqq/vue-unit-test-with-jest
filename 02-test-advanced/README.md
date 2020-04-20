# 02-test-advanced
> 1. 本篇为vue单体测试的进阶篇，需要一些基本的单体测试知识，可通过基础篇获取或者通过[Vue Test Utils](https://vue-test-utils.vuejs.org/zh/)和[Jest](https://jestjs.io/docs/en/getting-started)获得。
> 2. 本篇对应issue [#9](https://github.com/holylovelqq/vue-unit-test-with-jest/issues/9)

## 本篇包含的内容
1. jest的常用配置/覆盖率解读，参见jest.config.js
2. snapshot测试详解，参见src/componets/HelloWord
3. axios测试详解，参见src/componets/Table
4. store测试详解
   - store自身测试，参见src/store
   - 使用store的组件测试，参见src/componets/Count
5. router相关测试
   - router自身设置一般不需要测试，有添加自己的业务逻辑的话，可针对写测试
   - 使用router/route的组件测试，测试方法与store相同，参见src/componets/Count
6. 异步测试
   - 定时器测试详解：参见src/componets/Picture
   - axios类请求异步测试：src/componets/Table
7. shallowMount与mount区别(必看):issue[#4](https://github.com/holylovelqq/vue-unit-test-with-jest/issues/4)，总结一句话就是请用shallowMount
8. stubs/mocks/data/methods等可挂载项介绍，参见参见src/componets/Count

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```
更新snapshot
```
yarn test:unit -u
```
收集覆盖率
```
yarn test:unit --coverage
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
