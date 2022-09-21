"use strict";(self.webpackChunketmp=self.webpackChunketmp||[]).push([[8352],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=l(n),h=i,m=u["".concat(c,".").concat(h)]||u[h]||d[h]||o;return n?a.createElement(m,s(s({ref:t},p),{},{components:n})):a.createElement(m,s({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=u;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:i,s[1]=r;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7966:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var a=n(7462),i=(n(7294),n(3905));const o={id:"synopsis",title:"ETM/P Synopsis",sidebar_label:"Synopsis",description:"Build your next blockchain app on ETM/P.",keywords:["docs","ETM/P"]},s=void 0,r={unversionedId:"whitepaper/synopsis",id:"whitepaper/synopsis",title:"ETM/P Synopsis",description:"Build your next blockchain app on ETM/P.",source:"@site/docs/whitepaper/whitepaper-synopsis.md",sourceDirName:"whitepaper",slug:"/whitepaper/synopsis",permalink:"/docs/whitepaper/synopsis",draft:!1,editUrl:"/docs/whitepaper/whitepaper-synopsis.md",tags:[],version:"current",frontMatter:{id:"synopsis",title:"ETM/P Synopsis",sidebar_label:"Synopsis",description:"Build your next blockchain app on ETM/P.",keywords:["docs","ETM/P"]},sidebar:"whitepaper",next:{title:"Consensus & Economic",permalink:"/docs/whitepaper/consensus_economic"}},c={},l=[],p={toc:l};function d(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(6307).Z,width:"1500",height:"500"}),"\nWe are in the age of Web3 and metaverse. Public blockchains such as\nEthereum are at the heart of the Web3 infrastructure. Good designs of\nblockchains need to balance decentralization, security and scalability.\nThis is extremely challenging and known as the blockchain Trilemma. An\nadditional feature is composability, which is essential for the\nexpansion of DeFi and GameFi applications. However, the composability\n(such as the DeFi Legos) brings additional, hard to quantify risks as\nwell as advantages. This is attested by the recent cascade of\nliquidations on crypto assets, including the Terra-Luna system. In DeFi\nsystems, high leverage exacerbates volatility leads to sharp drops in\ntoken prices and massive liquidations during market downturn, as we are\nwitnessing now. It is very timely to develop new kinds of blockchain\nsystem which benefits from the existing technology and address the new\nchallenges and risks. Robustness is a top concern for the new public\nblockchain system design."),(0,i.kt)("p",null,"We consider a new generation of blockchain as Turing-complete,\ndistributed state machine with built in consensus mechanism. It\nregisters in a temper proof way transactions, which are just transitions\nbetween computational states. Computational resources are provided by,\nused for, allocated among and paid by the participants in the system."),(0,i.kt)("p",null,"ETM (Eonothem) is a Delegated Proof of Stake consensus public\nblockchain, adapted to high output scenario of Web3 applications and\nefficient high frequency decentralized finance. With EVM compatible\nstructural design, smart contract can be easily and securely deployed in\nthe ETM/P system. This gives ETM high scalability and composability. The\nconsensus mechanism is based on the Byzantine fault tolerant consensus\n(Istanbul) with enhanced features.\n",(0,i.kt)("img",{alt:"image",src:n(3874).Z,width:"1500",height:"1002"}),"\nDelegated Proof of Stake brings more efficiency in terms of operations\nand computational resources. In each round, only 21 nodes are selected\nto process and validate transactions. However, this may lead to a\nreduction of decentralization and malicious coalition attacks on the\nsystem. To address this problem, ETM/P uses a new permutation algorithm\nbased on chaos factor and VRP (verifiable random permutation) to\nmitigate the risk of malicious nodes coalition and front running\nattacks. These risks have been persistently troublesome to DeFi\ninfrastructures."),(0,i.kt)("p",null,"At the heart of the ETM/P economic model is sustainability. It is more\nimportant than ever before, after the Luna/UST bank run, for economic\nmodels to be robust, healthy and sustainable while still attractive to\nusers. The ETM/P economic model achieves these objectives by using\nalgorithmic game theory and feedback control mechanism to enforce a mild\ninflationary monetary policy."),(0,i.kt)("p",null,'We are now at the stage of "Proterozoic": building up a complete\necosystem of decentralized platforms.'),(0,i.kt)("p",null,"We will be moving to Phanerozoic: building up ETM/P DAO (Decentralized\nAutonomous Organization).\n",(0,i.kt)("img",{alt:"image",src:n(5623).Z,width:"1500",height:"1078"})))}d.isMDXComponent=!0},6307:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/etmpLogo-f998d6d39c3799a29edb071dda62c8bc.png"},3874:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/synopsis2-a11049b83cfc5aee76399f1b8ca075d2.png"},5623:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/synopsis3-d38ae2fca0f5edf9a33662a487911519.png"}}]);