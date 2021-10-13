"use strict";(self.webpackChunkpolypay_docs=self.webpackChunkpolypay_docs||[]).push([[692],{8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(7294),r=n(9443);var i=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=n(6010),l="tabItem_1uMI",s="tabItemActive_2DSg";var c=function(e){var t,n=e.lazy,r=e.block,c=e.defaultValue,u=e.values,p=e.groupId,m=e.className,d=a.Children.toArray(e.children),v=null!=u?u:d.map((function(e){return{value:e.props.value,label:e.props.label}})),f=null!=c?c:null==(t=d.find((function(e){return e.props.default})))?void 0:t.props.value,y=i(),k=y.tabGroupChoices,g=y.setTabGroupChoices,h=(0,a.useState)(f),b=h[0],N=h[1],x=[];if(null!=p){var C=k[p];null!=C&&C!==b&&v.some((function(e){return e.value===C}))&&N(C)}var w=function(e){var t=e.currentTarget,n=x.indexOf(t),a=v[n].value;N(a),null!=p&&(g(p,a),setTimeout((function(){var e,n,a,r,i,o,l,c;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,i=e.right,o=window,l=o.innerHeight,c=o.innerWidth,n>=0&&i<=c&&r<=l&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},I=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=x.indexOf(e.target)+1;n=x[a]||x[0];break;case"ArrowLeft":var r=x.indexOf(e.target)-1;n=x[r]||x[x.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},m)},v.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,o.Z)("tabs__item",l,{"tabs__item--active":b===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:I,onFocus:w,onClick:w},null!=n?n:t)}))),n?(0,a.cloneElement)(d.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},d.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},8331:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return u},metadata:function(){return m},toc:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=n(5064),l=n(8215),s=n(6213),c=["components"],u={sidebar_position:3,title:"\u062a\u0627\u06cc\u06cc\u062f \u067e\u06cc\u062f\u0627\u062e\u062a"},p=void 0,m={unversionedId:"usage/verify-payment",id:"usage/verify-payment",isDocsHomePage:!1,title:"\u062a\u0627\u06cc\u06cc\u062f \u067e\u06cc\u062f\u0627\u062e\u062a",description:"\u0645\u062a\u062f verifyPayment \u062f\u0648 \u0648\u0631\u0648\u062f\u06cc \u0642\u0628\u0648\u0644 \u0645\u06cc\u200c\u06a9\u0646\u062f:",source:"@site/i18n/fa/docusaurus-plugin-content-docs/current/usage/verify-payment.mdx",sourceDirName:"usage",slug:"/usage/verify-payment",permalink:"/polypay.js/fa/docs/usage/verify-payment",editUrl:"https://github.com/alitnk/polypay.js/edit/main/documentation/docs/usage/verify-payment.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"\u062a\u0627\u06cc\u06cc\u062f \u067e\u06cc\u062f\u0627\u062e\u062a"},sidebar:"tutorialSidebar",previous:{title:"\u0627\u0631\u0633\u0627\u0644 \u06a9\u0627\u0631\u0628\u0631 \u0628\u0647 \u062f\u0631\u06af\u0627\u0647",permalink:"/polypay.js/fa/docs/usage/send-user"},next:{title:"\u06af\u0631\u0641\u062a\u0646 \u0627\u0633\u062a\u062b\u0646\u0627 \u0647\u0627 (\u062e\u0637\u0627 \u0647\u0627)",permalink:"/polypay.js/fa/docs/usage/catching-exceptions"}},d=[],v={toc:d};function f(e){var t=e.components,n=(0,r.Z)(e,c);return(0,i.kt)("wrapper",(0,a.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u0645\u062a\u062f ",(0,i.kt)("inlineCode",{parentName:"p"},"verifyPayment")," \u062f\u0648 \u0648\u0631\u0648\u062f\u06cc \u0642\u0628\u0648\u0644 \u0645\u06cc\u200c\u06a9\u0646\u062f:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u06cc\u06a9 \u0622\u0628\u062c\u06a9\u062a \u06a9\u0647 ",(0,i.kt)("inlineCode",{parentName:"li"},"amount")," \u0648 ",(0,i.kt)("inlineCode",{parentName:"li"},"referenceId")," \u0631\u0627 \u062f\u0631 \u0628\u0631 \u062f\u0627\u0631\u062f.\u200c"),(0,i.kt)("li",{parentName:"ol"},"\u0622\u0628\u062c\u06a9\u062a \u062f\u0631\u062e\u0648\u0627\u0633\u062a \u0633\u0631\u0648\u0631 (express/fastify/koa/\u063a\u06cc\u0631\u0647). (\u0628\u0627\u06cc\u062f \u0641\u06cc\u0644\u062f ",(0,i.kt)("inlineCode",{parentName:"li"},"query")," \u0631\u0627 \u062f\u0627\u0634\u062a\u0647 \u0628\u0627\u0634\u062f.)")),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"typescript",label:"TypeScript",default:!0,mdxType:"TabItem"},(0,i.kt)(s.Z,{className:"language-ts",title:"index.ts",mdxType:"CodeBlock"},'import { getPaymentDriver, Zarinpal } from "polypay";\n\nconst driver = getPaymentDriver<Zarinpal>("zarinpal", {\n  merchantId: "zarinpal-merchant",\n});\n\nconst receipt = await driver.verifyPayment(\n  {\n    amount: 5000,\n    referenceId: 1234,\n  },\n  request\n);\n')),(0,i.kt)(l.Z,{value:"javascript",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)(s.Z,{className:"language-js",title:"index.js",mdxType:"CodeBlock"},'import { getPaymentDriver } from "polypay";\n\nconst driver = getPaymentDriver("zarinpal", {\n  merchantId: "zarinpal-merchant",\n});\n\nconst receipt = await driver.verifyPayment(\n  {\n    amount: 5000,\n    referenceId: 1234,\n  },\n  request\n);\n'))),(0,i.kt)("p",null,"\u0627\u06cc\u0646 \u0645\u062a\u062f \u06cc\u06a9 \u0631\u0633\u06cc\u062f (",(0,i.kt)("inlineCode",{parentName:"p"},"receipt"),") \u0628\u0627\u0632 \u0645\u06cc \u06af\u0631\u062f\u0627\u0646\u062f \u06a9\u0647 \u0634\u0627\u0645\u0644 \u06a9\u062f \u0631\u0647\u06af\u06cc\u0631\u06cc (",(0,i.kt)("inlineCode",{parentName:"p"},"transactionId"),") \u0648 \u06a9\u0627\u0631\u062a \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0634\u062f\u0647 \u0628\u0647 \u0635\u0648\u0631\u062a \u0647\u0634 \u0634\u062f\u0647 (",(0,i.kt)("inlineCode",{parentName:"p"},"panCard"),") \u0648 \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u062f\u06cc\u06af\u0631 \u0645\u0631\u0628\u0648\u0637 \u0628\u0647 \u067e\u0631\u062f\u0627\u062e\u062a \u0627\u0633\u062a.\n\u062f\u0631 \u0635\u0648\u0631\u062a \u062a\u0627\u06cc\u06cc\u062f \u067e\u0631\u062f\u0627\u062e\u062a \u0634\u0645\u0627 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0633\u0631\u0648\u06cc\u0633/\u0645\u062d\u0635\u0648\u0644 \u062e\u0648\u062f \u0631\u0627 \u0628\u0647 \u0647\u0645\u0631\u0627\u0647 \u06a9\u062f \u0631\u0647\u06af\u06cc\u0631\u06cc \u0628\u0647 \u06a9\u0627\u0631\u0628\u0631 \u0627\u0631\u0627\u0626\u0647 \u062f\u0647\u06cc\u062f."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u0645\u062a\u062f ",(0,i.kt)("inlineCode",{parentName:"p"},"verifyPayment")," \u0645\u0645\u06a9\u0646 \u0627\u0633\u062a \u0627\u0633\u062a\u062b\u0646\u0627\u06cc ",(0,i.kt)("inlineCode",{parentName:"p"},"VerificationException")," \u0631\u0627 \u0628\u06cc\u0646\u062f\u0627\u0632\u062f.\n:::"))))}f.isMDXComponent=!0}}]);