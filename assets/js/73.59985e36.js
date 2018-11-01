(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{203:function(e,t,r){"use strict";r.r(t);var n={props:["slot-key"]},a=r(4),i=Object(a.a)(n,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.slotKey}},[r("h1",{attrs:{id:"performance"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#performance","aria-hidden":"true"}},[e._v("#")]),e._v(" Performance")]),e._v(" "),r("p",[e._v("Performance 接口可以获取到当前页面中与性能相关的信息。它是 High Resolution Time API 的一部分，同时也融合了 Performance Timeline API、Navigation Timing API、 User Timing API 和 Resource Timing API。")]),e._v(" "),r("p",[e._v('我们总希望网页加载的快一点。谷歌实验显示短如100毫秒的延迟就会对用户体验造成不好的影响。那么我们如何来测量网页加载速度？"page load"的真实含义又是什么？')]),e._v(" "),r("ul",[r("li",[e._v("如果在IE中使用，需要使用 "),r("code",[e._v("<!doctype html>")]),e._v(" 文档声明，浏览器需要在标准模式下。")])]),e._v(" "),r("h2",{attrs:{id:"各属性代表的意义："}},[r("a",{staticClass:"header-anchor",attrs:{href:"#各属性代表的意义：","aria-hidden":"true"}},[e._v("#")]),e._v(" 各属性代表的意义：")]),e._v(" "),r("p",[e._v("每一个performance.timing属性都表示一个页面事件（例如页面发送了请求）或者页面加载（例如当DOM开始加载），测量以毫秒的形式从1970年1月1日的午夜开始。结果为0表示该事件未发生（例如redirectEnd或者redirectStart等）。")]),e._v(" "),r("ul",[r("li",[e._v("navigationStart：\n当load/unload动作被触发时，也可能是提示关闭当前文档时（即回车键在url地址栏中按下，页面被再次刷新，submit按钮被点击）。如果当前窗口中没有前一个文档，那么navigationStart的值就是fetchStart。")]),e._v(" "),r("li",[e._v("redirectStart：\n可能是页面重定向时的开始时间（如果存在重定向的话）或者是0。")]),e._v(" "),r("li",[e._v("unloadEventStart：\n如果被请求的文档来自于前一个同源（同源策略）的文档，那么该属性存储的是浏览器开始卸载前一个文档的时刻。否则的话（前一个文档非同源或者没有前一个文档），为0。")]),e._v(" "),r("li",[e._v("unloadEventEnd：\n表示同源的前一个文档卸载完成的时刻。如果前一个文档不存在或者非同源，则为0。")]),e._v(" "),r("li",[e._v("redirectEnd：\n如果存在重定向的话，redirectEnd表示最后一次重定向后服务器端response的数据被接收完毕的时间。否则的话就是0。")]),e._v(" "),r("li",[e._v("fetchStart：\nfetchStart是指在浏览器发起任何请求之前的时间值。在fetchStart和domainLookupStart之间，浏览器会检查当前文档的缓存。")]),e._v(" "),r("li",[e._v("domainLookupStart：\n这个属性是指当浏览器开始检查当前域名的DNS之前的那一时刻。如果因为任何原因没有去检查DNS（即浏览器使用了缓存，持久连接，或者本地资源），那么它的值等同于fetchStart。")]),e._v(" "),r("li",[e._v("domainLookupEnd：\n指浏览器完成DNS检查时的时间。如果DNS没有被检查，那么它的值等同于fetchStart。")]),e._v(" "),r("li",[e._v("connectStart：\n当浏览器开始于服务器连接时的时间。如果资源取自缓存（或者服务器由于其他任何原因没有建立连接，例如持久连接），那么它的值等同于domainLookupEnd。")]),e._v(" "),r("li",[e._v("connectEnd：\n当浏览器端完成与服务器端建立连接的时刻。如果没有建立连接它的值等同于domainLookupEnd。")]),e._v(" "),r("li",[e._v("secureConnectionStart：\n可选。如果页面使用HTTPS，它的值是安全连接握手之前的时刻。如果该属性不可用，则返回undefined。如果该属性可用，但没有使用HTTPS，则返回0。")]),e._v(" "),r("li",[e._v("responseStart：\n指客户端收到从服务器端（或缓存、本地资源）响应回的第一个字节的数据的时刻。")]),e._v(" "),r("li",[e._v("responseEnd：\n指客户端收到从服务器端（或缓存、本地资源）响应回的最后一个字节的数据的时刻。")]),e._v(" "),r("li",[e._v("domLoading：\n指document对象创建完成的时刻。")]),e._v(" "),r("li",[e._v("domInteractive：\n指文档解析完成的时刻，包括在“传统模式”下被阻塞的通过script标签加载的内容（除了使用defer或者async属性异步加载的情况）。")]),e._v(" "),r("li",[e._v("domContentLoadedEventStart：\n当DOMContentLoaded事件触发之前，浏览器完成所有script（包括设置了defer属性但未设置async属性的script）的下载和解析之后的时刻。")]),e._v(" "),r("li",[e._v("domContentLoadedEventEnd：\n当DOMContentLoaded事件完成之后的时刻。它也是javascript类库中DOMready事件触发的时刻。")]),e._v(" "),r("li",[e._v('domComplete：\n如果已经没有任何延迟加载的事件（所有图片的加载）阻止load事件发生，那么该时刻将会将document.readyState属性设置为"complete"，此时刻就是domComplete。')]),e._v(" "),r("li",[e._v("loadEventStart：\n该属性返回的是load事件刚刚发生的时刻，如果load事件还没有发生，则返回0。")]),e._v(" "),r("li",[e._v("loadEventEnd：\n该属性返回load事件完成之后的时刻。如果load事件未发生，则返回0。")])]),e._v(" "),r("h2",{attrs:{id:"检测用户通过哪种方式来到此页面："}},[r("a",{staticClass:"header-anchor",attrs:{href:"#检测用户通过哪种方式来到此页面：","aria-hidden":"true"}},[e._v("#")]),e._v(" 检测用户通过哪种方式来到此页面：")]),e._v(" "),r("p",[e._v("我们有几种方式来打开一个页面，例如，在地址栏输入url，刷新当前页面，通过history的前进后退。这时候 performance.navigation 就派上用场了。这个 API 有两个属性：")]),e._v(" "),r("ul",[r("li",[e._v("redirectCount：页面请求被重定向的次数")]),e._v(" "),r("li",[e._v("type：页面被载入的方式。以下列举了 type 属性的三种取值情况：\n"),r("ul",[r("li",[e._v("0：用户通过点击链接或者在浏览器地址栏输入URL的方式进入页面。")]),e._v(" "),r("li",[e._v("1：页面重载。")]),e._v(" "),r("li",[e._v("2：通过浏览器history的前进或后退进入页面。")])])])]),e._v(" "),r("p",[e._v("eg： 你通过的方式进入页面。")]),e._v(" "),r("h3",{attrs:{id:"实时页面性能测试："}},[r("a",{staticClass:"header-anchor",attrs:{href:"#实时页面性能测试：","aria-hidden":"true"}},[e._v("#")]),e._v(" 实时页面性能测试：")]),e._v(" "),r("p",[e._v("通过 Navigation Timing API ，我们可以精确实时的获取真实用户的在实际网络环境中的页面加载速度，而不是仅仅在开发环境、公司网络中测试页面加载速度。")]),e._v(" "),r("h3",{attrs:{id:"页面性能统计："}},[r("a",{staticClass:"header-anchor",attrs:{href:"#页面性能统计：","aria-hidden":"true"}},[e._v("#")]),e._v(" 页面性能统计：")]),e._v(" "),r("p",[e._v("我们甚至可以使用 XHR 将用户每次浏览网页时的 performance.timing 数据发送到服务器端。这种方式是实时的，不过效率比较低。或者，可以使用本地存储的方式将用户页面性能的数据存储在本地并周期性的打包发送到服务器端进行分析。通过这种方式，navigation timing API 实现了一种简单的提供页面性能历史数据的方法。")]),e._v(" "),r("p",[e._v("附录：")]),e._v(" "),r("p",[e._v("参考：")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.w3.org/TR/navigation-timing/",target:"_blank",rel:"noopener noreferrer"}},[e._v("w3 Navigation Timing"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Performance",target:"_blank",rel:"noopener noreferrer"}},[e._v("Performance"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/PerformanceTiming",target:"_blank",rel:"noopener noreferrer"}},[e._v("MDN PerformanceTiming"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Navigation_timing_API",target:"_blank",rel:"noopener noreferrer"}},[e._v("MDN Navigation Timing API"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/User_Timing_API",target:"_blank",rel:"noopener noreferrer"}},[e._v("MDN User Timing API"),r("OutboundLink")],1)])])])},[],!1,null,null,null);i.options.__file="performance.md";t.default=i.exports}}]);