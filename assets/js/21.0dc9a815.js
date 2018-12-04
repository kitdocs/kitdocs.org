(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{184:function(t,e,r){t.exports=r.p+"c9fc39c4bf8f9334d0eec4aa27d4fee2.webp"},235:function(t,e,r){"use strict";r.r(e);r(54),r(77),r(78);var n={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},a=r(2),s=Object(a.a)(n,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.slotKey}},[n("h1",{attrs:{id:"自动化测试"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#自动化测试","aria-hidden":"true"}},[t._v("#")]),t._v(" 自动化测试")]),t._v(" "),n("p",[t._v("测试框架：")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("mocha")])]),t._v(" "),n("li",[n("p",[t._v("jest")])]),t._v(" "),n("li",[n("p",[n("a",{attrs:{href:"http://fex.baidu.com/blog/2015/07/front-end-test/",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端自动化测试探索"),n("OutboundLink")],1)])]),t._v(" "),n("li",[n("p",[n("a",{attrs:{href:"http://www.infoq.com/cn/articles/virtual-panel-tdd-bdd",target:"_blank",rel:"noopener noreferrer"}},[t._v("虚拟座谈会：代码测试比率、测试驱动开发及行为驱动开发"),n("OutboundLink")],1)])]),t._v(" "),n("li",[n("p",[n("a",{attrs:{href:"https://www.zhihu.com/question/20161970",target:"_blank",rel:"noopener noreferrer"}},[t._v("TDD 与 BDD 仅仅是语言描述上的区别么？"),n("OutboundLink")],1)])]),t._v(" "),n("li",[n("p",[n("a",{attrs:{href:"http://www.cnblogs.com/ustbwuyi/archive/2012/10/26/2741223.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("关于TDD、BDD和DDD的一些看法"),n("OutboundLink")],1)])]),t._v(" "),n("li",[n("p",[t._v("http://cuketest.com/zh-cn/")])])]),t._v(" "),n("h2",{attrs:{id:"为什么需要自动化测试"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#为什么需要自动化测试","aria-hidden":"true"}},[t._v("#")]),t._v(" 为什么需要自动化测试?")]),t._v(" "),n("p",[t._v("一个项目最终会经过快速迭代走向以维护为主的状态，在合理的时机以合理的方式引入自动化测试能有效减少人工维护成本。自动化测试的收益可以简单总结为：")]),t._v(" "),n("blockquote",[n("p",[t._v("自动化的收益 = 迭代次数 * 全手动执行成本 - 首次自动化成本 - 维护次数 * 维护成本")])]),t._v(" "),n("p",[t._v("对于自动化测试来说，相对于发现未知的问题，更倾向于避免可能的问题。")]),t._v(" "),n("h2",{attrs:{id:"测试方向"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#测试方向","aria-hidden":"true"}},[t._v("#")]),t._v(" 测试方向")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("界面回归测试")]),t._v(" 测试界面是否正常，这是前端测试最基础的环节")]),t._v(" "),n("li",[n("strong",[t._v("功能测试")]),t._v(" 测试功能操作是否正常，由于涉及交互，这部分测试比界面测试会更复杂")]),t._v(" "),n("li",[n("strong",[t._v("性能测试")]),t._v(" 页面性能越来越受到关注，并且性能需要在开发过程中持续关注，否则很容易随着业务迭代而下降。")]),t._v(" "),n("li",[n("strong",[t._v("页面特征检测")]),t._v(" 有些动态区域无法通过界面对比进行测试、也没有功能上的异常，但可能不符合需求。例如性能测试中移动端大图素材检测就是一种特征检测，另外常见的还有页面区块静态资源是否符合预期等等。")])]),t._v(" "),n("h2",{attrs:{id:"bdd-vs-tdd"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#bdd-vs-tdd","aria-hidden":"true"}},[t._v("#")]),t._v(" BDD vs TDD")]),t._v(" "),n("p",[t._v("测试类型可分为两种：TDD （测试驱动开发）和 BDD （行为驱动开发）,两者间的区别主要是一些语法上的不同，其中 BDD 提供了提供了可读性更好的用例语法，至于详细的区别可参见 "),n("a",{attrs:{href:"https://joshldavis.com/2013/05/27/difference-between-tdd-and-bdd/",target:"_blank",rel:"noopener noreferrer"}},[t._v("The Difference Between TDD and BDD"),n("OutboundLink")],1),t._v(" 一文。")]),t._v(" "),n("h2",{attrs:{id:"测试分类"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#测试分类","aria-hidden":"true"}},[t._v("#")]),t._v(" 测试分类")]),t._v(" "),n("p",[n("img",{attrs:{src:r(184),alt:"测试类别"}})]),t._v(" "),n("ul",[n("li",[t._v("单元测试 Unit Testing\n"),n("ul",[n("li",[t._v("关注应用中每个零部件的正常运转，防止后续修改影响之前的组件。")]),t._v(" "),n("li",[t._v("jest 内置测试覆盖率工具 "),n("a",{attrs:{href:"https://github.com/gotwarlost/istanbul",target:"_blank",rel:"noopener noreferrer"}},[t._v("istanbul"),n("OutboundLink")],1),t._v(" 开启使用参数 "),n("code",[t._v("jest --coverage")])]),t._v(" "),n("li",[t._v("只关注代码覆盖率很可笑。关注在10%的风险最高的代码比关注99%可忽略风险的代码，收益要多得多。我认为风险覆盖比起测试覆盖要重要得多。")])])]),t._v(" "),n("li",[t._v("集成测试 Integrated Testing\n"),n("ul",[n("li",[t._v("确保单独运行正常的零部件整合到一起之后依然能正常运行。")])])]),t._v(" "),n("li",[t._v("端到端测试/UI测试 e2e test")]),t._v(" "),n("li",[t._v("功能测试 Functional tests\n"),n("ul",[n("li",[t._v("确保其整体表现符合预期，关注能否让用户正常使用。")])])]),t._v(" "),n("li",[t._v("系统测试 System Testing")]),t._v(" "),n("li",[t._v("验收测试")]),t._v(" "),n("li",[t._v("微测试")])])])},[],!1,null,null,null);s.options.__file="readme.md";e.default=s.exports}}]);