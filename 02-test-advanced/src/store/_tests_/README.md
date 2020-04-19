### store测试思路
0. 参考[Vue Test Utils- 测试一个 Vuex Store](https://vue-test-utils.vuejs.org/zh/guides/#%E6%B5%8B%E8%AF%95%E4%B8%80%E4%B8%AA-vuex-store)
1. 上面的官网介绍了两种测试方法，我们选择第一种：分别测试getters/mutations/actions 
   - 分别测试更符合单元测试的理念，其中调用的其他任何数据或者方法都采用mock的思想处理，官网也分别说明了两种方法的优缺点
   - 本教程没有实际测试第二种方法，但是并不是说明第二种方法不好，只要把该测的代码都测试到了哪种方法都是可以的，有兴趣的可以自己写一下
   - 测试会用到jest的mock函数，如commit函数。参考[jest Mock functions](https://jestjs.io/docs/zh-Hans/jest-object#mock-functions)。jest的mock思想会在很多地方用到，建议了解，这里就是mock函数，const mockFn = jest.fn()
2. state为什么不需要测试？state就相当于组件内的data，在各组件snapshot测试时就被测试了，所以state不需要单独测试
3. 详细参见各测试文件