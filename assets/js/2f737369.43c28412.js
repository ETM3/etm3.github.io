"use strict";(self.webpackChunketmp=self.webpackChunketmp||[]).push([[790],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),h=o,m=d["".concat(p,".").concat(h)]||d[h]||u[h]||a;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1507:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),l=["components"],i={id:"hardhat",title:"Using Hardhat",description:"Build your next blockchain app on ETM/P.",keywords:["docs","ETM/P"]},p=void 0,s={unversionedId:"develop/deploying/hardhat",id:"develop/deploying/hardhat",title:"Using Hardhat",description:"Build your next blockchain app on ETM/P.",source:"@site/docs/develop/deploying/hardhat.md",sourceDirName:"develop/deploying",slug:"/develop/deploying/hardhat",permalink:"/docs/develop/deploying/hardhat",draft:!1,editUrl:"/docs/develop/deploying/hardhat.md",tags:[],version:"current",frontMatter:{id:"hardhat",title:"Using Hardhat",description:"Build your next blockchain app on ETM/P.",keywords:["docs","ETM/P"]},sidebar:"development",previous:{title:"Using Truffle",permalink:"/docs/develop/deploying/truffle"},next:{title:"Network",permalink:"/docs/develop/network-details/network"}},c={},u=[{value:"<strong>Setting up the development environment</strong>",id:"setting-up-the-development-environment",level:2},{value:"<strong>hardhat-config</strong>",id:"hardhat-config",level:2},{value:"<strong>Compile Smart contract file</strong>",id:"compile-smart-contract-file",level:2},{value:"<strong>Deploying on ETM/P Network</strong>",id:"deploying-on-etmp-network",level:2}],d={toc:u};function h(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"setting-up-the-development-environment"},(0,a.kt)("strong",{parentName:"h2"},"Setting up the development environment")),(0,a.kt)("p",null,"There are a few technical requirements before we start. Please install the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://nodejs.org/en/"},"Node.js v10+ LTS and npm")," (comes with Node)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://git-scm.com/"},"Git"))),(0,a.kt)("p",null,"Once we have those installed, To install hardhat, you need to create an npm project by going to an empty folder, running npm init, and following its instructions. Once your project is ready, you should run"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"$ npm install --save-dev hardhat\n")),(0,a.kt)("p",null,"To create your Hardhat project run ",(0,a.kt)("inlineCode",{parentName:"p"},"npx hardhat")," in your project folder\nLet\u2019s create the sample project and go through these steps to try out the sample task and compile, test and deploy the sample contract."),(0,a.kt)("p",null,"The sample project will ask you to install hardhat-waffle and hardhat-ethers.You can learn more about it ",(0,a.kt)("a",{parentName:"p",href:"https://hardhat.org/getting-started/#quick-start"},"in this guide")),(0,a.kt)("h2",{id:"hardhat-config"},(0,a.kt)("strong",{parentName:"h2"},"hardhat-config")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Go to hardhat.config.js"),(0,a.kt)("li",{parentName:"ul"},"Update the hardhat-config with etm3-network-crendentials."),(0,a.kt)("li",{parentName:"ul"},"create .env file in the root to store your private key")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'require("@nomiclabs/hardhat-ethers");\nconst fs = require(\'fs\');\nconst privateKey = fs.readFileSync(".secret").toString().trim();\nmodule.exports = {\n  defaultNetwork: "etm3",\n  networks: {\n    hardhat: {\n    },\n    etm3: {\n      url: "https://testnet-rpc.etm.network",\n      accounts: [process.env.PRIVATE_KEY]\n    }\n  },\n  solidity: {\n    version: "0.7.0",\n    settings: {\n      optimizer: {\n        enabled: true,\n        runs: 200\n      }\n    }\n  },\n}\n')),(0,a.kt)("h2",{id:"compile-smart-contract-file"},(0,a.kt)("strong",{parentName:"h2"},"Compile Smart contract file")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ npx hardhat compile\n")),(0,a.kt)("h2",{id:"deploying-on-etmp-network"},(0,a.kt)("strong",{parentName:"h2"},"Deploying on ETM/P Network")),(0,a.kt)("p",null,"Run this command in root of the project directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ npx hardhat run scripts/sample-script.js --network etm3\n")),(0,a.kt)("p",null,"Contract will be deployed on ETM/P's Testnet, it look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"Compilation finished successfully\nGreeter deployed to: 0xfaFfCAD549BAA6110c5Cc03976d9383AcE90bdBE\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Remember your address would differ, Above is just to provide an idea of structure.\n",(0,a.kt)("strong",{parentName:"p"},"Congratulations!")," You have successfully deployed Greeter Smart Contract. Now you can interact with the Smart Contract.")),(0,a.kt)("p",null,"You can check the deployment status here: ",(0,a.kt)("a",{parentName:"p",href:"https://testnet.etmscan.network"},"https://testnet.etmscan.network")))}h.isMDXComponent=!0}}]);