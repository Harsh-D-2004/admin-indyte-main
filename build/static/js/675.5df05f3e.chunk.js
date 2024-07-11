"use strict";(self.webpackChunkindyte=self.webpackChunkindyte||[]).push([[675],{17660:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var a=n(9950),o=n(98341),r=n(93047),l=n(86170),c=n(39526),i=n(29355),s=n(44414);const u=function(){const e=(0,o.wA)(),{topSaleState:t}=(0,o.d4)((e=>({topSaleState:e.chartContent.topSaleData}))),[n,u]=(0,a.useState)({products:"year"});(0,a.useEffect)((()=>{c.topSaleGetData&&e((0,c.topSaleGetData)())}),[e]);const d=t=>{u({...n,products:t}),e((0,c.topSaleFilterData)(t))},p=[];return null!==t&&t.map((e=>{const{key:t,name:n,sold:a,revenue:o}=e;return p.push({key:t,name:n,deals:a,amount:o})})),(0,s.jsx)("div",{className:"full-width-table",children:(0,s.jsx)(i.Cards,{isbutton:(0,s.jsx)("div",{className:"card-nav",children:(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{className:"today"===n.products?"active":"deactivate",children:(0,s.jsx)(r.N_,{onClick:()=>d("today"),to:"#",children:"Today"})}),(0,s.jsx)("li",{className:"week"===n.products?"active":"deactivate",children:(0,s.jsx)(r.N_,{onClick:()=>d("week"),to:"#",children:"Week"})}),(0,s.jsx)("li",{className:"month"===n.products?"active":"deactivate",children:(0,s.jsx)(r.N_,{onClick:()=>d("month"),to:"#",children:"Month"})}),(0,s.jsx)("li",{className:"year"===n.products?"active":"deactivate",children:(0,s.jsx)(r.N_,{onClick:()=>d("year"),to:"#",children:"Year"})})]})}),title:"Sales Leaderboard",size:"large",bodypadding:"0px",children:(0,s.jsx)("div",{className:"table-bordered leaderboard-table table-responsive",children:(0,s.jsx)(l.A,{columns:[{title:"Product Name",dataIndex:"name",key:"name"},{title:"Deals",dataIndex:"deals",key:"deals"},{title:"Amount",dataIndex:"amount",key:"amount"}],dataSource:p,pagination:!1})})})})}},27373:(e,t,n)=>{function a(e){return Object.keys(e).reduce((function(t,n){return!n.startsWith("data-")&&!n.startsWith("aria-")&&"role"!==n||n.startsWith("data-__")||(t[n]=e[n]),t}),{})}n.d(t,{A:()=>a})},52765:(e,t,n)=>{n.d(t,{A:()=>w});var a=n(64467),o=n(58168),r=n(48738),l=n.n(r),c=n(14691),i=n(9950),s=n(5741),u=n(77643),d=n(60436),p=n(5544),f=n(15207),v=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(n[a[o]]=e[a[o]])}return n},m=i.createContext(null),b=function(e,t){var n=e.defaultValue,r=e.children,c=e.options,u=void 0===c?[]:c,b=e.prefixCls,y=e.className,h=e.style,C=e.onChange,x=v(e,["defaultValue","children","options","prefixCls","className","style","onChange"]),A=i.useContext(s.QO),O=A.getPrefixCls,w=A.direction,k=i.useState(x.value||n||[]),E=(0,p.A)(k,2),N=E[0],j=E[1],I=i.useState([]),S=(0,p.A)(I,2),P=S[0],M=S[1];i.useEffect((function(){"value"in x&&j(x.value||[])}),[x.value]);var _=function(){return u.map((function(e){return"string"===typeof e||"number"===typeof e?{label:e,value:e}:e}))},R=O("checkbox",b),D="".concat(R,"-group"),F=(0,f.A)(x,["value","disabled"]);u&&u.length>0&&(r=_().map((function(e){return i.createElement(g,{prefixCls:R,key:e.value.toString(),disabled:"disabled"in e?e.disabled:x.disabled,value:e.value,checked:N.includes(e.value),onChange:e.onChange,className:"".concat(D,"-item"),style:e.style},e.label)})));var L={toggleOption:function(e){var t=N.indexOf(e.value),n=(0,d.A)(N);-1===t?n.push(e.value):n.splice(t,1),"value"in x||j(n);var a=_();null===C||void 0===C||C(n.filter((function(e){return P.includes(e)})).sort((function(e,t){return a.findIndex((function(t){return t.value===e}))-a.findIndex((function(e){return e.value===t}))})))},value:N,disabled:x.disabled,name:x.name,registerValue:function(e){M((function(t){return[].concat((0,d.A)(t),[e])}))},cancelValue:function(e){M((function(t){return t.filter((function(t){return t!==e}))}))}},T=l()(D,(0,a.A)({},"".concat(D,"-rtl"),"rtl"===w),y);return i.createElement("div",(0,o.A)({className:T,style:h},F,{ref:t}),i.createElement(m.Provider,{value:L},r))},y=i.forwardRef(b);const h=i.memo(y);var C=n(19389),x=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(n[a[o]]=e[a[o]])}return n},A=function(e,t){var n,r=e.prefixCls,d=e.className,p=e.children,f=e.indeterminate,v=void 0!==f&&f,b=e.style,y=e.onMouseEnter,h=e.onMouseLeave,A=e.skipGroup,g=void 0!==A&&A,O=e.disabled,w=x(e,["prefixCls","className","children","indeterminate","style","onMouseEnter","onMouseLeave","skipGroup","disabled"]),k=i.useContext(s.QO),E=k.getPrefixCls,N=k.direction,j=i.useContext(m),I=(0,i.useContext)(u.$W).isFormItemInput,S=(0,i.useContext)(C.A),P=null!==(n=(null===j||void 0===j?void 0:j.disabled)||O)&&void 0!==n?n:S,M=i.useRef(w.value);i.useEffect((function(){null===j||void 0===j||j.registerValue(w.value)}),[]),i.useEffect((function(){if(!g)return w.value!==M.current&&(null===j||void 0===j||j.cancelValue(M.current),null===j||void 0===j||j.registerValue(w.value),M.current=w.value),function(){return null===j||void 0===j?void 0:j.cancelValue(w.value)}}),[w.value]);var _=E("checkbox",r),R=(0,o.A)({},w);j&&!g&&(R.onChange=function(){w.onChange&&w.onChange.apply(w,arguments),j.toggleOption&&j.toggleOption({label:p,value:w.value})},R.name=j.name,R.checked=j.value.includes(w.value));var D=l()((0,a.A)((0,a.A)((0,a.A)((0,a.A)((0,a.A)({},"".concat(_,"-wrapper"),!0),"".concat(_,"-rtl"),"rtl"===N),"".concat(_,"-wrapper-checked"),R.checked),"".concat(_,"-wrapper-disabled"),P),"".concat(_,"-wrapper-in-form-item"),I),d),F=l()((0,a.A)({},"".concat(_,"-indeterminate"),v)),L=v?"mixed":void 0;return i.createElement("label",{className:D,style:b,onMouseEnter:y,onMouseLeave:h},i.createElement(c.A,(0,o.A)({"aria-checked":L},R,{prefixCls:_,className:F,disabled:P,ref:t})),void 0!==p&&i.createElement("span",null,p))};const g=i.forwardRef(A);var O=g;O.Group=h,O.__ANT_CHECKBOX=!0;const w=O},84266:(e,t,n)=>{n.d(t,{Ay:()=>l,Eb:()=>c,Ng:()=>i,XO:()=>r});var a=n(9950),o=a.createContext(null),r=o.Provider;const l=o;var c=a.createContext(null),i=c.Provider},32690:(e,t,n)=>{n.d(t,{A:()=>b});var a=n(58168),o=n(64467),r=n(5544),l=n(48738),c=n.n(l),i=n(71207),s=n(9950),u=n(5741),d=n(87126),p=n(27373),f=n(84266),v=n(76166),m=s.forwardRef((function(e,t){var n=s.useContext(u.QO),l=n.getPrefixCls,m=n.direction,b=s.useContext(d.A),y=(0,i.A)(e.defaultValue,{value:e.value}),h=(0,r.A)(y,2),C=h[0],x=h[1],A=e.prefixCls,g=e.className,O=void 0===g?"":g,w=e.options,k=e.buttonStyle,E=void 0===k?"outline":k,N=e.disabled,j=e.children,I=e.size,S=e.style,P=e.id,M=e.onMouseEnter,_=e.onMouseLeave,R=e.onFocus,D=e.onBlur,F=l("radio",A),L="".concat(F,"-group"),T=j;w&&w.length>0&&(T=w.map((function(e){return"string"===typeof e||"number"===typeof e?s.createElement(v.A,{key:e.toString(),prefixCls:F,disabled:N,value:e,checked:C===e},e):s.createElement(v.A,{key:"radio-group-value-options-".concat(e.value),prefixCls:F,disabled:e.disabled||N,value:e.value,checked:C===e.value,style:e.style},e.label)})));var V=I||b,W=c()(L,"".concat(L,"-").concat(E),(0,o.A)((0,o.A)({},"".concat(L,"-").concat(V),V),"".concat(L,"-rtl"),"rtl"===m),O);return s.createElement("div",(0,a.A)({},(0,p.A)(e),{className:W,style:S,onMouseEnter:M,onMouseLeave:_,onFocus:R,onBlur:D,id:P,ref:t}),s.createElement(f.XO,{value:{onChange:function(t){var n=C,a=t.target.value;"value"in e||x(a);var o=e.onChange;o&&a!==n&&o(t)},value:C,disabled:e.disabled,name:e.name,optionType:e.optionType}},T))}));const b=s.memo(m)},24893:(e,t,n)=>{n.d(t,{Ay:()=>c});var a=n(32690),o=n(76166),r=n(98338),l=o.A;l.Button=r.A,l.Group=a.A,l.__ANT_RADIO=!0;const c=l},76166:(e,t,n)=>{n.d(t,{A:()=>b});var a=n(64467),o=n(58168),r=n(48738),l=n.n(r),c=n(14691),i=n(41929),s=n(9950),u=n(5741),d=n(19389),p=n(77643),f=n(84266),v=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(n[a[o]]=e[a[o]])}return n},m=function(e,t){var n,r,m=s.useContext(f.Ay),b=s.useContext(f.Eb),y=s.useContext(u.QO),h=y.getPrefixCls,C=y.direction,x=s.useRef(),A=(0,i.K4)(t,x),g=(0,s.useContext)(p.$W).isFormItemInput,O=e.prefixCls,w=e.className,k=e.children,E=e.style,N=v(e,["prefixCls","className","children","style"]),j=h("radio",O),I="button"===((null===m||void 0===m?void 0:m.optionType)||b)?"".concat(j,"-button"):j,S=(0,o.A)({},N),P=s.useContext(d.A);m&&(S.name=m.name,S.onChange=function(t){var n,a;null===(n=e.onChange)||void 0===n||n.call(e,t),null===(a=null===m||void 0===m?void 0:m.onChange)||void 0===a||a.call(m,t)},S.checked=e.value===m.value,S.disabled=null!==(n=S.disabled)&&void 0!==n?n:m.disabled),S.disabled=null!==(r=S.disabled)&&void 0!==r?r:P;var M=l()("".concat(I,"-wrapper"),(0,a.A)((0,a.A)((0,a.A)((0,a.A)({},"".concat(I,"-wrapper-checked"),S.checked),"".concat(I,"-wrapper-disabled"),S.disabled),"".concat(I,"-wrapper-rtl"),"rtl"===C),"".concat(I,"-wrapper-in-form-item"),g),w);return s.createElement("label",{className:M,style:E,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave},s.createElement(c.A,(0,o.A)({},S,{type:"radio",prefixCls:I,ref:A})),void 0!==k?s.createElement("span",null,k):null)};const b=s.forwardRef(m)},98338:(e,t,n)=>{n.d(t,{A:()=>u});var a=n(58168),o=n(9950),r=n(5741),l=n(84266),c=n(76166),i=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(n[a[o]]=e[a[o]])}return n},s=function(e,t){var n=o.useContext(r.QO).getPrefixCls,s=e.prefixCls,u=i(e,["prefixCls"]),d=n("radio",s);return o.createElement(l.Ng,{value:"button"},o.createElement(c.A,(0,a.A)({prefixCls:d},u,{type:"radio",ref:t})))};const u=o.forwardRef(s)},99674:(e,t,n)=>{n.d(t,{A:()=>O});var a=n(64467),o=n(58168),r=n(48738),l=n.n(r),c=n(97611),i=n(15207),s=n(9950),u=n(5741),d=n(45534),p=n(19389),f=n(87126),v=n(77643),m=n(49437),b=n(91396),y=n(15735),h=n(93457),C=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(n[a[o]]=e[a[o]])}return n},x="SECRET_COMBOBOX_MODE_DO_NOT_USE",A=function(e,t){var n,r=e.prefixCls,A=e.bordered,g=void 0===A||A,O=e.className,w=e.getPopupContainer,k=e.dropdownClassName,E=e.popupClassName,N=e.listHeight,j=void 0===N?256:N,I=e.placement,S=e.listItemHeight,P=void 0===S?32:S,M=e.size,_=e.disabled,R=e.notFoundContent,D=e.status,F=e.showArrow,L=C(e,["prefixCls","bordered","className","getPopupContainer","dropdownClassName","popupClassName","listHeight","placement","listItemHeight","size","disabled","notFoundContent","status","showArrow"]),T=s.useContext(u.QO),V=T.getPopupContainer,W=T.getPrefixCls,B=T.renderEmpty,H=T.direction,G=T.virtual,Q=T.dropdownMatchSelectWidth,z=s.useContext(f.A),X=W("select",r),$=W(),K=(0,h.RQ)(X,H),U=K.compactSize,J=K.compactItemClassnames,Y=s.useMemo((function(){var e=L.mode;if("combobox"!==e)return e===x?"combobox":e}),[L.mode]),q="multiple"===Y||"tags"===Y,Z=void 0!==F?F:L.loading||!(q||"combobox"===Y),ee=(0,s.useContext)(v.$W),te=ee.status,ne=ee.hasFeedback,ae=ee.isFormItemInput,oe=ee.feedbackIcon,re=(0,b.v)(te,D);n=void 0!==R?R:"combobox"===Y?null:(B||d.A)("Select");var le=(0,y.A)((0,o.A)((0,o.A)({},L),{multiple:q,hasFeedback:ne,feedbackIcon:oe,showArrow:Z,prefixCls:X})),ce=le.suffixIcon,ie=le.itemIcon,se=le.removeIcon,ue=le.clearIcon,de=(0,i.A)(L,["suffixIcon","itemIcon"]),pe=l()(E||k,(0,a.A)({},"".concat(X,"-dropdown-").concat(H),"rtl"===H)),fe=U||M||z,ve=s.useContext(p.A),me=null!==_&&void 0!==_?_:ve,be=l()((0,a.A)((0,a.A)((0,a.A)((0,a.A)((0,a.A)({},"".concat(X,"-lg"),"large"===fe),"".concat(X,"-sm"),"small"===fe),"".concat(X,"-rtl"),"rtl"===H),"".concat(X,"-borderless"),!g),"".concat(X,"-in-form-item"),ae),(0,b.L)(X,re,ne),J,O);return s.createElement(c.Ay,(0,o.A)({ref:t,virtual:G,dropdownMatchSelectWidth:Q},de,{transitionName:(0,m.by)($,(0,m.TL)(I),L.transitionName),listHeight:j,listItemHeight:P,mode:Y,prefixCls:X,placement:void 0!==I?I:"rtl"===H?"bottomRight":"bottomLeft",direction:H,inputIcon:ce,menuItemSelectedIcon:ie,removeIcon:se,clearIcon:ue,notFoundContent:n,className:be,getPopupContainer:w||V,dropdownClassName:pe,showArrow:ne||F,disabled:me}))},g=s.forwardRef(A);g.SECRET_COMBOBOX_MODE_DO_NOT_USE=x,g.Option=c.c$,g.OptGroup=c.JM;const O=g},14691:(e,t,n)=>{n.d(t,{A:()=>f});var a=n(58168),o=n(89379),r=n(64467),l=n(5544),c=n(80045),i=n(48738),s=n.n(i),u=n(71207),d=n(9950),p=["prefixCls","className","style","checked","disabled","defaultChecked","type","onChange"];const f=(0,d.forwardRef)((function(e,t){var n,i=e.prefixCls,f=void 0===i?"rc-checkbox":i,v=e.className,m=e.style,b=e.checked,y=e.disabled,h=e.defaultChecked,C=void 0!==h&&h,x=e.type,A=void 0===x?"checkbox":x,g=e.onChange,O=(0,c.A)(e,p),w=(0,d.useRef)(null),k=(0,u.A)(C,{value:b}),E=(0,l.A)(k,2),N=E[0],j=E[1];(0,d.useImperativeHandle)(t,(function(){return{focus:function(){var e;null===(e=w.current)||void 0===e||e.focus()},blur:function(){var e;null===(e=w.current)||void 0===e||e.blur()},input:w.current}}));var I=s()(f,v,(n={},(0,r.A)(n,"".concat(f,"-checked"),N),(0,r.A)(n,"".concat(f,"-disabled"),y),n));return d.createElement("span",{className:I,style:m},d.createElement("input",(0,a.A)({},O,{className:"".concat(f,"-input"),ref:w,onChange:function(t){y||("checked"in e||j(t.target.checked),null===g||void 0===g||g({target:(0,o.A)((0,o.A)({},e),{},{type:A,checked:t.target.checked}),stopPropagation:function(){t.stopPropagation()},preventDefault:function(){t.preventDefault()},nativeEvent:t.nativeEvent}))},disabled:y,checked:!!N,type:A})),d.createElement("span",{className:"".concat(f,"-inner")}))}))}}]);