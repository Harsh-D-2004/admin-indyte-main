"use strict";(self.webpackChunkindyte=self.webpackChunkindyte||[]).push([[3393],{65465:(e,n,t)=>{t.r(n),t.d(n,{Step:()=>u,Steps:()=>p});var r=t(9950),s=t(87094),a=t(41988),c=t(48538),i=t(92759),o=t(17848),l=t(14187),d=t(44414);const{Step:u}=l.StepsStyle,p=e=>{let{isvertical:n,validation:t,size:i,current:p,direction:m,status:h,progressDot:f,steps:x,isswitch:v,navigation:y,onNext:A,onPrev:g,onDone:j,onChange:b,children:N,height:C,isfinished:w,validationStatus:k}=e;const[E,S]=(0,r.useState)({currents:p});(0,r.useEffect)((()=>{if(t){const e=E.currents+1;S({currents:e}),A(e),Promise.resolve(!0).then((function(){setTimeout(k,[300])}))}}),[t]);const P=()=>{A(E.currents)},O=()=>{const e=E.currents-1;S({currents:e}),g(e)},{currents:I}=E;return v?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(l.StepsStyle,{current:I,direction:m,status:h,progressDot:f,size:i,children:void 0!==x&&x.map((e=>(0,d.jsx)(u,{className:e.className&&e.className,icon:e.icon&&e.icon,title:e.title},e.title)))}),n?(0,d.jsxs)("div",{className:"steps-wrapper",children:[(0,d.jsx)("div",{className:"steps-content",style:{minHeight:C,display:"flex",justifyContent:"center",marginTop:100},children:x[E.currents].content}),!w&&(0,d.jsx)(l.ActionWrapper,{children:(0,d.jsx)("div",{className:"step-action-wrap",children:(0,d.jsx)("div",{className:"step-action-inner",children:(0,d.jsx)(s.A,{children:(0,d.jsx)(a.A,{xs:24,children:(0,d.jsxs)("div",{className:"steps-action",children:[E.currents>0&&(0,d.jsxs)(c.A,{className:"btn-prev",type:"light",onClick:()=>O(),children:[(0,d.jsx)(o.A,{icon:"arrow-left",size:16}),"Previous"]}),E.currents<x.length-1&&(0,d.jsxs)(c.A,{className:"btn-next",type:"primary",onClick:()=>P(),children:["Save & Next",(0,d.jsx)(o.A,{icon:"arrow-right",size:16})]}),E.currents===x.length-1&&(0,d.jsx)(c.A,{type:"primary",onClick:j,children:"Done"})]})})})})})})]}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("div",{className:"steps-content",style:{minHeight:C,display:"flex",justifyContent:"center",marginTop:100},children:x[E.currents].content}),!w&&(0,d.jsx)(l.ActionWrapper,{children:(0,d.jsx)("div",{className:"step-action-wrap",children:(0,d.jsx)("div",{className:"step-action-inner",children:(0,d.jsx)(s.A,{children:(0,d.jsx)(a.A,{xs:24,children:(0,d.jsxs)("div",{className:"steps-action",children:[E.currents>0&&(0,d.jsxs)(c.A,{className:"btn-prev",type:"light",onClick:()=>O(),children:[(0,d.jsx)(o.A,{icon:"arrow-left",size:16}),"Previous"]}),E.currents<x.length-1&&(0,d.jsxs)(c.A,{className:"btn-next",type:"primary",onClick:()=>P(),children:["Save & Next",(0,d.jsx)(o.A,{icon:"arrow-right",size:16})]}),E.currents===x.length-1&&(0,d.jsx)(c.A,{type:"primary",onClick:j,children:"Done"})]})})})})})})]})]}):(0,d.jsx)(l.StepsStyle,{type:y&&"navigation",style:y&&{marginBottom:60,boxShadow:"0px -1px 0 0 #e8e8e8 inset"},size:i,current:y?I:p,direction:m,status:h,progressDot:f,onChange:e=>{S({currents:e}),b&&b(e)},children:N})};p.defaultProps={current:0,height:150,onDone:()=>i.Ay.success("Processing complete!"),isfinished:!1}},14187:(e,n,t)=>{t.r(n),t.d(n,{ActionWrapper:()=>l,StepsStyle:()=>o});var r,s,a=t(57528),c=t(32878),i=t(45359);const o=(0,c.Ay)(i.A)(r||(r=(0,a.A)(["\n    .steps-action{\n        margin-top: 40px;\n        button{\n            height: 44px;\n        }\n    }\n"]))),l=c.Ay.div(s||(s=(0,a.A)(["\n    width: 100%;\n    .step-action-wrap{\n        display: flex;\n        justify-content: center;\n        .step-action-inner{\n            width: 580px;\n            padding: 0 25px;\n            @media only screen and (max-width: 575px){\n                width: 100%;\n                padding: 0;\n            }\n        }\n    }\n    .steps-action{\n        margin-top: 38px;\n        width: 100%;\n        float: right;\n        display: flex;\n        justify-content: space-between;\n        @media only screen and (max-width: 991px){\n            margin-top: 25px;\n        }\n        @media only screen and (max-width: 379px){\n            flex-flow: column;\n        }\n        button{\n            display: flex;\n            align-items: center;\n            height: 44px;\n            padding: 0 20px;\n            @media only screen and (max-width: 379px){\n                justify-content: center;\n            }\n            &.ant-btn-light{\n                border: 1px solid ",";\n            }\n            &.btn-next{\n                svg{\n                    margin-left: 10px;\n                }\n            }\n            &.btn-prev{\n                svg{\n                    margin-right: 10px;\n                }\n            }\n        }\n        button + button {\n            @media only screen and (max-width: 379px){\n                margin-top: 15px;\n            }\n        }\n    }\n"])),(e=>{let{theme:n}=e;return n["border-color-light"]}))},73393:(e,n,t)=>{t.r(n),t.d(n,{default:()=>y});var r=t(9950),s=t(87827),a=t(87094),c=t(41988),i=t(55902),o=t(52765),l=t(17848),d=t(98341),u=t(12144),p=t(65465),m=t(42017),h=t(29355),f=t(67482),x=t(4909),v=t(44414);const y=function(){const e=(0,d.wA)(),[n]=s.A.useForm(),[t,y]=(0,r.useState)({status:"process",isFinished:!1,current:1,profile:{fname:"",lname:"",email:"",address:""}}),{status:A,isFinished:g,current:j,profile:b}=t;(0,r.useEffect)((()=>{x.cartGetData&&e((0,x.cartGetData)())}),[e]);const N=e=>{y({...t,profile:{...b,[e.target.name]:e.target.value}})};return(0,v.jsx)(u.WizardWrapper,{children:(0,v.jsx)(u.WizardThree,{children:(0,v.jsx)(p.Steps,{isswitch:!0,current:0,status:A,steps:[{title:"Start",content:(0,v.jsx)(f.BasicFormWrapper,{className:"basic-form-inner",children:(0,v.jsx)("div",{className:"atbd-form-checkout",children:(0,v.jsx)(a.A,{justify:"center",children:(0,v.jsx)(c.A,{sm:22,xs:24,children:(0,v.jsxs)("div",{className:"create-account-form",children:[(0,v.jsx)(m.default,{as:"h4",children:"1. Please Create Your Account"}),(0,v.jsxs)(s.A,{form:n,name:"account",children:[(0,v.jsx)(s.A.Item,{name:"username",label:"Username",children:(0,v.jsx)(i.A,{placeholder:"Username"})}),(0,v.jsx)(s.A.Item,{name:"password",rules:[{min:6,message:"Enter a valid password. Min 6 characters long."}],label:"Password",children:(0,v.jsx)(i.A.Password,{placeholder:"Password"})}),(0,v.jsx)(s.A.Item,{name:"retype",rules:[{min:6,message:"Enter a valid password. Min 6 characters long."}],label:"Confirm Password",children:(0,v.jsx)(i.A.Password,{placeholder:"Confirm Password"})})]})]})})})})})},{title:"Profile",content:(0,v.jsx)(f.BasicFormWrapper,{className:"basic-form-inner",children:(0,v.jsx)("div",{className:"atbd-form-checkout",children:(0,v.jsx)(a.A,{justify:"center",children:(0,v.jsx)(c.A,{sm:22,xs:24,children:(0,v.jsxs)("div",{className:"shipping-form",children:[(0,v.jsx)(m.default,{as:"h4",children:"2. please setup your profile"}),(0,v.jsxs)(s.A,{form:n,name:"address",children:[(0,v.jsx)(s.A.Item,{label:"First Name",children:(0,v.jsx)(i.A,{onChange:N,name:"fname",placeholder:"First Name"})}),(0,v.jsx)(s.A.Item,{label:"Last Name",children:(0,v.jsx)(i.A,{onChange:N,name:"lname",placeholder:"Last Name"})}),(0,v.jsx)(s.A.Item,{rules:[{type:"email"}],label:"Email Address",children:(0,v.jsx)(i.A,{name:"email",onChange:N,placeholder:"name@gmail.com"})}),(0,v.jsx)(s.A.Item,{label:"Address",children:(0,v.jsx)(i.A,{name:"address",onChange:N,placeholder:"Address"})})]})]})})})})})},{title:"Hints",content:(0,v.jsx)(f.BasicFormWrapper,{className:"basic-form-inner",children:(0,v.jsx)("div",{className:"atbd-form-checkout",children:(0,v.jsx)(a.A,{justify:"center",children:(0,v.jsx)(c.A,{sm:22,xs:24,children:(0,v.jsxs)("div",{className:"payment-method-form profile-hints",children:[(0,v.jsx)(m.default,{as:"h4",children:"3. Please see your hints"}),(0,v.jsxs)("p",{children:["First Name : ",(0,v.jsx)("span",{children:b.fname})]}),(0,v.jsxs)("p",{children:["Last Name : ",(0,v.jsx)("span",{children:b.lname})]}),(0,v.jsxs)("p",{children:["Email Address : ",(0,v.jsx)("span",{children:b.email})]}),(0,v.jsxs)("p",{children:["Address : ",(0,v.jsx)("span",{children:b.address})]})]})})})})})},{title:"Finish",content:"finish"!==A?(0,v.jsx)(f.BasicFormWrapper,{style:{width:"100%"},children:(0,v.jsxs)("div",{className:"atbd-finish-order",style:{width:"100%"},children:[(0,v.jsx)(m.default,{as:"h4",children:"4. Let`s Finished"}),(0,v.jsx)(o.A,{})," ",(0,v.jsx)("span",{className:"checkbox-label",children:"I Agree with the Terms and Conditions."})]})}):(0,v.jsx)(a.A,{justify:"center",style:{width:"100%"},children:(0,v.jsx)(c.A,{xl:21,xs:24,children:(0,v.jsx)("div",{className:"checkout-successful",children:(0,v.jsx)(h.Cards,{headless:!0,bodyStyle:{backgroundColor:"#F8F9FB",borderRadius:"20px"},children:(0,v.jsxs)(h.Cards,{headless:!0,children:[(0,v.jsx)("span",{className:"icon-success",children:(0,v.jsx)(l.A,{icon:"check"})}),(0,v.jsx)(m.default,{as:"h3",children:"Thank You"}),(0,v.jsx)("p",{children:"Your registration completed successfully"})]})})})})})}],onNext:()=>{y({...t,status:"process",current:j+1})},onPrev:()=>{y({...t,status:"process",current:j-1})},onDone:()=>{window.confirm("Are sure to submit order?")&&y({...t,status:"finish",isFinished:!0,current:0})},isfinished:g})})})}},4909:(e,n,t)=>{t.r(n),t.d(n,{cartDelete:()=>x,cartGetData:()=>h,cartUpdateQuantity:()=>f});var r=t(72316),s=t(5213);const{cartDataBegin:a,cartDataSuccess:c,cartDataErr:i,cartUpdateBegin:o,cartUpdateSuccess:l,cartUpdateErr:d,cartDeleteBegin:u,cartDeleteSuccess:p,cartDeleteErr:m}=r.default,h=()=>async e=>{try{e(a()),e(c(s))}catch(n){e(i(n))}},f=(e,n,t)=>async r=>{try{r(o());const s=t.map((t=>(t.id===e&&(t.quantity=n),t)));r(l(s))}catch(s){r(d(s))}},x=(e,n)=>async t=>{try{t(u());const r=n.filter((n=>n.id!==e));setTimeout((()=>{t(p(r))}),500)}catch(r){t(m(r))}}},52765:(e,n,t)=>{t.d(n,{A:()=>C});var r=t(64467),s=t(58168),a=t(48738),c=t.n(a),i=t(14691),o=t(9950),l=t(5741),d=t(77643),u=t(60436),p=t(5544),m=t(15207),h=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var s=0;for(r=Object.getOwnPropertySymbols(e);s<r.length;s++)n.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(t[r[s]]=e[r[s]])}return t},f=o.createContext(null),x=function(e,n){var t=e.defaultValue,a=e.children,i=e.options,d=void 0===i?[]:i,x=e.prefixCls,v=e.className,y=e.style,A=e.onChange,g=h(e,["defaultValue","children","options","prefixCls","className","style","onChange"]),j=o.useContext(l.QO),N=j.getPrefixCls,C=j.direction,w=o.useState(g.value||t||[]),k=(0,p.A)(w,2),E=k[0],S=k[1],P=o.useState([]),O=(0,p.A)(P,2),I=O[0],D=O[1];o.useEffect((function(){"value"in g&&S(g.value||[])}),[g.value]);var z=function(){return d.map((function(e){return"string"===typeof e||"number"===typeof e?{label:e,value:e}:e}))},F=N("checkbox",x),W="".concat(F,"-group"),B=(0,m.A)(g,["value","disabled"]);d&&d.length>0&&(a=z().map((function(e){return o.createElement(b,{prefixCls:F,key:e.value.toString(),disabled:"disabled"in e?e.disabled:g.disabled,value:e.value,checked:E.includes(e.value),onChange:e.onChange,className:"".concat(W,"-item"),style:e.style},e.label)})));var T={toggleOption:function(e){var n=E.indexOf(e.value),t=(0,u.A)(E);-1===n?t.push(e.value):t.splice(n,1),"value"in g||S(t);var r=z();null===A||void 0===A||A(t.filter((function(e){return I.includes(e)})).sort((function(e,n){return r.findIndex((function(n){return n.value===e}))-r.findIndex((function(e){return e.value===n}))})))},value:E,disabled:g.disabled,name:g.name,registerValue:function(e){D((function(n){return[].concat((0,u.A)(n),[e])}))},cancelValue:function(e){D((function(n){return n.filter((function(n){return n!==e}))}))}},V=c()(W,(0,r.A)({},"".concat(W,"-rtl"),"rtl"===C),v);return o.createElement("div",(0,s.A)({className:V,style:y},B,{ref:n}),o.createElement(f.Provider,{value:T},a))},v=o.forwardRef(x);const y=o.memo(v);var A=t(19389),g=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var s=0;for(r=Object.getOwnPropertySymbols(e);s<r.length;s++)n.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(t[r[s]]=e[r[s]])}return t},j=function(e,n){var t,a=e.prefixCls,u=e.className,p=e.children,m=e.indeterminate,h=void 0!==m&&m,x=e.style,v=e.onMouseEnter,y=e.onMouseLeave,j=e.skipGroup,b=void 0!==j&&j,N=e.disabled,C=g(e,["prefixCls","className","children","indeterminate","style","onMouseEnter","onMouseLeave","skipGroup","disabled"]),w=o.useContext(l.QO),k=w.getPrefixCls,E=w.direction,S=o.useContext(f),P=(0,o.useContext)(d.$W).isFormItemInput,O=(0,o.useContext)(A.A),I=null!==(t=(null===S||void 0===S?void 0:S.disabled)||N)&&void 0!==t?t:O,D=o.useRef(C.value);o.useEffect((function(){null===S||void 0===S||S.registerValue(C.value)}),[]),o.useEffect((function(){if(!b)return C.value!==D.current&&(null===S||void 0===S||S.cancelValue(D.current),null===S||void 0===S||S.registerValue(C.value),D.current=C.value),function(){return null===S||void 0===S?void 0:S.cancelValue(C.value)}}),[C.value]);var z=k("checkbox",a),F=(0,s.A)({},C);S&&!b&&(F.onChange=function(){C.onChange&&C.onChange.apply(C,arguments),S.toggleOption&&S.toggleOption({label:p,value:C.value})},F.name=S.name,F.checked=S.value.includes(C.value));var W=c()((0,r.A)((0,r.A)((0,r.A)((0,r.A)((0,r.A)({},"".concat(z,"-wrapper"),!0),"".concat(z,"-rtl"),"rtl"===E),"".concat(z,"-wrapper-checked"),F.checked),"".concat(z,"-wrapper-disabled"),I),"".concat(z,"-wrapper-in-form-item"),P),u),B=c()((0,r.A)({},"".concat(z,"-indeterminate"),h)),T=h?"mixed":void 0;return o.createElement("label",{className:W,style:x,onMouseEnter:v,onMouseLeave:y},o.createElement(i.A,(0,s.A)({"aria-checked":T},F,{prefixCls:z,className:B,disabled:I,ref:n})),void 0!==p&&o.createElement("span",null,p))};const b=o.forwardRef(j);var N=b;N.Group=y,N.__ANT_CHECKBOX=!0;const C=N},45359:(e,n,t)=>{t.d(n,{A:()=>P});var r=t(58168),s=t(64467),a=t(13239),c=t(94118),i=t(48738),o=t.n(i),l=t(89379),d=t(80045),u=t(23029),p=t(92901),m=t(9417),h=t(85501),f=t(29426),x=t(9950),v=["className","prefixCls","style","active","status","iconPrefix","icon","wrapperStyle","stepNumber","disabled","description","title","subTitle","progressDot","stepIcon","tailContent","icons","stepIndex","onStepClick","onClick"];function y(e){return"string"===typeof e}var A=function(e){(0,h.A)(t,e);var n=(0,f.A)(t);function t(){var e;(0,u.A)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return e=n.call.apply(n,[this].concat(a)),(0,s.A)((0,m.A)(e),"onClick",(function(){var n=e.props,t=n.onClick,r=n.onStepClick,s=n.stepIndex;t&&t.apply(void 0,arguments),r(s)})),e}return(0,p.A)(t,[{key:"renderIconNode",value:function(){var e,n,t=this.props,r=t.prefixCls,a=t.progressDot,c=t.stepIcon,i=t.stepNumber,l=t.status,d=t.title,u=t.description,p=t.icon,m=t.iconPrefix,h=t.icons,f=o()("".concat(r,"-icon"),"".concat(m,"icon"),(e={},(0,s.A)(e,"".concat(m,"icon-").concat(p),p&&y(p)),(0,s.A)(e,"".concat(m,"icon-check"),!p&&"finish"===l&&(h&&!h.finish||!h)),(0,s.A)(e,"".concat(m,"icon-cross"),!p&&"error"===l&&(h&&!h.error||!h)),e)),v=x.createElement("span",{className:"".concat(r,"-icon-dot")});return n=a?"function"===typeof a?x.createElement("span",{className:"".concat(r,"-icon")},a(v,{index:i-1,status:l,title:d,description:u})):x.createElement("span",{className:"".concat(r,"-icon")},v):p&&!y(p)?x.createElement("span",{className:"".concat(r,"-icon")},p):h&&h.finish&&"finish"===l?x.createElement("span",{className:"".concat(r,"-icon")},h.finish):h&&h.error&&"error"===l?x.createElement("span",{className:"".concat(r,"-icon")},h.error):p||"finish"===l||"error"===l?x.createElement("span",{className:f}):x.createElement("span",{className:"".concat(r,"-icon")},i),c&&(n=c({index:i-1,status:l,title:d,description:u,node:n})),n}},{key:"render",value:function(){var e,n=this.props,t=n.className,a=n.prefixCls,c=n.style,i=n.active,u=n.status,p=void 0===u?"wait":u,m=(n.iconPrefix,n.icon),h=(n.wrapperStyle,n.stepNumber,n.disabled),f=n.description,y=n.title,A=n.subTitle,g=(n.progressDot,n.stepIcon,n.tailContent),j=(n.icons,n.stepIndex,n.onStepClick),b=n.onClick,N=(0,d.A)(n,v),C=o()("".concat(a,"-item"),"".concat(a,"-item-").concat(p),t,(e={},(0,s.A)(e,"".concat(a,"-item-custom"),m),(0,s.A)(e,"".concat(a,"-item-active"),i),(0,s.A)(e,"".concat(a,"-item-disabled"),!0===h),e)),w=(0,l.A)({},c),k={};return j&&!h&&(k.role="button",k.tabIndex=0,k.onClick=this.onClick),x.createElement("div",(0,r.A)({},N,{className:C,style:w}),x.createElement("div",(0,r.A)({onClick:b},k,{className:"".concat(a,"-item-container")}),x.createElement("div",{className:"".concat(a,"-item-tail")},g),x.createElement("div",{className:"".concat(a,"-item-icon")},this.renderIconNode()),x.createElement("div",{className:"".concat(a,"-item-content")},x.createElement("div",{className:"".concat(a,"-item-title")},y,A&&x.createElement("div",{title:"string"===typeof A?A:void 0,className:"".concat(a,"-item-subtitle")},A)),f&&x.createElement("div",{className:"".concat(a,"-item-description")},f))))}}]),t}(x.Component),g=["prefixCls","style","className","children","direction","type","labelPlacement","iconPrefix","status","size","current","progressDot","stepIcon","initial","icons","onChange","items"],j=function(e){(0,h.A)(t,e);var n=(0,f.A)(t);function t(){var e;(0,u.A)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return e=n.call.apply(n,[this].concat(a)),(0,s.A)((0,m.A)(e),"onStepClick",(function(n){var t=e.props,r=t.onChange,s=t.current;r&&s!==n&&r(n)})),e}return(0,p.A)(t,[{key:"render",value:function(){var e,n=this,t=this.props,a=t.prefixCls,c=t.style,i=void 0===c?{}:c,u=t.className,p=(t.children,t.direction),m=t.type,h=t.labelPlacement,f=t.iconPrefix,v=t.status,y=t.size,j=t.current,b=t.progressDot,N=t.stepIcon,C=t.initial,w=t.icons,k=t.onChange,E=t.items,S=void 0===E?[]:E,P=(0,d.A)(t,g),O="navigation"===m,I=b?"vertical":h,D=o()(a,"".concat(a,"-").concat(p),u,(e={},(0,s.A)(e,"".concat(a,"-").concat(y),y),(0,s.A)(e,"".concat(a,"-label-").concat(I),"horizontal"===p),(0,s.A)(e,"".concat(a,"-dot"),!!b),(0,s.A)(e,"".concat(a,"-navigation"),O),e));return x.createElement("div",(0,r.A)({className:D,style:i},P),S.filter((function(e){return e})).map((function(e,t){var s=(0,l.A)({},e),c=C+t;return"error"===v&&t===j-1&&(s.className="".concat(a,"-next-error")),s.status||(s.status=c===j?v:c<j?"finish":"wait"),x.createElement(A,(0,r.A)({},s,{active:c===j,stepNumber:c+1,stepIndex:c,key:c,prefixCls:a,iconPrefix:f,wrapperStyle:i,progressDot:b,stepIcon:N,icons:w,onStepClick:k&&n.onStepClick}))})))}}]),t}(x.Component);(0,s.A)(j,"Step",A),(0,s.A)(j,"defaultProps",{type:"default",prefixCls:"rc-steps",iconPrefix:"rc",direction:"horizontal",labelPlacement:"horizontal",initial:0,current:0,status:"process",size:"",progressDot:!1});const b=j;var N=t(5741),C=t(16661),w=t(37781),k=t(50604);var E=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var s=0;for(r=Object.getOwnPropertySymbols(e);s<r.length;s++)n.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(t[r[s]]=e[r[s]])}return t},S=function(e){var n=e.percent,t=e.size,i=e.className,l=e.direction,d=e.items,u=e.responsive,p=void 0===u||u,m=e.current,h=void 0===m?0:m,f=e.children,v=E(e,["percent","size","className","direction","items","responsive","current","children"]),y=(0,C.A)(p).xs,A=x.useContext(N.QO),g=A.getPrefixCls,j=A.direction,S=x.useCallback((function(){return p&&y?"vertical":l}),[y,l]),P=g("steps",e.prefixCls),O=g("",e.iconPrefix),I=function(e,n){return e||function(e){return e.filter((function(e){return e}))}((0,k.A)(n).map((function(e){if(x.isValidElement(e)){var n=e.props;return(0,r.A)({},n)}return null})))}(d,f),D=o()((0,s.A)((0,s.A)({},"".concat(P,"-rtl"),"rtl"===j),"".concat(P,"-with-progress"),void 0!==n),i),z={finish:x.createElement(a.A,{className:"".concat(P,"-finish-icon")}),error:x.createElement(c.A,{className:"".concat(P,"-error-icon")})};return x.createElement(b,(0,r.A)({icons:z},v,{current:h,size:t,items:I,direction:S(),stepIcon:function(e){var r=e.node;if("process"===e.status&&void 0!==n){var s="small"===t?32:40;return x.createElement("div",{className:"".concat(P,"-progress-icon")},x.createElement(w.A,{type:"circle",percent:n,width:s,strokeWidth:4,format:function(){return null}}),r)}return r},prefixCls:P,iconPrefix:O,className:D}))};S.Step=b.Step;const P=S},14691:(e,n,t)=>{t.d(n,{A:()=>m});var r=t(58168),s=t(89379),a=t(64467),c=t(5544),i=t(80045),o=t(48738),l=t.n(o),d=t(71207),u=t(9950),p=["prefixCls","className","style","checked","disabled","defaultChecked","type","onChange"];const m=(0,u.forwardRef)((function(e,n){var t,o=e.prefixCls,m=void 0===o?"rc-checkbox":o,h=e.className,f=e.style,x=e.checked,v=e.disabled,y=e.defaultChecked,A=void 0!==y&&y,g=e.type,j=void 0===g?"checkbox":g,b=e.onChange,N=(0,i.A)(e,p),C=(0,u.useRef)(null),w=(0,d.A)(A,{value:x}),k=(0,c.A)(w,2),E=k[0],S=k[1];(0,u.useImperativeHandle)(n,(function(){return{focus:function(){var e;null===(e=C.current)||void 0===e||e.focus()},blur:function(){var e;null===(e=C.current)||void 0===e||e.blur()},input:C.current}}));var P=l()(m,h,(t={},(0,a.A)(t,"".concat(m,"-checked"),E),(0,a.A)(t,"".concat(m,"-disabled"),v),t));return u.createElement("span",{className:P,style:f},u.createElement("input",(0,r.A)({},N,{className:"".concat(m,"-input"),ref:C,onChange:function(n){v||("checked"in e||S(n.target.checked),null===b||void 0===b||b({target:(0,s.A)((0,s.A)({},e),{},{type:j,checked:n.target.checked}),stopPropagation:function(){n.stopPropagation()},preventDefault:function(){n.preventDefault()},nativeEvent:n.nativeEvent}))},disabled:v,checked:!!E,type:j})),u.createElement("span",{className:"".concat(m,"-inner")}))}))},5213:e=>{e.exports=JSON.parse('[{"id":"1","name":"Montes Scelerisque","size":"Large","color":"Brown","price":"248.66","quantity":"1","img":"static/img/products/1.png","total":"248.66"},{"id":"2","name":"Leo Sodales Varius","size":"Small","color":"Golden","price":"240","quantity":"1","img":"static/img/products/2.png","total":"240"}]')}}]);