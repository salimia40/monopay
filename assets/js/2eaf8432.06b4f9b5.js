"use strict";(self.webpackChunkpolypay_docs=self.webpackChunkpolypay_docs||[]).push([[432],{8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(7462),r=n(7294),i=n(2389),o=n(9443);var l=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=n(9558),u=n(6010),c="tabItem_1uMI";function p(e){var t,n,a,i=e.lazy,o=e.block,p=e.defaultValue,d=e.values,m=e.groupId,h=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"string"==typeof e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=d?d:v.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),f=(0,s.lx)(y,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===p?p:null!=(t=null!=p?p:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=v[0])?void 0:a.props.value;if(null!==k&&!y.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=l(),g=b.tabGroupChoices,N=b.setTabGroupChoices,w=(0,r.useState)(k),T=w[0],C=w[1],P=[],x=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var D=g[m];null!=D&&D!==T&&y.some((function(e){return e.value===D}))&&C(D)}var q=function(e){var t=e.currentTarget,n=P.indexOf(t),a=y[n].value;a!==T&&(x(t),C(a),null!=m&&N(m,a))},E=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=P.indexOf(e.currentTarget)+1;n=P[a]||P[0];break;case"ArrowLeft":var r=P.indexOf(e.currentTarget)-1;n=P[r]||P[P.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":o},h)},y.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,className:(0,u.Z)("tabs__item",c,{"tabs__item--active":T===t}),key:t,ref:function(e){return P.push(e)},onKeyDown:E,onFocus:q,onClick:q},null!=n?n:t)}))),i?(0,r.cloneElement)(v.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function d(e){var t=(0,i.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},355:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return p},default:function(){return v},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return m}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=n(5064),l=n(8215),s=n(6213),u=["components"],c={sidebar_position:1,title:"Request Payment"},p=void 0,d={unversionedId:"usage/request-payment",id:"usage/request-payment",isDocsHomePage:!1,title:"Request Payment",description:"Get the driver using getPaymentDriver and use the requestPayment method. This method accepts an object with callbackUrl, amount, and driver-specific fields.",source:"@site/docs/usage/request-payment.mdx",sourceDirName:"usage",slug:"/usage/request-payment",permalink:"/polypay.js/docs/usage/request-payment",editUrl:"https://github.com/alitnk/polypay.js/edit/documentation/docs/usage/request-payment.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Request Payment"},sidebar:"tutorialSidebar",previous:{title:"Supported Drivers",permalink:"/polypay.js/docs/supported-drivers"},next:{title:"Send User to Payment Page",permalink:"/polypay.js/docs/usage/send-user"}},m=[],h={toc:m};function v(e){var t=e.components,n=(0,r.Z)(e,u);return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Get the driver using ",(0,i.kt)("inlineCode",{parentName:"p"},"getPaymentDriver")," and use the ",(0,i.kt)("inlineCode",{parentName:"p"},"requestPayment")," method. This method accepts an object with ",(0,i.kt)("inlineCode",{parentName:"p"},"callbackUrl"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"amount"),", and driver-specific fields. "),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"javascript",label:"JavaScript",default:!0,mdxType:"TabItem"},(0,i.kt)(s.Z,{className:"language-js",title:"index.js",mdxType:"CodeBlock"},'import { getPaymentDriver } from "polypay";\n\nconst driver = getPaymentDriver("zarinpal", {\n  merchantId: "zarinpal-merchant",\n});\n\nconst paymentInfo = await driver.requestPayment({\n  amount: 50000,\n  callbackUrl: "https://my-site.com/callback",\n  description: "Description about the transaction",\n});\n')),(0,i.kt)(l.Z,{value:"typescript",label:"TypeScript",mdxType:"TabItem"},(0,i.kt)(s.Z,{className:"language-ts",title:"index.ts",mdxType:"CodeBlock"},'import { getPaymentDriver, Zarinpal } from "polypay";\n\nconst driver = getPaymentDriver<Zarinpal>("zarinpal", {\n  merchantId: "zarinpal-merchant",\n});\n\nconst paymentInfo = await driver.requestPayment({\n  amount: 50000,\n  callbackUrl: "https://my-site.com/callback",\n  description: "Description about the transaction",\n});\n'))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"the ",(0,i.kt)("inlineCode",{parentName:"p"},"requestPayment")," function might throw ",(0,i.kt)("inlineCode",{parentName:"p"},"RequestPaymentException")))),(0,i.kt)("p",null,"The returned value of ",(0,i.kt)("inlineCode",{parentName:"p"},"requestPayment"),", is a class containing the following:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Details about the payment"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"referenceId"),": The ID that references the ongoing payment, you probably want to store it in your database."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Details about how to send the user"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"url"),": The url that you should send the user to"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"method"),": The method with which you should send the user with. Can be ",(0,i.kt)("inlineCode",{parentName:"li"},"GET")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"POST")," depending on the driver"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"params"),": The data that you should send the user with")))))}v.isMDXComponent=!0}}]);