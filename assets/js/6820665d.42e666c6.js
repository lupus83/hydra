"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5514],{3905:function(e,t,n){n.r(t),n.d(t,{MDXContext:function(){return p},MDXProvider:function(){return d},mdx:function(){return b},useMDXComponents:function(){return u},withMDXComponents:function(){return s}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){return function(t){var n=u(t.components);return r.createElement(e,i({},t,{components:n}))}},u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),d=o,f=s["".concat(a,".").concat(d)]||s[d]||m[d]||i;return n?r.createElement(f,c(c({ref:t},p),{},{components:n})):r.createElement(f,c({ref:t},p))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},19138:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(67294);function o(e){var t=(0,r.useRef)(null),n=(0,r.useRef)("undefined"!=typeof document?document.createElement("script"):null);return(0,r.useEffect)((function(){t.current.appendChild(n.current)}),[]),(0,r.useEffect)((function(){for(var t in e)e.hasOwnProperty(t)&&(n.current[t]=e[t])})),r.createElement("div",{ref:t})}},23920:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=n(19138),c=["components"],l={id:"tab_completion",title:"Tab completion",sidebar_label:"Tab completion"},p=void 0,s={unversionedId:"tutorials/basic/running_your_app/tab_completion",id:"version-1.1/tutorials/basic/running_your_app/tab_completion",title:"Tab completion",description:"Tab completion can complete config groups, config nodes and values.",source:"@site/versioned_docs/version-1.1/tutorials/basic/running_your_app/6_tab_completion.md",sourceDirName:"tutorials/basic/running_your_app",slug:"/tutorials/basic/running_your_app/tab_completion",permalink:"/docs/tutorials/basic/running_your_app/tab_completion",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.1/tutorials/basic/running_your_app/6_tab_completion.md",tags:[],version:"1.1",lastUpdatedBy:"P\xe1draig Brady",lastUpdatedAt:1651168846,formattedLastUpdatedAt:"4/28/2022",sidebarPosition:6,frontMatter:{id:"tab_completion",title:"Tab completion",sidebar_label:"Tab completion"},sidebar:"version-1.1/docs",previous:{title:"Debugging",permalink:"/docs/tutorials/basic/running_your_app/debugging"},next:{title:"Introduction to Structured Configs",permalink:"/docs/tutorials/structured_config/intro"}},u=[{value:"Install tab completion",id:"install-tab-completion",children:[{value:"Zsh instructions",id:"zsh-instructions",children:[],level:4}],level:3}],d={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,c);return(0,i.mdx)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"Tab completion can complete config groups, config nodes and values.\nTo complete paths, start them with ",(0,i.mdx)("inlineCode",{parentName:"p"},"/")," or ",(0,i.mdx)("inlineCode",{parentName:"p"},"./"),"."),(0,i.mdx)("p",null,"See this short video demonstration of tab completion:"),(0,i.mdx)(a.Z,{id:"asciicast-272604",src:"https://asciinema.org/a/272604.js",async:!0,mdxType:"Script"}),(0,i.mdx)("h3",{id:"install-tab-completion"},"Install tab completion"),(0,i.mdx)("p",null,"Get the exact command to install the completion from ",(0,i.mdx)("inlineCode",{parentName:"p"},"--hydra-help"),".\nCurrently, Bash, zsh and Fish are supported.",(0,i.mdx)("br",{parentName:"p"}),"\n","We are relying on the community to implement tab completion plugins for additional shells."),(0,i.mdx)("p",null,"Fish support requires version >= 3.1.2.\nPrevious versions will work but add an extra space after ",(0,i.mdx)("inlineCode",{parentName:"p"},"."),"."),(0,i.mdx)("h4",{id:"zsh-instructions"},"Zsh instructions"),(0,i.mdx)("p",null,"Zsh is compatible with the existing Bash shell completion by appending"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"autoload -Uz bashcompinit && bashcompinit\n")),(0,i.mdx)("p",null,"to the ",(0,i.mdx)("inlineCode",{parentName:"p"},".zshrc")," file after ",(0,i.mdx)("inlineCode",{parentName:"p"},"compinit"),", restarting the shell and then using the commands provided for Bash."))}m.isMDXComponent=!0}}]);