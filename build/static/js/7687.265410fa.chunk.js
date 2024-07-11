"use strict";(self.webpackChunkindyte=self.webpackChunkindyte||[]).push([[7687],{57687:(e,t,r)=>{r.r(t),r.d(t,{PageHeader:()=>c});r(9950);var n=r(16438),a=r(44414);const c=e=>{const{title:t,subTitle:r,routes:c,buttons:l,ghost:o,bgColor:s,className:i}=e;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{style:{backgroundColor:s||"#F4F5F7"},children:(0,a.jsx)(n.PageHeaderStyle,{style:{backgroundColor:"rgb(244, 245, 247)"},className:i,title:t,subTitle:r,breadcrumb:c&&{routes:c},extra:l,ghost:o})})})}},16438:(e,t,r)=>{r.r(t),r.d(t,{PageHeaderStyle:()=>o});var n,a=r(57528),c=r(32878),l=r(62693);const o=(0,c.Ay)(l.A)(n||(n=(0,a.A)(["\n  \n  .page-header-actions button.ant-btn-white svg {\n    width: 12px;\n    height: 12px;\n    ",": 2px;\n    color: #5f63f2;\n  }\n  i +span, svg +span, img +span {\n      ",": 6px;\n  }\n"])),(e=>{let{theme:t}=e;return t.rtl?"margin-left":"margin-right"}),(e=>{let{theme:t}=e;return t.rtl?"margin-right":"margin-left"}))},35821:(e,t,r)=>{r.d(t,{A:()=>s});var n=r(89379),a=r(9950);const c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"arrow-left",theme:"outlined"};var l=r(47484),o=function(e,t){return a.createElement(l.A,(0,n.A)((0,n.A)({},e),{},{ref:t,icon:c}))};const s=a.forwardRef(o)},8676:(e,t,r)=>{r.d(t,{A:()=>s});var n=r(89379),a=r(9950);const c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"};var l=r(47484),o=function(e,t){return a.createElement(l.A,(0,n.A)((0,n.A)({},e),{},{ref:t,icon:c}))};const s=a.forwardRef(o)},94889:(e,t,r)=>{r.d(t,{A:()=>s});var n=r(89379),a=r(9950);const c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"}}]},name:"down",theme:"outlined"};var l=r(47484),o=function(e,t){return a.createElement(l.A,(0,n.A)((0,n.A)({},e),{},{ref:t,icon:c}))};const s=a.forwardRef(o)},73414:(e,t,r)=>{r.d(t,{A:()=>w});var n=r(64467),a=r(58168),c=r(60436),l=r(48738),o=r.n(l),s=r(50604),i=r(9950),u=r(5741),m=r(69216),d=r(39156),f=r(94889),p=r(34660),v=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r},h=function(e){var t=e.prefixCls,r=e.separator,n=void 0===r?"/":r,c=e.children,l=e.menu,o=e.overlay,s=e.dropdownProps,m=v(e,["prefixCls","separator","children","menu","overlay","dropdownProps"]),d=(0,i.useContext(u.QO).getPrefixCls)("breadcrumb",t);var h;return h=function(t){if(l||o){var r=(0,a.A)({},s);return"overlay"in e&&(r.overlay=o),i.createElement(p.A,(0,a.A)({menu:l,placement:"bottom"},r),i.createElement("span",{className:"".concat(d,"-overlay-link")},t,i.createElement(f.A,null)))}return t}(h="href"in m?i.createElement("a",(0,a.A)({className:"".concat(d,"-link")},m),c):i.createElement("span",(0,a.A)({className:"".concat(d,"-link")},m),c)),void 0!==c&&null!==c?i.createElement("li",null,h,n&&i.createElement("span",{className:"".concat(d,"-separator")},n)):null};h.__ANT_BREADCRUMB_ITEM=!0;const b=h;var g=function(e){var t=e.children,r=(0,i.useContext(u.QO).getPrefixCls)("breadcrumb");return i.createElement("span",{className:"".concat(r,"-separator")},t||"/")};g.__ANT_BREADCRUMB_SEPARATOR=!0;const A=g;var E=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r};function y(e,t,r,n){var a=r.indexOf(e)===r.length-1,c=function(e,t){if(!e.breadcrumbName)return null;var r=Object.keys(t).join("|");return e.breadcrumbName.replace(new RegExp(":(".concat(r,")"),"g"),(function(e,r){return t[r]||e}))}(e,t);return a?i.createElement("span",null,c):i.createElement("a",{href:"#/".concat(n.join("/"))},c)}var x=function(e,t){return e=(e||"").replace(/^\//,""),Object.keys(t).forEach((function(r){e=e.replace(":".concat(r),t[r])})),e},N=function(e,t,r){var n=(0,c.A)(e),a=x(t||"",r);return a&&n.push(a),n},O=function(e){var t,r=e.prefixCls,c=e.separator,l=void 0===c?"/":c,f=e.style,p=e.className,v=e.routes,h=e.children,g=e.itemRender,A=void 0===g?y:g,O=e.params,w=void 0===O?{}:O,k=E(e,["prefixCls","separator","style","className","routes","children","itemRender","params"]),C=i.useContext(u.QO),P=C.getPrefixCls,j=C.direction,R=P("breadcrumb",r);if(v&&v.length>0){var B=[];t=v.map((function(e){var t,r=x(e.path,w);r&&B.push(r),e.children&&e.children.length&&(t=i.createElement(m.A,{items:e.children.map((function(e){return{key:e.path||e.breadcrumbName,label:A(e,w,v,N(B,e.path,w))}}))}));var n={separator:l};return t&&(n.overlay=t),i.createElement(b,(0,a.A)({},n,{key:r||e.breadcrumbName}),A(e,w,v,B))}))}else h&&(t=(0,s.A)(h).map((function(e,t){return e?(0,d.Ob)(e,{separator:l,key:t}):e})));var H=o()(R,(0,n.A)({},"".concat(R,"-rtl"),"rtl"===j),p);return i.createElement("nav",(0,a.A)({className:H,style:f},k),i.createElement("ol",null,t))};O.Item=b,O.Separator=A;const w=O},62693:(e,t,r)=>{r.d(t,{A:()=>E});var n=r(64467),a=r(5544),c=r(58168),l=r(35821),o=r(8676),s=r(48738),i=r.n(s),u=r(37978),m=r(79435),d=r(9950),f=r(98252),p=r(73414),v=r(5741),h=r(66075),b=r(80737),g=r(82725),A=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"ltr",n=t.title,a=t.avatar,s=t.subTitle,i=t.tags,u=t.extra,m=t.onBack,p="".concat(e,"-heading"),v=n||s||i||u;if(!v)return null;var A=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ltr";return void 0!==e.backIcon?e.backIcon:"rtl"===t?d.createElement(o.A,null):d.createElement(l.A,null)}(t,r),E=function(e,t,r){return t&&r?d.createElement(h.A,{componentName:"PageHeader"},(function(n){return d.createElement("div",{className:"".concat(e,"-back")},d.createElement(g.A,{onClick:function(e){null===r||void 0===r||r(e)},className:"".concat(e,"-back-button"),"aria-label":n.back},t))})):null}(e,A,m),y=E||a||v;return d.createElement("div",{className:p},y&&d.createElement("div",{className:"".concat(p,"-left")},E,a&&d.createElement(f.A,(0,c.A)({},a)),n&&d.createElement("span",{className:"".concat(p,"-title"),title:"string"===typeof n?n:void 0},n),s&&d.createElement("span",{className:"".concat(p,"-sub-title"),title:"string"===typeof s?s:void 0},s),i&&d.createElement("span",{className:"".concat(p,"-tags")},i)),u&&d.createElement("span",{className:"".concat(p,"-extra")},d.createElement(b.A,null,u)))};const E=function(e){var t=(0,m.A)(!1),r=(0,a.A)(t,2),l=r[0],o=r[1],s=function(e){var t=e.width;o(t<768,!0)};return d.createElement(v.TG,null,(function(t){var r,a=t.getPrefixCls,o=t.pageHeader,m=t.direction,f=e.prefixCls,v=e.style,h=e.footer,b=e.children,g=e.breadcrumb,E=e.breadcrumbRender,y=e.className,x=!0;"ghost"in e?x=e.ghost:o&&"ghost"in o&&(x=o.ghost);var N=a("page-header",f),O=(null===g||void 0===g?void 0:g.routes)?function(e){return d.createElement(p.A,(0,c.A)({},e))}(g):null,w=g&&"props"in g,k=null!==(r=null===E||void 0===E?void 0:E(e,O))&&void 0!==r?r:O,C=w?g:k,P=i()(N,y,(0,n.A)((0,n.A)((0,n.A)({"has-breadcrumb":!!C,"has-footer":!!h},"".concat(N,"-ghost"),x),"".concat(N,"-rtl"),"rtl"===m),"".concat(N,"-compact"),l));return d.createElement(u.A,{onResize:s},d.createElement("div",{className:P,style:v},C,A(N,e,m),b&&function(e,t){return d.createElement("div",{className:"".concat(e,"-content")},t)}(N,b),function(e,t){return t?d.createElement("div",{className:"".concat(e,"-footer")},t):null}(N,h)))}))}}}]);