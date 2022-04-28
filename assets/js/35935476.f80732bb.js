"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9452],{3905:function(e,n,a){a.r(n),a.d(n,{MDXContext:function(){return l},MDXProvider:function(){return s},mdx:function(){return g},useMDXComponents:function(){return u},withMDXComponents:function(){return d}});var t=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function p(){return p=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},p.apply(this,arguments)}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function c(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},p=Object.keys(e);for(t=0;t<p.length;t++)a=p[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)a=p[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=t.createContext({}),d=function(e){return function(n){var a=u(n.components);return t.createElement(e,p({},n,{components:a}))}},u=function(e){var n=t.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},s=function(e){var n=u(e.components);return t.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,p=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(a),s=r,f=d["".concat(i,".").concat(s)]||d[s]||m[s]||p;return a?t.createElement(f,o(o({ref:n},l),{},{components:a})):t.createElement(f,o({ref:n},l))}));function g(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var p=a.length,i=new Array(p);i[0]=f;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var l=2;l<p;l++)i[l]=a[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}f.displayName="MDXCreateElement"},1426:function(e,n,a){a.r(n),a.d(n,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return d},default:function(){return s}});var t=a(87462),r=a(63366),p=(a(67294),a(3905)),i=["components"],o={id:"app_packaging",title:"Application packaging",sidebar_label:"Application packaging"},c=void 0,l={unversionedId:"advanced/app_packaging",id:"version-1.0/advanced/app_packaging",title:"Application packaging",description:"Example application",source:"@site/versioned_docs/version-1.0/advanced/packaging.md",sourceDirName:"advanced",slug:"/advanced/app_packaging",permalink:"/docs/1.0/advanced/app_packaging",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.0/advanced/packaging.md",tags:[],version:"1.0",lastUpdatedBy:"P\xe1draig Brady",lastUpdatedAt:1651168846,formattedLastUpdatedAt:"4/28/2022",frontMatter:{id:"app_packaging",title:"Application packaging",sidebar_label:"Application packaging"},sidebar:"version-1.0/docs",previous:{title:"Hydra plugins",permalink:"/docs/1.0/advanced/plugins"},next:{title:"Hydra in Jupyter Notebooks",permalink:"/docs/1.0/advanced/jupyter_notebooks"}},d=[],u={toc:d};function s(e){var n=e.components,a=(0,r.Z)(e,i);return(0,p.mdx)("wrapper",(0,t.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,p.mdx)("p",null,(0,p.mdx)("a",{parentName:"p",href:"https://github.com/facebookresearch/hydra/tree/1.0_branch/examples/advanced/hydra_app_example"},(0,p.mdx)("img",{parentName:"a",src:"https://img.shields.io/badge/-Example%20application-informational",alt:"Example application"}))),(0,p.mdx)("p",null,"You can package your Hydra application along with its configuration.\nThere is a working example ",(0,p.mdx)("a",{parentName:"p",href:"https://github.com/facebookresearch/hydra/tree/1.0_branch/examples/advanced/hydra_app_example"},"here"),"."),(0,p.mdx)("p",null,"You can run it with:"),(0,p.mdx)("pre",null,(0,p.mdx)("code",{parentName:"pre",className:"language-yaml"},"$ python examples/advanced/hydra_app_example/hydra_app/main.py\ndataset:\n  name: imagenet\n  path: /datasets/imagenet\n")),(0,p.mdx)("p",null,"To install it, use:"),(0,p.mdx)("pre",null,(0,p.mdx)("code",{parentName:"pre",className:"language-text"},"$ pip install examples/advanced/hydra_app_example\n...\nSuccessfully installed hydra-app-0.1\n")),(0,p.mdx)("p",null,"Run the installed app with:"),(0,p.mdx)("pre",null,(0,p.mdx)("code",{parentName:"pre",className:"language-yaml"},"$ hydra_app\ndataset:\n  name: imagenet\n  path: /datasets/imagenet\n")),(0,p.mdx)("p",null,"The installed app will use the packaged configuration files."))}s.isMDXComponent=!0}}]);