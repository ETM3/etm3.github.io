"use strict";(self.webpackChunketmp=self.webpackChunketmp||[]).push([[2333],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),m=o,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7470:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],c={id:"tokenomic",title:"Tokenomic",sidebar_label:"Tokenomic",description:"Build your next blockchain app on ETM/P.",keywords:["docs","ETM/P"]},l=void 0,s={unversionedId:"whitepaper/tokenomic",id:"whitepaper/tokenomic",title:"Tokenomic",description:"Build your next blockchain app on ETM/P.",source:"@site/docs/whitepaper/whitepaper-tokenomic.md",sourceDirName:"whitepaper",slug:"/whitepaper/tokenomic",permalink:"/docs/whitepaper/tokenomic",draft:!1,editUrl:"/docs/whitepaper/whitepaper-tokenomic.md",tags:[],version:"current",frontMatter:{id:"tokenomic",title:"Tokenomic",sidebar_label:"Tokenomic",description:"Build your next blockchain app on ETM/P.",keywords:["docs","ETM/P"]},sidebar:"whitepaper",previous:{title:"Consensus & Economic",permalink:"/docs/whitepaper/consensus_economic"},next:{title:"Chaos Factor and Verifiable Random Permutation",permalink:"/docs/whitepaper/chaosfactor"}},u={},d=[],p={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"ETM/P blockchain is designed to be an underlying economic infrastructure\nfor a Web3.0 ecosystem. It will be owned and controlled by its\nparticipants via a Decentralized Autonomous Organization (DAO).\\\nETM token is designed as a payment method as well as long-term reserve\nasset for the entire ETM/P ecosystem. It is designed to be of bounded\nvolume, scheduled inflation. It will be used also for DeFi collateral\nand participation of future protocol governance.\\\nTotal token supply 5,000,000,000\\\nStaking reward 40%\\\nEcosystem 20%\\\nETM Foundation 10%\\\nStrategic investment 20%\\\nLiquidity management 3%\\\nFounding team 7%\\\nStaking reward schedule:\\\n15% of the total staking reward is allocated in the first year, which\nincurs the inflation $$\\frac{40\\%\\times 0.15}{60\\%}=10\\%,$$ 16% of the\nremaining total staking reward is allocated in the second year, which\nincurs the inflation\n$$\\frac{40\\%\\times (1-0.15)\\times 0.16}{60\\%+40\\%\\times 0.15}=8.24\\%,$$\n17% of the remaining total staking reward is allocated in the third\nyear, which incurs the inflation\n$$\\frac{40\\%\\times (1-0.15)\\times (1-0.16)\\times 0.17}{60\\%+40\\%\\times 0.15+40\\%\\times (1-0.15)\\times 0.16}=6.796\\%,$$\nOnce the yearly inflation is fixed, the actual staking reward can be\ncalculated and distributed using our dynamic equilibrium model.\\\nThe proportion allocated to the Ecosystem, the ETM Foundation and\nStrategic investment will be released by 10% at the beginning of the\ntoken circulation. The remaining 90% will be released at a linear rate\nin 45 months. These tokens are for ecosystem development to help\nbootstrap network effects and ensure a diverse and accessible community\nover the long term. Lockup mechanism has been implemented and the\ndistributed tokens become liquid only gradually via a smart contract.\nThis is to ensure: 1. the tokens are used for building a decentralized\ncommunity with sustainable development; 2. to alleviate the downward\nprice pressure due to inflation (flatten the curve).\\\nThe liquidity management allocation will be controlled by the ETM\nfoundation and released at the beginning of the token circulation. This\nis particularly important for managing the price volatility due to\npossible wild speculations in the early phase of the project launching.\\\nThe token allocation for the founding team will be locked for 6 months\nand then released linearly in 10 months. ETM/P has been developed and\nbrought to market by a team of interdisciplinary background. The lockup\nperiod is to incentivize them to be aligned.\\"))}m.isMDXComponent=!0}}]);