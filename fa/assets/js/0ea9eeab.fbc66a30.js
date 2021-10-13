"use strict";(self.webpackChunkpolypay_docs=self.webpackChunkpolypay_docs||[]).push([[5],{8215:function(e,n,t){var a=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},5064:function(e,n,t){t.d(n,{Z:function(){return s}});var a=t(7294),r=t(9443);var o=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=t(6010),l="tabItem_1uMI",c="tabItemActive_2DSg";var s=function(e){var n,t=e.lazy,r=e.block,s=e.defaultValue,u=e.values,d=e.groupId,p=e.className,m=a.Children.toArray(e.children),f=null!=u?u:m.map((function(e){return{value:e.props.value,label:e.props.label}})),v=null!=s?s:null==(n=m.find((function(e){return e.props.default})))?void 0:n.props.value,b=o(),y=b.tabGroupChoices,g=b.setTabGroupChoices,h=(0,a.useState)(v),k=h[0],x=h[1],C=[];if(null!=d){var T=y[d];null!=T&&T!==k&&f.some((function(e){return e.value===T}))&&x(T)}var I=function(e){var n=e.currentTarget,t=C.indexOf(n),a=f[t].value;x(a),null!=d&&(g(d,a),setTimeout((function(){var e,t,a,r,o,i,l,s;(e=n.getBoundingClientRect(),t=e.top,a=e.left,r=e.bottom,o=e.right,i=window,l=i.innerHeight,s=i.innerWidth,t>=0&&o<=s&&r<=l&&a>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(c),setTimeout((function(){return n.classList.remove(c)}),2e3))}),150))},w=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=C.indexOf(e.target)+1;t=C[a]||C[0];break;case"ArrowLeft":var r=C.indexOf(e.target)-1;t=C[r]||C[C.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},p)},f.map((function(e){var n=e.value,t=e.label;return a.createElement("li",{role:"tab",tabIndex:k===n?0:-1,"aria-selected":k===n,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":k===n}),key:n,ref:function(e){return C.push(e)},onKeyDown:w,onFocus:I,onClick:I},null!=t?t:n)}))),t?(0,a.cloneElement)(m.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},m.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==k})}))))}},7409:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return d},default:function(){return v},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return m}});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),i=t(5064),l=t(8215),c=t(6213),s=["components"],u={sidebar_position:2,title:"\u067e\u06cc\u06a9\u0631\u0628\u0646\u062f\u06cc"},d=void 0,p={unversionedId:"advanced/configuration",id:"advanced/configuration",isDocsHomePage:!1,title:"\u067e\u06cc\u06a9\u0631\u0628\u0646\u062f\u06cc",description:"\u0627\u06af\u0631 \u0627\u0632 \u0686\u0646\u062f \u062f\u0631\u0627\u06cc\u0648\u0631 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u200c\u06a9\u0646\u06cc\u062f\u060c \u0645\u06cc \u062a\u0648\u0627\u0646\u06cc\u062f \u06cc\u06a9 \u0641\u0627\u06cc\u0644 \u062c\u062f\u0627 \u0628\u0633\u0627\u0632\u06cc\u062f \u0648 \u0647\u0645\u0647 \u06cc \u067e\u06cc\u06a9\u0631\u0628\u0646\u062f\u06cc\u200c\u0647\u0627 \u0631\u0627 \u062f\u0631 \u0622\u0646 \u0646\u06af\u0647 \u062f\u0627\u0631\u06cc\u062f.",source:"@site/i18n/fa/docusaurus-plugin-content-docs/current/advanced/configuration.mdx",sourceDirName:"advanced",slug:"/advanced/configuration",permalink:"/polypay.js/fa/docs/advanced/configuration",editUrl:"https://github.com/alitnk/polypay.js/edit/main/documentation/docs/advanced/configuration.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\u067e\u06cc\u06a9\u0631\u0628\u0646\u062f\u06cc"},sidebar:"tutorialSidebar",previous:{title:"\u06af\u0631\u0641\u062a\u0646 \u0627\u0633\u062a\u062b\u0646\u0627 \u0647\u0627 (\u062e\u0637\u0627 \u0647\u0627)",permalink:"/polypay.js/fa/docs/usage/catching-exceptions"},next:{title:"\u0646\u0645\u0648\u0646\u0647 \u0647\u0627",permalink:"/polypay.js/fa/docs/examples"}},m=[],f={toc:m};function v(e){var n=e.components,t=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u0627\u06af\u0631 \u0627\u0632 \u0686\u0646\u062f \u062f\u0631\u0627\u06cc\u0648\u0631 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u200c\u06a9\u0646\u06cc\u062f\u060c \u0645\u06cc \u062a\u0648\u0627\u0646\u06cc\u062f \u06cc\u06a9 \u0641\u0627\u06cc\u0644 \u062c\u062f\u0627 \u0628\u0633\u0627\u0632\u06cc\u062f \u0648 \u0647\u0645\u0647 \u06cc \u067e\u06cc\u06a9\u0631\u0628\u0646\u062f\u06cc\u200c\u0647\u0627 \u0631\u0627 \u062f\u0631 \u0622\u0646 \u0646\u06af\u0647 \u062f\u0627\u0631\u06cc\u062f."),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"typescript",label:"TypeScript",default:!0,mdxType:"TabItem"},(0,o.kt)(c.Z,{className:"language-ts",title:"polypay-config.ts",mdxType:"CodeBlock"},'import { ConfigObject } from "polypay";\n\nexport const polypayConfig: ConfigObject = {\n  zarinpal: {\n    merchantId: "zarinpal-merchant",\n    sandbox: true,\n  },\n  zibal: {\n    merchantId: "zibal-merchant",\n    sandbox: true,\n  },\n};\n')),(0,o.kt)(l.Z,{value:"javascript",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)(c.Z,{className:"language-js",title:"polypay-config.js",mdxType:"CodeBlock"},'/** @type {import("polypay.js").ConfigObject} */\nexport const polypayConfig = {\n    zarinpal: {\n        merchantId: "zarinpal-merchant",\n        sandbox: true,\n    },\n    zibal: {\n        merchantId: "zibal-merchant",\n        sandbox: true,\n    }\n}\n'))),(0,o.kt)("p",null,"\u0648 \u0633\u067e\u0633 \u062f\u0631 \u0641\u0627\u06cc\u0644 \u0647\u0627\u06cc\u06cc \u06a9\u0647 \u0628\u0647 \u067e\u06cc\u06a9\u0631\u0628\u0646\u062f\u06cc \u0646\u06cc\u0627\u0632 \u062f\u0627\u0631\u06cc\u062f\u060c \u0622\u0646 \u0631\u0627 \u0627\u06cc\u0645\u067e\u0648\u0631\u062a \u06a9\u0646\u06cc\u062f."))}v.isMDXComponent=!0}}]);