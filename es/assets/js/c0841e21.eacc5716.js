"use strict";(self.webpackChunkadguard_dns_knowledge_base=self.webpackChunkadguard_dns_knowledge_base||[]).push([[880],{4137:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),l=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),c=l(a),m=n,h=c["".concat(s,".").concat(m)]||c[m]||p[m]||o;return a?r.createElement(h,i(i({ref:t},u),{},{components:a})):r.createElement(h,i({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=c;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d.mdxType="string"==typeof e?e:n,i[1]=d;for(var l=2;l<o;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},4362:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return d},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return c}});var r=a(7462),n=a(3366),o=(a(7294),a(4137)),i=["components"],d={title:"Overview",sidebar_position:1},s="Private AdGuard DNS",l={unversionedId:"private-dns/overview",id:"private-dns/overview",isDocsHomePage:!1,title:"Overview",description:"Private AdGuard DNS dashboard main",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/private-dns/overview.md",sourceDirName:"private-dns",slug:"/private-dns/overview",permalink:"/KnowledgeBaseDNS/es/private-dns/overview",editUrl:"https://github.com/AdguardTeam/KnowledgeBaseDNS/edit/master/docs/private-dns/overview.md",version:"current",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_position:1},sidebar:"sidebar",previous:{title:"How to flush DNS cache",permalink:"/KnowledgeBaseDNS/es/public-dns/solving-problems/how-to-flush-dns-cache"},next:{title:"Private AdGuard DNS beta test",permalink:"/KnowledgeBaseDNS/es/miscellaneous/beta-testing"}},u=[{value:"What is Private AdGuard DNS",id:"what-is-private-adguard-dns",children:[]},{value:"Why Private AdGuard DNS is needed",id:"why-private-adguard-dns-is-needed",children:[]},{value:"The difference between Private and Public AdGuard DNS",id:"the-difference-between-private-and-public-adguard-dns",children:[]},{value:"How to set up Private AdGuard DNS",id:"how-to-set-up-private-adguard-dns",children:[]},{value:"Private AdGuard DNS features",id:"private-adguard-dns-features",children:[]}],p={toc:u};function c(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"private-adguard-dns"},"Private AdGuard DNS"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adguard.com/public/Adguard/Blog/private_adguard_dns/main.png",alt:"Private AdGuard DNS dashboard main"})),(0,o.kt)("h2",{id:"what-is-private-adguard-dns"},"What is Private AdGuard DNS"),(0,o.kt)("p",null,"Private AdGuard DNS is a DNS server that, in addition to benefits of a public DNS server (such as traffic encryption and domain blocklists), provides features like flexible customization, DNS statistics and parental control and is easily managed through a handy dashboard."),(0,o.kt)("h2",{id:"why-private-adguard-dns-is-needed"},"Why Private AdGuard DNS is needed"),(0,o.kt)("p",null,"Today, you can connect anything to the Internet: TVs, refrigerators, smart bulbs, or speakers. But along with the undeniable conveniences you get trackers and ads. A simple browser-based ad blocker will not protect you in this case, but AdGuard DNS, which you can set up to filter traffic, block content and trackers, has a system-wide effect."),(0,o.kt)("p",null,"We already have ",(0,o.kt)("a",{parentName:"p",href:"/KnowledgeBaseDNS/es/public-dns/overview"},"public AdGuard DNS")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/AdguardTeam/AdGuardHome"},"AdGuard Home"),". These solutions work fine for some users, but for others, the public AdGuard DNS lacks the flexibility of configuration, while the AdGuard Home lacks simplicity. That's where private AdGuard DNS comes into play. It has the best of both worlds: it offers customizability, control and information - all through a simple easy-to-use dashboard."),(0,o.kt)("h2",{id:"the-difference-between-private-and-public-adguard-dns"},"The difference between Private and Public AdGuard DNS"),(0,o.kt)("p",null,"Here is a simple comparison of features available in Public AdGuard DNS and Private AdGuard DNS servers."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Public AdGuard DNS"),(0,o.kt)("th",{parentName:"tr",align:null},"Private AdGuard DNS"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"DNS traffic encryption"),(0,o.kt)("td",{parentName:"tr",align:null},"DNS traffic encryption")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Pre-determined domain blocklists"),(0,o.kt)("td",{parentName:"tr",align:null},"Customizable domain blocklists")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"-"),(0,o.kt)("td",{parentName:"tr",align:null},"Custom DNS filtering rules with import/export feature")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"-"),(0,o.kt)("td",{parentName:"tr",align:null},"Request statistics (see where do your DNS requests go: which countries, which companies etc.)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"-"),(0,o.kt)("td",{parentName:"tr",align:null},"Detailed query log")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"-"),(0,o.kt)("td",{parentName:"tr",align:null},"Parental control")))),(0,o.kt)("h2",{id:"how-to-set-up-private-adguard-dns"},"How to set up Private AdGuard DNS"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to your ",(0,o.kt)("a",{parentName:"li",href:"https://adguard-dns.io/dashboard/"},"AdGuard DNS dashboard")," (if not logged in, log in using your AdGuard account)"),(0,o.kt)("li",{parentName:"ol"},"Click \u201cConnect device\u201d and follow on-screen instructions")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Supported platforms: - Android - iOS - Windows - Mac - Linux - Routers - Gaming consoles")),(0,o.kt)("h2",{id:"private-adguard-dns-features"},"Private AdGuard DNS features"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Blocklists management")),(0,o.kt)("p",null,'With "Blocklists" feature you can set which domains you want to block and which you don\'t. \u0421hoose from wide variety of blocklists for different purposes.'),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adguard.com/public/Adguard/Blog/private_adguard_dns/blocklists.png",alt:"Private AdGuard DNS dashboard blocklists"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"User rules")),(0,o.kt)("p",null,"For times when pre-installed ",(0,o.kt)("em",{parentName:"p"},"Blocklists"),' with thousands of rules are not enough, we have a handy function called "User rules". Here you can add custom rules manually to block/unblock a certain domain or import custom rules lists (check out ',(0,o.kt)("a",{parentName:"p",href:"/KnowledgeBaseDNS/es/general/dns-filtering-syntax"},"DNS filtering rules syntax"),"). You can export the lists."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adguard.com/public/Adguard/Blog/private_adguard_dns/import.png",alt:"Private AdGuard DNS dashboard user rules"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Statistics")),(0,o.kt)("p",null,'In "Statistics" tab you can see all the summarized statistics on DNS queries made by devices connected to your Private AdGuard  DNS. It shows the total number and geography of requests, the number of blocked requests, the list of companies the requests were addressed to, requests types and top requested domains.'),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adguard.com/public/Adguard/Blog/private_adguard_dns/statistics.png",alt:"Private AdGuard DNS dashboard statistics"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Traffic destination")),(0,o.kt)("p",null,"This feature shows you where DNS requests sent by your devices go. On top of seeing the map of request destinations, you can filter the information by date, device and country."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adguard.com/public/Adguard/Blog/private_adguard_dns/traffic_destination.png",alt:"Private AdGuard DNS dashboard traffic"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Companies")),(0,o.kt)("p",null,"This tab allows you to quickly check which companies send the most requests, and which companies have the most blocked requests."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adguard.com/public/Adguard/Blog/private_adguard_dns/companies.png",alt:"Private AdGuard DNS dashboard companies"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Query log")),(0,o.kt)("p",null,"This is a detailed log where you can check out the information on every single request and also sort requests by status, type, company, device, time, country."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adguard.com/public/Adguard/Blog/private_adguard_dns/query_log.png",alt:"Private AdGuard DNS dashboard query log"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Parental control")),(0,o.kt)("p",null,"To protect your child from online content you deem inappropriate, set up and activate the ",(0,o.kt)("em",{parentName:"p"},"Parental control"),' option. In addition to options such as "adult content" blocking and safe search, we\'ve added the ability to manually specify domains for blocking and set a schedule for the ',(0,o.kt)("em",{parentName:"p"},"Parental control")," to work accordingly."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adguard.com/public/Adguard/Blog/private_adguard_dns/parental_control.png",alt:"Private AdGuard DNS dashboard Parental Control"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"In case you don't have Private AdGuard DNS yet, you can ",(0,o.kt)("a",{parentName:"p",href:"https://adguard-dns.io/"},"get it on the official website"),".")))}c.isMDXComponent=!0}}]);