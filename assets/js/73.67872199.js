(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{390:function(t,n,a){"use strict";a.r(n);var s=a(8),e=Object(s.a)({},function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"what-is-event-driven-programming"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-event-driven-programming","aria-hidden":"true"}},[t._v("#")]),t._v(" What is event-driven programming?")]),t._v(" "),a("h4",{attrs:{id:"answer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#answer","aria-hidden":"true"}},[t._v("#")]),t._v(" Answer")]),t._v(" "),a("p",[t._v("Event-driven programming is a paradigm that involves building applications that send and receive events. When the program emits events, the program responds by running any callback functions that are registered to that event and context, passing in associated data to the function. With this pattern, events can be emitted into the wild without throwing errors even if no functions are subscribed to it.")]),t._v(" "),a("p",[t._v("A common example of this is the pattern of elements listening to DOM events such as "),a("code",[t._v("click")]),t._v(" and "),a("code",[t._v("mouseenter")]),t._v(", where a callback function is run when the event occurs.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"click"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// This callback function is run when the user")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// clicks on the document.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("Without the context of the DOM, the pattern may look like this:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" hub "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createEventHub")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nhub"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"message"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("username"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v(" said ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("text"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nhub"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("emit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"message"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  username"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"John"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello?"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("With this implementation, "),a("code",[t._v("on")]),t._v(" is the way to "),a("em",[t._v("subscribe")]),t._v(" to an event, while "),a("code",[t._v("emit")]),t._v(" is the way to "),a("em",[t._v("publish")]),t._v(" the event.")]),t._v(" "),a("h4",{attrs:{id:"good-to-hear"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#good-to-hear","aria-hidden":"true"}},[t._v("#")]),t._v(" Good to hear")]),t._v(" "),a("ul",[a("li",[t._v("Follows a publish-subscribe pattern.")]),t._v(" "),a("li",[t._v("Responds to events that occur by running any callback functions subscribed to the event.")]),t._v(" "),a("li",[t._v("Show how to create a simple pub-sub implementation with JavaScript.")])]),t._v(" "),a("h5",{attrs:{id:"additional-links"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#additional-links","aria-hidden":"true"}},[t._v("#")]),t._v(" Additional links")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Overview_of_Events_and_Handlers",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN docs on Events and Handlers"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://medium.freecodecamp.org/understanding-node-js-event-driven-architecture-223292fcbc2d",target:"_blank",rel:"noopener noreferrer"}},[t._v("Understanding Node.js event-driven architecture"),a("OutboundLink")],1)])])])},[],!1,null,null,null);n.default=e.exports}}]);