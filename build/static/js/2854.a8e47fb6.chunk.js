"use strict";(self.webpackChunkindyte=self.webpackChunkindyte||[]).push([[2854,7844,91],{72449:(n,e,r)=>{r.r(e),r.d(e,{BtnGroup:()=>s,Button:()=>d});var t=r(9950),a=r(8737),o=r(44414);const d=n=>{const{type:e,shape:r,icon:d,size:s,outlined:i,ghost:l,transparented:c,raised:h,squared:p,color:g,social:u,load:x,children:f,...m}=n,[b,y]=(0,t.useState)({loading:!1});return(0,o.jsx)(a.ButtonStyled,{squared:p,outlined:i?1:0,ghost:l,transparent:c?1:0,raised:h?1:0,data:e,size:s,shape:r,type:e,icon:d,color:g,social:u,onClick:x&&(()=>{y({loading:!0})}),loading:b.loading,...m,children:f})};d.defaultProps={type:"default"};const s=n=>{let{children:e}=n;return(0,o.jsx)(a.ButtonStyledGroup,{children:e})}},69143:(n,e,r)=>{r.r(e),r.d(e,{CalendarButtonPageHeader:()=>i});r(9950);var t=r(17848),a=r(43713),o=r(80303),d=r(72449),s=r(44414);const i=()=>{const n=(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(o.DateRangePickerOne,{})});return(0,s.jsx)(a.Popover,{placement:"bottomRight",title:"Search by Calendar",content:n,action:"hover",children:(0,s.jsxs)(d.Button,{size:"small",type:"white",children:[(0,s.jsx)(t.A,{icon:"calendar",size:14}),"Select Date"]})})}},79523:(n,e,r)=>{r.r(e),r.d(e,{ExportButtonPageHeader:()=>i});r(9950);var t=r(93047),a=r(17848),o=r(43713),d=r(72449),s=r(44414);const i=()=>{const n=(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.k2,{to:"#",children:[(0,s.jsx)(a.A,{size:16,icon:"printer"}),(0,s.jsx)("span",{children:"Printer"})]}),(0,s.jsxs)(t.k2,{to:"#",children:[(0,s.jsx)(a.A,{size:16,icon:"book-open"}),(0,s.jsx)("span",{children:"PDF"})]}),(0,s.jsxs)(t.k2,{to:"#",children:[(0,s.jsx)(a.A,{size:16,icon:"file-text"}),(0,s.jsx)("span",{children:"Google Sheets"})]}),(0,s.jsxs)(t.k2,{to:"#",children:[(0,s.jsx)(a.A,{size:16,icon:"x"}),(0,s.jsx)("span",{children:"Excel (XLSX)"})]}),(0,s.jsxs)(t.k2,{to:"#",children:[(0,s.jsx)(a.A,{size:16,icon:"file"}),(0,s.jsx)("span",{children:"CSV"})]})]});return(0,s.jsx)(o.Popover,{placement:"bottomLeft",content:n,trigger:"click",children:(0,s.jsxs)(d.Button,{size:"small",type:"white",children:[(0,s.jsx)(a.A,{icon:"download",size:14}),"Export"]})})}},48989:(n,e,r)=>{r.r(e),r.d(e,{ShareButtonPageHeader:()=>i});r(9950);var t=r(93047),a=r(17848),o=r(43713),d=r(72449),s=r(44414);const i=()=>{const n=(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.k2,{to:"#",children:[(0,s.jsx)(a.A,{size:16,icon:"facebook"}),(0,s.jsx)("span",{children:"Facebook"})]}),(0,s.jsxs)(t.k2,{to:"#",children:[(0,s.jsx)(a.A,{size:16,icon:"twitter"}),(0,s.jsx)("span",{children:"Twitter"})]}),(0,s.jsxs)(t.k2,{to:"#",children:[(0,s.jsx)(a.A,{size:16,icon:"rss"}),(0,s.jsx)("span",{children:"Feed"})]}),(0,s.jsxs)(t.k2,{to:"#",children:[(0,s.jsx)(a.A,{size:16,icon:"linkedin"}),(0,s.jsx)("span",{children:"Linkedin"})]}),(0,s.jsxs)(t.k2,{to:"#",children:[(0,s.jsx)(a.A,{size:16,icon:"instagram"}),(0,s.jsx)("span",{children:"Instagram"})]})]});return(0,s.jsx)(o.Popover,{placement:"bottomLeft",content:n,trigger:"click",children:(0,s.jsxs)(d.Button,{size:"small",type:"white",children:[(0,s.jsx)(a.A,{icon:"share-2",size:14}),"Share"]},"3")})}},8737:(n,e,r)=>{r.r(e),r.d(e,{ButtonStyled:()=>l,ButtonStyledGroup:()=>c});var t,a,o=r(57528),d=r(32878),s=r(48538);const i=s.A.Group,l=(0,d.Ay)(s.A)(t||(t=(0,o.A)(["\n\n    background: ",";\n    border-width: 0px;\n    border-style: ",";\n    color: ",";\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: ",";\n    padding: 0px 20.5px;\n    height: ",";\n    font-weight: 500;\n    box-shadow: 0 0;\n    &:hover, &:focus {\n        background: ",";\n        color: ",";\n    }\n    i,\n    svg,\n    img{\n        width: 16px;\n        height: 16px;\n        +span{\n            ",": 6px;\n        }\n    }\n\n    ",";\n    ",";\n    ",";\n    ",";\n    ",";\n    ",";\n    ",";\n"])),(n=>{let{type:e,theme:r}=n;return"default"!==e&&r["".concat(e,"-color")]}),(n=>{let{type:e}=n;return"dashed"!==e?"solid":"dashed"}),(n=>{let{type:e}=n;return"default"!==e?"#ffffff":"#5A5F7D"}),(n=>{let{shape:e}=n;return e?"40px":"4px"}),(n=>{let{size:e,theme:r}=n;return"default"!==e?r["btn-height-".concat(e)]:"42px"}),(n=>{let{type:e,theme:r}=n;return"default"!==e&&r["".concat(e,"-hover")]}),(n=>{let{type:e}=n;return"default"!==e?"#ffffff":"#5A5F7D"}),(n=>{let{theme:e}=n;return e.rtl?"margin-right":"margin-left"}),(n=>{let{transparent:e,theme:r,type:t}=n;return e&&((n,e)=>"\n        background: ".concat("default"!==e&&n["".concat(e,"-color")],"15;\n        border-width: 0px;\n        color: ").concat("default"!==e&&n["".concat(e,"-color")],";\n        &:hover, &:focus {\n            background: ").concat("default"!==e&&n["".concat(e,"-hover")],"15;\n            border-width: 0px;\n            color: ").concat("default"!==e&&n["".concat(e,"-hover")],"; \n        }\n    "))(r,t)}),(n=>{let{outlined:e,theme:r,type:t}=n;return e&&((n,e)=>"\n        background: transparent;\n        border: 1px solid ".concat("light"!==e?n["".concat(e,"-color")]:n["border-color-normal"],";\n        color: ").concat("default"!==e&&n["".concat(e,"-color")],";\n  \n        &:hover, &:focus {\n          background: transparent;\n          border: 1px solid ").concat("default"!==e&&n["".concat(e,"-hover")],";\n          color: ").concat("default"!==e&&n["".concat(e,"-hover")],";\n        }\n    "))(r,t)}),(n=>{let{ghost:e,theme:r}=n;return e&&(n=>"\n          background: transparent;\n          border: 1px solid ".concat(n["border-color-normal"]," !important;\n          color: ").concat(n["border-color-normal"]," !important;\n            \n          &:hover, &:focus {\n              background: #ffffff50 !important;\n              border: 1px solid transparent !important;\n              color: ").concat(n["border-color-normal"]," !important;\n          }\n      "))(r)}),(n=>{let{raised:e,theme:r,type:t}=n;return e&&((n,e)=>"\n        box-shadow: 0 10px 15px ".concat("white"!==e?n["".concat(e,"-color")]:"#9299B8","20;\n    "))(r,t)}),(n=>{let{squared:e,theme:r,type:t}=n;return e&&((n,e)=>"\n      background: ".concat("default"!==e&&n["".concat(e,"-color")],";\n      border: 1px solid ").concat("default"!==e?n["".concat(e,"-color")]:n["disabled-color"],";\n      color: ").concat("default"!==e&&"#ffffff",";\n      border-radius: 0px;\n      padding: 0px 15px;\n  \n      &:hover, &:focus {\n          background: ").concat("default"!==e&&n["".concat(e,"-hover")],";\n          border: 1px solid ").concat("default"!==e&&n["".concat(e,"-hover")],";\n          color: ").concat("default"!==e&&"#ffffff",";\n      }\n  "))(r,t)}),(n=>{let{squared:e,outlined:r,theme:t,type:a}=n;return e&&r&&((n,e)=>"\n      background: transparent;\n      border: 1px solid ".concat("default"!==e?n["".concat(e,"-color")]:n["disabled-color"],";\n      color: ").concat("default"!==e&&n["".concat(e,"-color")],";\n      border-radius: 0px;\n      padding: 0px 15px;\n      &:hover, &:focus {\n          background: ").concat("default"!==e&&n["".concat(e,"-hover")],";\n          border: 1px solid ").concat("default"!==e&&n["".concat(e,"-hover")],";\n          color: ").concat("default"!==e&&"#ffffff",";\n      }\n  "))(t,a)}),(n=>{let{social:e,color:r,shape:t}=n;return e&&((n,e)=>"\n      background: ".concat(n,";\n      background: ").concat(n,";\n      border: 1px solid ").concat(n,";\n      color: #ffffff;\n      border-radius: ").concat(e?"40px":"4px",";\n      padding: 0px 12px;\n      display: inline-flex;\n      align-items: center;\n      span {\n          padding-left: 5px;\n      }\n      &:hover, &:focus {\n          background: ").concat(n,"90;\n          border: 1px solid ").concat(n,"90;\n          color: #ffffff;\n      }\n  "))(r,t)})),c=(0,d.Ay)(i)(a||(a=(0,o.A)(["\n    >.ant-btn:first-child{\n        border-top-left-radius: 3px !important;\n        border-bottom-left-radius: 3px !important;\n    }\n    button {\n        margin: 0px;\n        padding: 0 10.75px;\n        height: 30px;\n        font-size: 12px;\n        font-weight: 500;\n    }\n    .ant-btn-light:hover{\n        background: #F4F5F7;\n    }\n"])))},29355:(n,e,r)=>{r.r(e),r.d(e,{Cards:()=>l});r(9950);var t=r(93047),a=r(17848),o=r(56205),d=r(42017),s=r(59377),i=r(44414);const l=n=>{const{title:e,children:r,more:l,moreText:c,size:h,headless:p,caption:g,isbutton:u,bodyStyle:x,headStyle:f,border:m,bodypadding:b}=n;return(0,i.jsx)(i.Fragment,{children:p?(0,i.jsxs)(o.CardFrame,{bodypadding:b&&b,bodyStyle:x&&x,size:h,style:{width:"100%"},bordered:m,children:[e&&(0,i.jsx)(d.default,{as:"h4",children:e}),g&&(0,i.jsx)("p",{children:g}),r]}):(0,i.jsx)(o.CardFrame,{size:h,title:e,bodyStyle:x&&x,headStyle:f&&f,bordered:m,bodypadding:b&&b,extra:(0,i.jsxs)(i.Fragment,{children:[l&&(0,i.jsx)(s.Dropdown,{content:l,placement:"bottomCenter",children:(0,i.jsx)(t.k2,{to:"#",children:c?"More":(0,i.jsx)(a.A,{icon:"more-horizontal"})})}),u&&u]}),style:{width:"100%"},children:r})})};l.defaultProps={border:!1}},56205:(n,e,r)=>{r.r(e),r.d(e,{CardFrame:()=>s});var t,a=r(57528),o=r(32878),d=r(2557);const s=(0,o.Ay)(d.A)(t||(t=(0,a.A)(["\n  ","\n  margin-bottom: 25px !important;\n  .ant-card-head{\n    border-color: #F1F2F6;\n  }\n  .ant-card-head .ant-card-head-title {\n    padding: 18px 0;\n  }\n  .ant-card-head-title .ant-page-header-heading-title{\n    font-weight: 500;\n  }\n  .ant-card-body{\n    padding: ",";\n    table{\n      .ant-tag{\n        line-height: 18px;\n        border: 0 none;\n        text-transform: uppercase;\n        font-size: 10px;\n        color: #fff;\n        &.early{\n          background: ",";\n        }\n        &.late{\n          background: ",";\n        }\n        &.complete{\n          background: ",";\n        }\n        &.progress{\n          background: ",";\n        }\n      }\n    }\n  }\n  .ant-card.ant-card-bordered {\n      border-radius: 5px;\n      overflow: hidden;\n      border: none;\n  }\n  .custom-label {\n    font-size: 13px;\n    color: #868eae;\n    display: inline-flex;\n    align-items: center;\n  }\n  .custom-label:not(:last-child) {\n    "," : 20px;\n  }\n\n  .custom-label span {\n    width: 8px;\n    height: 8px;\n    border-radius: 50%;\n    ",": 7px;\n  }\n  \n\n  .ant-card-extra .ant-dropdown-trigger {\n    line-height: 0;\n    order: 1;\n    ",": 20px !important;\n  }\n\n  .growth-downward h1 sub,\n  .growth-upward h1 sub {\n    font-size: 14px;\n    font-weight: 600;\n    bottom: 0;\n    ",": 5px;\n  }\n \n"])),(n=>{let{isbutton:e,theme:r}=n;return e&&(n=>"\n    .ant-card-head {\n      display: flex;\n      justify-content: space-evenly;\n      .ant-card-head-wrapper{\n        width: 100%;\n      }\n      .ant-tabs.ant-tabs-top.ant-card-head-tabs.ant-tabs-large.ant-tabs-line{\n        width: 100%;\n        display: block;\n      }\n      .ant-tabs-nav-scroll {\n        display: flex;\n        justify-content: flex-end;\n      }\n      .ant-tabs-ink-bar.ant-tabs-ink-bar-animated {\n        display: none !important;\n      }\n      .ant-tabs-nav .ant-tabs-tab {\n        border-radius: 2px;\n        height: 30px;\n        margin: 0px;\n        ".concat(n.rtl?"margin-right":"margin-left",": -1px;\n        display: inline-flex;\n        align-items: center;\n        border: 1px solid ").concat(n["border-color-base"],";\n        background: #fff;\n        span svg {\n          ").concat(n.rtl?"padding-right":"padding-left",": 5px !important;\n        }\n      }\n      .ant-tabs-nav .ant-tabs-tab-active {\n        font-weight: 500;\n        border: 1px solid ").concat(n["primary-color"],";\n        background: ").concat(n["primary-color"],";\n        color: #fff;\n        border-radius: 2px;\n        height: 30px;\n        margin: 0px;\n        display: inline-flex;\n        align-items: center;\n      }\n      .ant-tabs-bar {\n        border: none;\n      }\n      .ant-tabs-nav-wrap {\n        margin-bottom: 0px;\n        overflow: hidden;\n    }\n    }\n    .ant-card-head .ant-tabs.ant-tabs-top.ant-card-head-tabs.ant-tabs-large.ant-tabs-line {\n      width: 100%;\n      display: block;\n      justify-content: flex-end;\n      height: 73px;\n      padding-top: 8px;\n  }\n"))(r)}),(n=>{let{bodypadding:e}=n;return e?"".concat(e," !important"):"25px"}),(n=>{let{theme:e}=n;return e["primary-color"]}),(n=>{let{theme:e}=n;return e["warning-color"]}),(n=>{let{theme:e}=n;return e["success-color"]}),(n=>{let{theme:e}=n;return e["danger-color"]}),(n=>{let{theme:e}=n;return e.rtl?" margin-left":" margin-right"}),(n=>{let{theme:e}=n;return e.rtl?" margin-left":" margin-right"}),(n=>{let{theme:e}=n;return e.rtl?" margin-right":" margin-left"}),(n=>{let{theme:e}=n;return e.rtl?" right":" left"}))},80303:(n,e,r)=>{r.r(e),r.d(e,{CustomDateRange:()=>h,DateRangePickerOne:()=>c});var t=r(9950),a=r(56712),o=(r(39890),r(34779),r(20162)),d=r(477),s=r(21968),i=r(72449),l=r(44414);const c=()=>{const[n,e]=(0,t.useState)({datePickerInternational:null,dateRangePicker:{selection:{startDate:new Date,endDate:(0,a.default)(new Date,7),key:"selection"}}}),{dateRangePicker:r}=n,d=r.selection.startDate.toString().split(" "),c=r.selection.endDate.toString().split(" ");return(0,l.jsxs)(s.ItemWraper,{children:[(0,l.jsx)(o.Ur,{onChange:r=>{e({...n,dateRangePicker:{...n.dateRangePicker,...r}})},showSelectionPreview:!0,moveRangeOnFirstSelection:!1,className:"PreviewArea",months:2,ranges:[r.selection],direction:"horizontal"}),(0,l.jsxs)(s.ButtonGroup,{children:[(0,l.jsx)("p",{children:"".concat(d[1]," ").concat(d[2]," ").concat(d[3]," - ").concat(c[1]," ").concat(c[2]," ").concat(c[3])}),(0,l.jsx)(i.Button,{size:"small",type:"primary",children:"Apply"}),(0,l.jsx)(i.Button,{size:"small",type:"white",outlined:!0,children:"Cancel"})]})]})};class h extends t.Component{constructor(){super(...arguments),this.state={startValue:null,endValue:null,endOpen:!1},this.disabledStartDate=n=>{const{endValue:e}=this.state;return!(!n||!e)&&n.valueOf()>e.valueOf()},this.disabledEndDate=n=>{const{startValue:e}=this.state;return!(!n||!e)&&n.valueOf()<=e.valueOf()},this.onChange=(n,e)=>{this.setState({[n]:e})},this.onStartChange=n=>{this.onChange("startValue",n)},this.onEndChange=n=>{this.onChange("endValue",n)},this.handleStartOpenChange=n=>{n||this.setState({endOpen:!0})},this.handleEndOpenChange=n=>{this.setState({endOpen:n})}}render(){const{startValue:n,endValue:e,endOpen:r}=this.state;return(0,l.jsxs)("div",{children:[(0,l.jsx)(d.A,{disabledDate:this.disabledStartDate,showTime:!0,format:"YYYY-MM-DD HH:mm:ss",value:n,placeholder:"Start",onChange:this.onStartChange,onOpenChange:this.handleStartOpenChange,style:{margin:"5px"}}),(0,l.jsx)(d.A,{disabledDate:this.disabledEndDate,showTime:!0,format:"YYYY-MM-DD HH:mm:ss",value:e,placeholder:"End",onChange:this.onEndChange,open:r,onOpenChange:this.handleEndOpenChange,style:{margin:"5px"}})]})}}},21968:(n,e,r)=>{r.r(e),r.d(e,{ButtonGroup:()=>i,ItemWraper:()=>s});var t,a,o=r(57528),d=r(32878);const s=d.Ay.div(t||(t=(0,o.A)(["\n    display: flex;\n    flex-direction: column;\n    .rdrDateDisplay, .rdrMonthAndYearPickers{\n        display: none;\n    }\n    .rdrMonth {\n        position: relative;\n        max-width: 272px;\n    }\n    .rdrMonthName {\n        text-align: center;\n        font-size: 18px;\n        position: absolute;\n        top: -50px;\n        ",": 100px;\n        font-weight: 400;\n    }\n    .rdrDefinedRangesWrapper{\n        .rdrStaticRanges{\n            .rdrStaticRange{\n                border-bottom: 0 none;\n                &:hover,\n                &.rdrStaticRangeSelected{\n                    span{\n                        font-weight: 400;\n                        color: ",";\n                        background-color: #EFEFFE;\n                    }\n                }\n                .rdrStaticRangeLabel{\n                    padding: 9px 10px;\n                }\n            }\n        }\n    }\n    .rdrCalendarWrapper{\n        .rdrPprevButton,\n        .rdrNextButton{\n            padding: 0;\n            background: transparent;\n        }\n        .rdrMonthsHorizontal{\n            .rdrMonth{\n                .rdrMonthName{\n                    font-size: 13px;\n                    font-weight: 500;\n                    color: ",";\n                }\n            }\n            .rdrDays{\n                .rdrSelected, \n                .rdrInRange{                    \n                    background-color: #EFEFFE;\n                    left: 0 !important;\n                    right: 0 !important;\n                }\n                .rdrStartEdge{\n                    right: 0 !important;\n                    left: 0 !important;\n                    ",";\n                    ",";\n                }\n                .rdrEndEdge{\n                    ",";\n                    ",";\n                }\n                .rdrDayStartOfMonth .rdrDayInPreview, .rdrDayStartOfMonth .rdrDayEndPreview, .rdrDayStartOfWeek .rdrDayInPreview, .rdrDayStartOfWeek .rdrDayEndPreview{\n                    border-radius: 0px;\n                }\n                \n                .rdrDayEndOfWeek .rdrDayStartPreview,\n                .rdrDayEndOfWeek .rdrDayInPreview,\n                .rdrDayEndOfMonth .rdrDayStartPreview,\n                .rdrDayEndOfMonth .rdrDayInPreview,\n                .rdrDayEndOfMonth .rdrInRange, \n                .rdrDayEndOfWeek .rdrInRange, \n                .rdrDayEndOfWeek .rdrStartEdge\n                .rdrDayStartOfMonth .rdrInRange, \n                .rdrDayStartOfWeek .rdrInRange{\n                    border-radius: 0;\n                }\n\n                .rdrDayEndOfWeek .rdrDayStartPreview.rdrDayEndPreview,\n                .rdrDayStartOfWeek .rdrDayStartPreview.rdrDayEndPreview,\n                .rdrDayEndOfMonth .rdrDayStartPreview.rdrDayEndPreview,\n                .rdrDayStartOfMonth .rdrDayStartPreview.rdrDayEndPreview{\n                    border-radius: 1.042em;\n                    color: #fff !important;\n                }\n                \n                .rdrDayEndPreview,\n                .rdrDayStartPreview,\n                .rdrDayInPreview{\n                    border: 0 none;\n                    background-color: #EFEFFE;\n                    color: "," !importtant;\n                    top: 0;\n                    bottom: 0;\n                }\n                \n                .rdrStartEdge, \n                .rdrEndEdge,\n                .rdrDayStartPreview,\n                .rdrDayEndPreview{\n                    background-color: ",";\n                }\n\n                .rdrDay:not(.rdrDayPassive) .rdrInRange ~ .rdrDayNumber span,\n                .rdrDay:not(.rdrDayPassive) .rdrDayInPreview ~ .rdrDayNumber span, \n                .rdrDay:not(.rdrDayPassive) .rdrSelected ~ .rdrDayNumber span{\n                    color: "," !important;\n                }\n                .rdrDay:not(.rdrDayPassive).rdrDayHovered .rdrInRange ~ .rdrDayNumber span,\n                .rdrDay:not(.rdrDayPassive).rdrDayHovered .rdrDayInPreview ~ .rdrDayNumber span, \n                .rdrDay:not(.rdrDayPassive).rdrDayHovered .rdrSelected ~ .rdrDayNumber span{\n                    color: #fff !important;\n                }\n                .rdrDay:not(.rdrDayPassive) .rdrDayEndPreview ~ .rdrDayNumber span,\n                .rdrDay:not(.rdrDayPassive) .rdrStartEdge ~ .rdrDayNumber span, \n                .rdrDay:not(.rdrDayPassive) .rdrEndEdge ~ .rdrDayNumber span{\n                    color: #fff;\n                }\n                .rdrDay{\n                    margin-bottom: 3px;\n                    .rdrSelected, \n                    .rdrInRange, \n                    .rdrStartEdge, \n                    .rdrEndEdge{\n                        top: 0;\n                        bottom: 0;\n\n                    }\n                    .rdrDayNumber{\n                        z-index: 10;\n                    }\n                    &.rdrDayToday{\n                        background-color: ",";\n                        color: #fff;\n                        border-radius: 50%;\n                        .rdrDayNumber{\n                            span{\n                                color: #fff;\n                                &:after{\n                                    display: none;\n                                }\n                            }\n                        }\n                    }\n                    &.rdrDayHovered{\n                        .rdrDayNumber span{\n                            color: #fff !important;\n                        }\n                    }\n                }\n            }\n        }\n    }\n"])),(n=>{let{theme:e}=n;return e.rtl?"right":"left"}),(n=>{let{theme:e}=n;return e["primary-color"]}),(n=>{let{theme:e}=n;return e["dark-color"]}),(n=>{let{theme:e}=n;return e.rtl?"border-top-right-radius: 1.042em; border-top-left-radius: 0em;":"border-top-left-radius: 1.042em;"}),(n=>{let{theme:e}=n;return e.rtl?"border-bottom-right-radius: 1.042em;border-bottom-left-radius: 0em;":"border-bottom-left-radius: 1.042em;"}),(n=>{let{theme:e}=n;return e.rtl?"border-top-left-radius: 1.042em;border-top-right-radius: 0;":"border-top-right-radius: 1.042em;"}),(n=>{let{theme:e}=n;return e.rtl?"border-bottom-left-radius: 1.042em;border-bottom-right-radius: 0;":"border-bottom-right-radius: 1.042em;"}),(n=>{let{theme:e}=n;return e["dark-color"]}),(n=>{let{theme:e}=n;return e["primary-color"]}),(n=>{let{theme:e}=n;return e["dark-color"]}),(n=>{let{theme:e}=n;return e["primary-color"]})),i=d.Ay.div(a||(a=(0,o.A)(["\n    border-top: 1px solid #EEEFF2;\n    padding: 10px;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: flex-end;\n    margin: -4px -4px -15px;\n    p{\n        font-size: 13px;\n    margin: ",";\n        font-weight: 500;\n        color: ",";\n    }\n    button {\n        font-size: 12px;\n        margin: 4px;\n        height: 32px;\n        padding: 0px 13.26px;\n    }\n"])),(n=>{let{theme:e}=n;return e.rtl?"0 0 0 20px":"0 20px 0 0"}),(n=>{let{theme:e}=n;return e["gray-color"]}))},8755:(n,e,r)=>{r.r(e),r.d(e,{TagStyle:()=>s});var t,a=r(57528),o=r(32878),d=r(12916);const s=(0,o.Ay)(d.A)(t||(t=(0,a.A)(["\n\n"])))},27785:(n,e,r)=>{r.r(e),r.d(e,{Tag:()=>l});var t=r(9950),a=r(55902),o=r(8750),d=r(8755),s=r(44414);const{CheckableTag:i}=d.TagStyle;function l(n){const[e,r]=(0,t.useState)({checked:!0,selectedTags:[]}),{closable:a,onClose:o,color:l,checked:h,onChange:p,data:g,hottags:u,animate:x,children:f}=n,m=g,{selectedTags:b}=e;return h?(0,s.jsx)(i,{props:n,checked:e.checked,onChange:n=>{r({...e,checke:n}),p&&p(n)}}):u?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("span",{style:{marginRight:8},children:"Categories:"}),m.map((n=>(0,s.jsx)(i,{checked:b.indexOf(n)>-1,onChange:t=>((n,t)=>{const{selectedTags:a}=e,o=t?[...a,n]:a.filter((e=>e!==n));r({...e,selectedTags:o}),p&&p(o)})(n,t),children:n},n)))]}):x?(0,s.jsx)(c,{data:g,onChange:p}):(0,s.jsx)(d.TagStyle,{closable:a,onClose:n=>{o(n)},color:l,children:f})}function c(n){const{data:e,onChange:r}=n,[i,l]=(0,t.useState)({tags:e,inputVisible:!1,inputValue:""}),c=()=>{const{inputValue:n}=i;let{tags:e}=i;n&&-1===e.indexOf(n)&&(e=[...e,n]),r&&r(e),l({...i,tags:e,inputVisible:!1,inputValue:""})},{tags:h,inputVisible:p,inputValue:g}=i,u=h.map((n=>{const e=(0,s.jsx)(d.TagStyle,{closable:!0,onClose:e=>{e.preventDefault(),(n=>{const e=i.tags.filter((e=>e!==n));l({tags:e}),r&&r(e)})(n)},children:n});return(0,s.jsx)("span",{style:{display:"inline-block"},children:e},n)}));return(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{style:{marginBottom:10},children:u}),p&&(0,s.jsx)(a.A,{autoFocus:!0,type:"text",size:"small",style:{width:78},value:g,onChange:n=>{l({...i,inputValue:n.target.value})},onBlur:c,onPressEnter:c}),!p&&(0,s.jsxs)(d.TagStyle,{onClick:()=>{l({...i,inputVisible:!0})},style:{background:"#fff",borderStyle:"dashed"},children:[(0,s.jsx)(o.A,{})," New Tag"]})]})}},93693:(n,e,r)=>{r.r(e),r.d(e,{default:()=>f});var t=r(9950),a=r(87094),o=r(41988),d=r(17848),s=r(57687),i=r(67482),l=r(29355),c=r(27785),h=r(72449),p=r(48989),g=r(79523),u=r(69143),x=r(44414);const f=function(){const[n,e]=(0,t.useState)({checke:null}),r=r=>{e({...n,checke:r})};return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(s.PageHeader,{title:"Tags",buttons:[(0,x.jsxs)("div",{className:"page-header-actions",children:[(0,x.jsx)(u.CalendarButtonPageHeader,{}),(0,x.jsx)(g.ExportButtonPageHeader,{}),(0,x.jsx)(p.ShareButtonPageHeader,{}),(0,x.jsxs)(h.Button,{size:"small",type:"primary",children:[(0,x.jsx)(d.A,{icon:"plus",size:14}),"Add New"]})]},"1")]}),(0,x.jsx)(i.Main,{children:(0,x.jsxs)(a.A,{gutter:25,children:[(0,x.jsxs)(o.A,{md:12,xs:24,children:[(0,x.jsx)(l.Cards,{title:"Basic",caption:"The simplest use of tags",children:(0,x.jsxs)("div",{className:"taglist-wrap",children:[(0,x.jsx)(c.Tag,{children:"Tag 1"}),(0,x.jsx)(c.Tag,{children:(0,x.jsx)("a",{href:"https://github.com/ant-design/ant-design/issues/1862",children:"Link"})}),(0,x.jsx)(c.Tag,{closable:!0,onClose:()=>{},children:"Tag 2"}),(0,x.jsx)(c.Tag,{closable:!0,onClose:()=>{},children:"Prevent Default"})]})}),(0,x.jsx)(l.Cards,{title:"Hot Tag",caption:"The simplest use of tags",children:(0,x.jsx)(c.Tag,{hottags:!0,onChange:r,data:["Movies","Books","Music","Sports"]})})]}),(0,x.jsxs)(o.A,{md:12,xs:24,children:[(0,x.jsxs)(l.Cards,{title:"Colorful Tag",caption:"The simplest use of tags",children:[(0,x.jsx)("h4",{style:{marginBottom:16},children:"Presets:"}),(0,x.jsxs)("div",{className:"taglist-wrap",children:[(0,x.jsx)(c.Tag,{color:"magenta",children:"magenta"}),(0,x.jsx)(c.Tag,{color:"red",children:"red"}),(0,x.jsx)(c.Tag,{color:"volcano",children:"volcano"}),(0,x.jsx)(c.Tag,{color:"orange",children:"orange"}),(0,x.jsx)(c.Tag,{color:"gold",children:"gold"}),(0,x.jsx)(c.Tag,{color:"lime",children:"lime"}),(0,x.jsx)(c.Tag,{color:"green",children:"green"}),(0,x.jsx)(c.Tag,{color:"cyan",children:"cyan"}),(0,x.jsx)(c.Tag,{color:"blue",children:"blue"}),(0,x.jsx)(c.Tag,{color:"geekblue",children:"geekblue"}),(0,x.jsx)(c.Tag,{color:"purple",children:"purple"})]}),(0,x.jsx)("h4",{style:{margin:"16px 0"},children:"Custom:"}),(0,x.jsxs)("div",{className:"taglist-wrap",children:[(0,x.jsx)(c.Tag,{color:"#f50",children:"#f50"}),(0,x.jsx)(c.Tag,{color:"#2db7f5",children:"#2db7f5"}),(0,x.jsx)(c.Tag,{color:"#87d068",children:"#87d068"}),(0,x.jsx)(c.Tag,{color:"#108ee9",children:"#108ee9"})]})]}),(0,x.jsx)(l.Cards,{title:"Animated Tag",caption:"The simplest use of tags",children:(0,x.jsx)(c.Tag,{animate:!0,onChange:r,data:["Movies","Books","Music","Sports"]})})]})]})})]})}}}]);