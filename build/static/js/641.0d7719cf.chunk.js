"use strict";(self.webpackChunkindyte=self.webpackChunkindyte||[]).push([[641],{9930:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});var o=n(9950),r=n(98341),a=n(93047),l=n(86170),c=n(17298),i=n(54344),s=n(53055),u=n(39526),d=n(29355),p=n(44414);const f=function(){const e=(0,r.wA)(),{locationState:t,topMenu:n}=(0,r.d4)((e=>({locationState:e.chartContent.locationData,topMenu:e.ChangeLayoutMode.topMenu})));(0,o.useEffect)((()=>{u.locationGetData&&e((0,u.locationGetData)())}),[e]);const f=(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(a.k2,{to:"#",children:(0,p.jsx)("span",{children:"2 years"})}),(0,p.jsx)(a.k2,{to:"#",children:(0,p.jsx)("span",{children:"3 years"})}),(0,p.jsx)(a.k2,{to:"#",children:(0,p.jsx)("span",{children:"4 years"})})]}),v=[];null!==t&&t.map((e=>{const{key:t,location:n,revenue:o}=e;return v.push({key:t,location:n,revenue:o})}));const[m,h]=(0,o.useState)({coordinates:[0,0],zoom:1}),[b,x]=(0,o.useState)("");return(0,p.jsx)(s.LocationMapWrapper,{children:(0,p.jsx)("div",{className:"full-width-table",children:(0,p.jsxs)(d.Cards,{title:"Top Countries by Revenue",size:"large",more:f,children:[(0,p.jsx)("div",{className:"location-map d-flex justify-content-center",children:(0,p.jsxs)("div",{children:[(0,p.jsx)(i.A,{children:b}),(0,p.jsx)(c.ComposableMap,{"data-tip":"",projectionConfig:n?{scale:100}:{scale:window.innerWidth<=479?140:115},viewBox:"40, ".concat(n?160:window.innerWidth<=479?130:140,", 800, 290"),children:(0,p.jsxs)(c.ZoomableGroup,{zoom:m.zoom,center:m.coordinates,onMoveEnd:function(e){h(e)},children:[(0,p.jsx)(c.Geographies,{geography:"https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json",children:e=>{let{geographies:t}=e;return t.map((e=>(0,p.jsx)(c.Geography,{geography:e,onMouseEnter:()=>{const{NAME:t,POP_EST:n}=e.properties;var o;x("".concat(t," \u2014 ").concat((o=n)>1e9?"".concat(Math.round(o/1e8)/10,"Bn"):o>1e6?"".concat(Math.round(o/1e5)/10,"M"):"".concat(Math.round(o/100)/10,"K")))},onMouseLeave:()=>{x("")},fill:"#DDD",stroke:"#FFF",style:{default:{fill:"#E3E6EF",outline:"none"},hover:{fill:"rgb(95, 99, 242)",outline:"none"},pressed:{fill:"#E42",outline:"none"}}},e.rsmKey)))}}),[{markerOffset:-30,name:"Buenos Aires",coordinates:[-58.3816,-34.6037]},{markerOffset:15,name:"La Paz",coordinates:[-68.1193,-16.4897]},{markerOffset:15,name:"Quito",coordinates:[-78.4678,-.1807]},{markerOffset:-30,name:"Georgetown",coordinates:[-58.1551,6.8013]},{markerOffset:15,name:"Caracas",coordinates:[-66.9036,10.4806]},{markerOffset:15,name:"Lima",coordinates:[-77.0428,-12.0464]}].map((e=>{let{name:t,coordinates:n}=e;return(0,p.jsx)(c.Marker,{coordinates:n,children:(0,p.jsxs)("g",{id:"Ellipse_33","data-name":"Ellipse 33",fill:"#fff",stroke:"#5f63f2",strokeWidth:"6",children:[(0,p.jsx)("circle",{cx:"8",cy:"8",r:"8",stroke:"none"}),(0,p.jsx)("circle",{cx:"8",cy:"8",r:"6",fill:"none"})]})},t)}))]})}),(0,p.jsxs)("div",{className:"controls",children:[(0,p.jsx)("button",{type:"button",onClick:function(){m.zoom>=4||h((e=>({...e,zoom:2*e.zoom})))},children:(0,p.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"3",children:[(0,p.jsx)("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),(0,p.jsx)("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]})}),(0,p.jsx)("button",{type:"button",onClick:function(){m.zoom<=1||h((e=>({...e,zoom:e.zoom/2})))},children:(0,p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"3",children:(0,p.jsx)("line",{x1:"5",y1:"12",x2:"19",y2:"12"})})})]})]})}),(0,p.jsx)("div",{className:"location-table theme-2",children:(0,p.jsx)(l.A,{columns:[{title:"",dataIndex:"location",key:"location"},{title:"",dataIndex:"revenue",key:"revenue"}],dataSource:v,pagination:!1,showHeader:!1})})]})})})}},27373:(e,t,n)=>{function o(e){return Object.keys(e).reduce((function(t,n){return!n.startsWith("data-")&&!n.startsWith("aria-")&&"role"!==n||n.startsWith("data-__")||(t[n]=e[n]),t}),{})}n.d(t,{A:()=>o})},52765:(e,t,n)=>{n.d(t,{A:()=>w});var o=n(64467),r=n(58168),a=n(48738),l=n.n(a),c=n(14691),i=n(9950),s=n(5741),u=n(77643),d=n(60436),p=n(5544),f=n(15207),v=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n},m=i.createContext(null),h=function(e,t){var n=e.defaultValue,a=e.children,c=e.options,u=void 0===c?[]:c,h=e.prefixCls,b=e.className,x=e.style,y=e.onChange,g=v(e,["defaultValue","children","options","prefixCls","className","style","onChange"]),C=i.useContext(s.QO),O=C.getPrefixCls,w=C.direction,k=i.useState(g.value||n||[]),E=(0,p.A)(k,2),j=E[0],N=E[1],M=i.useState([]),I=(0,p.A)(M,2),P=I[0],S=I[1];i.useEffect((function(){"value"in g&&N(g.value||[])}),[g.value]);var _=function(){return u.map((function(e){return"string"===typeof e||"number"===typeof e?{label:e,value:e}:e}))},R=O("checkbox",h),z="".concat(R,"-group"),F=(0,f.A)(g,["value","disabled"]);u&&u.length>0&&(a=_().map((function(e){return i.createElement(A,{prefixCls:R,key:e.value.toString(),disabled:"disabled"in e?e.disabled:g.disabled,value:e.value,checked:j.includes(e.value),onChange:e.onChange,className:"".concat(z,"-item"),style:e.style},e.label)})));var L={toggleOption:function(e){var t=j.indexOf(e.value),n=(0,d.A)(j);-1===t?n.push(e.value):n.splice(t,1),"value"in g||N(n);var o=_();null===y||void 0===y||y(n.filter((function(e){return P.includes(e)})).sort((function(e,t){return o.findIndex((function(t){return t.value===e}))-o.findIndex((function(e){return e.value===t}))})))},value:j,disabled:g.disabled,name:g.name,registerValue:function(e){S((function(t){return[].concat((0,d.A)(t),[e])}))},cancelValue:function(e){S((function(t){return t.filter((function(t){return t!==e}))}))}},W=l()(z,(0,o.A)({},"".concat(z,"-rtl"),"rtl"===w),b);return i.createElement("div",(0,r.A)({className:W,style:x},F,{ref:t}),i.createElement(m.Provider,{value:L},a))},b=i.forwardRef(h);const x=i.memo(b);var y=n(19389),g=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n},C=function(e,t){var n,a=e.prefixCls,d=e.className,p=e.children,f=e.indeterminate,v=void 0!==f&&f,h=e.style,b=e.onMouseEnter,x=e.onMouseLeave,C=e.skipGroup,A=void 0!==C&&C,O=e.disabled,w=g(e,["prefixCls","className","children","indeterminate","style","onMouseEnter","onMouseLeave","skipGroup","disabled"]),k=i.useContext(s.QO),E=k.getPrefixCls,j=k.direction,N=i.useContext(m),M=(0,i.useContext)(u.$W).isFormItemInput,I=(0,i.useContext)(y.A),P=null!==(n=(null===N||void 0===N?void 0:N.disabled)||O)&&void 0!==n?n:I,S=i.useRef(w.value);i.useEffect((function(){null===N||void 0===N||N.registerValue(w.value)}),[]),i.useEffect((function(){if(!A)return w.value!==S.current&&(null===N||void 0===N||N.cancelValue(S.current),null===N||void 0===N||N.registerValue(w.value),S.current=w.value),function(){return null===N||void 0===N?void 0:N.cancelValue(w.value)}}),[w.value]);var _=E("checkbox",a),R=(0,r.A)({},w);N&&!A&&(R.onChange=function(){w.onChange&&w.onChange.apply(w,arguments),N.toggleOption&&N.toggleOption({label:p,value:w.value})},R.name=N.name,R.checked=N.value.includes(w.value));var z=l()((0,o.A)((0,o.A)((0,o.A)((0,o.A)((0,o.A)({},"".concat(_,"-wrapper"),!0),"".concat(_,"-rtl"),"rtl"===j),"".concat(_,"-wrapper-checked"),R.checked),"".concat(_,"-wrapper-disabled"),P),"".concat(_,"-wrapper-in-form-item"),M),d),F=l()((0,o.A)({},"".concat(_,"-indeterminate"),v)),L=v?"mixed":void 0;return i.createElement("label",{className:z,style:h,onMouseEnter:b,onMouseLeave:x},i.createElement(c.A,(0,r.A)({"aria-checked":L},R,{prefixCls:_,className:F,disabled:P,ref:t})),void 0!==p&&i.createElement("span",null,p))};const A=i.forwardRef(C);var O=A;O.Group=x,O.__ANT_CHECKBOX=!0;const w=O},84266:(e,t,n)=>{n.d(t,{Ay:()=>l,Eb:()=>c,Ng:()=>i,XO:()=>a});var o=n(9950),r=o.createContext(null),a=r.Provider;const l=r;var c=o.createContext(null),i=c.Provider},32690:(e,t,n)=>{n.d(t,{A:()=>h});var o=n(58168),r=n(64467),a=n(5544),l=n(48738),c=n.n(l),i=n(71207),s=n(9950),u=n(5741),d=n(87126),p=n(27373),f=n(84266),v=n(76166),m=s.forwardRef((function(e,t){var n=s.useContext(u.QO),l=n.getPrefixCls,m=n.direction,h=s.useContext(d.A),b=(0,i.A)(e.defaultValue,{value:e.value}),x=(0,a.A)(b,2),y=x[0],g=x[1],C=e.prefixCls,A=e.className,O=void 0===A?"":A,w=e.options,k=e.buttonStyle,E=void 0===k?"outline":k,j=e.disabled,N=e.children,M=e.size,I=e.style,P=e.id,S=e.onMouseEnter,_=e.onMouseLeave,R=e.onFocus,z=e.onBlur,F=l("radio",C),L="".concat(F,"-group"),W=N;w&&w.length>0&&(W=w.map((function(e){return"string"===typeof e||"number"===typeof e?s.createElement(v.A,{key:e.toString(),prefixCls:F,disabled:j,value:e,checked:y===e},e):s.createElement(v.A,{key:"radio-group-value-options-".concat(e.value),prefixCls:F,disabled:e.disabled||j,value:e.value,checked:y===e.value,style:e.style},e.label)})));var B=M||h,D=c()(L,"".concat(L,"-").concat(E),(0,r.A)((0,r.A)({},"".concat(L,"-").concat(B),B),"".concat(L,"-rtl"),"rtl"===m),O);return s.createElement("div",(0,o.A)({},(0,p.A)(e),{className:D,style:I,onMouseEnter:S,onMouseLeave:_,onFocus:R,onBlur:z,id:P,ref:t}),s.createElement(f.XO,{value:{onChange:function(t){var n=y,o=t.target.value;"value"in e||g(o);var r=e.onChange;r&&o!==n&&r(t)},value:y,disabled:e.disabled,name:e.name,optionType:e.optionType}},W))}));const h=s.memo(m)},24893:(e,t,n)=>{n.d(t,{Ay:()=>c});var o=n(32690),r=n(76166),a=n(98338),l=r.A;l.Button=a.A,l.Group=o.A,l.__ANT_RADIO=!0;const c=l},76166:(e,t,n)=>{n.d(t,{A:()=>h});var o=n(64467),r=n(58168),a=n(48738),l=n.n(a),c=n(14691),i=n(41929),s=n(9950),u=n(5741),d=n(19389),p=n(77643),f=n(84266),v=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n},m=function(e,t){var n,a,m=s.useContext(f.Ay),h=s.useContext(f.Eb),b=s.useContext(u.QO),x=b.getPrefixCls,y=b.direction,g=s.useRef(),C=(0,i.K4)(t,g),A=(0,s.useContext)(p.$W).isFormItemInput,O=e.prefixCls,w=e.className,k=e.children,E=e.style,j=v(e,["prefixCls","className","children","style"]),N=x("radio",O),M="button"===((null===m||void 0===m?void 0:m.optionType)||h)?"".concat(N,"-button"):N,I=(0,r.A)({},j),P=s.useContext(d.A);m&&(I.name=m.name,I.onChange=function(t){var n,o;null===(n=e.onChange)||void 0===n||n.call(e,t),null===(o=null===m||void 0===m?void 0:m.onChange)||void 0===o||o.call(m,t)},I.checked=e.value===m.value,I.disabled=null!==(n=I.disabled)&&void 0!==n?n:m.disabled),I.disabled=null!==(a=I.disabled)&&void 0!==a?a:P;var S=l()("".concat(M,"-wrapper"),(0,o.A)((0,o.A)((0,o.A)((0,o.A)({},"".concat(M,"-wrapper-checked"),I.checked),"".concat(M,"-wrapper-disabled"),I.disabled),"".concat(M,"-wrapper-rtl"),"rtl"===y),"".concat(M,"-wrapper-in-form-item"),A),w);return s.createElement("label",{className:S,style:E,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave},s.createElement(c.A,(0,r.A)({},I,{type:"radio",prefixCls:M,ref:C})),void 0!==k?s.createElement("span",null,k):null)};const h=s.forwardRef(m)},98338:(e,t,n)=>{n.d(t,{A:()=>u});var o=n(58168),r=n(9950),a=n(5741),l=n(84266),c=n(76166),i=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n},s=function(e,t){var n=r.useContext(a.QO).getPrefixCls,s=e.prefixCls,u=i(e,["prefixCls"]),d=n("radio",s);return r.createElement(l.Ng,{value:"button"},r.createElement(c.A,(0,o.A)({prefixCls:d},u,{type:"radio",ref:t})))};const u=r.forwardRef(s)},99674:(e,t,n)=>{n.d(t,{A:()=>O});var o=n(64467),r=n(58168),a=n(48738),l=n.n(a),c=n(97611),i=n(15207),s=n(9950),u=n(5741),d=n(45534),p=n(19389),f=n(87126),v=n(77643),m=n(49437),h=n(91396),b=n(15735),x=n(93457),y=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n},g="SECRET_COMBOBOX_MODE_DO_NOT_USE",C=function(e,t){var n,a=e.prefixCls,C=e.bordered,A=void 0===C||C,O=e.className,w=e.getPopupContainer,k=e.dropdownClassName,E=e.popupClassName,j=e.listHeight,N=void 0===j?256:j,M=e.placement,I=e.listItemHeight,P=void 0===I?32:I,S=e.size,_=e.disabled,R=e.notFoundContent,z=e.status,F=e.showArrow,L=y(e,["prefixCls","bordered","className","getPopupContainer","dropdownClassName","popupClassName","listHeight","placement","listItemHeight","size","disabled","notFoundContent","status","showArrow"]),W=s.useContext(u.QO),B=W.getPopupContainer,D=W.getPrefixCls,T=W.renderEmpty,G=W.direction,H=W.virtual,V=W.dropdownMatchSelectWidth,Q=s.useContext(f.A),X=D("select",a),K=D(),$=(0,x.RQ)(X,G),U=$.compactSize,J=$.compactItemClassnames,Z=s.useMemo((function(){var e=L.mode;if("combobox"!==e)return e===g?"combobox":e}),[L.mode]),q="multiple"===Z||"tags"===Z,Y=void 0!==F?F:L.loading||!(q||"combobox"===Z),ee=(0,s.useContext)(v.$W),te=ee.status,ne=ee.hasFeedback,oe=ee.isFormItemInput,re=ee.feedbackIcon,ae=(0,h.v)(te,z);n=void 0!==R?R:"combobox"===Z?null:(T||d.A)("Select");var le=(0,b.A)((0,r.A)((0,r.A)({},L),{multiple:q,hasFeedback:ne,feedbackIcon:re,showArrow:Y,prefixCls:X})),ce=le.suffixIcon,ie=le.itemIcon,se=le.removeIcon,ue=le.clearIcon,de=(0,i.A)(L,["suffixIcon","itemIcon"]),pe=l()(E||k,(0,o.A)({},"".concat(X,"-dropdown-").concat(G),"rtl"===G)),fe=U||S||Q,ve=s.useContext(p.A),me=null!==_&&void 0!==_?_:ve,he=l()((0,o.A)((0,o.A)((0,o.A)((0,o.A)((0,o.A)({},"".concat(X,"-lg"),"large"===fe),"".concat(X,"-sm"),"small"===fe),"".concat(X,"-rtl"),"rtl"===G),"".concat(X,"-borderless"),!A),"".concat(X,"-in-form-item"),oe),(0,h.L)(X,ae,ne),J,O);return s.createElement(c.Ay,(0,r.A)({ref:t,virtual:H,dropdownMatchSelectWidth:V},de,{transitionName:(0,m.by)(K,(0,m.TL)(M),L.transitionName),listHeight:N,listItemHeight:P,mode:Z,prefixCls:X,placement:void 0!==M?M:"rtl"===G?"bottomRight":"bottomLeft",direction:G,inputIcon:ce,menuItemSelectedIcon:ie,removeIcon:se,clearIcon:ue,notFoundContent:n,className:he,getPopupContainer:w||B,dropdownClassName:pe,showArrow:ne||F,disabled:me}))},A=s.forwardRef(C);A.SECRET_COMBOBOX_MODE_DO_NOT_USE=g,A.Option=c.c$,A.OptGroup=c.JM;const O=A},14691:(e,t,n)=>{n.d(t,{A:()=>f});var o=n(58168),r=n(89379),a=n(64467),l=n(5544),c=n(80045),i=n(48738),s=n.n(i),u=n(71207),d=n(9950),p=["prefixCls","className","style","checked","disabled","defaultChecked","type","onChange"];const f=(0,d.forwardRef)((function(e,t){var n,i=e.prefixCls,f=void 0===i?"rc-checkbox":i,v=e.className,m=e.style,h=e.checked,b=e.disabled,x=e.defaultChecked,y=void 0!==x&&x,g=e.type,C=void 0===g?"checkbox":g,A=e.onChange,O=(0,c.A)(e,p),w=(0,d.useRef)(null),k=(0,u.A)(y,{value:h}),E=(0,l.A)(k,2),j=E[0],N=E[1];(0,d.useImperativeHandle)(t,(function(){return{focus:function(){var e;null===(e=w.current)||void 0===e||e.focus()},blur:function(){var e;null===(e=w.current)||void 0===e||e.blur()},input:w.current}}));var M=s()(f,v,(n={},(0,a.A)(n,"".concat(f,"-checked"),j),(0,a.A)(n,"".concat(f,"-disabled"),b),n));return d.createElement("span",{className:M,style:m},d.createElement("input",(0,o.A)({},O,{className:"".concat(f,"-input"),ref:w,onChange:function(t){b||("checked"in e||N(t.target.checked),null===A||void 0===A||A({target:(0,r.A)((0,r.A)({},e),{},{type:C,checked:t.target.checked}),stopPropagation:function(){t.stopPropagation()},preventDefault:function(){t.preventDefault()},nativeEvent:t.nativeEvent}))},disabled:b,checked:!!j,type:C})),d.createElement("span",{className:"".concat(f,"-inner")}))}))}}]);