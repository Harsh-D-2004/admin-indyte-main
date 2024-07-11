"use strict";(self.webpackChunkindyte=self.webpackChunkindyte||[]).push([[102],{70102:(e,t,r)=>{r.r(t),r.d(t,{default:()=>u});var n=r(9950),a=(r(96011),r(63593),r(69466),r(22742)),o=r(98341),c=r(62693),l=r(2557),s=r(8099),i=r(44414);function u(){const e=(0,s.useMediaQuery)("(max-width:768px)"),{id:t}=(0,o.d4)((e=>({id:e.auth.id}))),r=new a.WithMessagesStyle({width:"100%",height:"75vh",border:"2px solid #e8e8e8",background:"#fff",messageTextColor:"#5f63f2",borderRadius:"8px"}),u=new a.UsersStyle({background:"#fff",searchBorder:"2px solid #d9d9d9",searchTextColor:"#666",searchPlaceholderTextColor:"#999",titleTextColor:"5f63f2",separatorColor:"#38aecc"}),d=new a.MessageListStyle({background:"#fff"}),m=(new a.UsersConfiguration({border:"2px solid black",hideSectionSeparator:!0,showSectionHeader:!1,usersStyle:u,subtitleView:e=>(0,i.jsx)("span",{style:{color:"#347fb9",font:"400 11px Inter, sans-serif"},children:e.role})}),new a.MessageListConfiguration({messageListStyle:d})),[f,h]=(0,n.useState)(null),[p,v]=(0,n.useState)(!1),g=(new a.UIKitSettingsBuilder).setAppId("25550644a233311d").setRegion("in").setAuthKey("e5902484858a44be48566a58fda032f1043e5244").subscribePresenceForFriends().build();(0,n.useEffect)((()=>{try{a.CometChatUIKit.init(g).then((()=>{console.log("Initialization completed successfully"),v(!0)})).catch(console.error),t&&a.CometChatUIKit.getLoggedinUser().then((e=>{e||(console.log(e),a.CometChatUIKit.login(t,"e5902484858a44be48566a58fda032f1043e5244").then((()=>console.log("logged in to comet chat")))),e&&!f&&(console.log({chatUser:e}),h(e))})).catch(console.error)}catch(e){console.error({error:e})}}),[]),console.log({cometchatuser:null===f||void 0===f?void 0:f.e});new a.MessagesConfiguration({background:"linear-gradient(#b6eae1, #D2FBAD)",messageListConfiguration:m});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c.A,{title:"Conversations"}),(0,i.jsx)(l.A,{children:f&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{children:(0,i.jsx)(a.CometChatIncomingCall,{})}),(0,i.jsx)(a.CometChatConversationsWithMessages,{isMobileView:e,user:f,conversationsWithMessagesStyle:r})]})})]})}},35821:(e,t,r)=>{r.d(t,{A:()=>s});var n=r(89379),a=r(9950);const o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"arrow-left",theme:"outlined"};var c=r(47484),l=function(e,t){return a.createElement(c.A,(0,n.A)((0,n.A)({},e),{},{ref:t,icon:o}))};const s=a.forwardRef(l)},8676:(e,t,r)=>{r.d(t,{A:()=>s});var n=r(89379),a=r(9950);const o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"};var c=r(47484),l=function(e,t){return a.createElement(c.A,(0,n.A)((0,n.A)({},e),{},{ref:t,icon:o}))};const s=a.forwardRef(l)},94889:(e,t,r)=>{r.d(t,{A:()=>s});var n=r(89379),a=r(9950);const o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"}}]},name:"down",theme:"outlined"};var c=r(47484),l=function(e,t){return a.createElement(c.A,(0,n.A)((0,n.A)({},e),{},{ref:t,icon:o}))};const s=a.forwardRef(l)},73414:(e,t,r)=>{r.d(t,{A:()=>N});var n=r(64467),a=r(58168),o=r(60436),c=r(48738),l=r.n(c),s=r(50604),i=r(9950),u=r(5741),d=r(69216),m=r(39156),f=r(94889),h=r(34660),p=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r},v=function(e){var t=e.prefixCls,r=e.separator,n=void 0===r?"/":r,o=e.children,c=e.menu,l=e.overlay,s=e.dropdownProps,d=p(e,["prefixCls","separator","children","menu","overlay","dropdownProps"]),m=(0,i.useContext(u.QO).getPrefixCls)("breadcrumb",t);var v;return v=function(t){if(c||l){var r=(0,a.A)({},s);return"overlay"in e&&(r.overlay=l),i.createElement(h.A,(0,a.A)({menu:c,placement:"bottom"},r),i.createElement("span",{className:"".concat(m,"-overlay-link")},t,i.createElement(f.A,null)))}return t}(v="href"in d?i.createElement("a",(0,a.A)({className:"".concat(m,"-link")},d),o):i.createElement("span",(0,a.A)({className:"".concat(m,"-link")},d),o)),void 0!==o&&null!==o?i.createElement("li",null,v,n&&i.createElement("span",{className:"".concat(m,"-separator")},n)):null};v.__ANT_BREADCRUMB_ITEM=!0;const g=v;var b=function(e){var t=e.children,r=(0,i.useContext(u.QO).getPrefixCls)("breadcrumb");return i.createElement("span",{className:"".concat(r,"-separator")},t||"/")};b.__ANT_BREADCRUMB_SEPARATOR=!0;const A=b;var y=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r};function E(e,t,r,n){var a=r.indexOf(e)===r.length-1,o=function(e,t){if(!e.breadcrumbName)return null;var r=Object.keys(t).join("|");return e.breadcrumbName.replace(new RegExp(":(".concat(r,")"),"g"),(function(e,r){return t[r]||e}))}(e,t);return a?i.createElement("span",null,o):i.createElement("a",{href:"#/".concat(n.join("/"))},o)}var x=function(e,t){return e=(e||"").replace(/^\//,""),Object.keys(t).forEach((function(r){e=e.replace(":".concat(r),t[r])})),e},C=function(e,t,r){var n=(0,o.A)(e),a=x(t||"",r);return a&&n.push(a),n},w=function(e){var t,r=e.prefixCls,o=e.separator,c=void 0===o?"/":o,f=e.style,h=e.className,p=e.routes,v=e.children,b=e.itemRender,A=void 0===b?E:b,w=e.params,N=void 0===w?{}:w,O=y(e,["prefixCls","separator","style","className","routes","children","itemRender","params"]),k=i.useContext(u.QO),j=k.getPrefixCls,S=k.direction,P=j("breadcrumb",r);if(p&&p.length>0){var R=[];t=p.map((function(e){var t,r=x(e.path,N);r&&R.push(r),e.children&&e.children.length&&(t=i.createElement(d.A,{items:e.children.map((function(e){return{key:e.path||e.breadcrumbName,label:A(e,N,p,C(R,e.path,N))}}))}));var n={separator:c};return t&&(n.overlay=t),i.createElement(g,(0,a.A)({},n,{key:r||e.breadcrumbName}),A(e,N,p,R))}))}else v&&(t=(0,s.A)(v).map((function(e,t){return e?(0,m.Ob)(e,{separator:c,key:t}):e})));var I=l()(P,(0,n.A)({},"".concat(P,"-rtl"),"rtl"===S),h);return i.createElement("nav",(0,a.A)({className:I,style:f},O),i.createElement("ol",null,t))};w.Item=g,w.Separator=A;const N=w},62693:(e,t,r)=>{r.d(t,{A:()=>y});var n=r(64467),a=r(5544),o=r(58168),c=r(35821),l=r(8676),s=r(48738),i=r.n(s),u=r(37978),d=r(79435),m=r(9950),f=r(98252),h=r(73414),p=r(5741),v=r(66075),g=r(80737),b=r(82725),A=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"ltr",n=t.title,a=t.avatar,s=t.subTitle,i=t.tags,u=t.extra,d=t.onBack,h="".concat(e,"-heading"),p=n||s||i||u;if(!p)return null;var A=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ltr";return void 0!==e.backIcon?e.backIcon:"rtl"===t?m.createElement(l.A,null):m.createElement(c.A,null)}(t,r),y=function(e,t,r){return t&&r?m.createElement(v.A,{componentName:"PageHeader"},(function(n){return m.createElement("div",{className:"".concat(e,"-back")},m.createElement(b.A,{onClick:function(e){null===r||void 0===r||r(e)},className:"".concat(e,"-back-button"),"aria-label":n.back},t))})):null}(e,A,d),E=y||a||p;return m.createElement("div",{className:h},E&&m.createElement("div",{className:"".concat(h,"-left")},y,a&&m.createElement(f.A,(0,o.A)({},a)),n&&m.createElement("span",{className:"".concat(h,"-title"),title:"string"===typeof n?n:void 0},n),s&&m.createElement("span",{className:"".concat(h,"-sub-title"),title:"string"===typeof s?s:void 0},s),i&&m.createElement("span",{className:"".concat(h,"-tags")},i)),u&&m.createElement("span",{className:"".concat(h,"-extra")},m.createElement(g.A,null,u)))};const y=function(e){var t=(0,d.A)(!1),r=(0,a.A)(t,2),c=r[0],l=r[1],s=function(e){var t=e.width;l(t<768,!0)};return m.createElement(p.TG,null,(function(t){var r,a=t.getPrefixCls,l=t.pageHeader,d=t.direction,f=e.prefixCls,p=e.style,v=e.footer,g=e.children,b=e.breadcrumb,y=e.breadcrumbRender,E=e.className,x=!0;"ghost"in e?x=e.ghost:l&&"ghost"in l&&(x=l.ghost);var C=a("page-header",f),w=(null===b||void 0===b?void 0:b.routes)?function(e){return m.createElement(h.A,(0,o.A)({},e))}(b):null,N=b&&"props"in b,O=null!==(r=null===y||void 0===y?void 0:y(e,w))&&void 0!==r?r:w,k=N?b:O,j=i()(C,E,(0,n.A)((0,n.A)((0,n.A)({"has-breadcrumb":!!k,"has-footer":!!v},"".concat(C,"-ghost"),x),"".concat(C,"-rtl"),"rtl"===d),"".concat(C,"-compact"),c));return m.createElement(u.A,{onResize:s},m.createElement("div",{className:j,style:p},k,A(C,e,d),g&&function(e,t){return m.createElement("div",{className:"".concat(e,"-content")},t)}(C,g),function(e,t){return t?m.createElement("div",{className:"".concat(e,"-footer")},t):null}(C,v)))}))}}}]);