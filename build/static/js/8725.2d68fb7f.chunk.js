"use strict";(self.webpackChunkindyte=self.webpackChunkindyte||[]).push([[8725],{91:(e,t,n)=>{n.r(t),n.d(t,{AutoComplete:()=>d});n(9950);var a=n(55902),r=n(48538),l=n(60767),i=n(98341),o=n(3783),p=n(44414);const s=()=>{},c=(e,t)=>({value:e,label:(0,p.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[e,t]})}),d=e=>{const{rtl:t}=(0,i.d4)((e=>({rtl:e.ChangeLayoutMode.rtlData}))),{customComponent:n,patterns:d,patternButtons:u,width:h,onSearch:m,dataSource:f,placeholder:x}=e,g=(null===f||void 0===f?void 0:f.length)>0&&f.map((e=>{const{title:t,count:n}=e;return{label:t,options:[c(t,(0,p.jsxs)("span",{className:"certain-search-item-count",children:[n," people"]}))]}})),y=e=>{m(e)};return n?(0,p.jsx)(o.AutoCompleteStyled,{dataSource:f,style:{width:h},onSelect:s,onSearch:y,children:n}):d?(0,p.jsx)(o.AutoCompleteStyled,{className:"certain-category-search",popupClassName:"certain-category-search-dropdown",dropdownMatchSelectWidth:!1,dropdownStyle:{width:300},style:{width:h},options:g,placeholder:x,onSearch:y,children:(0,p.jsx)(a.A,{suffix:u?(0,p.jsx)(r.A,{className:"search-btn",style:{[t?"marginLeft":"marginRight"]:-20},type:"primary",children:(0,p.jsx)(l.A,{})}):(0,p.jsx)(l.A,{})})}):(0,p.jsx)(o.AutoCompleteStyled,{dataSource:f,style:{width:h},onSelect:s,onSearch:y,placeholder:x})};d.defaultProps={width:"350px",placeholder:"Input here"}},3783:(e,t,n)=>{n.r(t),n.d(t,{AutoCompleteStyled:()=>A});var a=n(57528),r=n(32878),l=n(58168),i=n(82284),o=n(5544),p=n(48738),s=n.n(p),c=n(50604),d=n(15207),u=n(9950),h=n(5741),m=n(99674),f=n(39156),x=m.A.Option;function g(e){return e&&e.type&&(e.type.isSelectOption||e.type.isSelectOptGroup)}var y=function(e,t){var n,a=e.prefixCls,r=e.className,p=e.popupClassName,y=e.dropdownClassName,w=e.children,S=e.dataSource,v=(0,c.A)(w);if(1===v.length&&(0,f.zO)(v[0])&&!g(v[0])){var A=(0,o.A)(v,1);n=A[0]}var C,j=n?function(){return n}:void 0;return C=v.length&&g(v[0])?w:S?S.map((function(e){if((0,f.zO)(e))return e;switch((0,i.A)(e)){case"string":return u.createElement(x,{key:e,value:e},e);case"object":var t=e.value;return u.createElement(x,{key:t,value:t},e.text);default:return}})):[],u.createElement(h.TG,null,(function(n){var i=(0,n.getPrefixCls)("select",a);return u.createElement(m.A,(0,l.A)({ref:t},(0,d.A)(e,["dataSource"]),{prefixCls:i,popupClassName:p||y,className:s()("".concat(i,"-auto-complete"),r),mode:m.A.SECRET_COMBOBOX_MODE_DO_NOT_USE},{getInputElement:j}),C)}))},w=u.forwardRef(y);w.Option=x;const S=w;var v;const A=(0,r.Ay)(S)(v||(v=(0,a.A)(["\n    display: block !important;\n    .ant-select-selection-placeholder{\n        padding: 0 20px !important;\n        text-align: ",";\n        ",": 2px !important;\n    }\n    .ant-select-selector{\n        display: flex;\n        align-items: center;\n        height: 37px !important;\n        padding: 0 !important;\n        border-color: #E3E6EF !important;\n        .ant-select-selection-search{\n            .ant-input-affix-wrapper{\n                padding: 0 20px;\n            }\n            .ant-input-suffix{\n                svg,\n                i{\n                    color: ",";\n                }\n            }\n        }\n    }\n    .ant-select-selector input{\n        height: 33px !important;\n        ",": 0 !important;\n    }\n    .ant-select-selection-search{\n        ",": 20px;\n        width: auto !important;\n        @media only screen and (max-width: 575px){\n            width: 100% !important;\n        }\n    }\n    .ant-select-selection-search textarea.ant-input{\n        padding: 12px 20px;\n    }\n    .ant-input-affix-wrapper{\n        padding: 0 20px;\n    }\n    .ant-input-affix-wrapper input{\n        height: 38px !important;\n    }\n    .ant-input-affix-wrapper .ant-input-suffix .search-btn{\n        height: 38px;\n        border-radius: ",";\n        svg,\n        i{\n            color: #fff;\n        }\n    }\n"])),(e=>{let{theme:t}=e;return t.rtl?"right":"left"}),(e=>{let{theme:t}=e;return t.rtl?"right":"left"}),(e=>{let{theme:t}=e;return t["extra-light-color"]}),(e=>{let{theme:t}=e;return t.rtl?"padding-right":"padding-left"}),(e=>{let{theme:t}=e;return t.rtl?"right":"left"}),(e=>{let{theme:t}=e;return t.rtl?"4px 0 0 4px":"0 4px 4px 0"}))},10107:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});n(9950);var a=n(98341),r=n(71481),l=n(44414);const i=function(){const[e,t]=(0,a.d4)((e=>[e.headerSearchData,e.email.allMessage]));return(0,l.jsx)(r.default,{email:t.filter((e=>"spam"===e.type)),searchData:e})}}}]);