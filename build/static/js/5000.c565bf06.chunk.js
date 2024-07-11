"use strict";(self.webpackChunkindyte=self.webpackChunkindyte||[]).push([[5e3],{8755:(e,t,n)=>{n.r(t),n.d(t,{TagStyle:()=>o});var a,s=n(57528),l=n(32878),i=n(12916);const o=(0,l.Ay)(i.A)(a||(a=(0,s.A)(["\n\n"])))},27785:(e,t,n)=>{n.r(t),n.d(t,{Tag:()=>c});var a=n(9950),s=n(55902),l=n(8750),i=n(8755),o=n(44414);const{CheckableTag:r}=i.TagStyle;function c(e){const[t,n]=(0,a.useState)({checked:!0,selectedTags:[]}),{closable:s,onClose:l,color:c,checked:u,onChange:m,data:h,hottags:p,animate:x,children:g}=e,b=h,{selectedTags:j}=t;return u?(0,o.jsx)(r,{props:e,checked:t.checked,onChange:e=>{n({...t,checke:e}),m&&m(e)}}):p?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("span",{style:{marginRight:8},children:"Categories:"}),b.map((e=>(0,o.jsx)(r,{checked:j.indexOf(e)>-1,onChange:a=>((e,a)=>{const{selectedTags:s}=t,l=a?[...s,e]:s.filter((t=>t!==e));n({...t,selectedTags:l}),m&&m(l)})(e,a),children:e},e)))]}):x?(0,o.jsx)(d,{data:h,onChange:m}):(0,o.jsx)(i.TagStyle,{closable:s,onClose:e=>{l(e)},color:c,children:g})}function d(e){const{data:t,onChange:n}=e,[r,c]=(0,a.useState)({tags:t,inputVisible:!1,inputValue:""}),d=()=>{const{inputValue:e}=r;let{tags:t}=r;e&&-1===t.indexOf(e)&&(t=[...t,e]),n&&n(t),c({...r,tags:t,inputVisible:!1,inputValue:""})},{tags:u,inputVisible:m,inputValue:h}=r,p=u.map((e=>{const t=(0,o.jsx)(i.TagStyle,{closable:!0,onClose:t=>{t.preventDefault(),(e=>{const t=r.tags.filter((t=>t!==e));c({tags:t}),n&&n(t)})(e)},children:e});return(0,o.jsx)("span",{style:{display:"inline-block"},children:t},e)}));return(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{style:{marginBottom:10},children:p}),m&&(0,o.jsx)(s.A,{autoFocus:!0,type:"text",size:"small",style:{width:78},value:h,onChange:e=>{c({...r,inputValue:e.target.value})},onBlur:d,onPressEnter:d}),!m&&(0,o.jsxs)(i.TagStyle,{onClick:()=>{c({...r,inputVisible:!0})},style:{background:"#fff",borderStyle:"dashed"},children:[(0,o.jsx)(l.A,{})," New Tag"]})]})}},75e3:(e,t,n)=>{n.r(t),n.d(t,{default:()=>g});var a=n(9950),s=n(99674),l=n(87827),i=n(87094),o=n(41988),r=n(55902),c=n(29355),d=n(72449),u=n(67482),m=n(42017),h=n(27785),p=n(44414);const{Option:x}=s.A;const g=function(){const[e]=l.A.useForm(),[t,n]=(0,a.useState)({tags:["UI/UX","Branding","Product Design","Web Design"],values:null});return(0,p.jsx)(c.Cards,{title:(0,p.jsxs)("div",{className:"setting-card-title",children:[(0,p.jsx)(m.default,{as:"h4",children:"Edit Profile"}),(0,p.jsx)("span",{children:"Set Up Your Personal Information"})]}),children:(0,p.jsx)(i.A,{justify:"center",children:(0,p.jsx)(o.A,{xl:12,lg:16,xs:24,children:(0,p.jsx)(u.BasicFormWrapper,{children:(0,p.jsxs)(l.A,{name:"editProfile",onFinish:e=>{n({...t,values:{...e,tags:t.tags}})},children:[(0,p.jsx)(l.A.Item,{name:"name",initialValue:"Duran Clayton",label:"Name",children:(0,p.jsx)(r.A,{})}),(0,p.jsx)(l.A.Item,{name:"phone",initialValue:"01742920502",label:"Phone Number",children:(0,p.jsx)(r.A,{})}),(0,p.jsx)(l.A.Item,{name:"country",initialValue:"",label:"Country",children:(0,p.jsxs)(s.A,{style:{width:"100%"},children:[(0,p.jsx)(x,{value:"",children:"Please Select"}),(0,p.jsx)(x,{value:"bangladesh",children:"Bangladesh"}),(0,p.jsx)(x,{value:"india",children:"India"}),(0,p.jsx)(x,{value:"pakistan",children:"Pakistan"})]})}),(0,p.jsx)(l.A.Item,{name:"city",initialValue:"",label:"City",children:(0,p.jsxs)(s.A,{style:{width:"100%"},children:[(0,p.jsx)(x,{value:"",children:"Please Select"}),(0,p.jsx)(x,{value:"dhaka",children:"Dhaka"}),(0,p.jsx)(x,{value:"mymensingh",children:"Mymensingh"}),(0,p.jsx)(x,{value:"khulna",children:"Khulna"})]})}),(0,p.jsx)(l.A.Item,{name:"company",initialValue:"Example",label:"Company Name",children:(0,p.jsx)(r.A,{})}),(0,p.jsx)(l.A.Item,{name:"website",initialValue:"www.example.com",label:"Website",children:(0,p.jsx)(r.A,{})}),(0,p.jsx)(l.A.Item,{name:"userBio",initialValue:"Nam malesuada dolor tellus pretium amet was hendrerit facilisi id vitae enim sed ornare there suspendisse sed orci neque ac sed aliquet risus faucibus in pretium molestee.",label:"User Bio",children:(0,p.jsx)(r.A.TextArea,{rows:3})}),(0,p.jsx)(l.A.Item,{name:"skills",label:"Skills",children:(0,p.jsx)(u.TagInput,{children:(0,p.jsx)(h.Tag,{animate:!0,onChange:e=>{n({tags:e})},data:t.tags})})}),(0,p.jsxs)("div",{className:"setting-form-actions",children:[(0,p.jsx)(d.Button,{size:"default",htmlType:"submit",type:"primary",children:"Update Profile"}),"\xa0 \xa0",(0,p.jsx)(d.Button,{size:"default",onClick:t=>{t.preventDefault(),e.resetFields()},type:"light",children:"Cancel"})]})]})})})})})}},99674:(e,t,n)=>{n.d(t,{A:()=>v});var a=n(64467),s=n(58168),l=n(48738),i=n.n(l),o=n(97611),r=n(15207),c=n(9950),d=n(5741),u=n(45534),m=n(19389),h=n(87126),p=n(77643),x=n(49437),g=n(91396),b=n(15735),j=n(93457),f=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var s=0;for(a=Object.getOwnPropertySymbols(e);s<a.length;s++)t.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(n[a[s]]=e[a[s]])}return n},C="SECRET_COMBOBOX_MODE_DO_NOT_USE",A=function(e,t){var n,l=e.prefixCls,A=e.bordered,y=void 0===A||A,v=e.className,I=e.getPopupContainer,w=e.dropdownClassName,O=e.popupClassName,k=e.listHeight,S=void 0===k?256:k,T=e.placement,N=e.listItemHeight,P=void 0===N?32:N,V=e.size,E=e.disabled,B=e.notFoundContent,F=e.status,D=e.showArrow,_=f(e,["prefixCls","bordered","className","getPopupContainer","dropdownClassName","popupClassName","listHeight","placement","listItemHeight","size","disabled","notFoundContent","status","showArrow"]),M=c.useContext(d.QO),U=M.getPopupContainer,z=M.getPrefixCls,H=M.renderEmpty,R=M.direction,W=M.virtual,L=M.dropdownMatchSelectWidth,X=c.useContext(h.A),q=z("select",l),Q=z(),$=(0,j.RQ)(q,R),G=$.compactSize,J=$.compactItemClassnames,K=c.useMemo((function(){var e=_.mode;if("combobox"!==e)return e===C?"combobox":e}),[_.mode]),Y="multiple"===K||"tags"===K,Z=void 0!==D?D:_.loading||!(Y||"combobox"===K),ee=(0,c.useContext)(p.$W),te=ee.status,ne=ee.hasFeedback,ae=ee.isFormItemInput,se=ee.feedbackIcon,le=(0,g.v)(te,F);n=void 0!==B?B:"combobox"===K?null:(H||u.A)("Select");var ie=(0,b.A)((0,s.A)((0,s.A)({},_),{multiple:Y,hasFeedback:ne,feedbackIcon:se,showArrow:Z,prefixCls:q})),oe=ie.suffixIcon,re=ie.itemIcon,ce=ie.removeIcon,de=ie.clearIcon,ue=(0,r.A)(_,["suffixIcon","itemIcon"]),me=i()(O||w,(0,a.A)({},"".concat(q,"-dropdown-").concat(R),"rtl"===R)),he=G||V||X,pe=c.useContext(m.A),xe=null!==E&&void 0!==E?E:pe,ge=i()((0,a.A)((0,a.A)((0,a.A)((0,a.A)((0,a.A)({},"".concat(q,"-lg"),"large"===he),"".concat(q,"-sm"),"small"===he),"".concat(q,"-rtl"),"rtl"===R),"".concat(q,"-borderless"),!y),"".concat(q,"-in-form-item"),ae),(0,g.L)(q,le,ne),J,v);return c.createElement(o.Ay,(0,s.A)({ref:t,virtual:W,dropdownMatchSelectWidth:L},ue,{transitionName:(0,x.by)(Q,(0,x.TL)(T),_.transitionName),listHeight:S,listItemHeight:P,mode:K,prefixCls:q,placement:void 0!==T?T:"rtl"===R?"bottomRight":"bottomLeft",direction:R,inputIcon:oe,menuItemSelectedIcon:re,removeIcon:ce,clearIcon:de,notFoundContent:n,className:ge,getPopupContainer:I||U,dropdownClassName:me,showArrow:ne||D,disabled:xe}))},y=c.forwardRef(A);y.SECRET_COMBOBOX_MODE_DO_NOT_USE=C,y.Option=o.c$,y.OptGroup=o.JM;const v=y}}]);