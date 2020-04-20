# vue-unitTest-with-jest
> 收录于ruanyf/weekly-[55期](https://github.com/ruanyf/weekly/blob/master/docs/issue-55.md#%E8%B5%84%E6%BA%90)

:tada::tada::tada: 进阶版已更新完成，建议零基础的看完基础篇再看进阶篇:tada::tada::tada:
+ 任何教程都不会是完美的，如发现任何不足之处欢迎提issue
+ 该仓库目标是实现从零开始到单元测试无障碍的进阶。
+ 列举了所有可能出现在vue项目中的，需要进行测试的项。可与实际项目中一一对应
+ 本仓库内都是基础的测试用例，为了能更好理解，伪造的例子都比较简单。实际项目中需要在理解本仓库测试思路的前提下，根据项目实际情况写测试。
+ 覆盖率是用来衡量代码质量的标准，越是复杂的项目要求的覆盖率越低。
+ 本仓库内未进行测试的【router，第三方插件等】并不是绝对不需要测试，如果有单独对插件和router进行设置的话，设置部分是需要测试的。也就是说第三方插件本身我们默认是经过严密测试的，而我们添加的逻辑部分需要自己添加测试。
+ 零散的知识点都以笔记的形式添加在issue了，可以参考
+ 测试代码也要遵循项目的代码规范，和代码书写的基本修养，比如:
``` js
expect(wrapper.vm.mockFn).toBeCalled();
expect(wrapper.vm.mockFn).toBeCalledWith('xx'); 
```
上面测试代码看似没有问题，其实toBeCalledWith('xx')就能保证toBeCalled()，所以toBeCalled()这一行应该删除。但是本仓库基于教学的目的并没有这么做，而是保留了。

⭐关于本仓库的文档，请参考[博客](https://holylovelqq.github.io/vue/VueUnitTest.html#vue-unittest)(业余时间不定时更新，欢迎关注)⭐ 博客多是基础篇的教程，对基础知识的理解很有用。

代码注释很多基本都能看懂，文档会包括一些概括的说明，是代码中未能体现的


<img  src="/01-vue-unit-test-with-jest/public/test_result.png" />

<img  src="/01-vue-unit-test-with-jest/public/スクリーンショット 2019-05-27 16.14.04.png" />
