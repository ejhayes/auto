_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[47],{"0oBi":function(e,t,a){"use strict";var c=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.isDarkMode=function(){if(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches)return!0;return!1},t.useDarkMode=function(){const[e,t]=n.default.useState(!1);return(0,o.default)((()=>{const e=window.matchMedia("(prefers-color-scheme: dark)"),a=()=>{t(window.matchMedia("(prefers-color-scheme: dark)").matches)};return a(),e.addListener(a),()=>{e.removeListener(a)}}),[]),e};var n=c(a("mXGw")),o=c(a("YO29"))},"63Ad":function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},"6f/q":function(e,t,a){"use strict";var c=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=c(a("mXGw")),o=c(a("pWCa")),d=a("I08b"),l=a("GDok"),r=a("nZpd"),s=a("AFBu"),m=a("0oBi");var p=({children:e,...t})=>{const a=n.default.useState(!1);n.default.useEffect((()=>{if("undefined"!==typeof document)return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)};function e(e){"/"===e.key&&(document.getElementById("search").focus(),e.preventDefault())}}),[]);const c=(0,m.useDarkMode)();return n.default.createElement(r.MobileMenuContext.Provider,{value:t.menuState||a},n.default.createElement(o.default,null,n.default.createElement("link",{rel:"shortcut icon",media:"(prefers-color-scheme:dark)",href:(0,s.formatPath)(c?"favicon-dark.png":"favicon.png")})),n.default.createElement(d.SkipNavLink,null),n.default.createElement("div",{id:"ignite",className:"min-h-screen flex flex-col bg-white dark:bg-gray-1000"},n.default.createElement(l.NavBar,{sections:JSON.parse('["docs","blog"]'),hasHomePage:"true"}),e))};t.default=p},AFBu:function(e,t,a){"use strict";var c=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.formatPath=function(e){return n.default.join("/auto",`/${e.replace(/\.mdx$/,"")}`)},t.postFixHTML=function(e){return e;if(e.startsWith("#"))return e;if(n.default.basename(e).includes("#"))return e.replace("#",".html#");return`${e}.html`};var n=c(a("O2/E"))},C3pV:function(e,t,a){"use strict";(function(e){var c=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.Sidebar=t.SidebarActiveItem=void 0;var n=c(a("mXGw")),o=c(a("5dyF")),d=c(a("pWCa")),l=c(a("O2/E")),r=c(a("PDtE")),s=a("/FXl"),m=a("dAGg"),p=a("nZpd"),b=a("AFBu");const i=n.default.createContext({pathname:"",sidebarFileLocation:""});t.SidebarActiveItem=i;const u=({href:e,children:t})=>{const a=n.default.useContext(i),{SidebarLink:c}=(0,s.useMDXComponents)(),d=l.default.join(a.sidebarFileLocation,e);let r=e;return a.sidebarFileLocation&&(r=d,r.endsWith("/index")&&(r=r.replace("/index","")),r.endsWith("/")&&(r=r.slice(0,-1))),n.default.createElement(o.default,{passHref:!0,href:(0,b.postFixHTML)(r)},n.default.createElement(c,{isActive:a.pathname.replace("/index","")===(0,b.formatPath)(r)},t))};t.Sidebar=({links:t,folder:c})=>{const[o]=n.default.useContext(p.MobileMenuContext),j=`/${c}`,O=(e=>{try{return a("f+ue")("./pages"+e+"/_sidebar.mdx").default}catch(t){try{return a("NDOZ")("./pages"+e+"/_sidebar.js").default}catch(t){}}})(j),x=(t=>{const a=(0,m.useRouter)(),c="phase-production-build"!==e.env.NEXT_PHASE&&a.pathname.includes("/auto")?l.default.relative("/auto",a.pathname):l.default.relative("/",a.pathname);let n=t.find((e=>e.__resourcePath.replace(".mdx","")===c));return n||(n=t.find((e=>{const t=e.__resourcePath.replace(".mdx","");return t.endsWith("index")&&a.pathname.includes(t.replace("/index",""))}))),{title:n.title||"auto",pathname:(0,b.formatPath)(n.__resourcePath)}})(t),{SidebarItemWrapper:E,SidebarLink:y,SidebarTitle:g,SidebarDivider:N,SidebarList:f,Sidebar:h,...v}=(0,s.useMDXComponents)();return n.default.createElement(i.Provider,{value:{...x,sidebarFileLocation:O?j:""}},n.default.createElement(s.MDXProvider,{components:{...v,li:E,ul:f,a:u,p:g,hr:N}},n.default.createElement(d.default,null,n.default.createElement("title",null,x.title.replace(/\\`/g,"`"))),n.default.createElement(h,{className:(0,r.default)(!o&&"hidden","lg:block")},O?n.default.createElement(O,null):n.default.createElement(f,null,t.map((e=>n.default.createElement(E,{key:e.__resourcePath},n.default.createElement(u,{href:e.__resourcePath},e.title))))))))}}).call(this,a("5IsQ"))},GDok:function(e,t,a){"use strict";var c=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.NavBar=void 0;var n=c(a("8VmE")),o=c(a("mXGw")),d=c(a("5dyF")),l=a("V5Fo"),r=a("/FXl"),s=c(a("PDtE")),m=a("nZpd"),p=a("AFBu");const b=({className:e,...t})=>o.default.createElement("svg",(0,n.default)({className:(0,s.default)("fill-current w-5 h-5",e),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},t),o.default.createElement("path",{d:"M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0"})),i=()=>{const{SearchInput:e}=(0,r.useMDXComponents)();return o.default.createElement("div",{className:"h-full flex items-center w-full lg:w-auto lg:flex-1 lg:mr-4 lg:pr-4"},o.default.createElement(e,null))};t.NavBar=({sections:e,hasHomePage:t})=>{const[a,c]=o.default.useContext(m.MobileMenuContext),{Logo:n,NavBarWrapper:s,NavBar:u,NavBarItem:j,MobileMenuButton:O}=(0,r.useMDXComponents)();return o.default.createElement(o.default.Fragment,null,o.default.createElement(s,null,o.default.createElement(u,null,t?o.default.createElement(d.default,{passHref:!0,href:(0,p.postFixHTML)("/index")},o.default.createElement(n,null)):o.default.createElement(n,null),o.default.createElement("div",{className:"w-full h-full flex items-center lg:flex flex-1 lg:pl-12 lg:pr-6 lg:mx-auto"},o.default.createElement(i,null),o.default.createElement(O,{open:a,setOpen:c,className:"lg:hidden"}),o.default.createElement("div",{className:"hidden lg:flex h-full"},e.map((e=>o.default.createElement(d.default,{passHref:!0,key:e,href:(0,p.postFixHTML)(`/${e}`)},o.default.createElement(j,null,(0,l.titleCase)(e))))),o.default.createElement(j,{href:"https://github.com/intuit/auto",target:"_blank","aria-label":"Open on GitHub"},o.default.createElement(b,null)))))),a&&o.default.createElement("div",{className:"lg:hidden"},e.map((e=>o.default.createElement(d.default,{passHref:!0,key:e,href:(0,p.postFixHTML)(`/${e}`)},o.default.createElement(j,null,(0,l.titleCase)(e))))),o.default.createElement(j,{href:"https://github.com/intuit/auto",target:"_blank"},o.default.createElement(b,{className:"mr-2"}),"Open on GitHub")))}},TJl4:function(e,t,a){"use strict";var c=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.OpenGraphTags=void 0;var n=c(a("mXGw")),o=a("dAGg"),d=c(a("ghLh")),l=c(a("pWCa"));t.OpenGraphTags=({title:e,description:t,image:a})=>{const c=(0,o.useRouter)(),r=(0,d.default)("https://intuit.github.io/auto",c.pathname);return n.default.createElement(l.default,null,n.default.createElement("title",null,e),t&&n.default.createElement("meta",{name:"description",content:t}),n.default.createElement("meta",{property:"og:url",content:r}),n.default.createElement("meta",{property:"og:type",content:"website"}),n.default.createElement("meta",{property:"og:title",content:e}),t&&n.default.createElement("meta",{name:"og:description",content:t}),a&&n.default.createElement("meta",{name:"og:image",content:a}),r&&n.default.createElement("meta",{property:"twitter:domain",content:new URL(r).hostname}),n.default.createElement("meta",{property:"twitter:url",content:r}),n.default.createElement("meta",{name:"twitter:title",content:e}),t&&n.default.createElement("meta",{name:"twitter:description",content:t}),a&&n.default.createElement("meta",{name:"twitter:image",content:a}))}},nZpd:function(e,t,a){"use strict";var c=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.MobileMenuContext=void 0;const n=c(a("mXGw")).default.createContext([!1,()=>{}]);t.MobileMenuContext=n},pbp9:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/generated/gh-pages",function(){return a("tiJW")}])},pu0P:function(e,t,a){"use strict";var c=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=c(a("mXGw")),o=c(a("O2/E")),d=a("/FXl"),l=c(a("PDtE")),r=a("I08b"),s=a("C3pV"),m=c(a("6f/q")),p=c(a("x3GE")),b=a("TJl4");const i=/([^`]*)`([^`]*)`(.*)/m;var u=({children:e,frontMatter:t})=>{const[a,c]=n.default.useState(!1),u=(0,d.useMDXComponents)(),j=t.__resourcePath.split("/")[0],O=(0,p.default)(),x=JSON.parse('["index.mdx","blog/both-worlds.mdx","blog/npm-canary-scope.mdx","blog/pr-in-progress.mdx","blog/using-shipit.mdx","blog/v8.mdx","blog/why.mdx","docs/_sidebar.mdx","docs/index.mdx","docs/build-platforms/circleci.mdx","docs/build-platforms/github-actions.mdx","docs/build-platforms/jenkins.mdx","docs/build-platforms/travis.mdx","docs/configuration/autorc.mdx","docs/configuration/non-npm.mdx","docs/configuration/plugins.mdx","docs/configuration/troubleshooting.mdx","docs/generated/all-contributors.mdx","docs/generated/brew.mdx","docs/generated/canary.mdx","docs/generated/changelog.mdx","docs/generated/chrome.mdx","docs/generated/cocoapods.mdx","docs/generated/comment.mdx","docs/generated/conventional-commits.mdx","docs/generated/crates.mdx","docs/generated/create-labels.mdx","docs/generated/defaultLabelsRenderer.mdx","docs/generated/docker.mdx","docs/generated/exec.mdx","docs/generated/first-time-contributor.mdx","docs/generated/gem.mdx","docs/generated/gh-pages.mdx","docs/generated/git-tag.mdx","docs/generated/gradle.mdx","docs/generated/info.mdx","docs/generated/init.mdx","docs/generated/jira.mdx","docs/generated/label.mdx","docs/generated/latest.mdx","docs/generated/magic-zero.mdx","docs/generated/maven.mdx","docs/generated/microsoft-teams.mdx","docs/generated/next.mdx","docs/generated/npm.mdx","docs/generated/omit-commits.mdx","docs/generated/omit-release-notes.mdx","docs/generated/pr-body-labels.mdx","docs/generated/pr-body.mdx","docs/generated/pr-check.mdx","docs/generated/pr-status.mdx","docs/generated/release.mdx","docs/generated/released.mdx","docs/generated/s3.mdx","docs/generated/sbt.mdx","docs/generated/shipit.mdx","docs/generated/slack.mdx","docs/generated/twitter.mdx","docs/generated/upload-assets.mdx","docs/generated/version.mdx","docs/generated/vscode.mdx","docs/plugins/changelog-hooks.mdx","docs/plugins/configuration-hooks.mdx","docs/plugins/hook-api-docs.mdx","docs/plugins/init-hooks.mdx","docs/plugins/log-parse-hooks.mdx","docs/plugins/release-lifecycle-hooks.mdx","docs/plugins/writing-plugins.mdx","docs/plugins/writing-publishing-plugins.mdx","docs/welcome/getting-started.mdx","docs/welcome/quick-merge.mdx"]').map((e=>o.default.relative("./",e))).filter((e=>e.startsWith(j))).map((e=>O.find((t=>t.__resourcePath===e))));return n.default.createElement(n.default.Fragment,null,n.default.createElement(b.OpenGraphTags,t),n.default.createElement(m.default,{menuState:[a,c]},n.default.createElement("div",{className:"flex-1 w-full lg:max-w-6xl mx-auto flex"},n.default.createElement(s.Sidebar,{links:x,folder:j}),n.default.createElement(r.SkipNavContent,null),n.default.createElement("main",{className:(0,l.default)("DocSearch-content","pt-8 pb-16 px-4 sm:px-6 xl:px-12 lg:mx-auto w-full","flex-1 overflow-hidden","lg:block",a&&"hidden")},t.title&&n.default.createElement(u.h1,null,function(e,t){if(!t)return;const a=[];let c=t.replace(/\\`/g,"`");for(;i.test(c);){const[,t,o,d]=c.match(i);a.push(t),a.push(n.default.createElement(e.inlineCode,null,o)),c=d}return a.push(c),n.default.createElement("div",null,a)}(u,t.title)),e))))};t.default=u},tiJW:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return m})),a.d(t,"default",(function(){return i}));var c=a("Fcif"),n=a("dV/x"),o=a("mXGw"),d=a.n(o),l=a("/FXl"),r=a("pu0P"),s=a.n(r),m=(d.a.createElement,{title:"GitHub Pages Plugin",layout:"docs",description:void 0,date:null,author:"",email:"",__resourcePath:"docs/generated/gh-pages.mdx",__scans:{}}),p={frontMatter:m},b=s.a;function i(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(l.mdx)(b,Object(c.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"Automate publishing to your gh-pages documentation website"),Object(l.mdx)("p",null,Object(l.mdx)("inlineCode",{parentName:"p"},"auto")," will push a directory to your project's ",Object(l.mdx)("inlineCode",{parentName:"p"},"gh-pages")," branch:"),Object(l.mdx)("ol",null,Object(l.mdx)("li",{parentName:"ol"},"on every release"),Object(l.mdx)("li",{parentName:"ol"},"if the ",Object(l.mdx)("inlineCode",{parentName:"li"},"documentation")," label is on the pull request")),Object(l.mdx)("p",null,Object(l.mdx)("strong",{parentName:"p"},"What is a ",Object(l.mdx)("inlineCode",{parentName:"strong"},"gh-pages")," branch?")),Object(l.mdx)("p",null,"The ",Object(l.mdx)("inlineCode",{parentName:"p"},"gh-pages")," branch is a special branch in your repository that you can use to store your built website.\nThis branch will not track any of the source files for your project, but will have things like an ",Object(l.mdx)("inlineCode",{parentName:"p"},"index.html")," and all the other files needed to render your website.\nThe benefit of this is that you don't have to store any dist files in your ",Object(l.mdx)("inlineCode",{parentName:"p"},"baseBranch"),"."),Object(l.mdx)("p",null,Object(l.mdx)("a",Object(c.a)({parentName:"p"},{href:"https://github.com/intuit/auto/tree/gh-pages"}),"Take a look at ",Object(l.mdx)("inlineCode",{parentName:"a"},"auto"),"'s ",Object(l.mdx)("inlineCode",{parentName:"a"},"gh-pages")," branch/")),Object(l.mdx)("h2",{id:"installation"},Object(l.mdx)("a",Object(c.a)({parentName:"h2"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#installation"}),"Installation")),Object(l.mdx)("p",null,"This plugin is not included with the ",Object(l.mdx)("inlineCode",{parentName:"p"},"auto")," CLI installed via NPM. To install:"),Object(l.mdx)("pre",null,Object(l.mdx)("code",Object(c.a)({parentName:"pre"},{className:"language-bash syntax-light",style:{background:"#fff"}}),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}}),"npm i --save-dev @auto-it/gh-pages"),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#6A737D"}}),"# or"),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}}),"yarn add -D @auto-it/gh-pages"),"\n"),Object(l.mdx)("code",Object(c.a)({parentName:"pre"},{className:"language-bash syntax-light syntax-dark",style:{background:"#24292e"}}),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"npm i --save-dev @auto-it/gh-pages"),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#6A737D"}}),"# or"),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"yarn add -D @auto-it/gh-pages"),"\n")),Object(l.mdx)("h2",{id:"usage"},Object(l.mdx)("a",Object(c.a)({parentName:"h2"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#usage"}),"Usage")),Object(l.mdx)("p",null,"All you need to do a provide that path to your build documentation website."),Object(l.mdx)("pre",null,Object(l.mdx)("code",Object(c.a)({parentName:"pre"},{className:"language-json syntax-light",style:{background:"#fff"}}),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}}),"{"),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}}),"  "),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#005CC5"}}),'"plugins"'),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}}),": ["),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}}),"    ["),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#032F62"}}),'"gh-pages"'),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}}),", { "),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#005CC5"}}),'"dir"'),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}}),": "),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#032F62"}}),'"./path/to/built/docs/website"'),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}})," }]"),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}}),"    "),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#6A737D"}}),"// other plugins"),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}}),"  ]"),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}}),"}"),"\n"),Object(l.mdx)("code",Object(c.a)({parentName:"pre"},{className:"language-json syntax-light syntax-dark",style:{background:"#24292e"}}),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"{"),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"  "),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#79B8FF"}}),'"plugins"'),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),": ["),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"    ["),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#9ECBFF"}}),'"gh-pages"'),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),", { "),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#79B8FF"}}),'"dir"'),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),": "),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#9ECBFF"}}),'"./path/to/built/docs/website"'),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}})," }]"),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"    "),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#6A737D"}}),"// other plugins"),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"  ]"),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"}"),"\n")),Object(l.mdx)("h3",{id:"build-your-docs"},Object(l.mdx)("a",Object(c.a)({parentName:"h3"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#build-your-docs"}),"Build Your Docs")),Object(l.mdx)("p",null,"If you also want ",Object(l.mdx)("inlineCode",{parentName:"p"},"auto")," to run the build for you docs site provide the ",Object(l.mdx)("inlineCode",{parentName:"p"},"buildCommand")," option."),Object(l.mdx)("pre",null,Object(l.mdx)("code",Object(c.a)({parentName:"pre"},{className:"language-json syntax-light",style:{background:"#fff"}}),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}}),"{"),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}}),"  "),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#005CC5"}}),'"plugins"'),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}}),": ["),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}}),"    ["),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}}),"      "),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#032F62"}}),'"gh-pages"'),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}}),","),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}}),"      {"),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}}),"        "),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#005CC5"}}),'"buildCommand"'),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}}),": "),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#032F62"}}),'"npm run build:docs"'),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}}),","),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}}),"        "),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#005CC5"}}),'"dir"'),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}}),": "),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#032F62"}}),'"./path/to/built/docs/website"'),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}}),"      }"),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}}),"    ]"),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}}),"    "),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#6A737D"}}),"// other plugins"),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}}),"  ]"),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}}),"}"),"\n"),Object(l.mdx)("code",Object(c.a)({parentName:"pre"},{className:"language-json syntax-light syntax-dark",style:{background:"#24292e"}}),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"{"),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"  "),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#79B8FF"}}),'"plugins"'),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),": ["),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"    ["),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"      "),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#9ECBFF"}}),'"gh-pages"'),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),","),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"      {"),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"        "),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#79B8FF"}}),'"buildCommand"'),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),": "),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#9ECBFF"}}),'"npm run build:docs"'),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),","),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"        "),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#79B8FF"}}),'"dir"'),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),": "),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#9ECBFF"}}),'"./path/to/built/docs/website"'),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"      }"),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"    ]"),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"    "),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#6A737D"}}),"// other plugins"),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"  ]"),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"}"),"\n")),Object(l.mdx)("p",null,"You ",Object(l.mdx)("em",{parentName:"p"},"must")," also make sure that your built website is in your ",Object(l.mdx)("inlineCode",{parentName:"p"},".gitignore"),".\nOtherwise your release will fail because of uncommitted changes."),Object(l.mdx)("p",null,Object(l.mdx)("strong",{parentName:"p"},".gitignore:")),Object(l.mdx)("pre",null,Object(l.mdx)("code",Object(c.a)({parentName:"pre"},{className:"language-sh syntax-light",style:{background:"#fff"}}),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}}),"./path/to/built/docs/website"),"\n"),Object(l.mdx)("code",Object(c.a)({parentName:"pre"},{className:"language-sh syntax-light syntax-dark",style:{background:"#24292e"}}),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"./path/to/built/docs/website"),"\n")),Object(l.mdx)("h3",{id:"pages-branch"},Object(l.mdx)("a",Object(c.a)({parentName:"h3"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#pages-branch"}),"Pages Branch")),Object(l.mdx)("p",null,"You can configure the branch ",Object(l.mdx)("inlineCode",{parentName:"p"},"auto")," pushes to with the ",Object(l.mdx)("inlineCode",{parentName:"p"},"branch")," option."),Object(l.mdx)("pre",null,Object(l.mdx)("code",Object(c.a)({parentName:"pre"},{className:"language-json syntax-light",style:{background:"#fff"}}),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}}),"{"),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}}),"  "),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#005CC5"}}),'"plugins"'),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}}),": ["),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}}),"    ["),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}}),"      "),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#032F62"}}),'"gh-pages"'),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}}),","),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}}),"      {"),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}}),"        "),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#005CC5"}}),'"branch"'),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}}),": "),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#032F62"}}),'"docs"'),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}}),","),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}}),"        "),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#005CC5"}}),'"dir"'),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}}),": "),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#032F62"}}),'"./path/to/built/docs/website"'),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}}),"      }"),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}}),"    ]"),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}}),"    "),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#6A737D"}}),"// other plugins"),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}}),"  ]"),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}}),"}"),"\n"),Object(l.mdx)("code",Object(c.a)({parentName:"pre"},{className:"language-json syntax-light syntax-dark",style:{background:"#24292e"}}),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"{"),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"  "),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#79B8FF"}}),'"plugins"'),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),": ["),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"    ["),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"      "),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#9ECBFF"}}),'"gh-pages"'),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),","),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"      {"),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"        "),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#79B8FF"}}),'"branch"'),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),": "),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#9ECBFF"}}),'"docs"'),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),","),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"        "),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#79B8FF"}}),'"dir"'),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),": "),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#9ECBFF"}}),'"./path/to/built/docs/website"'),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"      }"),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"    ]"),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"    "),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#6A737D"}}),"// other plugins"),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"  ]"),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"}"),"\n")),Object(l.mdx)("h3",{id:"documentation-label"},Object(l.mdx)("a",Object(c.a)({parentName:"h3"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#documentation-label"}),"Documentation Label")),Object(l.mdx)("p",null,"You can configure the label ",Object(l.mdx)("inlineCode",{parentName:"p"},"auto")," looks for with the ",Object(l.mdx)("inlineCode",{parentName:"p"},"label")," option."),Object(l.mdx)("pre",null,Object(l.mdx)("code",Object(c.a)({parentName:"pre"},{className:"language-json syntax-light",style:{background:"#fff"}}),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}}),"{"),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}}),"  "),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#005CC5"}}),'"plugins"'),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}}),": ["),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}}),"    ["),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}}),"      "),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#032F62"}}),'"gh-pages"'),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}}),","),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}}),"      {"),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}}),"        "),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#005CC5"}}),'"label"'),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}}),": "),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#032F62"}}),'"website"'),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}}),","),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}}),"        "),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#005CC5"}}),'"dir"'),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}}),": "),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#032F62"}}),'"./path/to/built/docs/website"'),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}}),"      }"),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}}),"    ]"),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}}),"    "),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#6A737D"}}),"// other plugins"),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}}),"  ]"),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}}),"}"),"\n"),Object(l.mdx)("code",Object(c.a)({parentName:"pre"},{className:"language-json syntax-light syntax-dark",style:{background:"#24292e"}}),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"{"),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"  "),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#79B8FF"}}),'"plugins"'),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),": ["),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"    ["),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"      "),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#9ECBFF"}}),'"gh-pages"'),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),","),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"      {"),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"        "),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#79B8FF"}}),'"label"'),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),": "),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#9ECBFF"}}),'"website"'),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),","),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"        "),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#79B8FF"}}),'"dir"'),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),": "),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#9ECBFF"}}),'"./path/to/built/docs/website"'),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"      }"),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"    ]"),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"    "),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#6A737D"}}),"// other plugins"),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"  ]"),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"}"),"\n")))}i.isMDXComponent=!0},x3GE:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;let c=[];try{const e=a("jmz1");c=e.keys().map(e)}catch(o){0}var n=()=>{try{return c}catch(o){return[]}};t.default=n}},[["pbp9",0,1,2,3,4]]]);