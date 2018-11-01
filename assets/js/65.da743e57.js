(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{212:function(t,a,s){"use strict";s.r(a);var n={props:["slot-key"]},e=s(4),o=Object(e.a)(n,function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.slotKey}},[s("h1",{attrs:{id:"小程序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小程序","aria-hidden":"true"}},[t._v("#")]),t._v(" 小程序")]),t._v(" "),s("p",[t._v("这里收集小程序开发常见问题，整理开发最佳实践")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://mp.weixin.qq.com/debug/wxadoc/dev/api/",target:"_blank",rel:"noopener noreferrer"}},[t._v("微信小程序API"),s("OutboundLink")],1),t._v(" - ["),s("a",{attrs:{href:"https://mp.weixin.qq.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("wxapp管理平台"),s("OutboundLink")],1),t._v("]")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://docs.alipay.com/mini/framework/app",target:"_blank",rel:"noopener noreferrer"}},[t._v("支付宝小程序API"),s("OutboundLink")],1),t._v(" - ["),s("a",{attrs:{href:"https://openhome.alipay.com/platform/home.htm",target:"_blank",rel:"noopener noreferrer"}},[t._v("aliapp管理平台"),s("OutboundLink")],1),t._v("]\n")])]),t._v(" "),s("h2",{attrs:{id:"开发助手"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开发助手","aria-hidden":"true"}},[t._v("#")]),t._v(" 开发助手")]),t._v(" "),s("p",[t._v("微信"),s("strong",[t._v("小程序开发助手")]),t._v("，更方便快捷地查看和预览小程序")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://mp.weixin.qq.com/debug/wxadoc/dev/image/devtools2/mydev/mydev-qrcode.jpg?t=2018228",alt:"微信小程序开发助手"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gw.alipayobjects.com/zos/skylark-tools/public/files/a380a8c8d56b91fd6939f4a6a96e126d.png",alt:"支付宝小程序开发助手"}})]),t._v(" "),s("h2",{attrs:{id:"常见问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常见问题","aria-hidden":"true"}},[t._v("#")]),t._v(" 常见问题")]),t._v(" "),s("ul",[s("li",[t._v("公共方法提取")]),t._v(" "),s("li",[t._v("页面深度处理")]),t._v(" "),s("li",[t._v("request请求队列优化")]),t._v(" "),s("li",[t._v("缓存使用优化")]),t._v(" "),s("li",[t._v("页面间通信")]),t._v(" "),s("li",[t._v("统计方案")]),t._v(" "),s("li",[t._v("错误上报")])]),t._v(" "),s("h2",{attrs:{id:"注意事项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注意事项","aria-hidden":"true"}},[t._v("#")]),t._v(" 注意事项")]),t._v(" "),s("ul",[s("li",[t._v("微信本地资源无法通过 WXSS 获取(即css无法使用本地图片)")])]),t._v(" "),s("p",[s("code",[t._v("background-image")]),t._v("：可以使用网络图片，或者 base64，或者使用 "),s("code",[t._v("<image/>")]),t._v(" 标签")]),t._v(" "),s("p",[t._v("可以使用脚本批量 "),s("code",[t._v("wxapp-remote")]),t._v(" 处理此问题")]),t._v(" "),s("ul",[s("li",[t._v("首先所有的本地图片引用都放在 "),s("code",[t._v("/img")]),t._v(" 目录下")]),t._v(" "),s("li",[t._v("全部图片引用路径使用 "),s("code",[t._v("./img/xx/xx.png")]),t._v(" 格式")]),t._v(" "),s("li",[t._v("执行脚本批量上传img以及替换引用路径为远程图片")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("# 初始化")]),t._v("\n"),s("span",{attrs:{class:"token function"}},[t._v("npm")]),t._v(" i 或 yarn\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("# 执行脚本")]),t._v("\ngulp remote --path"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v("..")]),t._v("/hsq-wxapp\n")])])]),s("ul",[s("li",[t._v("微信中引用不能直接使用根路径，只能使用相对路径")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" api "),s("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'/config/api'")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// 微信只能使用相对路径")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" api "),s("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'../../config/api'")]),t._v("\n")])])]),s("ul",[s("li",[t._v("微信引用变量数据要使用 单/双"),s("strong",[t._v("引号")])])]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("data-id")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),t._v("{{id}}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n// 要加引号\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("data-id")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{{id}}"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("ul",[s("li",[t._v("微信不能在布局模板里直接使用 "),s("code",[t._v(".toFixed(2)")]),t._v(" 方法")])]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[t._v("// 推荐价格全部在js中计算，除非有布局方面要求\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{ (price * 0.01).toFixed(2) }}"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n改为引用 format 组件\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("wxs")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("../../components/price/index.wxs"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("module")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("format"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{ format(price) }}"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("ul",[s("li",[t._v("关于获取自定义数据，微信、支付宝要全部使用 "),s("code",[t._v("e.currentTarget")])])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token function"}},[t._v("onClick")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" id"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" type "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" e"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("currentTarget"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dataset"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'login'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{attrs:{class:"token keyword"}},[t._v("this")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("goLogin")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{attrs:{class:"token keyword"}},[t._v("break")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("default")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{attrs:{class:"token comment"}},[t._v("// do nothing")]),t._v("\n      "),s("span",{attrs:{class:"token keyword"}},[t._v("break")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),s("ul",[s("li",[t._v("关于引用组件，全部使用 "),s("code",[t._v("import")]),t._v("，而引用的组件注意以下事项")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" mini "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token comment"}},[t._v("// 组件功能")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// 标准写法")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" mini"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// 微信小程序使用如下方式")]),t._v("\nmodule"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" mini"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// 引入组件使用文件夹路径时 (注意，微信不能省略 `/index`)")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  mixins"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'../../utils/index'")]),t._v("\n")])])])])},[],!1,null,null,null);o.options.__file="readme.md";a.default=o.exports}}]);