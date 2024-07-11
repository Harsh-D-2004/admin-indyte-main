"use strict";(self.webpackChunkindyte=self.webpackChunkindyte||[]).push([[4529],{50989:(e,t,s)=>{s.r(t),s.d(t,{chartLinearGradient:()=>r,customTooltips:()=>o,textRefactor:()=>c});const c=(e,t)=>"".concat(e.split(" ").slice(0,t).join(" "),"..."),r=(e,t,s)=>{const c=e.getContext("2d").createLinearGradient(0,0,0,t);return c.addColorStop(0,"".concat(s.start)),c.addColorStop(1,"".concat(s.end)),c};function o(e){let t=document.querySelector(".chartjs-tooltip");if(this._chart.canvas.closest(".parentContainer").contains(t)||(t=document.createElement("div"),t.className="chartjs-tooltip",t.innerHTML="<table></table>",document.querySelectorAll(".parentContainer").forEach((e=>{e.contains(document.querySelector(".chartjs-tooltip"))&&document.querySelector(".chartjs-tooltip").remove()})),this._chart.canvas.closest(".parentContainer").appendChild(t)),0===e.opacity)return void(t.style.opacity=0);if(t.classList.remove("above","below","no-transform"),e.yAlign?t.classList.add(e.yAlign):t.classList.add("no-transform"),e.body){const s=e.title||[],c=e.body.map((function(e){return e.lines}));let r="<thead>";s.forEach((e=>{r+="<div class='tooltip-title'>".concat(e,"</div>")})),r+="</thead><tbody>",c.forEach(((t,s)=>{const c=e.labelColors[s];let o="background:".concat(c.backgroundColor);o+="; border-color:".concat(c.borderColor),o+="; border-width: 2px",o+="; border-radius: 30px";const a='<span class="chartjs-tooltip-key" style="'.concat(o,'"></span>');r+="<tr><td>".concat(a).concat(t,"</td></tr>")})),r+="</tbody>";t.querySelector("table").innerHTML=r}const s=this._chart.canvas.offsetTop,c=this._chart.canvas.offsetLeft,r=document.querySelector(".chartjs-tooltip").clientHeight;t.style.opacity=1,t.style.left="".concat(c+e.caretX,"px"),t.style.top="".concat(s+e.caretY-(e.caretY>10?r>100?r+5:r+15:70),"px"),t.style.fontFamily=e._bodyFontFamily,t.style.fontSize="".concat(e.bodyFontSize,"px"),t.style.fontStyle=e._bodyFontStyle,t.style.padding="".concat(e.yPadding,"px ").concat(e.xPadding,"px")}},44529:(e,t,s)=>{s.r(t),s.d(t,{default:()=>g});s(9950);var c=s(12916),r=s(37781),o=s(17848),a=s(93047),l=s(29355),n=s(59377),i=s(50989),A=s(55962),d=s(44414);const g=function(e){let{value:t}=e;const{id:g,title:x,status:j,content:B,percentage:h}=t;return(0,d.jsx)(A.ProjectCard,{children:(0,d.jsxs)(l.Cards,{headless:!0,children:[(0,d.jsxs)("div",{className:"project-top",children:[(0,d.jsxs)("div",{className:"project-title",children:[(0,d.jsxs)("h1",{children:[(0,d.jsx)(a.N_,{to:"/admin/project/projectDetails/".concat(g),children:x}),(0,d.jsx)(c.A,{className:j,children:j})]}),(0,d.jsx)(n.Dropdown,{content:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a.N_,{to:"#",children:"Total Income"}),(0,d.jsx)(a.N_,{to:"#",children:"Total Expense"}),(0,d.jsx)(a.N_,{to:"#",children:"Total Tax"}),(0,d.jsx)(a.N_,{to:"#",children:"Net Profit"})]}),children:(0,d.jsx)(a.N_,{to:"#",children:(0,d.jsx)(o.A,{icon:"more-horizontal",size:18})})})]}),(0,d.jsx)("p",{className:"project-desc",children:(0,i.textRefactor)(B,13)}),(0,d.jsxs)("div",{className:"project-timing",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("span",{children:"Start Date"}),(0,d.jsx)("strong",{children:"26 Dec 2019"})]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("span",{children:"Deadline"}),(0,d.jsx)("strong",{children:"18 Mar 2020"})]})]}),(0,d.jsxs)("div",{className:"project-progress",children:[(0,d.jsx)(r.A,{percent:"complete"===j?100:h,strokeWidth:5,status:"primary",className:"progress-primary"}),(0,d.jsx)("p",{children:"12/15 Task Completed"})]})]}),(0,d.jsx)("div",{className:"project-bottom",children:(0,d.jsxs)("div",{className:"project-assignees",children:[(0,d.jsx)("p",{children:"Assigned To"}),(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{children:(0,d.jsx)("img",{src:s(91607),alt:""})}),(0,d.jsx)("li",{children:(0,d.jsx)("img",{src:s(2876),alt:""})}),(0,d.jsx)("li",{children:(0,d.jsx)("img",{src:s(20389),alt:""})}),(0,d.jsx)("li",{children:(0,d.jsx)("img",{src:s(35722),alt:""})}),(0,d.jsx)("li",{children:(0,d.jsx)("img",{src:s(86483),alt:""})}),(0,d.jsx)("li",{children:(0,d.jsx)("img",{src:s(11992),alt:""})}),(0,d.jsx)("li",{children:(0,d.jsx)("img",{src:s(84705),alt:""})})]})]})})]})})}},11992:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAElklEQVR4Xu2Xy0okQRBFc0TwuVFx4VtEFBFxI7jzr/0Bdy5FVBR8ICqIqBsVBXGGSIgmpqa6C63ulrme2khblVl578kbkfVre3v7d+KSdeAXgGXZZmEA1uYLYHG+AAawugPi+ujBABZ3QFweCQawuAPi8kgwgMUdEJdHggEs7oC4PBIMYHEHxOWRYACLOyAujwQDWNwBcXkkGMDiDojLI8EAFndAXB4JBrC4A+LySDCAxR0Ql0eCASzugLg8EgxgcQfE5ZFgAIs7IC6PBANY3AFxeSQYwOIOiMsjwQAWd0BcHgkGsLgD4vJIMIDFHRCXR4IBLO6AuDwSDGBxB8TlkWAAizsgLo8EA1jcAXF5JBjA4g6IyyPBABZ3QFxexxO8tbWVLdzZ2cl/x8bG0vr6eurv78+/7+/v0+7u7j/3Pj4+0tnZWTo5OamFwN93d3eX9vf381xTU1NpZWUlXV5els6/tLSU5ufn08XFReP+2tpampmZyePf39/TwcFBur6+zr/jvaenp4bWWgtv0+COAXbRJjgCNvN6e3vT4eFhA7abb5vh7e0tA7fx4+PjaW9vL2+COpe9c3Z2Nh0dHWUo8T1xXt8MPT09yTbY1dVVA/DGxkY6Pz/Pa4lrszE+9+vra968cTPVWXc7xnYMsC/OzBgZGWm6q83sx8fH9PDwkJaXl9Px8XGGYMbZ2Jubm9optrU4VHvX5ORkTnOzjVP1btswPsfi4mKW6lWoSm87oH1mjm8FHI20RReNd/iDg4PJUjUwMJBLeyyRMY3FpEYjrCzbBrKrKmFVgCNEX6OX/wh/dXU1vby8pNHR0Vy1LOFWkWLqW1WUz4Bs9uy3At7c3Ex9fX053dEYT1YEbFXAe3Ic5+CsfM7NzbVMfBzXyrxWgIv9uwqwbUjv13Ez2lrssg3QqsLVhfwtgL3XPT8/N0pbFeBYBh2ql3Pv9/HAVjTG5p+ens6V4Pb2tnHgKjOwGWB7z8TExF8HrCrA1hLK0m3vtX5tyY4HtrpAi+O7DriZeUVo8Tnb4a0AG7yFhYXcy70Xlh2erDTbIe4rPbhZb/UklvXgVvBtM9r9mPB2w7X5ug7YjLKeWgai2SnaDjJDQ0ONE/VnS3QRTrNTtBtc3IT22/rp6elp49PIn419v3iKLn4i/ogSbXDMsHj5t6Ol2Iy0shUPUjbGD1hWYv2w4mXOS31ZCS37pi37XzHx8QQf1+XPxe/0qCm2CQc8PDych7nOuE7fFLFdtTPJHU9wOxZbLIPtmLMbcxRLdDfe2fUe3A5RAP66iyT4695VjiTBlRbxQF0H/osE1xX5k8cDWJw+gAEs7oC4PBIMYHEHxOWRYACLOyAujwQDWNwBcXkkGMDiDojLI8EAFndAXB4JBrC4A+LySDCAxR0Ql0eCASzugLg8EgxgcQfE5ZFgAIs7IC6PBANY3AFxeSQYwOIOiMsjwQAWd0BcHgkGsLgD4vJIMIDFHRCXR4IBLO6AuDwSDGBxB8TlkWAAizsgLo8EA1jcAXF5JBjA4g6IyyPBABZ3QFweCQawuAPi8kgwgMUdEJdHgsUB/wHERxbFRshvpQAAAABJRU5ErkJggg=="},84705:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAElklEQVR4Xu2Xy0okQRBFc0TwuVFx4VtEFBFxI7jzr/0Bdy5FVBR8ICqIqBsVBXGGSIgmpqa6C63ulrme2khblVl578kbkfVre3v7d+KSdeAXgGXZZmEA1uYLYHG+AAawugPi+ujBABZ3QFweCQawuAPi8kgwgMUdEJdHggEs7oC4PBIMYHEHxOWRYACLOyAujwQDWNwBcXkkGMDiDojLI8EAFndAXB4JBrC4A+LySDCAxR0Ql0eCASzugLg8EgxgcQfE5ZFgAIs7IC6PBANY3AFxeSQYwOIOiMsjwQAWd0BcHgkGsLgD4vJIMIDFHRCXR4IBLO6AuDwSDGBxB8TlkWAAizsgLo8EA1jcAXF5JBjA4g6IyyPBABZ3QFxexxO8tbWVLdzZ2cl/x8bG0vr6eurv78+/7+/v0+7u7j/3Pj4+0tnZWTo5OamFwN93d3eX9vf381xTU1NpZWUlXV5els6/tLSU5ufn08XFReP+2tpampmZyePf39/TwcFBur6+zr/jvaenp4bWWgtv0+COAXbRJjgCNvN6e3vT4eFhA7abb5vh7e0tA7fx4+PjaW9vL2+COpe9c3Z2Nh0dHWUo8T1xXt8MPT09yTbY1dVVA/DGxkY6Pz/Pa4lrszE+9+vra968cTPVWXc7xnYMsC/OzBgZGWm6q83sx8fH9PDwkJaXl9Px8XGGYMbZ2Jubm9optrU4VHvX5ORkTnOzjVP1btswPsfi4mKW6lWoSm87oH1mjm8FHI20RReNd/iDg4PJUjUwMJBLeyyRMY3FpEYjrCzbBrKrKmFVgCNEX6OX/wh/dXU1vby8pNHR0Vy1LOFWkWLqW1WUz4Bs9uy3At7c3Ex9fX053dEYT1YEbFXAe3Ic5+CsfM7NzbVMfBzXyrxWgIv9uwqwbUjv13Ez2lrssg3QqsLVhfwtgL3XPT8/N0pbFeBYBh2ql3Pv9/HAVjTG5p+ens6V4Pb2tnHgKjOwGWB7z8TExF8HrCrA1hLK0m3vtX5tyY4HtrpAi+O7DriZeUVo8Tnb4a0AG7yFhYXcy70Xlh2erDTbIe4rPbhZb/UklvXgVvBtM9r9mPB2w7X5ug7YjLKeWgai2SnaDjJDQ0ONE/VnS3QRTrNTtBtc3IT22/rp6elp49PIn419v3iKLn4i/ogSbXDMsHj5t6Ol2Iy0shUPUjbGD1hWYv2w4mXOS31ZCS37pi37XzHx8QQf1+XPxe/0qCm2CQc8PDych7nOuE7fFLFdtTPJHU9wOxZbLIPtmLMbcxRLdDfe2fUe3A5RAP66iyT4695VjiTBlRbxQF0H/osE1xX5k8cDWJw+gAEs7oC4PBIMYHEHxOWRYACLOyAujwQDWNwBcXkkGMDiDojLI8EAFndAXB4JBrC4A+LySDCAxR0Ql0eCASzugLg8EgxgcQfE5ZFgAIs7IC6PBANY3AFxeSQYwOIOiMsjwQAWd0BcHgkGsLgD4vJIMIDFHRCXR4IBLO6AuDwSDGBxB8TlkWAAizsgLo8EA1jcAXF5JBjA4g6IyyPBABZ3QFweCQawuAPi8kgwgMUdEJdHgsUB/wHERxbFRshvpQAAAABJRU5ErkJggg=="}}]);