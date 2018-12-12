(window.webpackJsonp=window.webpackJsonp||[]).push([[372],{249:function(t,n,e){"use strict";e.r(n);var a={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},s=e(2),r=Object(s.a)(a,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.slotKey}},[e("h1",{attrs:{id:"npm"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#npm","aria-hidden":"true"}},[t._v("#")]),t._v(" NPM")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://docs.npmjs.com/getting-started/what-is-npm",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方 npm 文档"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"http://javascript.ruanyifeng.com/nodejs/npm.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("阮一峰-npm模块管理器"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/atian25/blog/issues/17",target:"_blank",rel:"noopener noreferrer"}},[t._v("调试技巧 - npm link"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://medium.com/dailyjs/how-to-use-npm-link-7375b6219557",target:"_blank",rel:"noopener noreferrer"}},[t._v("Understanding npm-link"),e("OutboundLink")],1),t._v(" 翻墙")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/atian25/blog/issues/19",target:"_blank",rel:"noopener noreferrer"}},[t._v("如何挑选高质量的 Node.js 模块"),e("OutboundLink")],1),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/node-modules",target:"_blank",rel:"noopener noreferrer"}},[t._v("node-modules"),e("OutboundLink")],1),t._v(" 是国内很多 Node.js 大神维护的 Group，里面的模块都经受住大规模的应用考虑，标准化和质量都不错")])])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/22934066",target:"_blank",rel:"noopener noreferrer"}},[t._v("为什么我不使用 shrinkwrap（lock）"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"常见问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常见问题","aria-hidden":"true"}},[t._v("#")]),t._v(" 常见问题")]),t._v(" "),e("ul",[e("li",[t._v("开发 npm 包注意事项")]),t._v(" "),e("li",[t._v("开发 npm 包，相互间需要引用又处于开发阶段，如何配置调试最方便")]),t._v(" "),e("li",[t._v("发布 npm，不编译发布是否 OK（使用 es6源码）")])]),t._v(" "),e("h2",{attrs:{id:"常用工具配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用工具配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 常用工具配置")]),t._v(" "),e("ul",[e("li",[t._v("npm\n"),e("ul",[e("li",[e("code",[t._v("npm list -g --depth=0")])]),t._v(" "),e("li",[e("code",[t._v("npm i -g xxx")])]),t._v(" "),e("li",[e("code",[t._v("npm uninstall -g xxx")])]),t._v(" "),e("li",[t._v("安装最新版 "),e("code",[t._v("npm i npm@latest -g")])])])]),t._v(" "),e("li",[t._v("yarn\n"),e("ul",[e("li",[e("code",[t._v("yarn global add xxx")])]),t._v(" "),e("li",[t._v("Yarn 升级 "),e("code",[t._v("curl --compressed -o- -L https://yarnpkg.com/install.sh | bash")])])])]),t._v(" "),e("li",[t._v("n 管理 nodejs 版本\n"),e("ul",[e("li",[e("code",[t._v("sudo n list")])]),t._v(" "),e("li",[e("code",[t._v("sudo n use x.x.x")])])])]),t._v(" "),e("li",[t._v("nrm 管理npm源（或镜像源）\n"),e("ul",[e("li",[e("code",[t._v("nrm ls")])]),t._v(" "),e("li",[e("code",[t._v("nrm use taobao")])])])]),t._v(" "),e("li",[t._v("npx 一个npm包执行器\n"),e("ul",[e("li",[t._v("临时安装可执行依赖包，不用全局安装，不用担心长期的污染。")]),t._v(" "),e("li",[t._v("可以执行依赖包中的命令，安装完成自动运行")])])]),t._v(" "),e("li",[t._v("基于 nodejs 启动一个本地 http 服务\n"),e("ul",[e("li",[t._v("http-server "),e("code",[t._v("hs dist -p 8090 -o")])]),t._v(" "),e("li",[t._v("serve "),e("code",[t._v("serve dist -l 3040")])])])]),t._v(" "),e("li",[t._v("npm-check 检查依赖库版本\n"),e("ul",[e("li",[e("code",[t._v("npm-check -ug")])])])]),t._v(" "),e("li",[t._v("gh-pages 发布文件到 github 任意分支\n"),e("ul",[e("li",[t._v("发布 dist 目录到 gh-pages 分支，附带message "),e("code",[t._v("${branchName}-${commitId}")])]),t._v(" "),e("li",[e("code",[t._v("gh-pages -d dist --message $(git symbolic-ref --short -q HEAD)-$(git rev-parse --short HEAD)")])]),t._v(" "),e("li",[t._v("可选参数\n"),e("ul",[e("li",[t._v("发布到远程 "),e("code",[t._v("-r git@github.com:jskit/kit-admin.git")])]),t._v(" "),e("li",[t._v("发布到分支 "),e("code",[t._v("-b newBranch")])])])])])]),t._v(" "),e("li",[t._v("jsnice 反混淆 js")]),t._v(" "),e("li",[t._v("pm2")]),t._v(" "),e("li",[t._v("eslint")]),t._v(" "),e("li",[t._v("babel-cli")]),t._v(" "),e("li",[t._v("@vue/cli 初始化 vue 项目")]),t._v(" "),e("li",[t._v("sinopia")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://lernajs.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("lerna"),e("OutboundLink")],1),t._v(" 是一个优化使用git和npm管理多包存储库的工作流程的工具。")])]),t._v(" "),e("h2",{attrs:{id:"npm-包发布流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#npm-包发布流程","aria-hidden":"true"}},[t._v("#")]),t._v(" npm 包发布流程")]),t._v(" "),e("p",[t._v("发布 npm 包的流程简述如下：")]),t._v(" "),e("ol",[e("li",[t._v("如果还没有 npm 帐号，可以到 npm 官网注册一个 npm 帐号。")]),t._v(" "),e("li",[t._v("在本地登录 npm 帐号，在本地执行：")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{attrs:{class:"token function"}},[t._v("npm")]),t._v(" adduser\n")])])]),e("p",[t._v("或者")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{attrs:{class:"token function"}},[t._v("npm")]),t._v(" login\n")])])]),e("ol",{attrs:{start:"3"}},[e("li",[t._v("在已完成编写的 npm 包根目录下执行：")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{attrs:{class:"token function"}},[t._v("npm")]),t._v(" publish\n"),e("span",{attrs:{class:"token function"}},[t._v("npm")]),t._v(" unpublish xxx@x.x.x\n")])])]),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),e("p",[t._v("两小时内，发布的包可以撤销，之后就不能撤销了。")])]),t._v(" "),e("p",[t._v("到此，npm 包就成功发布到 npm 平台了。")]),t._v(" "),e("blockquote",[e("p",[t._v("PS：一些开发者在开发过程中可能修改过 npm 的源，所以当进行登录或发布时需要注意要将源切回 npm 的源。")])]),t._v(" "),e("h2",{attrs:{id:"关于私有-npm-库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关于私有-npm-库","aria-hidden":"true"}},[t._v("#")]),t._v(" 关于私有 npm 库")]),t._v(" "),e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("请注意")]),t._v(" "),e("p",[t._v("实际情况下，如果没有特别要求或安全限制，可以不考虑私有库，使用 npm 平台更稳定。")])]),t._v(" "),e("p",[t._v("一般情况，公司对于搭建本地私有npm库有如下要求：")]),t._v(" "),e("ul",[e("li",[t._v("私有包托管在内部服务器中")]),t._v(" "),e("li",[t._v("项目中使用了公共仓库上的公共包，也使用了内部服务器上的私有包")]),t._v(" "),e("li",[t._v("希望下载的时候，公共包走公共仓库，私有包走内部服务器的私有仓库")]),t._v(" "),e("li",[t._v("服务器硬盘有限，希望只缓存下载过的包，而不是全部同步。")]),t._v(" "),e("li",[t._v("对于下载，发布npm包有对应的权限管理，安装方便，配置简单，依赖少。")])]),t._v(" "),e("h2",{attrs:{id:"cnpm-vs-sinopia"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cnpm-vs-sinopia","aria-hidden":"true"}},[t._v("#")]),t._v(" cnpm VS sinopia")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("-")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("cnpm")]),t._v(" "),e("th",{staticStyle:{"text-align":"right"}},[t._v("sinopia")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("系统支持")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("非windows")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("全系统")])]),t._v(" "),e("tr",[e("td",[t._v("安装")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("复杂")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("简单")])]),t._v(" "),e("tr",[e("td",[t._v("配置")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("较多，适合个性化需求较多的")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("较少")])]),t._v(" "),e("tr",[e("td",[t._v("配置——修改默认镜像")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("不支持")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("支持")])]),t._v(" "),e("tr",[e("td",[t._v("存储")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("mysql")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("文件格式，直观")])]),t._v(" "),e("tr",[e("td",[t._v("服务托管")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("默认后台运行")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("pm2, doker, forever")])]),t._v(" "),e("tr",[e("td",[t._v("文档资料")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("较多")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("较少")])])])]),t._v(" "),e("h3",{attrs:{id:"到底谁比较好？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#到底谁比较好？","aria-hidden":"true"}},[t._v("#")]),t._v(" 到底谁比较好？")]),t._v(" "),e("blockquote",[e("p",[t._v("有言道：脱离业务场景谈解决方案，都是耍流氓。")])]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://www.jianshu.com/p/659fb418c9e3",target:"_blank",rel:"noopener noreferrer"}},[t._v("企业私有 npm 服务器"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/jaywcjlove/handbook/blob/master/CentOS/%E5%9C%A85%E5%88%86%E9%92%9F%E5%86%85%E6%90%AD%E5%BB%BA%E4%BC%81%E4%B8%9A%E5%86%85%E9%83%A8%E7%A7%81%E6%9C%89npm%E4%BB%93%E5%BA%93.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("搭建公司私有npm仓库"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://segmentfault.com/a/1190000005790827",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用Sinopia搭建私有的npm仓库"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"http://www.competa.com/blog/how-to-run-npm-without-sudo/",target:"_blank",rel:"noopener noreferrer"}},[t._v("How to run npm without sudo"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"faq"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#faq","aria-hidden":"true"}},[t._v("#")]),t._v(" FAQ")]),t._v(" "),e("p",[t._v("这里收集一些遇到的 npm 问题")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://segmentfault.com/a/1190000009709213",target:"_blank",rel:"noopener noreferrer"}},[t._v("npm 和 yarn 缓存策略对比"),e("OutboundLink")],1),t._v(" "),e("ul",[e("li",[t._v("npm\n"),e("ul",[e("li",[t._v("npm cache add 主要是 npm 内部使用")]),t._v(" "),e("li",[t._v("npm cache clean 删除缓存目录下的所有数据。从 npm@5 开始，为了保证缓存数据的有效性和完整性，需要加上 --force 参数")]),t._v(" "),e("li",[t._v("npm cache verify 验证缓存数据的有效性和完整性，清理垃圾数据")])])]),t._v(" "),e("li",[t._v("yarn\n"),e("ul",[e("li",[t._v("yarn cache ls 列出当前缓存的包列表")]),t._v(" "),e("li",[t._v("yarn cache dir 显示缓存数据的目录")]),t._v(" "),e("li",[t._v("yarn cache clean 清除所有缓存数据")])])])])])]),t._v(" "),e("p",[e("strong",[t._v("升级npm 遇到错误")])]),t._v(" "),e("p",[e("code",[t._v("sudo npm i -g npm")]),t._v(" 全局升级遇到错误")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{attrs:{class:"token function"}},[t._v("npm")]),t._v(" ERR"),e("span",{attrs:{class:"token operator"}},[t._v("!")]),t._v(" Unexpected end of input at 1:574411\n"),e("span",{attrs:{class:"token function"}},[t._v("npm")]),t._v(" ERR"),e("span",{attrs:{class:"token operator"}},[t._v("!")]),t._v(" 3.4"),e("span",{attrs:{class:"token string"}},[t._v('","')]),t._v("init-package-json"),e("span",{attrs:{class:"token string"}},[t._v('":"')]),t._v("~1.9.3"),e("span",{attrs:{class:"token string"}},[t._v('","')]),t._v("lockfile"),e("span",{attrs:{class:"token string"}},[t._v('":"')]),t._v("~1.0.1"),e("span",{attrs:{class:"token string"}},[t._v('","')]),t._v("lru-cache"),e("span",{attrs:{class:"token string"}},[t._v('":"')]),t._v("~4\n"),e("span",{attrs:{class:"token function"}},[t._v("npm")]),t._v(" ERR"),e("span",{attrs:{class:"token operator"}},[t._v("!")]),t._v("\n")])])]),e("p",[t._v("使用一下方法处理下缓存，之后再重新执行安装即可")]),t._v(" "),e("p",[e("code",[t._v("sudo npm cache verify -g")])]),t._v(" "),e("p",[e("strong",[t._v("h5_blade 老项目运行不起来，可能的原因")])]),t._v(" "),e("p",[e("code",[t._v("sudo npm i -g node-sass")]),t._v(" 报以下错误")]),t._v(" "),e("p",[t._v("Error: EACCES, mkdir '/usr/local/lib/node_modules/node-sass' - installing globally")]),t._v(" "),e("p",[t._v("解决方案（h5_blade项目）")]),t._v(" "),e("p",[t._v("有说要清除cache，此处解决方案不明，在使用 "),e("code",[t._v("npm cache clean --force")]),t._v(" 删除了 ~/.npm/_cacache 后，重新 npm i 好了，同时注意当前的 npm@5.6.0 和 nodejs@9.11.2 版本")]),t._v(" "),e("p",[t._v("以下为解决办法步骤（"),e("strong",[t._v("不需要")]),t._v("安装全局的node-sass）")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{attrs:{class:"token function"}},[t._v("npm")]),t._v(" cache verify\n\n"),e("span",{attrs:{class:"token comment"}},[t._v("# [清除缓存](https://docs.npmjs.com/cli/cache)")]),t._v("\n"),e("span",{attrs:{class:"token comment"}},[t._v("# rm -rf ~/.npm/_cacache")]),t._v("\n"),e("span",{attrs:{class:"token function"}},[t._v("npm")]),t._v(" cache clean --force\n\n"),e("span",{attrs:{class:"token comment"}},[t._v("# 删除当前项目下的 node_modules")]),t._v("\n"),e("span",{attrs:{class:"token function"}},[t._v("rm")]),t._v(" -rf node_modules\n"),e("span",{attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{attrs:{class:"token function"}},[t._v("npm")]),t._v(" i -g node-gyp node-pre-gyp\n"),e("span",{attrs:{class:"token function"}},[t._v("npm")]),t._v(" i\n")])])]),e("p",[t._v("报错 Install failed with Node v.10 due to upath@1.0.4 incompatibility")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("error upath@1.0.4: The engine "),e("span",{attrs:{class:"token string"}},[t._v('"node"')]),t._v(" is incompatible with this module. Expected version "),e("span",{attrs:{class:"token string"}},[t._v('">=4 <=9"')]),e("span",{attrs:{class:"token keyword"}},[t._v(".")]),t._v(" Got "),e("span",{attrs:{class:"token string"}},[t._v('"10.14.1"')]),t._v("\nerror Found incompatible module\n")])])]),e("p",[t._v("解决方案")]),t._v(" "),e("p",[t._v("Instead, the proper solution is to delete "),e("code",[t._v("node_modules/")]),t._v(", "),e("code",[t._v("package-lock.json")]),t._v(" & "),e("code",[t._v("yarn.lock")]),t._v(" and run "),e("code",[t._v("yarn")]),t._v(" install or "),e("code",[t._v("npm i")]),t._v(" again.")])])},[],!1,null,null,null);r.options.__file="readme.md";n.default=r.exports}}]);