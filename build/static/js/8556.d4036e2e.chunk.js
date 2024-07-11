"use strict";(self.webpackChunkindyte=self.webpackChunkindyte||[]).push([[8556,7844,91],{72449:(n,e,r)=>{r.r(e),r.d(e,{BtnGroup:()=>d,Button:()=>s});var t=r(9950),a=r(8737),o=r(44414);const s=n=>{const{type:e,shape:r,icon:s,size:d,outlined:i,ghost:c,transparented:l,raised:p,squared:h,color:x,social:u,load:g,children:m,...f}=n,[b,y]=(0,t.useState)({loading:!1});return(0,o.jsx)(a.ButtonStyled,{squared:h,outlined:i?1:0,ghost:c,transparent:l?1:0,raised:p?1:0,data:e,size:d,shape:r,type:e,icon:s,color:x,social:u,onClick:g&&(()=>{y({loading:!0})}),loading:b.loading,...f,children:m})};s.defaultProps={type:"default"};const d=n=>{let{children:e}=n;return(0,o.jsx)(a.ButtonStyledGroup,{children:e})}},69143:(n,e,r)=>{r.r(e),r.d(e,{CalendarButtonPageHeader:()=>i});r(9950);var t=r(17848),a=r(43713),o=r(80303),s=r(72449),d=r(44414);const i=()=>{const n=(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(o.DateRangePickerOne,{})});return(0,d.jsx)(a.Popover,{placement:"bottomRight",title:"Search by Calendar",content:n,action:"hover",children:(0,d.jsxs)(s.Button,{size:"small",type:"white",children:[(0,d.jsx)(t.A,{icon:"calendar",size:14}),"Select Date"]})})}},79523:(n,e,r)=>{r.r(e),r.d(e,{ExportButtonPageHeader:()=>i});r(9950);var t=r(93047),a=r(17848),o=r(43713),s=r(72449),d=r(44414);const i=()=>{const n=(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(t.k2,{to:"#",children:[(0,d.jsx)(a.A,{size:16,icon:"printer"}),(0,d.jsx)("span",{children:"Printer"})]}),(0,d.jsxs)(t.k2,{to:"#",children:[(0,d.jsx)(a.A,{size:16,icon:"book-open"}),(0,d.jsx)("span",{children:"PDF"})]}),(0,d.jsxs)(t.k2,{to:"#",children:[(0,d.jsx)(a.A,{size:16,icon:"file-text"}),(0,d.jsx)("span",{children:"Google Sheets"})]}),(0,d.jsxs)(t.k2,{to:"#",children:[(0,d.jsx)(a.A,{size:16,icon:"x"}),(0,d.jsx)("span",{children:"Excel (XLSX)"})]}),(0,d.jsxs)(t.k2,{to:"#",children:[(0,d.jsx)(a.A,{size:16,icon:"file"}),(0,d.jsx)("span",{children:"CSV"})]})]});return(0,d.jsx)(o.Popover,{placement:"bottomLeft",content:n,trigger:"click",children:(0,d.jsxs)(s.Button,{size:"small",type:"white",children:[(0,d.jsx)(a.A,{icon:"download",size:14}),"Export"]})})}},48989:(n,e,r)=>{r.r(e),r.d(e,{ShareButtonPageHeader:()=>i});r(9950);var t=r(93047),a=r(17848),o=r(43713),s=r(72449),d=r(44414);const i=()=>{const n=(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(t.k2,{to:"#",children:[(0,d.jsx)(a.A,{size:16,icon:"facebook"}),(0,d.jsx)("span",{children:"Facebook"})]}),(0,d.jsxs)(t.k2,{to:"#",children:[(0,d.jsx)(a.A,{size:16,icon:"twitter"}),(0,d.jsx)("span",{children:"Twitter"})]}),(0,d.jsxs)(t.k2,{to:"#",children:[(0,d.jsx)(a.A,{size:16,icon:"rss"}),(0,d.jsx)("span",{children:"Feed"})]}),(0,d.jsxs)(t.k2,{to:"#",children:[(0,d.jsx)(a.A,{size:16,icon:"linkedin"}),(0,d.jsx)("span",{children:"Linkedin"})]}),(0,d.jsxs)(t.k2,{to:"#",children:[(0,d.jsx)(a.A,{size:16,icon:"instagram"}),(0,d.jsx)("span",{children:"Instagram"})]})]});return(0,d.jsx)(o.Popover,{placement:"bottomLeft",content:n,trigger:"click",children:(0,d.jsxs)(s.Button,{size:"small",type:"white",children:[(0,d.jsx)(a.A,{icon:"share-2",size:14}),"Share"]},"3")})}},8737:(n,e,r)=>{r.r(e),r.d(e,{ButtonStyled:()=>c,ButtonStyledGroup:()=>l});var t,a,o=r(57528),s=r(32878),d=r(48538);const i=d.A.Group,c=(0,s.Ay)(d.A)(t||(t=(0,o.A)(["\n\n    background: ",";\n    border-width: 0px;\n    border-style: ",";\n    color: ",";\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: ",";\n    padding: 0px 20.5px;\n    height: ",";\n    font-weight: 500;\n    box-shadow: 0 0;\n    &:hover, &:focus {\n        background: ",";\n        color: ",";\n    }\n    i,\n    svg,\n    img{\n        width: 16px;\n        height: 16px;\n        +span{\n            ",": 6px;\n        }\n    }\n\n    ",";\n    ",";\n    ",";\n    ",";\n    ",";\n    ",";\n    ",";\n"])),(n=>{let{type:e,theme:r}=n;return"default"!==e&&r["".concat(e,"-color")]}),(n=>{let{type:e}=n;return"dashed"!==e?"solid":"dashed"}),(n=>{let{type:e}=n;return"default"!==e?"#ffffff":"#5A5F7D"}),(n=>{let{shape:e}=n;return e?"40px":"4px"}),(n=>{let{size:e,theme:r}=n;return"default"!==e?r["btn-height-".concat(e)]:"42px"}),(n=>{let{type:e,theme:r}=n;return"default"!==e&&r["".concat(e,"-hover")]}),(n=>{let{type:e}=n;return"default"!==e?"#ffffff":"#5A5F7D"}),(n=>{let{theme:e}=n;return e.rtl?"margin-right":"margin-left"}),(n=>{let{transparent:e,theme:r,type:t}=n;return e&&((n,e)=>"\n        background: ".concat("default"!==e&&n["".concat(e,"-color")],"15;\n        border-width: 0px;\n        color: ").concat("default"!==e&&n["".concat(e,"-color")],";\n        &:hover, &:focus {\n            background: ").concat("default"!==e&&n["".concat(e,"-hover")],"15;\n            border-width: 0px;\n            color: ").concat("default"!==e&&n["".concat(e,"-hover")],"; \n        }\n    "))(r,t)}),(n=>{let{outlined:e,theme:r,type:t}=n;return e&&((n,e)=>"\n        background: transparent;\n        border: 1px solid ".concat("light"!==e?n["".concat(e,"-color")]:n["border-color-normal"],";\n        color: ").concat("default"!==e&&n["".concat(e,"-color")],";\n  \n        &:hover, &:focus {\n          background: transparent;\n          border: 1px solid ").concat("default"!==e&&n["".concat(e,"-hover")],";\n          color: ").concat("default"!==e&&n["".concat(e,"-hover")],";\n        }\n    "))(r,t)}),(n=>{let{ghost:e,theme:r}=n;return e&&(n=>"\n          background: transparent;\n          border: 1px solid ".concat(n["border-color-normal"]," !important;\n          color: ").concat(n["border-color-normal"]," !important;\n            \n          &:hover, &:focus {\n              background: #ffffff50 !important;\n              border: 1px solid transparent !important;\n              color: ").concat(n["border-color-normal"]," !important;\n          }\n      "))(r)}),(n=>{let{raised:e,theme:r,type:t}=n;return e&&((n,e)=>"\n        box-shadow: 0 10px 15px ".concat("white"!==e?n["".concat(e,"-color")]:"#9299B8","20;\n    "))(r,t)}),(n=>{let{squared:e,theme:r,type:t}=n;return e&&((n,e)=>"\n      background: ".concat("default"!==e&&n["".concat(e,"-color")],";\n      border: 1px solid ").concat("default"!==e?n["".concat(e,"-color")]:n["disabled-color"],";\n      color: ").concat("default"!==e&&"#ffffff",";\n      border-radius: 0px;\n      padding: 0px 15px;\n  \n      &:hover, &:focus {\n          background: ").concat("default"!==e&&n["".concat(e,"-hover")],";\n          border: 1px solid ").concat("default"!==e&&n["".concat(e,"-hover")],";\n          color: ").concat("default"!==e&&"#ffffff",";\n      }\n  "))(r,t)}),(n=>{let{squared:e,outlined:r,theme:t,type:a}=n;return e&&r&&((n,e)=>"\n      background: transparent;\n      border: 1px solid ".concat("default"!==e?n["".concat(e,"-color")]:n["disabled-color"],";\n      color: ").concat("default"!==e&&n["".concat(e,"-color")],";\n      border-radius: 0px;\n      padding: 0px 15px;\n      &:hover, &:focus {\n          background: ").concat("default"!==e&&n["".concat(e,"-hover")],";\n          border: 1px solid ").concat("default"!==e&&n["".concat(e,"-hover")],";\n          color: ").concat("default"!==e&&"#ffffff",";\n      }\n  "))(t,a)}),(n=>{let{social:e,color:r,shape:t}=n;return e&&((n,e)=>"\n      background: ".concat(n,";\n      background: ").concat(n,";\n      border: 1px solid ").concat(n,";\n      color: #ffffff;\n      border-radius: ").concat(e?"40px":"4px",";\n      padding: 0px 12px;\n      display: inline-flex;\n      align-items: center;\n      span {\n          padding-left: 5px;\n      }\n      &:hover, &:focus {\n          background: ").concat(n,"90;\n          border: 1px solid ").concat(n,"90;\n          color: #ffffff;\n      }\n  "))(r,t)})),l=(0,s.Ay)(i)(a||(a=(0,o.A)(["\n    >.ant-btn:first-child{\n        border-top-left-radius: 3px !important;\n        border-bottom-left-radius: 3px !important;\n    }\n    button {\n        margin: 0px;\n        padding: 0 10.75px;\n        height: 30px;\n        font-size: 12px;\n        font-weight: 500;\n    }\n    .ant-btn-light:hover{\n        background: #F4F5F7;\n    }\n"])))},29355:(n,e,r)=>{r.r(e),r.d(e,{Cards:()=>c});r(9950);var t=r(93047),a=r(17848),o=r(56205),s=r(42017),d=r(59377),i=r(44414);const c=n=>{const{title:e,children:r,more:c,moreText:l,size:p,headless:h,caption:x,isbutton:u,bodyStyle:g,headStyle:m,border:f,bodypadding:b}=n;return(0,i.jsx)(i.Fragment,{children:h?(0,i.jsxs)(o.CardFrame,{bodypadding:b&&b,bodyStyle:g&&g,size:p,style:{width:"100%"},bordered:f,children:[e&&(0,i.jsx)(s.default,{as:"h4",children:e}),x&&(0,i.jsx)("p",{children:x}),r]}):(0,i.jsx)(o.CardFrame,{size:p,title:e,bodyStyle:g&&g,headStyle:m&&m,bordered:f,bodypadding:b&&b,extra:(0,i.jsxs)(i.Fragment,{children:[c&&(0,i.jsx)(d.Dropdown,{content:c,placement:"bottomCenter",children:(0,i.jsx)(t.k2,{to:"#",children:l?"More":(0,i.jsx)(a.A,{icon:"more-horizontal"})})}),u&&u]}),style:{width:"100%"},children:r})})};c.defaultProps={border:!1}},56205:(n,e,r)=>{r.r(e),r.d(e,{CardFrame:()=>d});var t,a=r(57528),o=r(32878),s=r(2557);const d=(0,o.Ay)(s.A)(t||(t=(0,a.A)(["\n  ","\n  margin-bottom: 25px !important;\n  .ant-card-head{\n    border-color: #F1F2F6;\n  }\n  .ant-card-head .ant-card-head-title {\n    padding: 18px 0;\n  }\n  .ant-card-head-title .ant-page-header-heading-title{\n    font-weight: 500;\n  }\n  .ant-card-body{\n    padding: ",";\n    table{\n      .ant-tag{\n        line-height: 18px;\n        border: 0 none;\n        text-transform: uppercase;\n        font-size: 10px;\n        color: #fff;\n        &.early{\n          background: ",";\n        }\n        &.late{\n          background: ",";\n        }\n        &.complete{\n          background: ",";\n        }\n        &.progress{\n          background: ",";\n        }\n      }\n    }\n  }\n  .ant-card.ant-card-bordered {\n      border-radius: 5px;\n      overflow: hidden;\n      border: none;\n  }\n  .custom-label {\n    font-size: 13px;\n    color: #868eae;\n    display: inline-flex;\n    align-items: center;\n  }\n  .custom-label:not(:last-child) {\n    "," : 20px;\n  }\n\n  .custom-label span {\n    width: 8px;\n    height: 8px;\n    border-radius: 50%;\n    ",": 7px;\n  }\n  \n\n  .ant-card-extra .ant-dropdown-trigger {\n    line-height: 0;\n    order: 1;\n    ",": 20px !important;\n  }\n\n  .growth-downward h1 sub,\n  .growth-upward h1 sub {\n    font-size: 14px;\n    font-weight: 600;\n    bottom: 0;\n    ",": 5px;\n  }\n \n"])),(n=>{let{isbutton:e,theme:r}=n;return e&&(n=>"\n    .ant-card-head {\n      display: flex;\n      justify-content: space-evenly;\n      .ant-card-head-wrapper{\n        width: 100%;\n      }\n      .ant-tabs.ant-tabs-top.ant-card-head-tabs.ant-tabs-large.ant-tabs-line{\n        width: 100%;\n        display: block;\n      }\n      .ant-tabs-nav-scroll {\n        display: flex;\n        justify-content: flex-end;\n      }\n      .ant-tabs-ink-bar.ant-tabs-ink-bar-animated {\n        display: none !important;\n      }\n      .ant-tabs-nav .ant-tabs-tab {\n        border-radius: 2px;\n        height: 30px;\n        margin: 0px;\n        ".concat(n.rtl?"margin-right":"margin-left",": -1px;\n        display: inline-flex;\n        align-items: center;\n        border: 1px solid ").concat(n["border-color-base"],";\n        background: #fff;\n        span svg {\n          ").concat(n.rtl?"padding-right":"padding-left",": 5px !important;\n        }\n      }\n      .ant-tabs-nav .ant-tabs-tab-active {\n        font-weight: 500;\n        border: 1px solid ").concat(n["primary-color"],";\n        background: ").concat(n["primary-color"],";\n        color: #fff;\n        border-radius: 2px;\n        height: 30px;\n        margin: 0px;\n        display: inline-flex;\n        align-items: center;\n      }\n      .ant-tabs-bar {\n        border: none;\n      }\n      .ant-tabs-nav-wrap {\n        margin-bottom: 0px;\n        overflow: hidden;\n    }\n    }\n    .ant-card-head .ant-tabs.ant-tabs-top.ant-card-head-tabs.ant-tabs-large.ant-tabs-line {\n      width: 100%;\n      display: block;\n      justify-content: flex-end;\n      height: 73px;\n      padding-top: 8px;\n  }\n"))(r)}),(n=>{let{bodypadding:e}=n;return e?"".concat(e," !important"):"25px"}),(n=>{let{theme:e}=n;return e["primary-color"]}),(n=>{let{theme:e}=n;return e["warning-color"]}),(n=>{let{theme:e}=n;return e["success-color"]}),(n=>{let{theme:e}=n;return e["danger-color"]}),(n=>{let{theme:e}=n;return e.rtl?" margin-left":" margin-right"}),(n=>{let{theme:e}=n;return e.rtl?" margin-left":" margin-right"}),(n=>{let{theme:e}=n;return e.rtl?" margin-right":" margin-left"}),(n=>{let{theme:e}=n;return e.rtl?" right":" left"}))},80303:(n,e,r)=>{r.r(e),r.d(e,{CustomDateRange:()=>p,DateRangePickerOne:()=>l});var t=r(9950),a=r(56712),o=(r(39890),r(34779),r(20162)),s=r(477),d=r(21968),i=r(72449),c=r(44414);const l=()=>{const[n,e]=(0,t.useState)({datePickerInternational:null,dateRangePicker:{selection:{startDate:new Date,endDate:(0,a.default)(new Date,7),key:"selection"}}}),{dateRangePicker:r}=n,s=r.selection.startDate.toString().split(" "),l=r.selection.endDate.toString().split(" ");return(0,c.jsxs)(d.ItemWraper,{children:[(0,c.jsx)(o.Ur,{onChange:r=>{e({...n,dateRangePicker:{...n.dateRangePicker,...r}})},showSelectionPreview:!0,moveRangeOnFirstSelection:!1,className:"PreviewArea",months:2,ranges:[r.selection],direction:"horizontal"}),(0,c.jsxs)(d.ButtonGroup,{children:[(0,c.jsx)("p",{children:"".concat(s[1]," ").concat(s[2]," ").concat(s[3]," - ").concat(l[1]," ").concat(l[2]," ").concat(l[3])}),(0,c.jsx)(i.Button,{size:"small",type:"primary",children:"Apply"}),(0,c.jsx)(i.Button,{size:"small",type:"white",outlined:!0,children:"Cancel"})]})]})};class p extends t.Component{constructor(){super(...arguments),this.state={startValue:null,endValue:null,endOpen:!1},this.disabledStartDate=n=>{const{endValue:e}=this.state;return!(!n||!e)&&n.valueOf()>e.valueOf()},this.disabledEndDate=n=>{const{startValue:e}=this.state;return!(!n||!e)&&n.valueOf()<=e.valueOf()},this.onChange=(n,e)=>{this.setState({[n]:e})},this.onStartChange=n=>{this.onChange("startValue",n)},this.onEndChange=n=>{this.onChange("endValue",n)},this.handleStartOpenChange=n=>{n||this.setState({endOpen:!0})},this.handleEndOpenChange=n=>{this.setState({endOpen:n})}}render(){const{startValue:n,endValue:e,endOpen:r}=this.state;return(0,c.jsxs)("div",{children:[(0,c.jsx)(s.A,{disabledDate:this.disabledStartDate,showTime:!0,format:"YYYY-MM-DD HH:mm:ss",value:n,placeholder:"Start",onChange:this.onStartChange,onOpenChange:this.handleStartOpenChange,style:{margin:"5px"}}),(0,c.jsx)(s.A,{disabledDate:this.disabledEndDate,showTime:!0,format:"YYYY-MM-DD HH:mm:ss",value:e,placeholder:"End",onChange:this.onEndChange,open:r,onOpenChange:this.handleEndOpenChange,style:{margin:"5px"}})]})}}},21968:(n,e,r)=>{r.r(e),r.d(e,{ButtonGroup:()=>i,ItemWraper:()=>d});var t,a,o=r(57528),s=r(32878);const d=s.Ay.div(t||(t=(0,o.A)(["\n    display: flex;\n    flex-direction: column;\n    .rdrDateDisplay, .rdrMonthAndYearPickers{\n        display: none;\n    }\n    .rdrMonth {\n        position: relative;\n        max-width: 272px;\n    }\n    .rdrMonthName {\n        text-align: center;\n        font-size: 18px;\n        position: absolute;\n        top: -50px;\n        ",": 100px;\n        font-weight: 400;\n    }\n    .rdrDefinedRangesWrapper{\n        .rdrStaticRanges{\n            .rdrStaticRange{\n                border-bottom: 0 none;\n                &:hover,\n                &.rdrStaticRangeSelected{\n                    span{\n                        font-weight: 400;\n                        color: ",";\n                        background-color: #EFEFFE;\n                    }\n                }\n                .rdrStaticRangeLabel{\n                    padding: 9px 10px;\n                }\n            }\n        }\n    }\n    .rdrCalendarWrapper{\n        .rdrPprevButton,\n        .rdrNextButton{\n            padding: 0;\n            background: transparent;\n        }\n        .rdrMonthsHorizontal{\n            .rdrMonth{\n                .rdrMonthName{\n                    font-size: 13px;\n                    font-weight: 500;\n                    color: ",";\n                }\n            }\n            .rdrDays{\n                .rdrSelected, \n                .rdrInRange{                    \n                    background-color: #EFEFFE;\n                    left: 0 !important;\n                    right: 0 !important;\n                }\n                .rdrStartEdge{\n                    right: 0 !important;\n                    left: 0 !important;\n                    ",";\n                    ",";\n                }\n                .rdrEndEdge{\n                    ",";\n                    ",";\n                }\n                .rdrDayStartOfMonth .rdrDayInPreview, .rdrDayStartOfMonth .rdrDayEndPreview, .rdrDayStartOfWeek .rdrDayInPreview, .rdrDayStartOfWeek .rdrDayEndPreview{\n                    border-radius: 0px;\n                }\n                \n                .rdrDayEndOfWeek .rdrDayStartPreview,\n                .rdrDayEndOfWeek .rdrDayInPreview,\n                .rdrDayEndOfMonth .rdrDayStartPreview,\n                .rdrDayEndOfMonth .rdrDayInPreview,\n                .rdrDayEndOfMonth .rdrInRange, \n                .rdrDayEndOfWeek .rdrInRange, \n                .rdrDayEndOfWeek .rdrStartEdge\n                .rdrDayStartOfMonth .rdrInRange, \n                .rdrDayStartOfWeek .rdrInRange{\n                    border-radius: 0;\n                }\n\n                .rdrDayEndOfWeek .rdrDayStartPreview.rdrDayEndPreview,\n                .rdrDayStartOfWeek .rdrDayStartPreview.rdrDayEndPreview,\n                .rdrDayEndOfMonth .rdrDayStartPreview.rdrDayEndPreview,\n                .rdrDayStartOfMonth .rdrDayStartPreview.rdrDayEndPreview{\n                    border-radius: 1.042em;\n                    color: #fff !important;\n                }\n                \n                .rdrDayEndPreview,\n                .rdrDayStartPreview,\n                .rdrDayInPreview{\n                    border: 0 none;\n                    background-color: #EFEFFE;\n                    color: "," !importtant;\n                    top: 0;\n                    bottom: 0;\n                }\n                \n                .rdrStartEdge, \n                .rdrEndEdge,\n                .rdrDayStartPreview,\n                .rdrDayEndPreview{\n                    background-color: ",";\n                }\n\n                .rdrDay:not(.rdrDayPassive) .rdrInRange ~ .rdrDayNumber span,\n                .rdrDay:not(.rdrDayPassive) .rdrDayInPreview ~ .rdrDayNumber span, \n                .rdrDay:not(.rdrDayPassive) .rdrSelected ~ .rdrDayNumber span{\n                    color: "," !important;\n                }\n                .rdrDay:not(.rdrDayPassive).rdrDayHovered .rdrInRange ~ .rdrDayNumber span,\n                .rdrDay:not(.rdrDayPassive).rdrDayHovered .rdrDayInPreview ~ .rdrDayNumber span, \n                .rdrDay:not(.rdrDayPassive).rdrDayHovered .rdrSelected ~ .rdrDayNumber span{\n                    color: #fff !important;\n                }\n                .rdrDay:not(.rdrDayPassive) .rdrDayEndPreview ~ .rdrDayNumber span,\n                .rdrDay:not(.rdrDayPassive) .rdrStartEdge ~ .rdrDayNumber span, \n                .rdrDay:not(.rdrDayPassive) .rdrEndEdge ~ .rdrDayNumber span{\n                    color: #fff;\n                }\n                .rdrDay{\n                    margin-bottom: 3px;\n                    .rdrSelected, \n                    .rdrInRange, \n                    .rdrStartEdge, \n                    .rdrEndEdge{\n                        top: 0;\n                        bottom: 0;\n\n                    }\n                    .rdrDayNumber{\n                        z-index: 10;\n                    }\n                    &.rdrDayToday{\n                        background-color: ",";\n                        color: #fff;\n                        border-radius: 50%;\n                        .rdrDayNumber{\n                            span{\n                                color: #fff;\n                                &:after{\n                                    display: none;\n                                }\n                            }\n                        }\n                    }\n                    &.rdrDayHovered{\n                        .rdrDayNumber span{\n                            color: #fff !important;\n                        }\n                    }\n                }\n            }\n        }\n    }\n"])),(n=>{let{theme:e}=n;return e.rtl?"right":"left"}),(n=>{let{theme:e}=n;return e["primary-color"]}),(n=>{let{theme:e}=n;return e["dark-color"]}),(n=>{let{theme:e}=n;return e.rtl?"border-top-right-radius: 1.042em; border-top-left-radius: 0em;":"border-top-left-radius: 1.042em;"}),(n=>{let{theme:e}=n;return e.rtl?"border-bottom-right-radius: 1.042em;border-bottom-left-radius: 0em;":"border-bottom-left-radius: 1.042em;"}),(n=>{let{theme:e}=n;return e.rtl?"border-top-left-radius: 1.042em;border-top-right-radius: 0;":"border-top-right-radius: 1.042em;"}),(n=>{let{theme:e}=n;return e.rtl?"border-bottom-left-radius: 1.042em;border-bottom-right-radius: 0;":"border-bottom-right-radius: 1.042em;"}),(n=>{let{theme:e}=n;return e["dark-color"]}),(n=>{let{theme:e}=n;return e["primary-color"]}),(n=>{let{theme:e}=n;return e["dark-color"]}),(n=>{let{theme:e}=n;return e["primary-color"]})),i=s.Ay.div(a||(a=(0,o.A)(["\n    border-top: 1px solid #EEEFF2;\n    padding: 10px;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: flex-end;\n    margin: -4px -4px -15px;\n    p{\n        font-size: 13px;\n    margin: ",";\n        font-weight: 500;\n        color: ",";\n    }\n    button {\n        font-size: 12px;\n        margin: 4px;\n        height: 32px;\n        padding: 0px 13.26px;\n    }\n"])),(n=>{let{theme:e}=n;return e.rtl?"0 0 0 20px":"0 20px 0 0"}),(n=>{let{theme:e}=n;return e["gray-color"]}))},55423:(n,e,r)=>{r.r(e),r.d(e,{default:()=>D});var t=r(9950),a=r(48538),o=r(87094),s=r(41988),d=r(37781),i=r(52735),c=r(17848),l=r(98341),p=r(91348),h=r(8750),x=r(57687),u=r(67482),g=r(29355),m=r(48989),f=r(79523),b=r(69143),y=r(44414);const j=a.A.Group;const D=function(){const n=(0,l.d4)((n=>n.ChangeLayoutMode.rtlData)),[e,r]=(0,t.useState)({percent:0}),D=()=>{let n=e.percent+10;n>100&&(n=100),r({percent:n})},v=()=>{let n=e.percent-10;n<0&&(n=0),r({percent:n})};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(x.PageHeader,{ghost:!0,title:"Progress Bar",buttons:[(0,y.jsxs)("div",{className:"page-header-actions",children:[(0,y.jsx)(b.CalendarButtonPageHeader,{}),(0,y.jsx)(f.ExportButtonPageHeader,{}),(0,y.jsx)(m.ShareButtonPageHeader,{}),(0,y.jsxs)(a.A,{size:"small",type:"primary",children:[(0,y.jsx)(c.A,{icon:"plus",size:14}),"Add New"]})]},"1")]}),(0,y.jsx)(u.Main,{children:(0,y.jsxs)(o.A,{gutter:25,children:[(0,y.jsxs)(s.A,{lg:12,md:12,xs:24,children:[(0,y.jsxs)(g.Cards,{title:"Basic",caption:"The simplest use of Progress bar",children:[(0,y.jsx)(d.A,{percent:30,style:{marginBottom:"15px"}}),(0,y.jsx)(d.A,{percent:50,status:"active",style:{marginBottom:"15px"}}),(0,y.jsx)(d.A,{percent:70,status:"exception",style:{marginBottom:"15px"}}),(0,y.jsx)(d.A,{percent:100,style:{marginBottom:"15px"}}),(0,y.jsx)(d.A,{percent:50,showInfo:!1})]}),(0,y.jsxs)(g.Cards,{title:"Mini size Circular progress bar",caption:"The simplest use of Progress bar",children:[(0,y.jsx)(d.A,{type:"circle",percent:30,width:80,style:{[n?"marginLeft":"marginRight"]:"15px"}}),(0,y.jsx)(d.A,{type:"circle",percent:70,width:80,status:"exception",style:{[n?"marginLeft":"marginRight"]:"15px"}}),(0,y.jsx)(d.A,{type:"circle",percent:100,width:80})]}),(0,y.jsx)(g.Cards,{title:"Dashboard",caption:"The simplest use of Progress bar",children:(0,y.jsx)(d.A,{type:"dashboard",percent:70})}),(0,y.jsxs)(g.Cards,{title:"Square linecaps",caption:"The simplest use of Progress bar",children:[(0,y.jsx)(d.A,{strokeLinecap:"square",percent:75,style:{marginBottom:"15px"}}),(0,y.jsx)(d.A,{strokeLinecap:"square",type:"circle",percent:75,style:{[n?"marginLeft":"marginRight"]:"15px"}}),(0,y.jsx)(d.A,{strokeLinecap:"square",type:"dashboard",percent:75})]}),(0,y.jsxs)(g.Cards,{title:"Dynamic circle",caption:"The simplest use of Progress bar",children:[(0,y.jsx)(d.A,{type:"circle",percent:e.percent}),(0,y.jsxs)(j,{children:[(0,y.jsx)(a.A,{onClick:v,icon:(0,y.jsx)(p.A,{})}),(0,y.jsx)(a.A,{onClick:D,icon:(0,y.jsx)(h.A,{})})]})]}),(0,y.jsxs)(g.Cards,{title:"Progress bar with success segment",caption:"The simplest use of Progress bar",children:[(0,y.jsx)(i.A,{title:"3 done / 3 in progress / 4 to do",children:(0,y.jsx)(d.A,{percent:60,success:{percent:30},style:{marginBottom:"15px"}})}),(0,y.jsx)(i.A,{title:"3 done / 3 in progress / 4 to do",children:(0,y.jsx)(d.A,{percent:60,success:{percent:30},type:"circle",style:{[n?"marginLeft":"marginRight"]:"15px"}})}),(0,y.jsx)(i.A,{title:"3 done / 3 in progress / 4 to do",children:(0,y.jsx)(d.A,{percent:60,success:{percent:30},type:"dashboard"})})]})]}),(0,y.jsxs)(s.A,{lg:12,md:12,xs:24,children:[(0,y.jsxs)(g.Cards,{title:"Circular progress bar",caption:"The simplest use of Progress bar",children:[(0,y.jsx)(d.A,{type:"circle",percent:75,style:{[n?"marginLeft":"marginRight"]:"15px"}}),(0,y.jsx)(d.A,{type:"circle",percent:70,status:"exception",style:{[n?"marginLeft":"marginRight"]:"15px"}}),(0,y.jsx)(d.A,{type:"circle",percent:100})]}),(0,y.jsxs)(g.Cards,{title:"Mini size progress bar",caption:"The simplest use of Progress bar",children:[(0,y.jsx)(d.A,{size:"small",percent:30,width:80,style:{marginBottom:"15px"}}),(0,y.jsx)(d.A,{size:"small",percent:70,width:80,status:"exception",style:{marginBottom:"15px"}}),(0,y.jsx)(d.A,{size:"small",percent:100,width:80})]}),(0,y.jsxs)(g.Cards,{title:"Square linecaps",caption:"The simplest use of Progress bar",children:[(0,y.jsx)(d.A,{strokeLinecap:"square",percent:75,style:{marginBottom:"15px"}}),(0,y.jsx)(d.A,{strokeLinecap:"square",type:"circle",percent:75,style:{[n?"marginLeft":"marginRight"]:"15px"}}),(0,y.jsx)(d.A,{strokeLinecap:"square",type:"dashboard",percent:75})]}),(0,y.jsxs)(g.Cards,{title:"Dynamic",caption:"The simplest use of Progress bar",children:[(0,y.jsx)(d.A,{percent:e.percent}),(0,y.jsxs)(j,{children:[(0,y.jsx)(a.A,{onClick:v,icon:(0,y.jsx)(p.A,{})}),(0,y.jsx)(a.A,{onClick:D,icon:(0,y.jsx)(h.A,{})})]})]}),(0,y.jsxs)(g.Cards,{title:"Custom Text",caption:"The simplest use of Progress bar",children:[(0,y.jsx)(d.A,{type:"circle",percent:75,format:n=>"".concat(n," Days"),style:{[n?"marginLeft":"marginRight"]:"15px"}}),(0,y.jsx)(d.A,{type:"circle",percent:100,format:()=>"Done"})]}),(0,y.jsxs)(g.Cards,{title:"Custom line gradient",caption:"The simplest use of Progress bar",children:[(0,y.jsx)(d.A,{strokeColor:{"0%":"#2C99FF","100%":"#20C997"},percent:99.9,style:{marginBottom:"15px"}}),(0,y.jsx)(d.A,{strokeColor:{from:"#2C99FF",to:"#20C997"},percent:99.9,status:"active",style:{marginBottom:"15px"}}),(0,y.jsx)(d.A,{type:"circle",strokeColor:{"0%":"#2C99FF","100%":"#20C997"},percent:90,style:{[n?"marginLeft":"marginRight"]:"15px"}}),(0,y.jsx)(d.A,{type:"circle",strokeColor:{"0%":"#2C99FF","100%":"#20C997"},percent:100})]})]})]})})]})}},91348:(n,e,r)=>{r.d(e,{A:()=>i});var t=r(89379),a=r(9950);const o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"minus",theme:"outlined"};var s=r(47484),d=function(n,e){return a.createElement(s.A,(0,t.A)((0,t.A)({},n),{},{ref:e,icon:o}))};const i=a.forwardRef(d)}}]);