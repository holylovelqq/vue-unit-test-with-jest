# vue-project-unitTest-with-jest

+ 最近项目进入测试期，为了能够更好地进行单元测试，查阅了很多单元测试相关的资料，其中包括拜读了一本关于vue单元测试的书。
+ 该仓库目标是实现从零开始到单元测试无障碍的进阶。
+ 列举了所有可能出现在vue项目中的，需要进行测试的项。可与实际项目中一一对应
+ 当然基于项目的复杂程度，肯定有没有提及到的需测试项，不过相信如果能够理解本仓库内的测试思路，其他测试也是一样的套路。
+ 追加说明：本仓库内都是基础的测试用例，为了能更好理解，伪造的例子都比较简单。实际项目中需要在理解本仓库测试思路的前提下，根据项目实际情况写测试。
+ 追加说明2:覆盖率就像金钱，都是用来衡量劳动力的标准，但是不建议一味追求覆盖率，就像不要一味追求金钱。
+ 追加说明3:本仓库内未进行测试的【router，第三方插件等】并不是绝对不需要测试，如果有单独对插件和router进行设置的话，设置部分是需要测试的，对号入座不是本仓库的目的，活学活用才是成神的关键。
+ 追加说明4:本仓库有更新计划，详见[Project](https://github.com/users/holylovelqq/projects/1),但是鉴于时间的海绵都快挤干了，实在不确定啥时候才能更新，有心人可以看一下更新计划，就能明白哪些是待完善之处
+ 追加说明5:测试代码也要遵循项目的代码规范，和代码书写的基本修养，比如:
``` js
expect(wrapper.vm.mockFn).toBeCalled(); //实际测试中需要删除本行
expect(wrapper.vm.mockFn).toBeCalledWith('xx'); 
```
上面代码中toBeCalledWith('xx')就能保证toBeCalled()，所以toBeCalled()这一行应该删除。但是本仓库基于教学的目的并没有这么做，而是保留了。真正的测试代码中建议删除。

⭐关于本仓库的文档，请参考[博客](https://holylovelqq.github.io/vue/VueUnitTest.html#vue-unittest)(业余时间不定时更新，欢迎关注)⭐ 

代码注释很多基本都能看懂，文档会包括一些概括的说明，是代码中未能体现的

<img  src="/vue-unit-test-with-jest/public/test_result.png" />

<img  src="/vue-unit-test-with-jest/public/スクリーンショット 2019-05-27 16.14.04.png" />
