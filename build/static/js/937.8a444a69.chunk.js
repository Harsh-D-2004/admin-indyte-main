"use strict";(self.webpackChunkindyte=self.webpackChunkindyte||[]).push([[937],{13269:(n,a,t)=>{t.r(a),t.d(a,{default:()=>p});t(9950);var e=t(17848),r=t(93047),s=t(98341),o=t(19026),l=t(29355),i=t(59377),c=t(79251),d=t(97871),x=t(44414);const p=n=>{let{data:a,Dragger:t}=n;const p=(0,s.wA)(),{noteData:m}=(0,s.d4)((n=>({noteData:n.Note.data}))),{title:u,key:h,description:g,stared:j,label:b}=a,k=n=>{p((0,d.onLabelUpdate)(m,h,n))},v=(0,x.jsx)(x.Fragment,{children:(0,x.jsx)("div",{className:"nav-labels",children:(0,x.jsxs)("ul",{children:[(0,x.jsx)("li",{children:(0,x.jsxs)(r.N_,{onClick:()=>k("personal"),to:"#",children:[(0,x.jsx)(c.Bullet,{className:"personal"})," Personal"]})}),(0,x.jsx)("li",{children:(0,x.jsxs)(r.N_,{onClick:()=>k("work"),to:"#",children:[(0,x.jsx)(c.Bullet,{className:"work"})," Work"]})}),(0,x.jsx)("li",{children:(0,x.jsxs)(r.N_,{onClick:()=>k("social"),to:"#",children:[(0,x.jsx)(c.Bullet,{className:"social"})," Social"]})}),(0,x.jsx)("li",{children:(0,x.jsxs)(r.N_,{onClick:()=>k("important"),to:"#",children:[(0,x.jsx)(c.Bullet,{className:"important"})," Important"]})})]})})});return(0,x.jsx)(o.Card,{className:b,children:(0,x.jsxs)(l.Cards,{headless:!0,children:[(0,x.jsxs)("h4",{children:[(0,x.jsxs)("span",{children:[u,(0,x.jsx)("span",{className:"status-bullet ".concat(b)})]}),(0,x.jsx)(t,{})]}),(0,x.jsx)("p",{children:g}),(0,x.jsxs)("div",{className:"actions",children:[(0,x.jsxs)("span",{children:[(0,x.jsx)(r.N_,{className:j?"star active":"star",onClick:()=>p((0,d.onStarUpdate)(m,h)),to:"#",children:(0,x.jsx)(e.A,{icon:"star",size:16})}),(0,x.jsx)(r.N_,{onClick:()=>(()=>{const n=m.filter((n=>n.key!==h));p((0,d.noteDeleteData)(n))})(),to:"#",children:(0,x.jsx)(e.A,{icon:"trash-2",size:16})})]}),(0,x.jsx)(i.Dropdown,{content:v,children:(0,x.jsx)(r.N_,{to:"#",children:(0,x.jsx)(e.A,{icon:"more-vertical",size:20})})})]})]})})}},19026:(n,a,t)=>{t.r(a),t.d(a,{Card:()=>s});var e,r=t(57528);const s=t(32878).Ay.div(e||(e=(0,r.A)(["\n    .ant-card{\n        border-radius: 15px !important;\n    }\n    .ant-card .ant-card-body{        \n        border-radius: 15px !important;\n        color: ",";    \n        padding-bottom: 20px !important;\n        padding-top: 20px !important;\n        transition: .35s;\n        h4{\n            display: flex;\n            align-items: center;\n            font-size: 16px;\n            margin-bottom: 16px;\n            color: ",";\n            justify-content: space-between;\n            svg{\n                color: #5A5F7D !important;\n                cursor: move;\n            }\n            .status-bullet{\n                position: relative;\n                bottom: 2px;\n                min-width: 7px;\n                height: 7px;\n                display: inline-block;\n                border-radius: 50%;\n               "," : 8px;\n               &.personal{\n                background: #5F63F2;\n               }\n               &.work{\n                background: #20C997;\n               }\n               &.social{\n                background: #FA8B0C;\n               }\n               &.important{\n                background: #2C99FF;\n               }\n            }\n        }\n        .actions{\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            margin-top: 18px;\n            .star{\n                svg,\n                i,\n                span{\n                    color: "," !important;\n                }\n                &.active{\n                    svg,\n                    i,\n                    span{\n                        color: "," !important;\n                    } \n                } \n            }\n            span{\n                display: inline-block;\n                margin: -5px;\n                a {\n                    margin: 5px;\n                    svg,\n                    i,\n                    span{\n                        color: "," !important;\n                    }\n                }\n            }\n            .ant-dropdown-trigger{\n                svg{\n                    color: #868EAE;\n                }\n            }\n        }        \n    } \n    &.personal .ant-card .ant-card-body{\n        background: #5F63F240;\n        &:hover{\n            background: #5F63F290;\n        }\n    }\n    &.work .ant-card .ant-card-body{\n        background: #20C99740;\n        &:hover{\n            background: #20C99790;\n        }\n    }\n    &.social .ant-card .ant-card-body{\n        background: #FA8B0C40;\n        &:hover{\n            background: #FA8B0C90;\n        }\n    }\n    &.important .ant-card .ant-card-body{\n        background: #2C99FF40;\n        &:hover{\n            background: #2C99FF90;\n        }\n    }  \n"])),(n=>{let{theme:a}=n;return a["gray-color"]}),(n=>{let{theme:a}=n;return a["dark-color"]}),(n=>{let{theme:a}=n;return a.rtl?"margin-right":"margin-left"}),(n=>{let{theme:a}=n;return a["gray-color"]}),(n=>{let{theme:a}=n;return a["warning-color"]}),(n=>{let{theme:a}=n;return a["gray-color"]}))},937:(n,a,t)=>{t.r(a),t.d(a,{default:()=>b});t(9950);var e=t(98341),r=t(72621),s=t(92614),o=t.n(s),l=t(17848),i=t(41988),c=t(87094),d=t(79251),x=t(13269),p=t(29355),m=t(97871),u=t(44414);const h=(0,r.ni)((()=>(0,u.jsx)(l.A,{icon:"move",size:16}))),g=(0,r.Zj)((n=>{let{value:a}=n;return(0,u.jsx)(i.A,{xxl:8,xl:12,lg:12,sm:12,xs:24,children:(0,u.jsx)(x.default,{Dragger:h,data:a})},a.key)})),j=(0,r.q6)((n=>{let{items:a}=n;return(0,u.jsx)(c.A,{gutter:24,children:a.filter((n=>"social"===n.label)).map(((n,a)=>(0,u.jsx)(g,{index:a,value:n},"item-".concat(n.key))))})}));const b=function(){const n=(0,e.wA)(),{noteData:a}=(0,e.d4)((n=>({noteData:n.Note.data})));return(0,u.jsx)(p.Cards,{title:"Task Lists",children:(0,u.jsx)(d.NoteCardWrap,{children:(0,u.jsx)(j,{useDragHandle:!0,axis:"xy",items:a,onSortEnd:t=>{let{oldIndex:e,newIndex:r}=t;n((0,m.noteDragData)(o()([...a.filter((n=>"social"===n.label)),...a.filter((n=>"social"!==n.label))],e,r)))}})})})}}}]);