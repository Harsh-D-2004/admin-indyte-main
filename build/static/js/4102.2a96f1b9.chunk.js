"use strict";(self.webpackChunkindyte=self.webpackChunkindyte||[]).push([[4102],{7617:(t,e,a)=>{a.r(e),a.d(e,{ChartjsAreaChart:()=>p,ChartjsBarChart:()=>l,ChartjsBarChartGrad:()=>u,ChartjsBarChartTransparent:()=>b,ChartjsDonut:()=>C,ChartjsDonutChart:()=>f,ChartjsDonutChart2:()=>x,ChartjsHorizontalChart:()=>d,ChartjsLineChart:()=>h,ChartjsPieChart:()=>g,ChartjsStackedChart:()=>c});a(9950);var s=a(60780),o=a(39613),r=a(50989),n=a(53055),i=a(44414);const l=t=>{const{labels:e,datasets:a,options:o,height:r}=t,n={datasets:a,labels:e};return(0,i.jsx)(s.yP,{data:n,height:r,options:o})};l.defaultProps={height:200,labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[{data:[20,60,50,45,50,60,70,40,45,35,25,30],backgroundColor:"#001737",barPercentage:.6},{data:[10,40,30,40,60,55,45,35,30,20,15,20],backgroundColor:"#1ce1ac",barPercentage:.6}],options:{maintainAspectRatio:!0,responsive:!0,legend:{display:!1,labels:{display:!1}},scales:{yAxes:[{gridLines:{color:"#e5e9f2"},ticks:{beginAtZero:!0,fontSize:10,fontColor:"#182b49",max:80}}],xAxes:[{gridLines:{display:!1},ticks:{beginAtZero:!0,fontSize:11,fontColor:"#182b49"}}]}}};const d=t=>{const{labels:e,datasets:a,options:o,height:r}=t,n={datasets:a,labels:e};return(0,i.jsx)(s.oo,{data:n,height:r,options:o})};d.defaultProps={height:200,labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[{data:[20,60,50,45,50,60,70,40,45,35,25,30],backgroundColor:"#001737",barPercentage:.6},{data:[10,40,30,40,60,55,45,35,30,20,15,20],backgroundColor:"#1ce1ac",barPercentage:.6}],options:{maintainAspectRatio:!0,responsive:!0,legend:{display:!1,labels:{display:!1}},scales:{yAxes:[{gridLines:{display:!1},ticks:{beginAtZero:!0,fontSize:10,fontColor:"#182b49"}}],xAxes:[{gridLines:{color:"#e5e9f2"},ticks:{beginAtZero:!0,fontSize:11,fontColor:"#182b49",max:100}}]}}};const c=t=>{const{labels:e,datasets:a,options:o,height:r}=t,n={datasets:a,labels:e};return(0,i.jsx)(s.yP,{data:n,height:r,options:o})};c.defaultProps={height:200,labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[{data:[20,60,50,45,50,60,70,40,45,35,25,30],backgroundColor:"#001737",barPercentage:.6},{data:[10,40,30,40,60,55,45,35,30,20,15,20],backgroundColor:"#1ce1ac",barPercentage:.6}],options:{maintainAspectRatio:!0,responsive:!0,legend:{display:!1,labels:{display:!1}},scales:{yAxes:[{stacked:!0,gridLines:{color:"#e5e9f2"},ticks:{beginAtZero:!0,fontSize:10,fontColor:"#182b49"}}],xAxes:[{stacked:!0,gridLines:{display:!1},ticks:{beginAtZero:!0,fontSize:11,fontColor:"#182b49"}}]}}};const h=t=>{const{labels:e,datasets:a,options:o,height:r,layout:l,width:d,id:c}=t,h={labels:e,datasets:a};return(0,i.jsx)(n.ChartContainer,{className:"parentContainer",children:(0,i.jsx)(s.N1,{id:c&&c,width:d,data:h,height:r,options:{...o,...l}})})};h.defaultProps={height:479,width:null,labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[{data:[20,60,50,45,50,60,70,40,45,35,25,30],borderColor:"#001737",borderWidth:1,fill:!1},{data:[10,40,30,40,60,55,45,35,30,20,15,20],borderColor:"#1ce1ac",borderWidth:1,fill:!1}],options:{responsive:!0,maintainAspectRatio:!1,layout:{padding:{left:"-10",right:0,top:0,bottom:"-10"}},legend:{display:!1,labels:{display:!1}}}};const p=t=>{const{labels:e,datasets:a,options:o,height:l,layout:d,id:c}=t,h={labels:e,datasets:a};return(0,i.jsx)("div",{children:(0,i.jsx)(n.ChartContainer,{className:"parentContainer",children:(0,i.jsx)(s.N1,{id:c,data:h,height:l,options:{tooltips:{mode:"nearest",intersect:!1,enabled:!1,custom:r.customTooltips,callbacks:{labelColor:()=>({backgroundColor:a.map((t=>t.borderColor)),borderColor:"transparent"})}},...o,...d}})})})};p.defaultProps={height:250,labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[{data:[20,60,50,45,50,60,70,40,45,35,25,30],borderColor:"#001737",borderWidth:1,fill:!0,backgroundColor:"#00173750",pointHoverBorderColor:"transparent"},{data:[10,40,30,40,60,55,45,35,30,20,15,20],borderColor:"#1ce1ac",borderWidth:1,fill:!0,backgroundColor:"#1ce1ac50",pointHoverBorderColor:"transparent"}],options:{maintainAspectRatio:!0,hover:{mode:"nearest",intersect:!1},layout:{padding:{left:-10,right:0,top:2,bottom:-10}},legend:{display:!1,labels:{display:!1}},elements:{point:{radius:0}},scales:{yAxes:[{stacked:!0,gridLines:{display:!1,color:"#e5e9f2"},ticks:{beginAtZero:!0,fontSize:10,display:!1,stepSize:20}}],xAxes:[{stacked:!0,gridLines:{display:!1},ticks:{beginAtZero:!0,fontSize:11,display:!1}}]}}};const b=t=>{const{labels:e,datasets:a,options:o,height:l,layout:d}=t,c={labels:e,datasets:a};return(0,i.jsx)(n.ChartContainer,{className:"parentContainer",children:(0,i.jsx)(s.yP,{data:c,height:window.innerWidth<=575?230:l,options:{...o,...d,tooltips:{mode:"label",intersect:!1,position:"average",enabled:!1,custom:r.customTooltips,callbacks:{label(t,e){const a=e.datasets[t.datasetIndex].label,{yLabel:s}=t;return'<span class="chart-data">'.concat(s,'</span> <span class="data-label">').concat(a,"</span>")},labelColor:(t,e)=>({backgroundColor:e.config.data.datasets[t.datasetIndex].hoverBackgroundColor,borderColor:"transparent",usePointStyle:!0})}}}})})};b.defaultProps={height:176,labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[{data:[20,60,50,45,50,60,70,40,45,35,25,30],backgroundColor:"rgba(0,23,55, .5)",label:"Profit",barPercentage:.6},{data:[10,40,30,40,60,55,45,35,30,20,15,20],backgroundColor:"rgba(28,225,172, .5)",label:"Lose",barPercentage:.6}],options:{maintainAspectRatio:!0,responsive:!0,legend:{display:!0,position:"bottom",align:"start",labels:{boxWidth:6,display:!0,usePointStyle:!0}},layout:{padding:{left:"0",right:0,top:0,bottom:"0"}},scales:{yAxes:[{gridLines:{color:"#e5e9f2"},ticks:{beginAtZero:!0,fontSize:13,fontColor:"#182b49",max:80,stepSize:20,callback:t=>"".concat(t,"k")}}],xAxes:[{gridLines:{display:!1},ticks:{beginAtZero:!0,fontSize:13,fontColor:"#182b49"}}]}}};const u=t=>{const{labels:e,datasets:a,options:o,height:r,layout:n}=t,l={labels:e,datasets:a};return(0,i.jsx)(s.yP,{data:l,height:r,options:{...o,...n}})};u.defaultProps={labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[{data:[20,60,50,45,50,60,70,40,45,35,25,30],backgroundColor:"rgba(0,23,55, .5)",barPercentage:.6},{data:[10,40,30,40,60,55,45,35,30,20,15,20],backgroundColor:"rgba(28,225,172, .5)",barPercentage:.6}],options:{maintainAspectRatio:!0,responsive:!0,layout:{padding:{left:"0",right:0,top:0,bottom:"0"}},legend:{display:!1,labels:{display:!1}},scales:{yAxes:[{gridLines:{color:"#e5e9f2"},ticks:{beginAtZero:!0,fontSize:10,fontColor:"#182b49",max:80}}],xAxes:[{gridLines:{display:!1},ticks:{beginAtZero:!0,fontSize:11,fontColor:"#182b49"}}]}}};const g=t=>{const{labels:e,datasets:a,options:o,height:r}=t,n={labels:e,datasets:a};return(0,i.jsx)(s.Fq,{data:n,height:r,options:o})};g.defaultProps={height:200,labels:["Jan","Feb","Mar","Apr","May"],datasets:[{data:[20,20,30,5,25],backgroundColor:["#560bd0","#007bff","#00cccc","#cbe0e3","#74de00"]}],options:{maintainAspectRatio:!0,responsive:!0,legend:{display:!1},animation:{animateScale:!0,animateRotate:!0}}};const f=t=>{const{labels:e,datasets:a,options:r,height:n}=t,{ref:l}=(0,o.default)(),d={labels:e,datasets:a};return(0,i.jsxs)("div",{style:{position:"relative"},children:[(0,i.jsxs)("p",{children:[(0,i.jsx)("span",{children:a[0].data.reduce(((t,e)=>t+e),0)}),"Total visitors"]}),(0,i.jsx)(s.nu,{ref:l,data:d,height:n,options:r})]})};f.defaultProps={height:200,labels:["Jan","Feb","Mar","Apr","May"],datasets:[{data:[20,20,30,5,25],backgroundColor:["#560bd0","#007bff","#00cccc","#cbe0e3","#74de00"]}],options:{cutoutPercentage:70,maintainAspectRatio:!0,responsive:!0,legend:{display:!1,position:"bottom"},animation:{animateScale:!0,animateRotate:!0}}};const x=t=>{const{labels:e,datasets:a,options:r,height:n}=t,{ref:l}=(0,o.default)(),d={labels:e,datasets:a};return(0,i.jsxs)("div",{children:[(0,i.jsx)(s.nu,{ref:l,data:d,height:n,options:r,width:200}),(0,i.jsxs)("div",{className:"align-center-v justify-content-between rd-labels",children:[(0,i.jsx)("div",{className:"revenue-chat-label",children:e.map(((t,e)=>(0,i.jsxs)("div",{className:"chart-label",children:[(0,i.jsx)("span",{className:"label-dot dot-".concat(t)}),t]},e+1)))}),(0,i.jsx)("div",{className:"revenue-chart-data",children:a.map(((t,e)=>{const{data:a}=t;return(0,i.jsx)("div",{children:a.map((t=>(0,i.jsx)("p",{children:(0,i.jsxs)("strong",{children:["$",t]})},t)))},e+1)}))}),(0,i.jsxs)("div",{className:"revenue-chat-percentage",children:[(0,i.jsx)("span",{children:"45%"}),(0,i.jsx)("span",{children:"45%"}),(0,i.jsx)("span",{children:"45%"})]})]})]})};x.defaultProps={height:220,labels:["Jan","Feb","Mar","Apr","May"],datasets:[{data:[20,20,30,5,25],backgroundColor:["#560bd0","#007bff","#00cccc","#cbe0e3","#74de00"]}],options:{cutoutPercentage:60,maintainAspectRatio:!1,responsive:!1,legend:{display:!1,position:"bottom"},animation:{animateScale:!0,animateRotate:!0}}};const C=t=>{const{labels:e,datasets:a,options:r,height:n}=t,{ref:l}=(0,o.default)(),d={labels:e,datasets:a};return(0,i.jsx)(s.nu,{ref:l,data:d,height:n,options:r,width:200})};C.defaultProps={height:220,labels:["Jan","Feb","Mar","Apr","May"],datasets:[{data:[20,20,30,5,25],backgroundColor:["#560bd0","#007bff","#00cccc","#cbe0e3","#74de00"]}],options:{cutoutPercentage:60,maintainAspectRatio:!1,responsive:!1,legend:{display:!1,position:"bottom"},animation:{animateScale:!0,animateRotate:!0}}}},50989:(t,e,a)=>{a.r(e),a.d(e,{chartLinearGradient:()=>o,customTooltips:()=>r,textRefactor:()=>s});const s=(t,e)=>"".concat(t.split(" ").slice(0,e).join(" "),"..."),o=(t,e,a)=>{const s=t.getContext("2d").createLinearGradient(0,0,0,e);return s.addColorStop(0,"".concat(a.start)),s.addColorStop(1,"".concat(a.end)),s};function r(t){let e=document.querySelector(".chartjs-tooltip");if(this._chart.canvas.closest(".parentContainer").contains(e)||(e=document.createElement("div"),e.className="chartjs-tooltip",e.innerHTML="<table></table>",document.querySelectorAll(".parentContainer").forEach((t=>{t.contains(document.querySelector(".chartjs-tooltip"))&&document.querySelector(".chartjs-tooltip").remove()})),this._chart.canvas.closest(".parentContainer").appendChild(e)),0===t.opacity)return void(e.style.opacity=0);if(e.classList.remove("above","below","no-transform"),t.yAlign?e.classList.add(t.yAlign):e.classList.add("no-transform"),t.body){const a=t.title||[],s=t.body.map((function(t){return t.lines}));let o="<thead>";a.forEach((t=>{o+="<div class='tooltip-title'>".concat(t,"</div>")})),o+="</thead><tbody>",s.forEach(((e,a)=>{const s=t.labelColors[a];let r="background:".concat(s.backgroundColor);r+="; border-color:".concat(s.borderColor),r+="; border-width: 2px",r+="; border-radius: 30px";const n='<span class="chartjs-tooltip-key" style="'.concat(r,'"></span>');o+="<tr><td>".concat(n).concat(e,"</td></tr>")})),o+="</tbody>";e.querySelector("table").innerHTML=o}const a=this._chart.canvas.offsetTop,s=this._chart.canvas.offsetLeft,o=document.querySelector(".chartjs-tooltip").clientHeight;e.style.opacity=1,e.style.left="".concat(s+t.caretX,"px"),e.style.top="".concat(a+t.caretY-(t.caretY>10?o>100?o+5:o+15:70),"px"),e.style.fontFamily=t._bodyFontFamily,e.style.fontSize="".concat(t.bodyFontSize,"px"),e.style.fontStyle=t._bodyFontStyle,e.style.padding="".concat(t.yPadding,"px ").concat(t.xPadding,"px")}},4102:(t,e,a)=>{a.r(e),a.d(e,{default:()=>b});a(9950);var s=a(87094),o=a(41988),r=a(37781),n=a(17848),i=a(53055),l=a(29355),d=a(42017),c=a(7617),h=a(50989),p=a(44414);const b=function(){return(0,p.jsxs)(s.A,{gutter:25,children:[(0,p.jsx)(o.A,{md:12,children:(0,p.jsx)(i.Focard,{children:(0,p.jsx)("div",{className:"forcast-card-box",children:(0,p.jsxs)(l.Cards,{headless:!0,title:"Net Profit",children:[(0,p.jsxs)("div",{className:"focard-details growth-downward",children:[(0,p.jsx)(d.default,{as:"h1",children:"$25.3k"}),(0,p.jsxs)("p",{className:"focard-status",children:[(0,p.jsxs)("span",{className:"focard-status__percentage",children:[(0,p.jsx)(n.A,{icon:"arrow-down"})," 25%"]}),(0,p.jsx)("span",{children:"Since last month"})]})]}),(0,p.jsx)(c.ChartjsAreaChart,{id:"netProfit",labels:["Jan","Feb","Mar","Apr","May","Jun","july","Aug","Sep","Oct"],datasets:[{data:[30,10,20,25,20,30,15,25,15,10],borderColor:"#5F63F2",borderWidth:3,fill:!0,pointHoverBackgroundColor:"#5F63F2",pointHoverBorderWidth:0,pointHoverBorderColor:"transparent",backgroundColor:()=>(0,h.chartLinearGradient)(document.getElementById("netProfit"),80,{start:"#5F63F212",end:"#5F63F202"})}],height:80})]})})})}),(0,p.jsx)(o.A,{md:12,children:(0,p.jsx)(i.Focard,{children:(0,p.jsx)("div",{className:"forcast-card-box",children:(0,p.jsxs)(l.Cards,{headless:!0,title:"Gross Profit",children:[(0,p.jsxs)("div",{className:"focard-details growth-upward",children:[(0,p.jsx)(d.default,{as:"h1",children:"$82.24k"}),(0,p.jsxs)("p",{className:"focard-status",children:[(0,p.jsxs)("span",{className:"focard-status__percentage",children:[(0,p.jsx)(n.A,{icon:"arrow-up"})," 25%"]}),(0,p.jsx)("span",{children:"Since last month"})]})]}),(0,p.jsx)(c.ChartjsAreaChart,{id:"grossProfit",labels:["Jan","Feb","Mar","Apr","May","Jun","july","Aug","Sep","Oct"],datasets:[{data:[30,10,20,25,20,30,15,25,15,10],borderColor:"#20C997",borderWidth:3,fill:!0,pointHoverBackgroundColor:"#20c997",pointHoverBorderWidth:0,pointHoverBorderColor:"transparent",backgroundColor:()=>(0,h.chartLinearGradient)(document.getElementById("grossProfit"),80,{start:"#20C99712",end:"#20C99702"})}],height:80})]})})})}),(0,p.jsx)(o.A,{md:12,sm:12,xs:24,children:(0,p.jsx)(i.RatioCard,{children:(0,p.jsx)(l.Cards,{headless:!0,title:"Quick Ratio",children:(0,p.jsxs)("div",{className:"ratio-content",children:[(0,p.jsx)(d.default,{as:"h1",children:"1.8"}),(0,p.jsx)(r.A,{percent:80,className:"progress-success"}),(0,p.jsxs)("p",{children:[(0,p.jsx)("strong",{children:"1 or higher"})," quick ratio target"]})]})})})}),(0,p.jsx)(o.A,{md:12,sm:12,xs:24,children:(0,p.jsx)(i.RatioCard,{children:(0,p.jsx)(l.Cards,{headless:!0,title:"Current Ratio",children:(0,p.jsxs)("div",{className:"ratio-content",children:[(0,p.jsx)(d.default,{as:"h1",children:"2.4"}),(0,p.jsx)(r.A,{percent:72,status:"warning"}),(0,p.jsxs)("p",{children:[(0,p.jsx)("strong",{children:"3 or higher"})," current ratio target"]})]})})})})]})}},39613:(t,e,a)=>{a.r(e),a.d(e,{default:()=>n});const{useRef:s,useState:o}=a(9950),{useEffect:r}=a(9950),n=()=>{const[t,e]=o({}),a=s();return r((()=>{if(a.current){const{data:t}=a.current.chartInstance;e(t)}}),[]),{ref:a,chartData:t}}}}]);