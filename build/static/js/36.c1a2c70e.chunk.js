"use strict";(self.webpackChunkindyte=self.webpackChunkindyte||[]).push([[36],{66081:(e,n,t)=>{t.r(n),t.d(n,{Checkbox:()=>i,CheckboxGroup:()=>c});var a=t(9950),l=t(27079),r=t(44414);const c=l.CheckboxStyle.Group,i=e=>{const{item:n,defaultSelect:t,checked:i,multiple:s,onChange:o,onChangeTriger:u,defaultChecked:d,disabled:h,children:f}=e,p=n,[m,v]=(0,a.useState)({checkedList:t,indeterminate:!0,checkAll:!1});(0,a.useEffect)((()=>{u&&u(m.checkedList)}),[m]);return s?(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{style:{borderBottom:"1px solid #E9E9E9"},children:(0,r.jsx)(l.CheckboxStyle,{indeterminate:m.indeterminate,onChange:e=>{v({checkedList:e.target.checked?p:[],indeterminate:!1,checkAll:e.target.checked})},checked:m.checkAll,children:"Check all"})}),(0,r.jsx)("br",{}),(0,r.jsx)(c,{options:p,value:m.checkedList,onChange:e=>{v({checkedList:e,indeterminate:!!e.length&&e.length<p.length,checkAll:e.length===p.length})}})]}):(0,r.jsx)(l.CheckboxStyle,{checked:i,onChange:e=>o(e.target.checked,e.target.value),defaultChecked:d,disabled:h,children:f})}},27079:(e,n,t)=>{t.r(n),t.d(n,{CheckboxStyle:()=>i});var a,l=t(57528),r=t(32878),c=t(52765);const i=(0,r.Ay)(c.A)(a||(a=(0,l.A)(["\n\n"])))},20036:(e,n,t)=>{t.r(n),t.d(n,{default:()=>A});var a=t(9950),l=t(16673),r=t(93047),c=t(69812),i=t(12644),s=t(87827),o=t(55902),u=t(48538),d=t(98341),h=t(82771),f=t(66081),p=t(42017),m=t(82393),v=t(25299),g=t(44414);const A=()=>{const{isSignUpError:e,isSignUpLoading:n,isFbAuthenticate:A}=(0,d.d4)((e=>({isSignUpError:e.firebaseAuth.isSignUpError,isSignUpLoading:e.firebaseAuth.isSignUpLoading,isFbAuthenticate:e.fb.auth.uid}))),b=(0,l.useHistory)(),x=(0,d.wA)(),[k,C]=(0,a.useState)({values:null,checked:null}),y=(0,a.useCallback)((()=>{x((0,v.login)()),b.push("/admin")}),[x,b]);(0,a.useEffect)((()=>{A&&y()}),[A,y]);return(0,g.jsxs)(h.AuthWrapper,{children:[(0,g.jsxs)("p",{className:"auth-notice",children:["Already have an account? ",(0,g.jsx)(r.k2,{to:"/fbSignIn",children:"Sign In"})]}),(0,g.jsx)("div",{className:"auth-contents",children:(0,g.jsxs)(s.A,{name:"register",onFinish:e=>{x((0,m.fbAuthSignUp)({...e,terms:k.checked}))},layout:"vertical",children:[(0,g.jsxs)(p.default,{as:"h3",children:["Sign Up With Firebase to ",(0,g.jsx)("span",{className:"color-secondary",children:"Admin"})]}),(0,g.jsx)(s.A.Item,{label:"Name",name:"name",rules:[{required:!0,message:"Please input your Full name!"}],children:(0,g.jsx)(o.A,{placeholder:"Full name"})}),(0,g.jsx)(s.A.Item,{name:"username",label:"Username",rules:[{required:!0,message:"Please input your username!"}],children:(0,g.jsx)(o.A,{placeholder:"Username"})}),(0,g.jsx)(s.A.Item,{name:"email",label:"Email Address",rules:[{required:!0,message:"Please input your email!",type:"email"}],children:(0,g.jsx)(o.A,{placeholder:"name@example.com"})}),(0,g.jsx)(s.A.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}],children:(0,g.jsx)(o.A.Password,{placeholder:"Password"})}),(0,g.jsx)("div",{className:"auth-form-action",children:(0,g.jsx)(f.Checkbox,{onChange:e=>{C({...k,checked:e})},children:"Creating an account means you\u2019re okay with our Terms of Service and Privacy Policy"})}),e?(0,g.jsx)("p",{children:e.message}):null,(0,g.jsx)(s.A.Item,{children:(0,g.jsx)(u.A,{className:"btn-create",htmlType:"submit",type:"primary",size:"large",children:n?"Loading...":"Create Account"})}),(0,g.jsx)("p",{className:"form-divider",children:(0,g.jsx)("span",{children:"Or"})}),(0,g.jsxs)("ul",{className:"social-login signin-social",children:[(0,g.jsx)("li",{children:(0,g.jsxs)(r.N_,{onClick:()=>x(m.fbAuthLoginWithGoogle),className:"google-signup",to:"#",children:[(0,g.jsx)("img",{src:t(20678),alt:""}),(0,g.jsx)("span",{children:"Sign up with Google"})]})}),(0,g.jsx)("li",{children:(0,g.jsx)(r.N_,{onClick:()=>x(m.fbAuthLoginWithFacebook),className:"facebook-sign",to:"#",children:(0,g.jsx)(c.A,{})})}),(0,g.jsx)("li",{children:(0,g.jsx)(r.N_,{className:"twitter-sign",to:"#",children:(0,g.jsx)(i.A,{})})})]})]})})]})}},69812:(e,n,t)=>{t.d(n,{A:()=>s});var a=t(89379),l=t(9950);const r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-32 736H663.9V602.2h104l15.6-120.7H663.9v-77.1c0-35 9.7-58.8 59.8-58.8h63.9v-108c-11.1-1.5-49-4.8-93.2-4.8-92.2 0-155.3 56.3-155.3 159.6v89H434.9v120.7h104.3V848H176V176h672v672z"}}]},name:"facebook",theme:"outlined"};var c=t(47484),i=function(e,n){return l.createElement(c.A,(0,a.A)((0,a.A)({},e),{},{ref:n,icon:r}))};const s=l.forwardRef(i)},12644:(e,n,t)=>{t.d(n,{A:()=>s});var a=t(89379),l=t(9950);const r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0075-94 336.64 336.64 0 01-108.2 41.2A170.1 170.1 0 00672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 00-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 01-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 01-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z"}}]},name:"twitter",theme:"outlined"};var c=t(47484),i=function(e,n){return l.createElement(c.A,(0,a.A)((0,a.A)({},e),{},{ref:n,icon:r}))};const s=l.forwardRef(i)},52765:(e,n,t)=>{t.d(n,{A:()=>j});var a=t(64467),l=t(58168),r=t(48738),c=t.n(r),i=t(14691),s=t(9950),o=t(5741),u=t(77643),d=t(60436),h=t(5544),f=t(15207),p=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)n.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(t[a[l]]=e[a[l]])}return t},m=s.createContext(null),v=function(e,n){var t=e.defaultValue,r=e.children,i=e.options,u=void 0===i?[]:i,v=e.prefixCls,g=e.className,A=e.style,b=e.onChange,x=p(e,["defaultValue","children","options","prefixCls","className","style","onChange"]),k=s.useContext(o.QO),y=k.getPrefixCls,j=k.direction,N=s.useState(x.value||t||[]),E=(0,h.A)(N,2),w=E[0],O=E[1],S=s.useState([]),L=(0,h.A)(S,2),V=L[0],P=L[1];s.useEffect((function(){"value"in x&&O(x.value||[])}),[x.value]);var Q=function(){return u.map((function(e){return"string"===typeof e||"number"===typeof e?{label:e,value:e}:e}))},U=y("checkbox",v),I="".concat(U,"-group"),R=(0,f.A)(x,["value","disabled"]);u&&u.length>0&&(r=Q().map((function(e){return s.createElement(C,{prefixCls:U,key:e.value.toString(),disabled:"disabled"in e?e.disabled:x.disabled,value:e.value,checked:w.includes(e.value),onChange:e.onChange,className:"".concat(I,"-item"),style:e.style},e.label)})));var B={toggleOption:function(e){var n=w.indexOf(e.value),t=(0,d.A)(w);-1===n?t.push(e.value):t.splice(n,1),"value"in x||O(t);var a=Q();null===b||void 0===b||b(t.filter((function(e){return V.includes(e)})).sort((function(e,n){return a.findIndex((function(n){return n.value===e}))-a.findIndex((function(e){return e.value===n}))})))},value:w,disabled:x.disabled,name:x.name,registerValue:function(e){P((function(n){return[].concat((0,d.A)(n),[e])}))},cancelValue:function(e){P((function(n){return n.filter((function(n){return n!==e}))}))}},W=c()(I,(0,a.A)({},"".concat(I,"-rtl"),"rtl"===j),g);return s.createElement("div",(0,l.A)({className:W,style:A},R,{ref:n}),s.createElement(m.Provider,{value:B},r))},g=s.forwardRef(v);const A=s.memo(g);var b=t(19389),x=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)n.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(t[a[l]]=e[a[l]])}return t},k=function(e,n){var t,r=e.prefixCls,d=e.className,h=e.children,f=e.indeterminate,p=void 0!==f&&f,v=e.style,g=e.onMouseEnter,A=e.onMouseLeave,k=e.skipGroup,C=void 0!==k&&k,y=e.disabled,j=x(e,["prefixCls","className","children","indeterminate","style","onMouseEnter","onMouseLeave","skipGroup","disabled"]),N=s.useContext(o.QO),E=N.getPrefixCls,w=N.direction,O=s.useContext(m),S=(0,s.useContext)(u.$W).isFormItemInput,L=(0,s.useContext)(b.A),V=null!==(t=(null===O||void 0===O?void 0:O.disabled)||y)&&void 0!==t?t:L,P=s.useRef(j.value);s.useEffect((function(){null===O||void 0===O||O.registerValue(j.value)}),[]),s.useEffect((function(){if(!C)return j.value!==P.current&&(null===O||void 0===O||O.cancelValue(P.current),null===O||void 0===O||O.registerValue(j.value),P.current=j.value),function(){return null===O||void 0===O?void 0:O.cancelValue(j.value)}}),[j.value]);var Q=E("checkbox",r),U=(0,l.A)({},j);O&&!C&&(U.onChange=function(){j.onChange&&j.onChange.apply(j,arguments),O.toggleOption&&O.toggleOption({label:h,value:j.value})},U.name=O.name,U.checked=O.value.includes(j.value));var I=c()((0,a.A)((0,a.A)((0,a.A)((0,a.A)((0,a.A)({},"".concat(Q,"-wrapper"),!0),"".concat(Q,"-rtl"),"rtl"===w),"".concat(Q,"-wrapper-checked"),U.checked),"".concat(Q,"-wrapper-disabled"),V),"".concat(Q,"-wrapper-in-form-item"),S),d),R=c()((0,a.A)({},"".concat(Q,"-indeterminate"),p)),B=p?"mixed":void 0;return s.createElement("label",{className:I,style:v,onMouseEnter:g,onMouseLeave:A},s.createElement(i.A,(0,l.A)({"aria-checked":B},U,{prefixCls:Q,className:R,disabled:V,ref:n})),void 0!==h&&s.createElement("span",null,h))};const C=s.forwardRef(k);var y=C;y.Group=A,y.__ANT_CHECKBOX=!0;const j=y},14691:(e,n,t)=>{t.d(n,{A:()=>f});var a=t(58168),l=t(89379),r=t(64467),c=t(5544),i=t(80045),s=t(48738),o=t.n(s),u=t(71207),d=t(9950),h=["prefixCls","className","style","checked","disabled","defaultChecked","type","onChange"];const f=(0,d.forwardRef)((function(e,n){var t,s=e.prefixCls,f=void 0===s?"rc-checkbox":s,p=e.className,m=e.style,v=e.checked,g=e.disabled,A=e.defaultChecked,b=void 0!==A&&A,x=e.type,k=void 0===x?"checkbox":x,C=e.onChange,y=(0,i.A)(e,h),j=(0,d.useRef)(null),N=(0,u.A)(b,{value:v}),E=(0,c.A)(N,2),w=E[0],O=E[1];(0,d.useImperativeHandle)(n,(function(){return{focus:function(){var e;null===(e=j.current)||void 0===e||e.focus()},blur:function(){var e;null===(e=j.current)||void 0===e||e.blur()},input:j.current}}));var S=o()(f,p,(t={},(0,r.A)(t,"".concat(f,"-checked"),w),(0,r.A)(t,"".concat(f,"-disabled"),g),t));return d.createElement("span",{className:S,style:m},d.createElement("input",(0,a.A)({},y,{className:"".concat(f,"-input"),ref:j,onChange:function(n){g||("checked"in e||O(n.target.checked),null===C||void 0===C||C({target:(0,l.A)((0,l.A)({},e),{},{type:k,checked:n.target.checked}),stopPropagation:function(){n.stopPropagation()},preventDefault:function(){n.preventDefault()},nativeEvent:n.nativeEvent}))},disabled:g,checked:!!w,type:k})),d.createElement("span",{className:"".concat(f,"-inner")}))}))},20678:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABHNCSVQICAgIfAhkiAAAAjdJREFUOE+1lL1rU1EYxp/3NrEW2qSiFJWqRaRmEJqlOpq02iXU3m5u1q/ByVTddRGkQ1r/AU1ABKcEIh2alN5RWoVUB4suCW66JLUQSW7uI+eWXG4+SQTvdM573vt7n/fjHEGHb39meskSWQARFMGEciORF9AQEcO3uZ1o96s0G/dnL+sWsVqHdAqo4Jpg2be5nXL7NABLs9NxQG51gjTbCZYGa9XgkJHL188cYN8wYtdvVUJi5IotClWaBJKtypjQhHGPadoKqgNHggR1tfbVqtFmmLLbCg/uTn6o5Uev1IEqFU8NoWFjJ9dr+k7KZhY6iWQlcxbmp5O2XRMrPJL9aPQLsxVWM1BdWlAb8/MJVLfGX/ve5+78C+wQuAEDgqsuQNh7HS3q9NifNQBTXQMRRaWQbiePB8ckjIbOqfPFWNkAxB24Lfs/AHtMuSeFZKGhKV+tEbwwA+/eRnZu9tIUPVaOi+tmEUxIfWxStdNYMS/iN7wArfDefLbr2Oir5ZBQttyBSd62B3tl/cKXV9b5S85gk0VLQ/h7JNN2sBUMlKQAow6QLCQfD03YwED6WgiiNUQ7dGQcGuKQgYK9s8wpoehjP+8vHS/eaKgKLVlMPRlMOY9DID33DIKnvdRO+fhLMxj7dQ8ea1jN3cvUo6NR5y7XIf1CvZVTB2d+PH+z/nD8gXOXmxVNpud0TbgGyLnualmwKNFv8xudH1g3QNWVokWFHKUgKBA/iV0R5CA09iKZeLuAfwEBsO2jMmMBgQAAAABJRU5ErkJggg=="}}]);