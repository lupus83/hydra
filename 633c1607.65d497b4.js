(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{151:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return c})),n.d(e,"metadata",(function(){return u})),n.d(e,"toc",(function(){return s})),n.d(e,"default",(function(){return l}));var r=n(3),i=n(8),o=(n(0),n(266)),a=n(275),c={id:"hierarchical_static_config",title:"A hierarchical static configuration"},u={unversionedId:"tutorials/structured_config/hierarchical_static_config",id:"version-1.0/tutorials/structured_config/hierarchical_static_config",isDocsHomePage:!1,title:"A hierarchical static configuration",description:"Dataclasses can be nested and then accessed via a common root.  The entire tree is type checked.",source:"@site/versioned_docs/version-1.0/tutorials/structured_config/2_hierarchical_static_config.md",slug:"/tutorials/structured_config/hierarchical_static_config",permalink:"/docs/tutorials/structured_config/hierarchical_static_config",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/versioned_docs/version-1.0/tutorials/structured_config/2_hierarchical_static_config.md",version:"1.0",lastUpdatedBy:"Jieru Hu",lastUpdatedAt:1611343759,sidebar:"version-1.0/docs",previous:{title:"Minimal example",permalink:"/docs/tutorials/structured_config/minimal_example"},next:{title:"Config Groups",permalink:"/docs/tutorials/structured_config/config_groups"}},s=[],f={toc:s};function l(t){var e=t.components,n=Object(i.a)(t,["components"]);return Object(o.b)("wrapper",Object(r.a)({},f,n,{components:e,mdxType:"MDXLayout"}),Object(o.b)(a.a,{to:"examples/tutorials/structured_configs/2_static_complex",mdxType:"ExampleGithubLink"}),Object(o.b)("p",null,"Dataclasses can be nested and then accessed via a common root.  The entire tree is type checked."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'@dataclass\nclass MySQLConfig:\n    host: str = "localhost"\n    port: int = 3306\n\n@dataclass\nclass UserInterface:\n    title: str = "My app"\n    width: int = 1024\n    height: int = 768\n\n@dataclass\nclass MyConfig:\n    db: MySQLConfig = MySQLConfig()\n    ui: UserInterface = UserInterface()\n\ncs = ConfigStore.instance()\ncs.store(name="config", node=MyConfig)\n\n@hydra.main(config_name="config")\ndef my_app(cfg: MyConfig) -> None:\n    print(f"Title={cfg.ui.title}, size={cfg.ui.width}x{cfg.ui.height} pixels")\n\nif __name__ == "__main__":\n    my_app()\n')))}l.isMDXComponent=!0},266:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return g}));var r=n(0),i=n.n(r);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var s=i.a.createContext({}),f=function(t){var e=i.a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},l=function(t){var e=f(t.components);return i.a.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return i.a.createElement(i.a.Fragment,{},e)}},p=i.a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,a=t.parentName,s=u(t,["components","mdxType","originalType","parentName"]),l=f(n),p=r,g=l["".concat(a,".").concat(p)]||l[p]||d[p]||o;return n?i.a.createElement(g,c(c({ref:e},s),{},{components:n})):i.a.createElement(g,c({ref:e},s))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,a=new Array(o);a[0]=p;var c={};for(var u in e)hasOwnProperty.call(e,u)&&(c[u]=e[u]);c.originalType=t,c.mdxType="string"==typeof t?t:r,a[1]=c;for(var s=2;s<o;s++)a[s]=n[s];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},267:function(t,e,n){"use strict";function r(t){return!0===/^(\w*:|\/\/)/.test(t)}function i(t){return void 0!==t&&!r(t)}n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return i}))},268:function(t,e,n){"use strict";n.r(e);var r=n(11);n.d(e,"MemoryRouter",(function(){return r.d})),n.d(e,"Prompt",(function(){return r.f})),n.d(e,"Redirect",(function(){return r.g})),n.d(e,"Route",(function(){return r.h})),n.d(e,"Router",(function(){return r.i})),n.d(e,"StaticRouter",(function(){return r.j})),n.d(e,"Switch",(function(){return r.k})),n.d(e,"generatePath",(function(){return r.l})),n.d(e,"matchPath",(function(){return r.m})),n.d(e,"useHistory",(function(){return r.n})),n.d(e,"useLocation",(function(){return r.o})),n.d(e,"useParams",(function(){return r.p})),n.d(e,"useRouteMatch",(function(){return r.q})),n.d(e,"withRouter",(function(){return r.r})),n.d(e,"BrowserRouter",(function(){return r.a})),n.d(e,"HashRouter",(function(){return r.b})),n.d(e,"Link",(function(){return r.c})),n.d(e,"NavLink",(function(){return r.e}))},269:function(t,e,n){"use strict";var r=n(0),i=n.n(r),o=n(11),a=n(267),c=n(7),u=Object(r.createContext)({collectLink:function(){}}),s=n(270),f=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n};e.a=function(t){var e,n,l,d=t.isNavLink,p=t.to,g=t.href,v=t.activeClassName,h=t.isActive,m=t["data-noBrokenLinkCheck"],b=t.autoAddBaseUrl,y=void 0===b||b,O=f(t,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),D=Object(s.b)().withBaseUrl,w=Object(r.useContext)(u),j=p||g,_=Object(a.a)(j),P=null==j?void 0:j.replace("pathname://",""),x=void 0!==P?(n=P,y&&function(t){return t.startsWith("/")}(n)?D(n):n):void 0,A=Object(r.useRef)(!1),V=d?o.e:o.c,C=c.a.canUseIntersectionObserver;Object(r.useEffect)((function(){return!C&&_&&window.docusaurus.prefetch(x),function(){C&&l&&l.disconnect()}}),[x,C,_]);var E=null!==(e=null==x?void 0:x.startsWith("#"))&&void 0!==e&&e,L=!x||!_||E;return x&&_&&!E&&!m&&w.collectLink(x),L?i.a.createElement("a",Object.assign({href:x},j&&!_&&{target:"_blank",rel:"noopener noreferrer"},O)):i.a.createElement(V,Object.assign({},O,{onMouseEnter:function(){A.current||(window.docusaurus.preload(x),A.current=!0)},innerRef:function(t){var e,n;C&&t&&_&&(e=t,n=function(){window.docusaurus.prefetch(x)},(l=new window.IntersectionObserver((function(t){t.forEach((function(t){e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(l.unobserve(e),l.disconnect(),n())}))}))).observe(e))},to:x||""},d&&{isActive:h,activeClassName:v}))}},270:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return a}));var r=n(21),i=n(267);function o(){var t=Object(r.default)().siteConfig,e=(t=void 0===t?{}:t).baseUrl,n=void 0===e?"/":e,o=t.url;return{withBaseUrl:function(t,e){return function(t,e,n,r){var o=void 0===r?{}:r,a=o.forcePrependBaseUrl,c=void 0!==a&&a,u=o.absolute,s=void 0!==u&&u;if(!n)return n;if(n.startsWith("#"))return n;if(Object(i.b)(n))return n;if(c)return e+n;var f=n.startsWith(e)?n:e+n.replace(/^\//,"");return s?t+f:f}(o,n,t,e)}}}function a(t,e){return void 0===e&&(e={}),(0,o().withBaseUrl)(t,e)}},271:function(t,e,n){try{t.exports=n(272)}catch(r){t.exports={}}},272:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useDocVersionSuggestions=e.useActiveDocContext=e.useActiveVersion=e.useLatestVersion=e.useVersions=e.useActivePluginAndVersion=e.useActivePlugin=e.useDocsData=e.useAllDocsData=void 0;var r=n(268),i=n(273),o=n(274);e.useAllDocsData=function(){return i.useAllPluginInstancesData("docusaurus-plugin-content-docs")},e.useDocsData=function(t){return i.usePluginData("docusaurus-plugin-content-docs",t)},e.useActivePlugin=function(t){void 0===t&&(t={});var n=e.useAllDocsData(),i=r.useLocation().pathname;return o.getActivePlugin(n,i,t)},e.useActivePluginAndVersion=function(t){void 0===t&&(t={});var n=e.useActivePlugin(t),i=r.useLocation().pathname;if(n)return{activePlugin:n,activeVersion:o.getActiveVersion(n.pluginData,i)}},e.useVersions=function(t){return e.useDocsData(t).versions},e.useLatestVersion=function(t){var n=e.useDocsData(t);return o.getLatestVersion(n)},e.useActiveVersion=function(t){var n=e.useDocsData(t),i=r.useLocation().pathname;return o.getActiveVersion(n,i)},e.useActiveDocContext=function(t){var n=e.useDocsData(t),i=r.useLocation().pathname;return o.getActiveDocContext(n,i)},e.useDocVersionSuggestions=function(t){var n=e.useDocsData(t),i=r.useLocation().pathname;return o.getDocVersionSuggestions(n,i)}},273:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return i})),n.d(e,"useAllPluginInstancesData",(function(){return o})),n.d(e,"usePluginData",(function(){return a}));var r=n(21);function i(){var t=Object(r.default)().globalData;if(!t)throw new Error("Docusaurus global data not found");return t}function o(t){var e=i()[t];if(!e)throw new Error("Docusaurus plugin global data not found for pluginName="+t);return e}function a(t,e){void 0===e&&(e="default");var n=o(t)[e];if(!n)throw new Error("Docusaurus plugin global data not found for pluginName="+t+" and pluginId="+e);return n}},274:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getDocVersionSuggestions=e.getActiveDocContext=e.getActiveVersion=e.getLatestVersion=e.getActivePlugin=void 0;var r=n(268);e.getActivePlugin=function(t,e,n){void 0===n&&(n={});var i=Object.entries(t).find((function(t){t[0];var n=t[1];return!!r.matchPath(e,{path:n.path,exact:!1,strict:!1})})),o=i?{pluginId:i[0],pluginData:i[1]}:void 0;if(!o&&n.failfast)throw new Error("Can't find active docs plugin for pathname="+e+", while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: "+Object.values(t).map((function(t){return t.path})).join(", "));return o},e.getLatestVersion=function(t){return t.versions.find((function(t){return t.isLast}))},e.getActiveVersion=function(t,n){var i=e.getLatestVersion(t);return[].concat(t.versions.filter((function(t){return t!==i})),[i]).find((function(t){return!!r.matchPath(n,{path:t.path,exact:!1,strict:!1})}))},e.getActiveDocContext=function(t,n){var i,o,a=e.getActiveVersion(t,n),c=null==a?void 0:a.docs.find((function(t){return!!r.matchPath(n,{path:t.path,exact:!0,strict:!1})}));return{activeVersion:a,activeDoc:c,alternateDocVersions:c?(i=c.id,o={},t.versions.forEach((function(t){t.docs.forEach((function(e){e.id===i&&(o[t.name]=e)}))})),o):{}}},e.getDocVersionSuggestions=function(t,n){var r=e.getLatestVersion(t),i=e.getActiveDocContext(t,n),o=i.activeVersion!==r;return{latestDocSuggestion:o?null==i?void 0:i.alternateDocVersions[r.name]:void 0,latestVersionSuggestion:o?r:void 0}}},275:function(t,e,n){"use strict";n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return f}));var r=n(3),i=n(0),o=n.n(i),a=n(269),c=n(21),u=n(271);function s(t){return o.a.createElement(a.a,Object(r.a)({},t,{to:(e=t.to,i=Object(u.useActiveVersion)(),Object(c.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!==(n=null==i?void 0:i.name)&&void 0!==n?n:"current"]+e),target:"_blank"}));var e,n,i}function f(t){var e,n=null!==(e=t.text)&&void 0!==e?e:"Example";return o.a.createElement(s,t,o.a.createElement("img",{src:"https://img.shields.io/badge/-"+n+"-informational",alt:"Example"}))}}}]);