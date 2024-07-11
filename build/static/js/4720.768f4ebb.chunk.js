"use strict";(self.webpackChunkindyte=self.webpackChunkindyte||[]).push([[4720],{7617:(e,t,a)=>{a.r(t),a.d(t,{ChartjsAreaChart:()=>p,ChartjsBarChart:()=>l,ChartjsBarChartGrad:()=>g,ChartjsBarChartTransparent:()=>b,ChartjsDonut:()=>C,ChartjsDonutChart:()=>x,ChartjsDonutChart2:()=>f,ChartjsHorizontalChart:()=>c,ChartjsLineChart:()=>h,ChartjsPieChart:()=>u,ChartjsStackedChart:()=>d});a(9950);var s=a(60780),o=a(39613),n=a(50989),r=a(53055),i=a(44414);const l=e=>{const{labels:t,datasets:a,options:o,height:n}=e,r={datasets:a,labels:t};return(0,i.jsx)(s.yP,{data:r,height:n,options:o})};l.defaultProps={height:200,labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[{data:[20,60,50,45,50,60,70,40,45,35,25,30],backgroundColor:"#001737",barPercentage:.6},{data:[10,40,30,40,60,55,45,35,30,20,15,20],backgroundColor:"#1ce1ac",barPercentage:.6}],options:{maintainAspectRatio:!0,responsive:!0,legend:{display:!1,labels:{display:!1}},scales:{yAxes:[{gridLines:{color:"#e5e9f2"},ticks:{beginAtZero:!0,fontSize:10,fontColor:"#182b49",max:80}}],xAxes:[{gridLines:{display:!1},ticks:{beginAtZero:!0,fontSize:11,fontColor:"#182b49"}}]}}};const c=e=>{const{labels:t,datasets:a,options:o,height:n}=e,r={datasets:a,labels:t};return(0,i.jsx)(s.oo,{data:r,height:n,options:o})};c.defaultProps={height:200,labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[{data:[20,60,50,45,50,60,70,40,45,35,25,30],backgroundColor:"#001737",barPercentage:.6},{data:[10,40,30,40,60,55,45,35,30,20,15,20],backgroundColor:"#1ce1ac",barPercentage:.6}],options:{maintainAspectRatio:!0,responsive:!0,legend:{display:!1,labels:{display:!1}},scales:{yAxes:[{gridLines:{display:!1},ticks:{beginAtZero:!0,fontSize:10,fontColor:"#182b49"}}],xAxes:[{gridLines:{color:"#e5e9f2"},ticks:{beginAtZero:!0,fontSize:11,fontColor:"#182b49",max:100}}]}}};const d=e=>{const{labels:t,datasets:a,options:o,height:n}=e,r={datasets:a,labels:t};return(0,i.jsx)(s.yP,{data:r,height:n,options:o})};d.defaultProps={height:200,labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[{data:[20,60,50,45,50,60,70,40,45,35,25,30],backgroundColor:"#001737",barPercentage:.6},{data:[10,40,30,40,60,55,45,35,30,20,15,20],backgroundColor:"#1ce1ac",barPercentage:.6}],options:{maintainAspectRatio:!0,responsive:!0,legend:{display:!1,labels:{display:!1}},scales:{yAxes:[{stacked:!0,gridLines:{color:"#e5e9f2"},ticks:{beginAtZero:!0,fontSize:10,fontColor:"#182b49"}}],xAxes:[{stacked:!0,gridLines:{display:!1},ticks:{beginAtZero:!0,fontSize:11,fontColor:"#182b49"}}]}}};const h=e=>{const{labels:t,datasets:a,options:o,height:n,layout:l,width:c,id:d}=e,h={labels:t,datasets:a};return(0,i.jsx)(r.ChartContainer,{className:"parentContainer",children:(0,i.jsx)(s.N1,{id:d&&d,width:c,data:h,height:n,options:{...o,...l}})})};h.defaultProps={height:479,width:null,labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[{data:[20,60,50,45,50,60,70,40,45,35,25,30],borderColor:"#001737",borderWidth:1,fill:!1},{data:[10,40,30,40,60,55,45,35,30,20,15,20],borderColor:"#1ce1ac",borderWidth:1,fill:!1}],options:{responsive:!0,maintainAspectRatio:!1,layout:{padding:{left:"-10",right:0,top:0,bottom:"-10"}},legend:{display:!1,labels:{display:!1}}}};const p=e=>{const{labels:t,datasets:a,options:o,height:l,layout:c,id:d}=e,h={labels:t,datasets:a};return(0,i.jsx)("div",{children:(0,i.jsx)(r.ChartContainer,{className:"parentContainer",children:(0,i.jsx)(s.N1,{id:d,data:h,height:l,options:{tooltips:{mode:"nearest",intersect:!1,enabled:!1,custom:n.customTooltips,callbacks:{labelColor:()=>({backgroundColor:a.map((e=>e.borderColor)),borderColor:"transparent"})}},...o,...c}})})})};p.defaultProps={height:250,labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[{data:[20,60,50,45,50,60,70,40,45,35,25,30],borderColor:"#001737",borderWidth:1,fill:!0,backgroundColor:"#00173750",pointHoverBorderColor:"transparent"},{data:[10,40,30,40,60,55,45,35,30,20,15,20],borderColor:"#1ce1ac",borderWidth:1,fill:!0,backgroundColor:"#1ce1ac50",pointHoverBorderColor:"transparent"}],options:{maintainAspectRatio:!0,hover:{mode:"nearest",intersect:!1},layout:{padding:{left:-10,right:0,top:2,bottom:-10}},legend:{display:!1,labels:{display:!1}},elements:{point:{radius:0}},scales:{yAxes:[{stacked:!0,gridLines:{display:!1,color:"#e5e9f2"},ticks:{beginAtZero:!0,fontSize:10,display:!1,stepSize:20}}],xAxes:[{stacked:!0,gridLines:{display:!1},ticks:{beginAtZero:!0,fontSize:11,display:!1}}]}}};const b=e=>{const{labels:t,datasets:a,options:o,height:l,layout:c}=e,d={labels:t,datasets:a};return(0,i.jsx)(r.ChartContainer,{className:"parentContainer",children:(0,i.jsx)(s.yP,{data:d,height:window.innerWidth<=575?230:l,options:{...o,...c,tooltips:{mode:"label",intersect:!1,position:"average",enabled:!1,custom:n.customTooltips,callbacks:{label(e,t){const a=t.datasets[e.datasetIndex].label,{yLabel:s}=e;return'<span class="chart-data">'.concat(s,'</span> <span class="data-label">').concat(a,"</span>")},labelColor:(e,t)=>({backgroundColor:t.config.data.datasets[e.datasetIndex].hoverBackgroundColor,borderColor:"transparent",usePointStyle:!0})}}}})})};b.defaultProps={height:176,labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[{data:[20,60,50,45,50,60,70,40,45,35,25,30],backgroundColor:"rgba(0,23,55, .5)",label:"Profit",barPercentage:.6},{data:[10,40,30,40,60,55,45,35,30,20,15,20],backgroundColor:"rgba(28,225,172, .5)",label:"Lose",barPercentage:.6}],options:{maintainAspectRatio:!0,responsive:!0,legend:{display:!0,position:"bottom",align:"start",labels:{boxWidth:6,display:!0,usePointStyle:!0}},layout:{padding:{left:"0",right:0,top:0,bottom:"0"}},scales:{yAxes:[{gridLines:{color:"#e5e9f2"},ticks:{beginAtZero:!0,fontSize:13,fontColor:"#182b49",max:80,stepSize:20,callback:e=>"".concat(e,"k")}}],xAxes:[{gridLines:{display:!1},ticks:{beginAtZero:!0,fontSize:13,fontColor:"#182b49"}}]}}};const g=e=>{const{labels:t,datasets:a,options:o,height:n,layout:r}=e,l={labels:t,datasets:a};return(0,i.jsx)(s.yP,{data:l,height:n,options:{...o,...r}})};g.defaultProps={labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[{data:[20,60,50,45,50,60,70,40,45,35,25,30],backgroundColor:"rgba(0,23,55, .5)",barPercentage:.6},{data:[10,40,30,40,60,55,45,35,30,20,15,20],backgroundColor:"rgba(28,225,172, .5)",barPercentage:.6}],options:{maintainAspectRatio:!0,responsive:!0,layout:{padding:{left:"0",right:0,top:0,bottom:"0"}},legend:{display:!1,labels:{display:!1}},scales:{yAxes:[{gridLines:{color:"#e5e9f2"},ticks:{beginAtZero:!0,fontSize:10,fontColor:"#182b49",max:80}}],xAxes:[{gridLines:{display:!1},ticks:{beginAtZero:!0,fontSize:11,fontColor:"#182b49"}}]}}};const u=e=>{const{labels:t,datasets:a,options:o,height:n}=e,r={labels:t,datasets:a};return(0,i.jsx)(s.Fq,{data:r,height:n,options:o})};u.defaultProps={height:200,labels:["Jan","Feb","Mar","Apr","May"],datasets:[{data:[20,20,30,5,25],backgroundColor:["#560bd0","#007bff","#00cccc","#cbe0e3","#74de00"]}],options:{maintainAspectRatio:!0,responsive:!0,legend:{display:!1},animation:{animateScale:!0,animateRotate:!0}}};const x=e=>{const{labels:t,datasets:a,options:n,height:r}=e,{ref:l}=(0,o.default)(),c={labels:t,datasets:a};return(0,i.jsxs)("div",{style:{position:"relative"},children:[(0,i.jsxs)("p",{children:[(0,i.jsx)("span",{children:a[0].data.reduce(((e,t)=>e+t),0)}),"Total visitors"]}),(0,i.jsx)(s.nu,{ref:l,data:c,height:r,options:n})]})};x.defaultProps={height:200,labels:["Jan","Feb","Mar","Apr","May"],datasets:[{data:[20,20,30,5,25],backgroundColor:["#560bd0","#007bff","#00cccc","#cbe0e3","#74de00"]}],options:{cutoutPercentage:70,maintainAspectRatio:!0,responsive:!0,legend:{display:!1,position:"bottom"},animation:{animateScale:!0,animateRotate:!0}}};const f=e=>{const{labels:t,datasets:a,options:n,height:r}=e,{ref:l}=(0,o.default)(),c={labels:t,datasets:a};return(0,i.jsxs)("div",{children:[(0,i.jsx)(s.nu,{ref:l,data:c,height:r,options:n,width:200}),(0,i.jsxs)("div",{className:"align-center-v justify-content-between rd-labels",children:[(0,i.jsx)("div",{className:"revenue-chat-label",children:t.map(((e,t)=>(0,i.jsxs)("div",{className:"chart-label",children:[(0,i.jsx)("span",{className:"label-dot dot-".concat(e)}),e]},t+1)))}),(0,i.jsx)("div",{className:"revenue-chart-data",children:a.map(((e,t)=>{const{data:a}=e;return(0,i.jsx)("div",{children:a.map((e=>(0,i.jsx)("p",{children:(0,i.jsxs)("strong",{children:["$",e]})},e)))},t+1)}))}),(0,i.jsxs)("div",{className:"revenue-chat-percentage",children:[(0,i.jsx)("span",{children:"45%"}),(0,i.jsx)("span",{children:"45%"}),(0,i.jsx)("span",{children:"45%"})]})]})]})};f.defaultProps={height:220,labels:["Jan","Feb","Mar","Apr","May"],datasets:[{data:[20,20,30,5,25],backgroundColor:["#560bd0","#007bff","#00cccc","#cbe0e3","#74de00"]}],options:{cutoutPercentage:60,maintainAspectRatio:!1,responsive:!1,legend:{display:!1,position:"bottom"},animation:{animateScale:!0,animateRotate:!0}}};const C=e=>{const{labels:t,datasets:a,options:n,height:r}=e,{ref:l}=(0,o.default)(),c={labels:t,datasets:a};return(0,i.jsx)(s.nu,{ref:l,data:c,height:r,options:n,width:200})};C.defaultProps={height:220,labels:["Jan","Feb","Mar","Apr","May"],datasets:[{data:[20,20,30,5,25],backgroundColor:["#560bd0","#007bff","#00cccc","#cbe0e3","#74de00"]}],options:{cutoutPercentage:60,maintainAspectRatio:!1,responsive:!1,legend:{display:!1,position:"bottom"},animation:{animateScale:!0,animateRotate:!0}}}},50989:(e,t,a)=>{a.r(t),a.d(t,{chartLinearGradient:()=>o,customTooltips:()=>n,textRefactor:()=>s});const s=(e,t)=>"".concat(e.split(" ").slice(0,t).join(" "),"..."),o=(e,t,a)=>{const s=e.getContext("2d").createLinearGradient(0,0,0,t);return s.addColorStop(0,"".concat(a.start)),s.addColorStop(1,"".concat(a.end)),s};function n(e){let t=document.querySelector(".chartjs-tooltip");if(this._chart.canvas.closest(".parentContainer").contains(t)||(t=document.createElement("div"),t.className="chartjs-tooltip",t.innerHTML="<table></table>",document.querySelectorAll(".parentContainer").forEach((e=>{e.contains(document.querySelector(".chartjs-tooltip"))&&document.querySelector(".chartjs-tooltip").remove()})),this._chart.canvas.closest(".parentContainer").appendChild(t)),0===e.opacity)return void(t.style.opacity=0);if(t.classList.remove("above","below","no-transform"),e.yAlign?t.classList.add(e.yAlign):t.classList.add("no-transform"),e.body){const a=e.title||[],s=e.body.map((function(e){return e.lines}));let o="<thead>";a.forEach((e=>{o+="<div class='tooltip-title'>".concat(e,"</div>")})),o+="</thead><tbody>",s.forEach(((t,a)=>{const s=e.labelColors[a];let n="background:".concat(s.backgroundColor);n+="; border-color:".concat(s.borderColor),n+="; border-width: 2px",n+="; border-radius: 30px";const r='<span class="chartjs-tooltip-key" style="'.concat(n,'"></span>');o+="<tr><td>".concat(r).concat(t,"</td></tr>")})),o+="</tbody>";t.querySelector("table").innerHTML=o}const a=this._chart.canvas.offsetTop,s=this._chart.canvas.offsetLeft,o=document.querySelector(".chartjs-tooltip").clientHeight;t.style.opacity=1,t.style.left="".concat(s+e.caretX,"px"),t.style.top="".concat(a+e.caretY-(e.caretY>10?o>100?o+5:o+15:70),"px"),t.style.fontFamily=e._bodyFontFamily,t.style.fontSize="".concat(e.bodyFontSize,"px"),t.style.fontStyle=e._bodyFontStyle,t.style.padding="".concat(e.yPadding,"px ").concat(e.xPadding,"px")}},54720:(e,t,a)=>{a.r(t),a.d(t,{default:()=>g});var s=a(9950),o=a(90650),n=a(17848),r=a(93047),i=a(98341),l=a(53055),c=a(29355),d=a(42017),h=a(7617),p=a(39526),b=a(44414);const g=function(){const e=(0,i.wA)(),{cashFlowState:t,cfIsLoading:a}=(0,i.d4)((e=>({cashFlowState:e.chartContent.cashFlowData,cfIsLoading:e.chartContent.cfLoading}))),[g,u]=(0,s.useState)({cashFlowActive:"year"});(0,s.useEffect)((()=>{p.cashFlowGetData&&e((0,p.cashFlowGetData)())}),[e]);const x=(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(r.k2,{to:"#",children:[(0,b.jsx)(n.A,{size:16,icon:"printer"}),(0,b.jsx)("span",{children:"Printer"})]}),(0,b.jsxs)(r.k2,{to:"#",children:[(0,b.jsx)(n.A,{size:16,icon:"book-open"}),(0,b.jsx)("span",{children:"PDF"})]}),(0,b.jsxs)(r.k2,{to:"#",children:[(0,b.jsx)(n.A,{size:16,icon:"file-text"}),(0,b.jsx)("span",{children:"Google Sheets"})]}),(0,b.jsxs)(r.k2,{to:"#",children:[(0,b.jsx)(n.A,{size:16,icon:"x"}),(0,b.jsx)("span",{children:"Excel (XLSX)"})]}),(0,b.jsxs)(r.k2,{to:"#",children:[(0,b.jsx)(n.A,{size:16,icon:"file"}),(0,b.jsx)("span",{children:"CSV"})]})]}),f=t=>{u({...g,cashFlowActive:t}),e((0,p.cashFlowFilterData)(t))},C=null!==t&&[{data:t.dataIn,backgroundColor:"#20C99770",hoverBackgroundColor:"#20C997",label:"Cash in",maxBarThickness:10,barThickness:12},{data:t.dataOut,backgroundColor:"#FF4D4F70",hoverBackgroundColor:"#FF4D4F",label:"Cash out",maxBarThickness:10,barThickness:12}];return null!==t&&(0,b.jsx)(c.Cards,{isbutton:(0,b.jsx)("div",{className:"card-nav",children:(0,b.jsxs)("ul",{children:[(0,b.jsx)("li",{className:"week"===g.cashFlowActive?"active":"regular",children:(0,b.jsx)(r.N_,{onClick:()=>f("week"),to:"#",children:"Week"})}),(0,b.jsx)("li",{className:"month"===g.cashFlowActive?"active":"regular",children:(0,b.jsx)(r.N_,{onClick:()=>f("month"),to:"#",children:"Month"})}),(0,b.jsx)("li",{className:"year"===g.cashFlowActive?"active":"regular",children:(0,b.jsx)(r.N_,{onClick:()=>f("year"),to:"#",children:"Year"})})]})}),title:(0,b.jsxs)("div",{children:["Cash Flow ",(0,b.jsx)("span",{children:"Nov 23, 2019 - Nov 29, 2019"})]}),size:"large",more:x,children:a?(0,b.jsx)("div",{className:"sd-spin",children:(0,b.jsx)(o.A,{})}):(0,b.jsxs)(l.CardBarChart,{children:[(0,b.jsxs)("div",{className:"card-bar-top d-flex flex-grid",children:[(0,b.jsxs)("div",{className:"flex-grid-child",children:[(0,b.jsx)("p",{children:"Current Balance"}),(0,b.jsxs)(d.default,{as:"h3",className:"color-primary",children:["$",t.current]})]}),(0,b.jsxs)("div",{className:"flex-grid-child",children:[(0,b.jsx)("p",{children:"Cash In"}),(0,b.jsxs)(d.default,{as:"h3",children:["$",t.in]})]}),(0,b.jsxs)("div",{className:"flex-grid-child",children:[(0,b.jsx)("p",{children:"Cash Out"}),(0,b.jsxs)(d.default,{as:"h3",children:["$",t.out]})]})]}),(0,b.jsx)(h.ChartjsBarChartTransparent,{labels:t.labels,datasets:C,height:106,options:{maintainAspectRatio:!0,responsive:!0,layout:{padding:{top:20}},legend:{display:!1,position:"bottom",align:"start",labels:{boxWidth:6,display:!1,usePointStyle:!0}},scales:{yAxes:[{gridLines:{color:"#e5e9f2",borderDash:[3,3],zeroLineColor:"#e5e9f2",zeroLineWidth:1,zeroLineBorderDash:[3,3]},ticks:{beginAtZero:!0,fontSize:12,fontColor:"#182b49",max:Math.max(...t.dataIn),stepSize:Math.floor(Math.max(...t.dataIn)/5),callback:e=>"".concat(e,"k")}}],xAxes:[{gridLines:{display:!0,zeroLineWidth:2,zeroLineColor:"#fff",color:"transparent",z:1},ticks:{beginAtZero:!0,fontSize:12,fontColor:"#182b49"}}]}}}),(0,b.jsx)("ul",{className:"chart-dataIndicator",children:C&&C.map(((e,t)=>(0,b.jsxs)("li",{style:{display:"inline-flex",alignItems:"center"},children:[(0,b.jsx)("span",{style:{width:"10px",height:"10px",display:"flex",backgroundColor:e.hoverBackgroundColor,borderRadius:"50%",margin:"0px 6.5px"}}),e.label]},t+1)))})]})})}},39613:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});const{useRef:s,useState:o}=a(9950),{useEffect:n}=a(9950),r=()=>{const[e,t]=o({}),a=s();return n((()=>{if(a.current){const{data:e}=a.current.chartInstance;t(e)}}),[]),{ref:a,chartData:e}}}}]);