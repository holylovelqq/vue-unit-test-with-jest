module.exports = {
  // 所有配置项：https://jestjs.io/docs/en/configuration.html#defaults

  // 引入预设值：vuecli3生成项目时的默认值
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',

  // 以下都是自己添加的新增设置或者覆盖默认值

  // 引入自定义设置文件
  setupFiles: ['./test/setup.ts'],

  // 指定测试文件范围
  testMatch: [
    '**/__tests__/*.[jt]s?(x)', // __tests__文件夹内的ts/js文件
    '**/?(*.)(spec|test).[jt]s?(x)' // 任意文件夹内的spec.ts/test.ts结尾的文件
  ],

  // 显示每一个测试的结果
  verbose: true,

  // 指定哪些文件收集覆盖率，亦或是排除那些文件，一般入口文件App.vue会被排除
  // 或者设置文件、结构非常简单的文件、其他插件文件等，视具体情况适当排除
  collectCoverageFrom: [
    'src/**/*.{js,ts,vue}', // src下所有js/ts/vue文件
    '!src/App.vue', // 入口文件排除
    '!src/main.ts', // 设置文件排除
    '!src/router/index.ts', // 路由设置文件排除（如果自己指定了不同情况下的路由守卫时，可适当测试）
    '!src/views/*.vue', // 文件过于简单，无测试必要性
  ],

  // 指定测试最低覆盖率
  coverageThreshold: {
    global: {
      branches: 75,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },

  // 指定snapshot测试的序列化模块
  snapshotSerializers: ['jest-serializer-vue'],
}
