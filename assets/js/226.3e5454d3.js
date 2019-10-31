(window.webpackJsonp=window.webpackJsonp||[]).push([[226],{468:function(t,n,a){"use strict";a.r(n);var s=a(7),e=Object(s.a)({},function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"npm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm","aria-hidden":"true"}},[t._v("#")]),t._v(" NPM")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://docs.npmjs.com/getting-started/what-is-npm",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方 npm 文档"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://javascript.ruanyifeng.com/nodejs/npm.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("阮一峰-npm模块管理器"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/atian25/blog/issues/17",target:"_blank",rel:"noopener noreferrer"}},[t._v("调试技巧 - npm link"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://medium.com/dailyjs/how-to-use-npm-link-7375b6219557",target:"_blank",rel:"noopener noreferrer"}},[t._v("Understanding npm-link"),a("OutboundLink")],1),t._v(" 翻墙")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/atian25/blog/issues/19",target:"_blank",rel:"noopener noreferrer"}},[t._v("如何挑选高质量的 Node.js 模块"),a("OutboundLink")],1),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/node-modules",target:"_blank",rel:"noopener noreferrer"}},[t._v("node-modules"),a("OutboundLink")],1),t._v(" 是国内很多 Node.js 大神维护的 Group，里面的模块都经受住大规模的应用考虑，标准化和质量都不错")])])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/22934066",target:"_blank",rel:"noopener noreferrer"}},[t._v("为什么我不使用 shrinkwrap（lock）"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://greenkeeper.io/docs",target:"_blank",rel:"noopener noreferrer"}},[t._v("greenkeeper"),a("OutboundLink")],1),t._v(" 自动化依赖关系管理")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#class-browser",target:"_blank",rel:"noopener noreferrer"}},[t._v("puppeteer神器官方文档"),a("OutboundLink")],1),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://zhaoqize.github.io/puppeteer-api-zh_CN/#/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Puppeteer 中文文档"),a("OutboundLink")],1)])])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.cnblogs.com/1394htw/p/9627260.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("puppeteer 安装失败的解决方案"),a("OutboundLink")],1),t._v(" "),a("ul",[a("li",[t._v("你可能需要看一下"),a("a",{attrs:{href:"https://segmentfault.com/a/1190000012606616",target:"_blank",rel:"noopener noreferrer"}},[t._v("chromium下载跳坑"),a("OutboundLink")],1),t._v("这个方案，但还是需要翻出去下载，")]),t._v(" "),a("li",[t._v("如果上面方案不行，那么你可能需要了解下"),a("a",{attrs:{href:"https://juejin.im/post/5b4a043751882519790c7ad7",target:"_blank",rel:"noopener noreferrer"}},[t._v("puppeteer 安装失败的解决办法"),a("OutboundLink")],1),t._v("，就是去拿到下载的那个版本数字，再去下载，但是可能遇到的问题是找不到downloadURL那堆链接的文件，")]),t._v(" "),a("li",[t._v("那么你就需要"),a("a",{attrs:{href:"https://github.com/billfeller/billfeller.github.io/issues/232",target:"_blank",rel:"noopener noreferrer"}},[t._v("puppeteer环境部署问题小记"),a("OutboundLink")],1),t._v("这个方案，")])])])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("、安装 puppeteer "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NPM")]),t._v("包后，查询"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("json配置，获取依赖 "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CHROMIUM")]),t._v(" 版本号：\n\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"puppeteer"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"chromium_revision"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"543305"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("、将 chromium_revision 属性值替换到 BrowserFetch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js 下载路径，根据系统环境，计算获取完整的下载地址，完成下载任务：\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("DEFAULT_DOWNLOAD_HOST")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://storage.googleapis.com'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" downloadURLs "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\nlinux"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'%s/chromium-browser-snapshots/Linux_x64/%d/chrome-linux.zip'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\nmac"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'%s/chromium-browser-snapshots/Mac/%d/chrome-mac.zip'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\nwin32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'%s/chromium-browser-snapshots/Win/%d/chrome-win32.zip'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\nwin64"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'%s/chromium-browser-snapshots/Win_x64/%d/chrome-win32.zip'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" url "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" util"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("format")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("downloadURLs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_platform"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_downloadHost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" revision"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n比如，https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("storage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("googleapis"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("chromium"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("browser"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("snapshots"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Win_x64"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("543305")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("chrome"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("win32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("zip\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("、将下载的 chrome"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("xxx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("zip 解压到puppeteer指定路径 puppeteer"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("local"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("chromium"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("_platform"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("chromium_revision"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("chrome"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("xxx 下即可；\n比如：node_modules\\puppeteer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("local"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("chromium\\win64"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("543305")]),t._v("\\chrome"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("win32\n\n这里给出了很多其他问题的解决方案，\n")])])]),a("ul",[a("li",[t._v("在线的集成服务\n"),a("ul",[a("li",[a("a",{attrs:{href:"https://travis-ci.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("TravisCI"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://circleci.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CircleCI"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://www.appveyor.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("appveyor"),a("OutboundLink")],1),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://blog.csdn.net/zhangzq86/article/details/55657495",target:"_blank",rel:"noopener noreferrer"}},[t._v("利用 AppVeyor 实现 GitHub 托管项目的自动化集成"),a("OutboundLink")],1)])])])])])]),t._v(" "),a("p",[t._v("关于 lerna")]),t._v(" "),a("p",[t._v("多模块管理工具，用来帮助维护monorepo")]),t._v(" "),a("p",[t._v("P.S.Lerna是Babel自己日用并开源的工具，见 "),a("a",{attrs:{href:"https://github.com/babel/babel/blob/master/doc/design/monorepo.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("Why is Babel a monorepo?"),a("OutboundLink")],1)]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://juejin.im/entry/586f00bc128fe100580a6f78",target:"_blank",rel:"noopener noreferrer"}},[t._v("monorepo 新浪潮"),a("OutboundLink")],1),t._v(" "),a("ul",[a("li",[t._v("monorepo(monolithic repository)，与multirepo相对，分别是单代码仓库与多代码仓库（one-repository-per-module）")]),t._v(" "),a("li",[a("a",{attrs:{href:"http://www.ayqy.net/blog/lerna%E5%85%A5%E9%97%A8%E6%8C%87%E5%8D%97/",target:"_blank",rel:"noopener noreferrer"}},[t._v("lerna入门指南"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/lerna/lerna-changelog",target:"_blank",rel:"noopener noreferrer"}},[t._v("用lerna-changelog 来梳理 changelog"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/galaxybing/lerna-repos-init.git",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用 monorepo 结构，管理多个 repo(示例)"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/pigcan/monorepo-example",target:"_blank",rel:"noopener noreferrer"}},[a("OutboundLink")],1)])])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/chinanf-boy/lerna-zh",target:"_blank",rel:"noopener noreferrer"}},[t._v("lerna 中文文档"),a("OutboundLink")],1),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/chinanf-boy/lerna-zh/blob/master/FAQ.zh.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("常见问题"),a("OutboundLink")],1)])])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://lernajs.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://lernajs.io/"),a("OutboundLink")],1),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/szarouski/lerna-wizard",target:"_blank",rel:"noopener noreferrer"}},[t._v("lerna-wizard lerna的命令行向导"),a("OutboundLink")],1)])])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/35237759",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用lerna优雅地管理多个package"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"常见问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见问题","aria-hidden":"true"}},[t._v("#")]),t._v(" 常见问题")]),t._v(" "),a("ul",[a("li",[t._v("开发 npm 包注意事项")]),t._v(" "),a("li",[t._v("开发 npm 包，相互间需要引用又处于开发阶段，如何配置调试最方便")]),t._v(" "),a("li",[t._v("发布 npm，不编译发布是否 OK（使用 es6源码）")])]),t._v(" "),a("h2",{attrs:{id:"常用工具配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用工具配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 常用工具配置")]),t._v(" "),a("ul",[a("li",[t._v("npm\n"),a("ul",[a("li",[a("code",[t._v("npm list -g --depth=0")]),t._v(" "),a("ul",[a("li",[t._v("查看全局包位置 "),a("code",[t._v("npm root -g")])]),t._v(" "),a("li",[t._v("全局模块安装路径 "),a("code",[t._v("/usr/local/lib/node_modules")]),t._v("，")])])]),t._v(" "),a("li",[a("code",[t._v("npm i -g xxx")])]),t._v(" "),a("li",[a("code",[t._v("npm uninstall -g xxx")])]),t._v(" "),a("li",[t._v("安装最新版 "),a("code",[t._v("npm i npm@latest -g")])])])]),t._v(" "),a("li",[t._v("yarn\n"),a("ul",[a("li",[a("code",[t._v("yarn global add xxx")])]),t._v(" "),a("li",[t._v("yarn 升级全局包 "),a("code",[t._v("yarn global upgrade")])]),t._v(" "),a("li",[t._v("yarn 全局模块安装路径 "),a("code",[t._v("~/.config/yarn/global/node_modules/")])]),t._v(" "),a("li",[t._v("Yarn 升级自己 "),a("code",[t._v("curl --compressed -o- -L https://yarnpkg.com/install.sh | bash")])]),t._v(" "),a("li",[a("code",[t._v("cd ~/.config/yarn/global && yarn check || yarn install --force")])]),t._v(" "),a("li",[t._v("https://365airsoft.com/zh-CN/questions/1645066/yarn")])])]),t._v(" "),a("li",[t._v("n 管理 nodejs 版本(推荐使用 nvm)\n"),a("ul",[a("li",[a("code",[t._v("sudo n list")])]),t._v(" "),a("li",[a("code",[t._v("sudo n use x.x.x")])])])]),t._v(" "),a("li",[t._v("nvm 与 n 的区别\n"),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/tj/n",target:"_blank",rel:"noopener noreferrer"}},[t._v("TJ 大神的 n"),a("OutboundLink")],1),t._v(" 命令, 是作为一个 node 的模块而存在")]),t._v(" "),a("li",[t._v("而 "),a("a",{attrs:{href:"https://github.com/nvm-sh/nvm",target:"_blank",rel:"noopener noreferrer"}},[t._v("nvm"),a("OutboundLink")],1),t._v(" 是一个独立于 node/npm 的外部 shell 脚本，因此 n 命令相比 nvm 更加局限")]),t._v(" "),a("li",[t._v("由于 npm 安装的模块路径均为 /usr/local/lib/node_modules ，当使用 n 切换不同的 node 版本时，实际上会共用全局的 node/npm 目录。 因此不能很好的满足『按不同 node 版本使用不同全局 node 模块』的需求。")]),t._v(" "),a("li",[t._v("因此建议各位尽早开始使用 nvm ，以免出现全局模块无法更新的问题。")])])]),t._v(" "),a("li",[t._v("nvm\n"),a("ul",[a("li",[a("code",[t._v("brew install nvm")])]),t._v(" "),a("li",[t._v("添加path"),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("export")]),t._v(" NVM_DIR"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" -z "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${XDG_CONFIG_HOME-}")]),t._v('"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),t._v(" %s "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${HOME}")]),t._v('/.nvm"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),t._v(" %s "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${XDG_CONFIG_HOME}")]),t._v('/nvm"')]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v('"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" -s "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$NVM_DIR")]),t._v('/nvm.sh"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" \\. "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$NVM_DIR")]),t._v('/nvm.sh"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# This loads nvm")]),t._v("\n")])])])]),t._v(" "),a("li",[a("code",[t._v("nvm install node")]),t._v(" 安装最新版 node")]),t._v(" "),a("li",[a("code",[t._v("nvm install --lts")]),t._v(" 安装LTS版本 node")]),t._v(" "),a("li",[t._v("安装之后就删除之前安装的全局 npm 包,重新使用 nvm 安装 node,并重新安装全局 npm 包")]),t._v(" "),a("li",[t._v("查看全局模块 "),a("code",[t._v("npm ls -g --depth=0")])])])]),t._v(" "),a("li",[t._v("nrm 管理npm源（或镜像源）\n"),a("ul",[a("li",[a("code",[t._v("nrm ls")])]),t._v(" "),a("li",[a("code",[t._v("nrm use taobao")])])])]),t._v(" "),a("li",[t._v("npx 一个npm包执行器\n"),a("ul",[a("li",[t._v("临时安装可执行依赖包，不用全局安装，不用担心长期的污染。")]),t._v(" "),a("li",[t._v("可以执行依赖包中的命令，安装完成自动运行")])])]),t._v(" "),a("li",[t._v("基于 nodejs 启动一个本地 http 服务\n"),a("ul",[a("li",[t._v("http-server "),a("code",[t._v("hs dist -p 8090 -o")])]),t._v(" "),a("li",[t._v("serve "),a("code",[t._v("serve dist -l 3040")])])])]),t._v(" "),a("li",[t._v("npm-check 检查依赖库版本\n"),a("ul",[a("li",[a("code",[t._v("npm-check -ug")])])])]),t._v(" "),a("li",[t._v("gh-pages 发布文件到 github 任意分支\n"),a("ul",[a("li",[t._v("发布 dist 目录到 gh-pages 分支，附带message "),a("code",[t._v("${branchName}-${commitId}")])]),t._v(" "),a("li",[a("code",[t._v("gh-pages -d dist --message $(git symbolic-ref --short -q HEAD)-$(git rev-parse --short HEAD)")])]),t._v(" "),a("li",[t._v("可选参数\n"),a("ul",[a("li",[t._v("发布到远程 "),a("code",[t._v("-r git@github.com:jskit/kit-admin.git")])]),t._v(" "),a("li",[t._v("发布到分支 "),a("code",[t._v("-b newBranch")])])])])])]),t._v(" "),a("li",[t._v("jsnice 反混淆 js")]),t._v(" "),a("li",[t._v("pm2")]),t._v(" "),a("li",[t._v("eslint")]),t._v(" "),a("li",[t._v("babel-cli")]),t._v(" "),a("li",[t._v("@vue/cli 初始化 vue 项目")]),t._v(" "),a("li",[t._v("sinopia")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://lernajs.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("lerna"),a("OutboundLink")],1),t._v(" 是一个优化使用git和npm管理多包存储库的工作流程的工具。")])]),t._v(" "),a("h2",{attrs:{id:"npm-包发布流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm-包发布流程","aria-hidden":"true"}},[t._v("#")]),t._v(" npm 包发布流程")]),t._v(" "),a("p",[t._v("发布 npm 包的流程简述如下：")]),t._v(" "),a("ol",[a("li",[t._v("如果还没有 npm 帐号，可以到 npm 官网注册一个 npm 帐号。")]),t._v(" "),a("li",[t._v("在本地登录 npm 帐号，在本地执行：")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" adduser\n")])])]),a("p",[t._v("或者")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" login\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("在已完成编写的 npm 包根目录下执行：")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" publish\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" unpublish xxx@x.x.x\n")])])]),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("两小时内，发布的包可以撤销，之后就不能撤销了。")])]),t._v(" "),a("p",[t._v("到此，npm 包就成功发布到 npm 平台了。")]),t._v(" "),a("blockquote",[a("p",[t._v("PS：一些开发者在开发过程中可能修改过 npm 的源，所以当进行登录或发布时需要注意要将源切回 npm 的源。")])]),t._v(" "),a("h2",{attrs:{id:"关于私有-npm-库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于私有-npm-库","aria-hidden":"true"}},[t._v("#")]),t._v(" 关于私有 npm 库")]),t._v(" "),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("请注意")]),t._v(" "),a("p",[t._v("实际情况下，如果没有特别要求或安全限制，可以不考虑私有库，使用 npm 平台更稳定。")])]),t._v(" "),a("p",[t._v("一般情况，公司对于搭建本地私有npm库有如下要求：")]),t._v(" "),a("ul",[a("li",[t._v("私有包托管在内部服务器中")]),t._v(" "),a("li",[t._v("项目中使用了公共仓库上的公共包，也使用了内部服务器上的私有包")]),t._v(" "),a("li",[t._v("希望下载的时候，公共包走公共仓库，私有包走内部服务器的私有仓库")]),t._v(" "),a("li",[t._v("服务器硬盘有限，希望只缓存下载过的包，而不是全部同步。")]),t._v(" "),a("li",[t._v("对于下载，发布npm包有对应的权限管理，安装方便，配置简单，依赖少。")])]),t._v(" "),a("h2",{attrs:{id:"cnpm-vs-sinopia"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cnpm-vs-sinopia","aria-hidden":"true"}},[t._v("#")]),t._v(" cnpm VS sinopia")]),t._v(" "),a("p",[t._v("-| cnpm | sinopia | sonatype\n------ |:-----😐 -----:\n系统支持 | 非windows | 全系统\n安装 | 复杂 | 简单\n配置 | 较多，适合个性化需求较多的 | 较少\n配置——修改默认镜像 | 不支持 | 支持\n存储 | mysql | 文件格式，直观\n服务托管 | 默认后台运行 | pm2, doker, forever\n文档资料 | 较多 | 较少")]),t._v(" "),a("h3",{attrs:{id:"到底谁比较好？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#到底谁比较好？","aria-hidden":"true"}},[t._v("#")]),t._v(" 到底谁比较好？")]),t._v(" "),a("blockquote",[a("p",[t._v("有言道：脱离业务场景谈解决方案，都是耍流氓。")])]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.jianshu.com/p/659fb418c9e3",target:"_blank",rel:"noopener noreferrer"}},[t._v("企业私有 npm 服务器"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/jaywcjlove/handbook/blob/master/CentOS/%E5%9C%A85%E5%88%86%E9%92%9F%E5%86%85%E6%90%AD%E5%BB%BA%E4%BC%81%E4%B8%9A%E5%86%85%E9%83%A8%E7%A7%81%E6%9C%89npm%E4%BB%93%E5%BA%93.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("搭建公司私有npm仓库"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://segmentfault.com/a/1190000005790827",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用Sinopia搭建私有的npm仓库"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://www.competa.com/blog/how-to-run-npm-without-sudo/",target:"_blank",rel:"noopener noreferrer"}},[t._v("How to run npm without sudo"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"faq"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#faq","aria-hidden":"true"}},[t._v("#")]),t._v(" FAQ")]),t._v(" "),a("p",[t._v("这里收集一些遇到的 npm 问题")]),t._v(" "),a("ul",[a("li",[t._v("npm 安装全局模块避免使用 sudo")])]),t._v(" "),a("p",[t._v("To avoid requiring "),a("code",[t._v("sudo")]),t._v(" for "),a("code",[t._v("n")]),t._v(" and "),a("code",[t._v("npm")]),t._v(" global installs, it is suggested you either install to your home directory using "),a("code",[t._v("N_PREFIX")]),t._v(", or take ownership of the system directories:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# make cache folder (if missing) and take ownership")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" -p /usr/local/n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("chown")]),t._v(" -R "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("whoami")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v(" /usr/local/n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# take ownership of node install destination folders")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("chown")]),t._v(" -R "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("whoami")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v(" /usr/local/bin /usr/local/lib /usr/local/include /usr/local/share\n")])])]),a("p",[t._v("source by https://github.com/tj/n")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://segmentfault.com/a/1190000009709213",target:"_blank",rel:"noopener noreferrer"}},[t._v("npm 和 yarn 缓存策略对比"),a("OutboundLink")],1),t._v(" "),a("ul",[a("li",[t._v("npm\n"),a("ul",[a("li",[t._v("npm cache add 主要是 npm 内部使用")]),t._v(" "),a("li",[t._v("npm cache clean 删除缓存目录下的所有数据。从 npm@5 开始，为了保证缓存数据的有效性和完整性，需要加上 --force 参数")]),t._v(" "),a("li",[t._v("npm cache verify 验证缓存数据的有效性和完整性，清理垃圾数据")])])]),t._v(" "),a("li",[t._v("yarn\n"),a("ul",[a("li",[t._v("yarn cache ls 列出当前缓存的包列表")]),t._v(" "),a("li",[t._v("yarn cache dir 显示缓存数据的目录")]),t._v(" "),a("li",[t._v("yarn cache clean 清除所有缓存数据")])])])])])]),t._v(" "),a("p",[a("strong",[t._v("升级npm 遇到错误")])]),t._v(" "),a("p",[a("code",[t._v("sudo npm i -g npm")]),t._v(" 全局升级遇到错误")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" ERR"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v(" Unexpected end of input at 1:574411\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" ERR"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v(" 3.4"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('","')]),t._v("init-package-json"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('":"')]),t._v("~1.9.3"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('","')]),t._v("lockfile"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('":"')]),t._v("~1.0.1"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('","')]),t._v("lru-cache"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('":"')]),t._v("~4\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" ERR"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n")])])]),a("p",[t._v("使用一下方法处理下缓存，之后再重新执行安装即可")]),t._v(" "),a("p",[a("code",[t._v("sudo npm cache verify -g")])]),t._v(" "),a("p",[a("strong",[t._v("h5_blade 老项目运行不起来，可能的原因")])]),t._v(" "),a("p",[a("code",[t._v("sudo npm i -g node-sass")]),t._v(" 报以下错误")]),t._v(" "),a("p",[t._v("Error: EACCES, mkdir '/usr/local/lib/node_modules/node-sass' - installing globally")]),t._v(" "),a("p",[t._v("解决方案（h5_blade项目）")]),t._v(" "),a("p",[t._v("有说要清除cache，此处解决方案不明，在使用 "),a("code",[t._v("npm cache clean --force")]),t._v(" 删除了 ~/.npm/_cacache 后，重新 npm i 好了，同时注意当前的 npm@5.6.0 和 nodejs@9.11.2 版本")]),t._v(" "),a("p",[t._v("以下为解决办法步骤（"),a("strong",[t._v("不需要")]),t._v("安装全局的node-sass）")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" cache verify\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# [清除缓存](https://docs.npmjs.com/cli/cache)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# rm -rf ~/.npm/_cacache")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" cache clean --force\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除当前项目下的 node_modules")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" -rf node_modules\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i -g node-gyp node-pre-gyp\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i\n")])])]),a("p",[t._v("报错 Install failed with Node v.10 due to upath@1.0.4 incompatibility")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("error upath@1.0.4: The engine "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"node"')]),t._v(" is incompatible with this module. Expected version "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('">=4 <=9"')]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v(".")]),t._v(" Got "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"10.14.1"')]),t._v("\nerror Found incompatible module\n")])])]),a("p",[t._v("解决方案")]),t._v(" "),a("p",[t._v("Instead, the proper solution is to delete "),a("code",[t._v("node_modules/")]),t._v(", "),a("code",[t._v("package-lock.json")]),t._v(" & "),a("code",[t._v("yarn.lock")]),t._v(" and run "),a("code",[t._v("yarn")]),t._v(" install or "),a("code",[t._v("npm i")]),t._v(" again.")]),t._v(" "),a("p",[t._v("安装phantomjs-prebuilt，报错 "),a("code",[t._v("PhantomJS not found on PATH")])]),t._v(" "),a("p",[t._v("由于天朝网络的原因：它的安装过程中要去 github 下载一个包，而 github release 文件放在亚马逊 aws 上（被墙了）。解决方法是借助淘宝镜像 (https://npm.taobao.org/mirrors/phantomjs/) 安装，输入以下命令:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("PHANTOMJS_CDNURL=https://npm.taobao.org/mirrors/phantomjs/\nnpm install phantomjs-prebuilt\n")])])]),a("p",[t._v("phantomjs 已改名为 phantomjs-prebuilt")]),t._v(" "),a("p",[t._v("同样安装 node-sass 也会出现类似的问题，解决方法依然是淘宝镜像:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("SASS_BINARY_SITE=https://npm.taobao.org/mirrors/node-sass/\nnpm install node-sass\n")])])]),a("p",[t._v("如果不想每次都输入前面变量可以将它们写入 ~/.npmrc 文件中，可以如下添加")]),t._v(" "),a("div",{staticClass:"language-conf extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# ~/.npmrc\nsass_binary_site = https://npm.taobao.org/mirrors/node-sass/\nphantomjs_cdnurl = https://npm.taobao.org/mirrors/phantomjs/\n")])])]),a("p",[t._v("如果已经设置了 yarn 的镜像源为淘宝镜像，也在 ~/.npmrc 中设置了 phantomjs_cdnurl=https://npm.taobao.org/mirrors/phantomjs/，但执行 yarn install 时还是无法正确安装 PhantomJS")]),t._v(" "),a("p",[t._v("解决方案也很简单，根据错误提示，手动到 https://npm.taobao.org/mirrors/phantomjs//phantomjs-2.1.1-linux-x86_64.tar.bz2 下载 PhantomJS 文件，并将该文件拷贝到 /tmp/phantomjs 目录下：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" phantomjs-2.1.1-linux-x86_64.tar.bz2 /tmp/phantomjs\n")])])]),a("p",[t._v("安装 "),a("code",[t._v("puppeteer")]),t._v(" 总是超时怎么办？")]),t._v(" "),a("p",[t._v("解决方案")]),t._v(" "),a("p",[t._v("主要是因为安装 "),a("code",[t._v("puppeteer")]),t._v(" 会安装 Chromium，梯子不够长会导致安装失败。可以仅安装 "),a("code",[t._v("puppeteer-core")]),t._v("，然后指定本地的 chrome/Chromium 浏览器路径，这样就不需要再安装 Chromium 浏览器了")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" path "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" puppeteer "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'puppeteer-core'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用时如下")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" browser "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" puppeteer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("launch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// headless: false")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这里注意路径指向可执行的浏览器。")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 各平台路径可以在 node_modules/puppeteer-core/lib/BrowserFetcher.js 中找到")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// executablePath: path.resolve('/Applications/Google\\ Chrome.app/Contents/MacOS/Google\\ Chrome')")]),t._v("\n    executablePath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/Applications/Chromium.app/Contents/MacOS/Chromium'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" page "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("pageInit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    browser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("这样就不必安装 "),a("code",[t._v("puppeteer")]),t._v(" 包了")])])},[],!1,null,null,null);n.default=e.exports}}]);