(window.webpackJsonp=window.webpackJsonp||[]).push([[181],{500:function(e,t,v){"use strict";v.r(t);var l=v(8),i=Object(l.a)({},function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h3",{attrs:{id:"git-分支管理策略"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#git-分支管理策略","aria-hidden":"true"}},[e._v("#")]),e._v(" Git 分支管理策略")]),e._v(" "),v("blockquote",[v("p",[e._v("Feature-driven development (FDD)")])]),e._v(" "),v("table",[v("thead",[v("tr",[v("th",[e._v("调研评估")]),e._v(" "),v("th",{staticStyle:{"text-align":"center"}},[e._v("设计")]),e._v(" "),v("th",{staticStyle:{"text-align":"right"}},[e._v("设计检验")]),e._v(" "),v("th",{staticStyle:{"text-align":"right"}},[e._v("Coding")]),e._v(" "),v("th",{staticStyle:{"text-align":"right"}},[e._v("代码检查")]),e._v(" "),v("th",{staticStyle:{"text-align":"right"}},[e._v("部署")])])]),e._v(" "),v("tbody",[v("tr",[v("td",[e._v("1%")]),e._v(" "),v("td",{staticStyle:{"text-align":"center"}},[e._v("40%")]),e._v(" "),v("td",{staticStyle:{"text-align":"right"}},[e._v("3%")]),e._v(" "),v("td",{staticStyle:{"text-align":"right"}},[e._v("45%")]),e._v(" "),v("td",{staticStyle:{"text-align":"right"}},[e._v("10%")]),e._v(" "),v("td",{staticStyle:{"text-align":"right"}},[e._v("1%")])])])]),e._v(" "),v("blockquote",[v("p",[e._v("上游优先")])]),e._v(" "),v("mermaid",[e._v("\nsequenceDiagram\n  participant Hotfix\n  participant Release\n  Note right of Release: tag v1.0.0\n  Release->>Dev_1: 新需求1\n  Note right of Dev_1: 新需求就新建开发分支\n  loop 开发周期1\n    Dev_1->>Dev_1: 功能点\n  end\n  Release->>Hotfix: 线上问题!\n  Note left of Hotfix: 问题修复"),v("br"),e._v("专用分支hotfix\n  Release->>Dev_2: 新需求2\n  Hotfix--\x3e>Hotfix: fixed xxx\n  Release--\x3e>Hotfix: 要经常同步Release\n  Hotfix->>Release: 修复上线!\n  Release--\x3e>Release: 发布\n  Note right of Release: tag v1.0.1\n  Dev_1-x Release: 未同步最新，潜在风险\n  Release--\x3e>Dev_1: 要经常同步Release\n  Dev_1->>Release: 需求1测试完，pull request\n  Release--\x3e>Release: 发布\n  Note right of Release: tag v1.1.0\n  Release->>Hotfix: 线上问题2!\n  Hotfix--\x3e>Hotfix: fixed xxx\n  Release--\x3e>Hotfix: 要经常同步Release\n  Hotfix->>Release: 修复上线!\n  Release--\x3e>Release: 发布\n  Note right of Release: tag v1.1.1\n  Release--\x3e>Dev_2: 要经常同步Release\n  loop 开发周期2\n    Dev_2->>Dev_2: 功能点\n  end\n  Dev_2-x Release: 未同步最新，潜在风险\n  Release--\x3e>Dev_2: 要经常同步Release\n  Dev_2->>Release: 需求2测试完，pull request\n  Release--\x3e>Release: 发布\n  Note right of Release: tag v1.2.0\n")]),e._v(" "),v("p",[e._v("第一步：根据需求，从master拉出新分支，不区分功能分支或补丁分支。\n第二步：新分支开发完成后，或者需要讨论的时候，就向master发起一个pull request（简称PR）。\n第三步：Pull Request既是一个通知，让别人注意到你的请求，又是一种对话机制，大家一起评审和讨论你的代码。对话过程中，你还可以不断提交代码。\n第四步：你的Pull Request被接受，合并进master，重新部署后，原来你拉出来的那个分支就被删除。（先部署再合并也可。）")]),e._v(" "),v("p",[e._v("Squash 多个commit")]),e._v(" "),v("p",[e._v("为了便于他人阅读你的提交，也便于cherry-pick或撤销代码变化，在发起Pull Request之前，应该把多个commit合并成一个。（前提是，该分支只有你一个人开发，且没有跟master合并过。）")]),e._v(" "),v("p",[e._v("Git分支管理")]),e._v(" "),v("ul",[v("li",[v("p",[e._v("master")])]),e._v(" "),v("li",[v("p",[e._v("release")])]),e._v(" "),v("li",[v("p",[e._v("nightly")])]),e._v(" "),v("li",[v("p",[e._v("dev-xxx")])]),e._v(" "),v("li",[v("p",[e._v("dev-xxx")])]),e._v(" "),v("li",[v("p",[e._v("长期分支（发布分支的名称不允许重命名）")]),e._v(" "),v("ul",[v("li",[e._v("发布分支 (release)\n用于存放对外发布的版本，在任何时候拿到的都是稳定的版本，不允许在该分支上开发代码，只允许通过PR提交代码。通常以release、master作为名称。")]),e._v(" "),v("li",[e._v("预发布、提测分支\n是开发完成后的提测分支，当需求开发完成且冒烟测试通过后便可以提交代码到sit分支。可以使用sit、testing作为名称")])])]),e._v(" "),v("li",[v("p",[e._v("短期分支")]),e._v(" "),v("ul",[v("li",[e._v("特性分支/需求开发分支\n"),v("ul",[v("li",[e._v("功能分支")]),e._v(" "),v("li",[e._v("补丁分支")]),e._v(" "),v("li",[e._v("预发布分支")])])]),e._v(" "),v("li",[e._v("HotFix分支")])])])]),e._v(" "),v("p",[e._v("作为需求开发使用的分支，在启动新需求开发时都会从master拉出一个最新的需求开发分支，只存在于一个版本需求开发周期中，成功上线即删除分支。特性分支的命名以dev_开头，后面拼接具体的子需求名称，例如dev_pay支付需求的开发分支，如果一个版本上线存在多个子需求，那么便会对应子需求建立各自的特性分支(dev_1、dev_2、dev_3)")]),e._v(" "),v("p",[e._v("**“冷冻分支”**当这个特性分支上的需求不能上线或者延期上线该怎么处理呢？因为特性分支只存在于一个版本需求开发周期中，这时候，该需求的特性分支便会变为冷冻特性分支，用于代码贮存及项目代码监控。例如dev_pay支付需求出现延期，这个版本上不了了，那么这个时候便会变为freeze_dev_pay,到下个版本上线时，再申请一起上线，这时候冷冻分支便会转化为一个正常的特性分支dev_pay，努力再上线。")]),e._v(" "),v("p",[e._v("HotFix")]),e._v(" "),v("p",[e._v("线上出现bug怎么办？HotFix只包含热修复分支，作为一个最不想看到的分支却存在着很强的必要性，在我们紧急处理线上的问题的时候起到很大的作用。每个热修复分支的生命周期都是极其短暂的，在问题出现的时候，产生于一个master最稳定的tag版本，在问题修复完成后便会合并到master快速上线，上线成功，hotfix也就结束了。热修复分支的名称以hotfix_v_开头，例如一个v1.3的版本出现了线上问题，便会拉一个hotfix_v1.3的分支。")]),e._v(" "),v("ul",[v("li",[e._v("https://github.com/xirong/my-git/blob/master/git-workflow-tutorial.md")]),e._v(" "),v("li",[e._v("https://juejin.im/post/5a014d5f518825295f5d56c7")]),e._v(" "),v("li",[e._v("https://www.jianshu.com/p/801edde8f9a7")])])],1)},[],!1,null,null,null);t.default=i.exports}}]);