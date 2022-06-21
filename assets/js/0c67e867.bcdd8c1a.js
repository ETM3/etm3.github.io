"use strict";(self.webpackChunketmp=self.webpackChunketmp||[]).push([[4485],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5643:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=n(4996),l=["components"],s={id:"remix",title:"Using Remix",sidebar_label:"Using Remix",description:"Build your next blockchain app on ETM/P.",keywords:["docs","ETM/P"]},c=void 0,p={unversionedId:"develop/deploying/remix",id:"develop/deploying/remix",title:"Using Remix",description:"Build your next blockchain app on ETM/P.",source:"@site/docs/develop/deploying/remix.md",sourceDirName:"develop/deploying",slug:"/develop/deploying/remix",permalink:"/docs/develop/deploying/remix",draft:!1,editUrl:"/docs/develop/deploying/remix.md",tags:[],version:"current",frontMatter:{id:"remix",title:"Using Remix",sidebar_label:"Using Remix",description:"Build your next blockchain app on ETM/P.",keywords:["docs","ETM/P"]},sidebar:"development",previous:{title:"Getting Started",permalink:"/docs/develop/getting-started"},next:{title:"Using Truffle",permalink:"/docs/develop/deploying/truffle"}},m={},u=[{value:"Setting up Remix IDE",id:"setting-up-remix-ide",level:3},{value:"Compile Smart Contract",id:"compile-smart-contract",level:3},{value:"<strong>Flatten your solidity contract</strong>",id:"flatten-your-solidity-contract",level:2},{value:"<strong>Verifying on ETM/PScan</strong>",id:"verifying-on-etmpscan",level:2}],d={toc:u};function h(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A Hello World style starter project. Deploys a smart contract with a message, and renders it in the front-end. You can change the message using the interact panel!"),(0,o.kt)("p",null,'This dapp implements a "Hello World" style application that echoes a message passed to the contract to the front end. This tutorial is intended to be followed using the online IDE available at\xa0',(0,o.kt)("a",{parentName:"p",href:"https://remix.ethereum.org/"},"Remix IDE"),"."),(0,o.kt)("h3",{id:"setting-up-remix-ide"},"Setting up ",(0,o.kt)("a",{parentName:"h3",href:"https://remix.ethereum.org/"},"Remix IDE")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Remix IDE - an online IDE to develop smart contracts.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If you\u2019re new to Remix, You\u2019ll first need to activate two modules: Solidity Compiler and Deploy and Run Transactions.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"search for 'Solidity Compiler' and 'Deploy and Run Transactions' plugins in the plugin tab in Remix"),(0,o.kt)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},(0,o.kt)("img",{src:(0,i.Z)("static/img/helloworld/search-plugins.png"),alt:"RemixIDE_Step1"}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Activate the two plugins"),(0,o.kt)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},(0,o.kt)("img",{src:(0,i.Z)("img/helloworld/add-plugins.png"),alt:"RemixIDE_Step1"}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Select Solidity Environment"),(0,o.kt)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},(0,o.kt)("img",{src:(0,i.Z)("img/helloworld/RemixIDE_Step1.png"),alt:"RemixIDE_Step1"}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("img",{src:(0,i.Z)("img/helloworld/Screenshot_2020-02-14_at_12.52.45_PM.png"),alt:"RemixIDE_Step2"}),"Go to File Explorers, And Create a new file ",(0,o.kt)("img",{src:(0,i.Z)("img/helloworld/Screenshot_2020-02-14_at_12.51.59_PM.png")}),", Name it HelloWorld.sol"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Copy/Paste the Smart contract below into the newly created file ",(0,o.kt)("inlineCode",{parentName:"p"},"HelloWorld.sol")))),(0,o.kt)("h1",{id:"the-smart-contract"},(0,o.kt)("strong",{parentName:"h1"},"The smart contract")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="HelloWorld.sol"',title:'"HelloWorld.sol"'},'// Specifies that the source code is for a version\n// of Solidity greater than 0.5.10\npragma solidity ^0.5.10;\n\n// A contract is a collection of functions and data (its state)\n// that resides at a specific address on the Ethereum blockchain.\ncontract HelloWorld {\n\n    // The keyword "public" makes variables accessible from outside a contract\n    // and creates a function that other contracts or SDKs can call to access the value\n    string public message;\n\n    // A special function only run during the creation of the contract\n    constructor(string memory initMessage) public {\n        // Takes a string value and stores the value in the memory data storage area,\n        // setting `message` to that value\n        message = initMessage;\n    }\n\n    // A publicly accessible function that takes a string as a parameter\n    // and updates `message`\n    function update(string memory newMessage) public {\n        message = newMessage;\n    }\n}\n')),(0,o.kt)("p",null,"The first line,\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"pragma solidity ^0.5.10"),"\xa0specifies that the source code is for a Solidity version greater than 0.5.10.\xa0",(0,o.kt)("a",{parentName:"p",href:"https://solidity.readthedocs.io/en/latest/layout-of-source-files.html#pragma"},"Pragmas"),"\xa0are common instructions for compilers about how to treat the source code (e.g., pragma once)."),(0,o.kt)("p",null,"A contract in the sense of Solidity is a collection of code (its functions) and data (its state) that resides at a specific address on the Ethereum blockchain. The line\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"string public message"),"\xa0declares a public state variable called\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"message"),"\xa0of type\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"string"),". You can think of it as a single slot in a database that you can query and alter by calling functions of the code that manages the database. The keyword public automatically generates a function that allows you to access the current value of the state variable from outside of the contract. Without this keyword, other contracts have no way to access the variable."),(0,o.kt)("p",null,"The\xa0",(0,o.kt)("a",{parentName:"p",href:"https://solidity.readthedocs.io/en/latest/contracts.html#constructor"},"constructor"),"\xa0is a special function run during the creation of the contract and cannot be called afterward. In this case, it takes a string value\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"initMessage"),", stores the value in the\xa0",(0,o.kt)("a",{parentName:"p",href:"https://solidity.readthedocs.io/en/latest/introduction-to-smart-contracts.html#storage-memory-and-the-stack"},"memory"),"\xa0data storage area, and sets\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"message"),"\xa0to that value."),(0,o.kt)("p",null,"The\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"string public message"),"\xa0function is another public function that is similar to the constructor, taking a string as a parameter, and updating the\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"message"),"\xa0variable."),(0,o.kt)("h3",{id:"compile-smart-contract"},"Compile Smart Contract"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("img",{src:(0,i.Z)("img/helloworld/Screenshot_2020-02-14_at_1.00.03_PM.png")}),"Go to Solidity Compiler"),(0,o.kt)("li",{parentName:"ul"},"Select Compiler Version to 0.5.10"),(0,o.kt)("li",{parentName:"ul"},"Now, ",(0,o.kt)("inlineCode",{parentName:"li"},"Compile HelloWorld.sol")),(0,o.kt)("li",{parentName:"ul"},"After Successful Compilation, it will show ",(0,o.kt)("img",{src:(0,i.Z)("img/helloworld/Screenshot_2020-02-14_at_1.08.22_PM.png")})),(0,o.kt)("li",{parentName:"ul"},"Now, We have to deploy our smart contract on ETM/P Network. For that, we have to connect to web3 world, this can be done by using any of the services like Metamask, Brave, Portis etc. We will be using Metamask. Please follow this ",(0,o.kt)("a",{parentName:"li",href:"/docs/develop/metamask/hello"},"tutorial to setup a Metamask Account"),"."),(0,o.kt)("li",{parentName:"ul"},"Open Metamask and select Custom RPC from the networks dropdown")),(0,o.kt)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},(0,o.kt)("img",{src:(0,i.Z)("img/helloworld/metamask-custom-rpc.png"),alt:"RemixIDE_Step1"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Put in a Network name - \u201cETM/P Testnet\u201d")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'In URL field you can add the URL as "',(0,o.kt)("a",{parentName:"p",href:"https://testnet-rpc.etm.network%22"},'https://testnet-rpc.etm.network"'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Enter the Chain ID: 80001")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'(Optional Fields) Symbol: "maticmum" and Block Explorer URL: "',(0,o.kt)("a",{parentName:"p",href:"https://testnet.etmscan.network%22"},'https://testnet.etmscan.network"')),(0,o.kt)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},(0,o.kt)("img",{src:(0,i.Z)("img/helloworld/metamask_mumbai_setup.png"),alt:"RemixIDE_Step1"}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Go ahead and click save")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Copy your address from Metamask"),(0,o.kt)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},(0,o.kt)("img",{src:(0,i.Z)("img/helloworld/Screenshot_2020-01-09_at_1.24.49_PM.png"),alt:"RemixIDE_Step1"}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Head over to ",(0,o.kt)("a",{parentName:"p",href:"https://faucet.polygon.technology/"},"Faucet")," and request test ether - you will need this pay for gas on ETM/P.\nSelect 'Mumbai' as the network and 'ETM/P Token' as the token in the faucet")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Now, let's Deploy the Smart Contract on ETM/P Network")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Select Injected Web3 in the Environment dropdown and your contract"))),(0,o.kt)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},(0,o.kt)("img",{src:(0,i.Z)("img/helloworld/Screenshot_2020-02-14_at_1.39.04_PM.png"),alt:"RemixIDE_Step1"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Accept the Connection Request!")),(0,o.kt)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},(0,o.kt)("img",{src:(0,i.Z)("img/helloworld/Screenshot_2020-02-14_at_1.59.10_PM.png"),alt:"RemixIDE_Step1"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Once Metamask is connected to Remix, the \u2018Deploy\u2019 transaction would generate another metamask popup that requires transaction confirmation.")),(0,o.kt)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},(0,o.kt)("img",{src:(0,i.Z)("img/helloworld/Screenshot_2020-02-14_at_1.45.23_PM.png"),alt:"RemixIDE_Step1"})),"**Congratulations!**\xa0You have successfully deployed HelloWorld Smart Contract. Now you can interact with the Smart Contract. Check the deployment status here: https://testnet.etmscan.network",(0,o.kt)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},(0,o.kt)("img",{src:(0,i.Z)("img/helloworld/Screenshot_2020-02-14_at_2.00.19_PM.png"),alt:"RemixIDE_Step1"})),"# **Verifying your Contracts on ETM/PScan**",(0,o.kt)("p",null,"The first and foremost step is to flatten the solidity contract into a single file."),(0,o.kt)("h2",{id:"flatten-your-solidity-contract"},(0,o.kt)("strong",{parentName:"h2"},"Flatten your solidity contract")),(0,o.kt)("p",null,"Install ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nomiclabs/truffle-flattener"},"truffle-flattener")," or ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/RyuuGan/sol-merger"},"sol-merger")),(0,o.kt)("p",null,"Flatten using command"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},'sol-merger \\"./contracts/*.sol\\" ./build')),(0,o.kt)("h2",{id:"verifying-on-etmpscan"},(0,o.kt)("strong",{parentName:"h2"},"Verifying on ETM/PScan")),(0,o.kt)("p",null,"Navigate to your contract's polygonscan page and then click verify and publish"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Select ",(0,o.kt)("inlineCode",{parentName:"li"},"Solidity (Single File)")," in compiler type"),(0,o.kt)("li",{parentName:"ul"},"Select appropriate compiler version"),(0,o.kt)("li",{parentName:"ul"},"Choose the license type of your contract")),(0,o.kt)("p",null,"Onto the next section, paste your flattended contract here."),(0,o.kt)("p",null,"If you had enabled optimization then adjust the  ",(0,o.kt)("inlineCode",{parentName:"p"},"optimization")," section accordingly."),(0,o.kt)("p",null,"Constructor arguments should have been filled in automatically, if not, they can be retrieved from the trailing bytes of the deployment transaction, they resemble something like ",(0,o.kt)("inlineCode",{parentName:"p"},"000000000000000000000000a6fa4fb5f76172d178d61b04b0ecd319c5d1c0aa")),(0,o.kt)("p",null,"That's it, you are done.  \ud83c\udf89"))}h.isMDXComponent=!0}}]);