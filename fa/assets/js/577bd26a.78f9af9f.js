"use strict";(self.webpackChunkpolypay_docs=self.webpackChunkpolypay_docs||[]).push([[820],{5271:function(e,t,i){i.r(t),i.d(t,{frontMatter:function(){return a},contentTitle:function(){return r},metadata:function(){return s},toc:function(){return l},default:function(){return d}});var n=i(7462),c=i(3366),o=(i(7294),i(3905)),p=["components"],a={sidebar_position:1,title:"\u06af\u0631\u0641\u062a\u0646 \u0627\u0633\u062a\u062b\u0646\u0627 \u0647\u0627 (\u062e\u0637\u0627 \u0647\u0627)"},r=void 0,s={unversionedId:"best-practices/catching-exceptions",id:"best-practices/catching-exceptions",isDocsHomePage:!1,title:"\u06af\u0631\u0641\u062a\u0646 \u0627\u0633\u062a\u062b\u0646\u0627 \u0647\u0627 (\u062e\u0637\u0627 \u0647\u0627)",description:"\u0627\u0633\u062a\u062b\u0646\u0627 \u0647\u0627 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u0646\u062f \u062f\u0631 \u0645\u0631\u0627\u062d\u0644 \u0645\u062e\u062a\u0644\u0641 \u067e\u0631\u062f\u0627\u062e\u062a \u0627\u062a\u0641\u0627\u0642 \u0628\u06cc\u0641\u062a\u0646\u062f. \u0628\u0631\u0627\u06cc \u062f\u0627\u062f\u0646 \u0628\u0627\u0632\u062e\u0648\u0631\u062f \u0628\u0647 \u06a9\u0627\u0631\u0628\u0631\u0627\u0646 \u0648\u0642\u062a\u06cc \u0627\u0634\u062a\u0628\u0627\u0647\u06cc \u0631\u062e \u0645\u06cc \u062f\u0647\u062f\u060c \u0627\u06cc\u0646 \u0627\u0633\u062a\u062b\u0646\u0627 \u0647\u0627 \u0631\u0627 \u0628\u06af\u06cc\u0631\u06cc\u062f.",source:"@site/i18n/fa/docusaurus-plugin-content-docs/current/best-practices/catching-exceptions.md",sourceDirName:"best-practices",slug:"/best-practices/catching-exceptions",permalink:"/polypay.js/fa/docs/best-practices/catching-exceptions",editUrl:"https://github.com/alitnk/polypay.js/edit/main/documentation/docs/best-practices/catching-exceptions.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\u06af\u0631\u0641\u062a\u0646 \u0627\u0633\u062a\u062b\u0646\u0627 \u0647\u0627 (\u062e\u0637\u0627 \u0647\u0627)"},sidebar:"tutorialSidebar",previous:{title:"\u062a\u0627\u06cc\u06cc\u062f \u067e\u06cc\u062f\u0627\u062e\u062a",permalink:"/polypay.js/fa/docs/usage/verify-payment"},next:{title:"\u067e\u06cc\u06a9\u0631\u0628\u0646\u062f\u06cc",permalink:"/polypay.js/fa/docs/best-practices/configuration"}},l=[{value:"Request Exception",id:"request-exception",children:[]},{value:"Payment Exception",id:"payment-exception",children:[]},{value:"Verification Exception",id:"verification-exception",children:[]},{value:"Polypay Exception",id:"polypay-exception",children:[]}],u={toc:l};function d(e){var t=e.components,i=(0,c.Z)(e,p);return(0,o.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u0627\u0633\u062a\u062b\u0646\u0627 \u0647\u0627 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u0646\u062f \u062f\u0631 \u0645\u0631\u0627\u062d\u0644 \u0645\u062e\u062a\u0644\u0641 \u067e\u0631\u062f\u0627\u062e\u062a \u0627\u062a\u0641\u0627\u0642 \u0628\u06cc\u0641\u062a\u0646\u062f. \u0628\u0631\u0627\u06cc \u062f\u0627\u062f\u0646 \u0628\u0627\u0632\u062e\u0648\u0631\u062f \u0628\u0647 \u06a9\u0627\u0631\u0628\u0631\u0627\u0646 \u0648\u0642\u062a\u06cc \u0627\u0634\u062a\u0628\u0627\u0647\u06cc \u0631\u062e \u0645\u06cc \u062f\u0647\u062f\u060c \u0627\u06cc\u0646 \u0627\u0633\u062a\u062b\u0646\u0627 \u0647\u0627 \u0631\u0627 \u0628\u06af\u06cc\u0631\u06cc\u062f."),(0,o.kt)("h2",{id:"request-exception"},"Request Exception"),(0,o.kt)("p",null,"\u0627\u06af\u0631 \u062e\u0637\u0627\u06cc\u06cc \u062f\u0631 \u0645\u0631\u062d\u0644\u0647 \u062f\u0631\u062e\u0648\u0627\u0633\u062a \u067e\u0631\u062f\u0627\u062e\u062a \u0627\u062a\u0641\u0627\u0642 \u0628\u06cc\u0641\u062a\u062f\u060c \u0627\u0633\u062a\u062b\u0646\u0627 ",(0,o.kt)("inlineCode",{parentName:"p"},"RequestException")," \u0627\u0646\u062f\u0627\u062e\u062a\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f."),(0,o.kt)("h2",{id:"payment-exception"},"Payment Exception"),(0,o.kt)("p",null,"\u0627\u06af\u0631 \u062e\u0637\u0627\u06cc\u06cc \u062f\u0631 \u0645\u0631\u062d\u0644\u0647 \u0628\u0627\u0632\u06af\u0634\u062a \u06a9\u0627\u0631\u0628\u0631 \u0627\u062a\u0641\u0627\u0642 \u0628\u06cc\u0641\u062a\u062f\u060c \u0627\u0633\u062a\u062b\u0646\u0627 ",(0,o.kt)("inlineCode",{parentName:"p"},"PaymentException")," \u0627\u0646\u062f\u0627\u062e\u062a\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f."),(0,o.kt)("h2",{id:"verification-exception"},"Verification Exception"),(0,o.kt)("p",null,"\u0627\u06af\u0631 \u062e\u0637\u0627\u06cc\u06cc \u062f\u0631 \u0645\u0631\u062d\u0644\u0647 \u062a\u0627\u06cc\u06cc\u062f \u06a9\u0631\u062f\u0646 \u067e\u0631\u062f\u0627\u062e\u062a \u0627\u062a\u0641\u0627\u0642 \u0628\u06cc\u0641\u062a\u062f\u060c \u0627\u0633\u062a\u062b\u0646\u0627 ",(0,o.kt)("inlineCode",{parentName:"p"},"VerificationException")," \u0627\u0646\u062f\u0627\u062e\u062a\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f."),(0,o.kt)("h2",{id:"polypay-exception"},"Polypay Exception"),(0,o.kt)("p",null,"\u0647\u0645\u0647 \u0627\u0633\u062a\u062b\u0646\u0627 \u0647\u0627\u06cc \u0628\u0627\u0644\u0627 \u0627\u0632 \u0627\u0633\u062a\u062b\u0646\u0627\u06cc ",(0,o.kt)("inlineCode",{parentName:"p"},"PolypayException")," \u0627\u0631\u062b\u200c\u0628\u0631\u06cc \u0645\u06cc \u06a9\u0646\u0646\u062f."))}d.isMDXComponent=!0}}]);