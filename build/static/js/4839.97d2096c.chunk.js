"use strict";(self.webpackChunkindyte=self.webpackChunkindyte||[]).push([[4839],{34839:(e,s,l)=>{l.r(s),l.d(s,{default:()=>g});var i=l(9950),n=l(98341),t=l(2557),a=l(50558),r=l(32645),o=l(32212),c=l(87094),d=l(41988),h=l(98252),x=l(16673),u=l(67482),f=l(8099),j=l(86498),m=l(44414);const{Meta:A}=t.A,{Paragraph:p}=a.A;function g(){var e,s;const{id:l}=(0,x.useParams)(),[A,g]=(0,i.useState)({}),[w,v]=(0,i.useState)([]),[y,M]=(0,i.useState)(),[b,z]=(0,i.useState)(!1),[N,k]=(0,i.useState)(!1),{role:B}=(0,n.d4)((e=>({role:e.auth.role})));(0,i.useEffect)((()=>{z(!0);!async function(){try{const e=await j.api.get("/dietician/me/".concat(l));if(console.log({res:e}),200!==e.status)throw new Error(await e.data);{const s=await e.data;console.log({data:s}),g(s)}}catch(e){console.error({err:e}),M(e.message)}finally{z(!1)}}(),(async()=>{try{const e=await j.api.get("/getclients?dieticianId=".concat(l));if(200!==e.status)throw new Error("Failed to get data");const s=await e.data;console.log(s),v(null===s||void 0===s?void 0:s.clients),console.log({clRes:e})}catch(e){console.error({err:e}),M(e.message)}finally{z(!1)}})()}),[]);(0,f.decryptData)({ciphertext:B,key:"mysecret"});return l?(0,m.jsxs)(m.Fragment,{children:[y&&(0,m.jsx)(r.A,{open:y,onOk:()=>M(null),onCancel:()=>M(null),children:(0,m.jsxs)(t.A,{style:{color:"red"},children:[(0,m.jsx)(a.A,{children:"Oops"}),y]})}),(0,m.jsx)(r.A,{open:N,onCancel:()=>k(!1),onOk:()=>k(!1),children:(0,m.jsx)(a.A,{children:"Feature Coming soon"})}),b?(0,m.jsx)(o.A,{active:!0,className:"w-full h-full"}):A&&(0,m.jsx)(u.Main,{children:(0,m.jsx)("div",{className:"p-4 my-1",children:(0,m.jsx)(t.A,{bordered:!1,children:(0,m.jsxs)(c.A,{align:"middle",gutter:24,children:[(0,m.jsx)(d.A,{xs:24,md:8,align:"",children:(0,m.jsx)(t.A,{bordered:!1,style:{margin:"auto 0"},children:(0,m.jsx)(h.A,{size:200,src:(null===A||void 0===A?void 0:A.profile)||"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHVzZXJzfGVufDB8fDB8fHww"})})}),(0,m.jsx)(d.A,{xs:24,md:16,children:(0,m.jsxs)(t.A,{bordered:!1,children:[(0,m.jsx)(a.A.Title,{level:4,style:{width:"fit-content",margin:"1rem 0",textAlign:"start"},children:A.name}),(0,m.jsxs)(p,{children:["Qualifications: ",A.qualification]}),(0,m.jsxs)(p,{children:["Clients: ",(null===A||void 0===A?void 0:A.clients)||400]}),(0,m.jsxs)(p,{children:["Address: ",A.address]}),(0,m.jsxs)(p,{children:["PAN: ",A.pan]}),(0,m.jsxs)(p,{children:["Phone: ",A.phone]}),(0,m.jsxs)(p,{children:["Email: ",A.email]})]})}),(0,m.jsxs)(d.A,{xs:24,children:[(0,m.jsx)(a.A.Title,{level:5,style:{marginTop:"20px"},children:(null===(e=w.user)||void 0===e?void 0:e.length)<1?"No clients assigned":"Clients"}),b?(0,m.jsx)(o.A,{active:!0}):null===(s=w.user)||void 0===s?void 0:s.map(((e,s)=>(0,m.jsx)(t.A,{style:{marginBottom:"10px"},children:(0,m.jsxs)(c.A,{gutter:16,children:[(0,m.jsx)(d.A,{xs:8,children:(0,m.jsx)(h.A,{size:128,className:"w-full",src:(null===e||void 0===e?void 0:e.profile)||"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHVzZXJzfGVufDB8fDB8fHww"})}),(0,m.jsxs)(d.A,{xs:12,children:[(0,m.jsxs)(p,{children:["Name: ",e.name]}),(0,m.jsxs)(p,{children:["Phone: ",e.phone]}),(0,m.jsxs)(p,{children:["Email: ",e.email]})]})]})},s)))]})]})})})})]}):(0,m.jsx)(t.A,{className:"flex-center w-full h-full",children:"Not Found"})}}}]);