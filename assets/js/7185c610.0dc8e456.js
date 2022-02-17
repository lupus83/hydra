"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4421],{3905:function(n,e,t){t.r(e),t.d(e,{MDXContext:function(){return p},MDXProvider:function(){return s},mdx:function(){return f},useMDXComponents:function(){return c},withMDXComponents:function(){return d}});var r=t(67294);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(){return o=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},o.apply(this,arguments)}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function l(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function u(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var p=r.createContext({}),d=function(n){return function(e){var t=c(e.components);return r.createElement(n,o({},e,{components:t}))}},c=function(n){var e=r.useContext(p),t=e;return n&&(t="function"==typeof n?n(e):l(l({},e),n)),t},s=function(n){var e=c(n.components);return r.createElement(p.Provider,{value:e},n.children)},m={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},g=r.forwardRef((function(n,e){var t=n.components,i=n.mdxType,o=n.originalType,a=n.parentName,p=u(n,["components","mdxType","originalType","parentName"]),d=c(t),s=i,g=d["".concat(a,".").concat(s)]||d[s]||m[s]||o;return t?r.createElement(g,l(l({ref:e},p),{},{components:t})):r.createElement(g,l({ref:e},p))}));function f(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var o=t.length,a=new Array(o);a[0]=g;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=n,l.mdxType="string"==typeof n?n:i,a[1]=l;for(var p=2;p<o;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},79963:function(n,e,t){t.r(e),t.d(e,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return d},default:function(){return s}});var r=t(87462),i=t(63366),o=(t(67294),t(3905)),a=["components"],l={id:"debugging",title:"Debugging",sidebar_label:"Debugging"},u=void 0,p={unversionedId:"tutorials/basic/running_your_app/debugging",id:"version-1.1/tutorials/basic/running_your_app/debugging",title:"Debugging",description:"Hydra provides a few options to improve debuggability.",source:"@site/versioned_docs/version-1.1/tutorials/basic/running_your_app/5_debugging.md",sourceDirName:"tutorials/basic/running_your_app",slug:"/tutorials/basic/running_your_app/debugging",permalink:"/docs/tutorials/basic/running_your_app/debugging",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.1/tutorials/basic/running_your_app/5_debugging.md",tags:[],version:"1.1",lastUpdatedBy:"Tom Cuddihy",lastUpdatedAt:1645072974,formattedLastUpdatedAt:"2/17/2022",sidebarPosition:5,frontMatter:{id:"debugging",title:"Debugging",sidebar_label:"Debugging"},sidebar:"version-1.1/docs",previous:{title:"Logging",permalink:"/docs/tutorials/basic/running_your_app/logging"},next:{title:"Tab completion",permalink:"/docs/tutorials/basic/running_your_app/tab_completion"}},d=[{value:"Printing the configuration",id:"printing-the-configuration",children:[],level:3},{value:"Info",id:"info",children:[],level:3}],c={toc:d};function s(n){var e=n.components,t=(0,i.Z)(n,a);return(0,o.mdx)("wrapper",(0,r.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"Hydra provides a few options to improve debuggability."),(0,o.mdx)("h3",{id:"printing-the-configuration"},"Printing the configuration"),(0,o.mdx)("p",null,"Print the config for your app without running your function by adding ",(0,o.mdx)("inlineCode",{parentName:"p"},"--cfg")," or ",(0,o.mdx)("inlineCode",{parentName:"p"},"-c")," to the command line."),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"--cfg")," option takes one argument indicating which part of the config to print:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"job"),": Your config"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"hydra"),": Hydra's config"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"all"),": The full config, which is a union of ",(0,o.mdx)("inlineCode",{parentName:"li"},"job")," and ",(0,o.mdx)("inlineCode",{parentName:"li"},"hydra"),".")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-yaml"},"# A normal run:\n$ python my_app.py\nMySQL connecting to localhost with user=root and password=1234\n\n# just show the config without running your function:\n$ python my_app.py --cfg job\ndb:\n  host: localhost\n  user: root\n  password: 1234\n")),(0,o.mdx)("p",null,"The printed config includes any modifications done via the command line:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:"{3}","{3}":!0},"$ python my_app.py db.host=10.0.0.1 --cfg job\ndb:\n  host: 10.0.0.1\n  user: root\n  password: 1234\n")),(0,o.mdx)("p",null,"You can use --package or -p to display a subset of the configuration:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-yaml"},"python my_app.py --cfg hydra --package hydra.job\n# @package hydra.job\nname: my_app\nconfig_name: config\n...\n")),(0,o.mdx)("p",null,"By default, config interpolations are not resolved. To print resolved config use the ",(0,o.mdx)("inlineCode",{parentName:"p"},"--resolve")," flag in addition to the ",(0,o.mdx)("inlineCode",{parentName:"p"},"--cfg")," flag"),(0,o.mdx)("h3",{id:"info"},"Info"),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"--info")," flag can provide information about various aspects of Hydra and your application:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"--info all"),": Default behavior, prints everything"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"--info config"),": Prints information useful to understanding the config composition:",(0,o.mdx)("br",{parentName:"li"}),"Config Search Path, Defaults Tree, Defaults List and the final config."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"--info defaults"),": Prints the Final Defaults List"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"--info defaults-tree"),": Prints the Defaults Tree"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"--info plugins"),": Prints information about installed plugins")))}s.isMDXComponent=!0}}]);