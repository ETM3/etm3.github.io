"use strict";(self.webpackChunketmp=self.webpackChunketmp||[]).push([[117],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,c(c({ref:t},l),{},{components:n})):r.createElement(f,c({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var u=2;u<a;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5778:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),c=["components"],s={id:"accounts",title:"What are Accounts?",sidebar_label:"Accounts",description:"Build your next blockchain app on ETM/P.",keywords:["docs","ETM/P"]},i=void 0,u={unversionedId:"basics/accounts",id:"basics/accounts",title:"What are Accounts?",description:"Build your next blockchain app on ETM/P.",source:"@site/docs/basics/basics-accounts.md",sourceDirName:"basics",slug:"/basics/accounts",permalink:"/docs/basics/accounts",draft:!1,editUrl:"/docs/basics/basics-accounts.md",tags:[],version:"current",frontMatter:{id:"accounts",title:"What are Accounts?",sidebar_label:"Accounts",description:"Build your next blockchain app on ETM/P.",keywords:["docs","ETM/P"]},sidebar:"introduction",previous:{title:"Gas",permalink:"/docs/basics/gas"},next:{title:"Importing an Account to Metamask",permalink:"/docs/basics/import-account-to-metamask"}},l={},p=[{value:"<strong>\ud83d\udcdcResources</strong>",id:"resources",level:3}],d={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The global state of Ethereum is comprised of accounts that interact with one another through a message-passing framework. The most basic interaction is that of sending some value - like etmp tokens, ether - the native cryptocurrency of Ethereum blockchain.\nEach account is identified by a 20 byte hex identifier which is called an address - this is generated from public key of the account.\nThere exist two types of accounts:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Externally Owned Account - An account controlled by a private key, and if you own the private key associated with the account you have the ability to send tokens and messages from it."),(0,a.kt)("li",{parentName:"ol"},"Contract Owned Account - An account that has an associated smart contract code with it and its private key is not owned by anyone")),(0,a.kt)("p",null,"These can be differentiated as follows:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Externally Owned Accounts")," "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"can send transactions (ether transfer or trigger contract code)"),(0,a.kt)("li",{parentName:"ol"},"is controlled by private keys"),(0,a.kt)("li",{parentName:"ol"},"has no associated code")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Contract Owned Accounts")," "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"has associated code"),(0,a.kt)("li",{parentName:"ol"},"code execution is triggered by transactions or messages (calls) received from other contracts"),(0,a.kt)("li",{parentName:"ol"},"when executed - perform operations of arbitrary complexity (Turing completeness) - manipulate its own persistent storage, i.e., can have its own permanent state - can call other contracts.")),(0,a.kt)("h3",{id:"resources"},(0,a.kt)("strong",{parentName:"h3"},"\ud83d\udcdcResources")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ethereum/homestead-guide/blob/master/source/contracts-and-transactions/account-types-gas-and-transactions.rst#externally-owned-accounts-eoas"},"Read more about accounts")))}m.isMDXComponent=!0}}]);