"use strict";(self.webpackChunkindyte=self.webpackChunkindyte||[]).push([[8235],{68235:(e,s,i)=>{i.r(s),i.d(s,{default:()=>b});var t=i(9950),l=i(92759),n=i(48874),a=i(98341),c=i(93047),r=i(17848),o=i(59051),d=i.n(o),h=i(14758),x=i(69466),j=i(13918),m=i(72906),u=i(61837),g=i(42017),p=i(72449),N=i(75177),A=i(29355),f=i(59377),_=i(44414);const b=function(e){let{match:s}=e;const o=(0,a.wA)(),{rtl:b,chat:v}=(0,a.d4)((e=>({rtl:e.ChangeLayoutMode.rtlData,chat:e.chatSingle.data}))),w=b?"right":"left",[y,z]=(0,t.useState)({chatData:v,me:"woadud@gmail.com",singleContent:v[0].content,name:v[0].groupName,inputValue:"",fileList:[],fileList2:[]}),[C,k]=(0,t.useState)(!1),{singleContent:M,name:B,me:D,inputValue:F}=y;(0,t.useEffect)((()=>{let e=!1;return e||z({chatData:v,singleContent:v[0].content,name:v[0].groupName,inputValue:F,me:"woadud@gmail.com",fileList:[],fileList2:[]}),()=>{e=!0}}),[s,v,F]);const L=e=>{e.preventDefault();const i={content:F,time:(new Date).getTime(),seen:!1,reaction:!1,email:D,userName:"Woadud Akand"};o((0,N.updateGroupChat)(parseInt(s.params.id,10),i)),z({...y,singleContent:[...M,i],inputValue:""})},Y={name:"file",action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",headers:{authorization:"authorization-text"},listType:"picture-card",onChange(e){"uploading"!==e.file.status&&(console.log(e.file,e.fileList),z({...y,fileList:e.fileList})),"done"===e.file.status?l.Ay.success("".concat(e.file.name," file uploaded successfully")):"error"===e.file.status&&l.Ay.error("".concat(e.file.name," file upload failed."))}},U={name:"file",action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",headers:{authorization:"authorization-text"},onChange(e){"uploading"!==e.file.status&&z({...y,fileList2:e.fileList}),"done"===e.file.status?l.Ay.success("".concat(e.file.name," file uploaded successfully")):"error"===e.file.status&&l.Ay.error("".concat(e.file.name," file upload failed."))}},R=(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)(c.k2,{to:"#",children:[(0,_.jsx)(r.A,{icon:"users",size:14}),(0,_.jsx)("span",{children:"Create new group"})]}),(0,_.jsxs)(c.k2,{to:"#",children:[(0,_.jsx)(r.A,{icon:"trash-2",size:14}),(0,_.jsx)("span",{children:"Delete conversation"})]}),(0,_.jsxs)(c.k2,{to:"#",children:[(0,_.jsx)(r.A,{icon:"slash",size:14}),(0,_.jsx)("span",{children:"Block & Report"})]})]});return(0,_.jsxs)(u.SingleChatWrapper,{className:"group-chat",children:[C&&(0,_.jsx)(u.BackShadowEmoji,{onClick:()=>k(!1)}),(0,_.jsxs)(A.Cards,{title:(0,_.jsxs)("div",{className:"group-chat-header d-flex",children:[(0,_.jsx)(g.default,{as:"h5",children:B}),(0,_.jsxs)("div",{className:"members",children:[(0,_.jsx)(c.N_,{to:"#",children:(0,_.jsx)("img",{src:i(42164),alt:""})}),(0,_.jsx)(c.N_,{to:"#",children:(0,_.jsx)("img",{src:i(42164),alt:""})}),(0,_.jsx)(c.N_,{to:"#",children:(0,_.jsx)("img",{src:i(42164),alt:""})}),(0,_.jsx)(c.N_,{to:"#",children:(0,_.jsx)("img",{src:i(42164),alt:""})}),(0,_.jsx)(c.N_,{to:"#",children:(0,_.jsx)("img",{src:i(42164),alt:""})}),(0,_.jsx)(c.N_,{to:"#",children:(0,_.jsx)("img",{src:i(42164),alt:""})}),(0,_.jsx)(c.N_,{to:"#",className:"show-more",children:(0,_.jsx)("span",{children:"20+"})}),(0,_.jsx)(c.N_,{to:"#",className:"add-more",children:(0,_.jsx)("span",{className:"add-icon",children:(0,_.jsx)(r.A,{icon:"plus",size:14})})})]})]}),more:R,children:[(0,_.jsx)("ul",{className:"atbd-chatbox",children:(0,_.jsx)(x.ur,{className:"custom-scrollbar",autoHide:!0,autoHideTimeout:500,autoHideDuration:200,renderThumbHorizontal:e=>{let{style:s,...i}=e;return(0,_.jsx)("div",{style:{...s,borderRadius:6,backgroundColor:"#F1F2F6"},...i})},renderThumbVertical:e=>{let{style:s,...i}=e;const t={borderRadius:6,backgroundColor:"#F1F2F6",[w]:"2px"};return(0,_.jsx)("div",{style:{...s,...t},...i})},renderView:e=>{let{style:s,...i}=e;const t={marginRight:"auto",[b?"left":"right"]:"2px",[b?"marginLeft":"marginRight"]:"-19px"};return(0,_.jsx)("div",{...i,style:{...s,...t}})},renderTrackVertical:()=>{const e={position:"absolute",width:"6px",transition:"opacity 200ms ease 0s",opacity:0,[b?"left":"right"]:"6px",bottom:"2px",top:"2px",borderRadius:"3px"};return(0,_.jsx)("div",{style:e})},children:M.length?M.map(((e,s)=>{const t=e.time,l=d()(t).format("MM-DD-YYYY")===d()().format("MM-DD-YYYY");return(0,_.jsx)("li",{className:"atbd-chatbox__single",style:{overflow:"hidden"},children:(0,_.jsxs)("div",{className:e.email!==D?"left":"right",children:[e.email!==D?(0,_.jsx)("img",{src:i(42164),alt:""}):null,(0,_.jsxs)("div",{className:"atbd-chatbox__content",children:[(0,_.jsxs)(g.default,{as:"h5",className:"atbd-chatbox__name",children:[e.email!==D&&B,(0,_.jsx)("span",{children:l?d()(t).format("hh:mm A"):d()(t).format("LL")})]}),e.email!==D?(0,_.jsxs)("div",{className:"atbd-chatbox__contentInner d-flex",children:[(0,_.jsx)("div",{className:"atbd-chatbox__message",children:(0,_.jsx)(u.MessageList,{className:"message-box",children:e.content})}),(0,_.jsxs)("div",{className:"atbd-chatbox__actions",children:[(0,_.jsx)(f.Dropdown,{action:["hover"],content:(0,_.jsx)("div",{className:"atbd-chatbox__emoji",children:(0,_.jsxs)("ul",{children:[(0,_.jsx)("li",{children:(0,_.jsx)(c.N_,{to:"#",children:(0,_.jsx)("span",{role:"img",children:"\ud83c\udf1d"})})}),(0,_.jsx)("li",{children:(0,_.jsx)(c.N_,{to:"#",children:(0,_.jsx)("span",{role:"img",children:"\ud83d\udc74"})})}),(0,_.jsx)("li",{children:(0,_.jsx)(c.N_,{to:"#",children:(0,_.jsx)("span",{role:"img",children:"\ud83d\udc7f"})})}),(0,_.jsx)("li",{children:(0,_.jsx)(c.N_,{to:"#",children:(0,_.jsx)("span",{role:"img",children:"\ud83d\udc97"})})}),(0,_.jsx)("li",{children:(0,_.jsx)(c.N_,{to:"#",children:(0,_.jsx)("span",{role:"img",children:"\ud83d\udd90"})})}),(0,_.jsx)("li",{children:(0,_.jsx)(c.N_,{to:"#",children:(0,_.jsx)(r.A,{icon:"more-horizontal",size:16})})})]})}),placement:"bottomCenter",children:(0,_.jsx)(c.N_,{to:"#",children:(0,_.jsx)(j.A,{})})}),(0,_.jsx)(f.Dropdown,{action:["hover"],content:(0,_.jsx)("div",{className:"atbd-chatbox__messageControl",children:(0,_.jsxs)("ul",{children:[(0,_.jsx)("li",{children:(0,_.jsx)(c.N_,{to:"#",children:"Edit"})}),(0,_.jsx)("li",{children:(0,_.jsx)(c.N_,{to:"#",children:"Copy"})}),(0,_.jsx)("li",{children:(0,_.jsx)(c.N_,{to:"#",children:"Quote"})}),(0,_.jsx)("li",{children:(0,_.jsx)(c.N_,{to:"#",children:"Forward"})}),(0,_.jsx)("li",{children:(0,_.jsx)(c.N_,{to:"#",children:"Remove"})})]})}),placement:"bottomCenter",children:(0,_.jsx)(c.N_,{to:"#",children:(0,_.jsx)(r.A,{icon:"more-horizontal",size:16})})})]})]}):(0,_.jsxs)("div",{className:"atbd-chatbox__contentInner d-flex",children:[(0,_.jsxs)("div",{className:"atbd-chatbox__actions",children:[(0,_.jsx)(f.Dropdown,{action:["hover"],content:(0,_.jsx)("div",{className:"atbd-chatbox__messageControl",children:(0,_.jsxs)("ul",{children:[(0,_.jsx)("li",{children:(0,_.jsx)(c.N_,{to:"#",children:"Edit"})}),(0,_.jsx)("li",{children:(0,_.jsx)(c.N_,{to:"#",children:"Copy"})}),(0,_.jsx)("li",{children:(0,_.jsx)(c.N_,{to:"#",children:"Quote"})}),(0,_.jsx)("li",{children:(0,_.jsx)(c.N_,{to:"#",children:"Forward"})}),(0,_.jsx)("li",{children:(0,_.jsx)(c.N_,{to:"#",children:"Remove"})})]})}),placement:"bottomCenter",children:(0,_.jsx)(c.N_,{to:"#",children:(0,_.jsx)(r.A,{icon:"more-horizontal",size:16})})}),(0,_.jsx)(f.Dropdown,{action:["hover"],content:(0,_.jsx)("div",{className:"atbd-chatbox__emoji",children:(0,_.jsxs)("ul",{children:[(0,_.jsx)("li",{children:(0,_.jsx)(c.N_,{to:"#",children:"\ud83c\udf1d"})}),(0,_.jsx)("li",{children:(0,_.jsx)(c.N_,{to:"#",children:"\ud83d\udc74"})}),(0,_.jsx)("li",{children:(0,_.jsx)(c.N_,{to:"#",children:"\ud83d\udc7f"})}),(0,_.jsx)("li",{children:(0,_.jsx)(c.N_,{to:"#",children:"\ud83d\udc97"})}),(0,_.jsx)("li",{children:(0,_.jsx)(c.N_,{to:"#",children:"\ud83d\udd90"})}),(0,_.jsx)("li",{children:(0,_.jsx)(c.N_,{to:"#",children:(0,_.jsx)(m.A,{})})})]})}),placement:"bottomCenter",children:(0,_.jsx)(c.N_,{to:"#",children:(0,_.jsx)(j.A,{})})})]}),(0,_.jsx)("div",{className:"atbd-chatbox__message",children:(0,_.jsx)(u.MessageList,{className:"message-box",children:e.content})})]}),M.length===s+1?(0,_.jsxs)("div",{className:"group-seen",children:[(0,_.jsx)("img",{src:i(42164),alt:""}),(0,_.jsx)("img",{src:i(42164),alt:""}),(0,_.jsx)("img",{src:i(42164),alt:""}),(0,_.jsx)("img",{src:i(42164),alt:""}),(0,_.jsx)("img",{src:i(42164),alt:""}),(0,_.jsx)("img",{src:i(42164),alt:""})]}):null]})]})},t)})):(0,_.jsx)("p",{children:"No data found"})})}),(0,_.jsx)(u.Footer,{children:(0,_.jsx)("form",{onSubmit:L,children:(0,_.jsxs)("div",{className:"chatbox-reply-form d-flex ".concat(y.fileList.length&&"hasImage"," ").concat(y.fileList2.length&&"hasFile"),children:[(0,_.jsxs)("span",{className:"smile-icon",children:[C&&(0,_.jsx)(h.Ay,{onEmojiClick:(e,s)=>{z({...y,inputValue:F+s.emoji})}}),(0,_.jsx)(c.N_,{onClick:()=>{k(!C)},to:"#",children:(0,_.jsx)(r.A,{icon:"smile",size:24})})]}),(0,_.jsx)("div",{className:"chatbox-reply-input",children:(0,_.jsx)("input",{onChange:e=>{z({...y,inputValue:e.target.value})},placeholder:"Type your message...",name:"chat",id:"chat",style:{width:"100%"},value:F})}),(0,_.jsxs)("div",{className:"chatbox-reply-action d-flex",children:[(0,_.jsx)(n.A,{...Y,children:(0,_.jsx)(c.N_,{to:"#",children:(0,_.jsx)(r.A,{icon:"camera",size:18})})}),(0,_.jsx)(n.A,{...U,children:(0,_.jsx)(c.N_,{to:"#",children:(0,_.jsx)(r.A,{icon:"paperclip",size:18})})}),(0,_.jsx)(p.Button,{onClick:L,type:"primary",children:(0,_.jsx)(r.A,{icon:"send",size:18})})]})]})})})]})]})}},42164:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAYAAABXuSs3AAADGUlEQVRoQ+1Yy4rqQBCtEWEERVBRfDAiioqIuHQx4F/7A+5cigyiCxGd0YWoICoK4r2chgplTEzS1xmYS3rjo7uqT586XanKS6fT+UO/cLz4wH84aj7jP0w4+Yz7jLtkwJeKS6KetsyR8UajQZlMhj4+Pujr60ttnMvlqF6vUzAYpMvlcjOni6zVatHr6yt1u13DRbvdpvP5TL1e787tQ+CJRIKazaYCyMABular0Ww2o/F4rIvzzo73Wq1WNBgMCIQlk0nq9/u0Xq+9AYdxNBpVTIxGI8U4mMGwYuFfT8FgsVe5XKbFYmFLji3jYLZardJ8Pqe3tzcD+Pv7O12vV4rFYgrnfr9X4eX1u92OUqmUmgNTOKCUgVPEIA8eUjZmUmyBw8F2u6XNZqMOABZOp5OSDgZCiIHfCC/WQfdYwwdhSeEAYBMMptNp5RdysBqVSoXy+TwNh0PjTlmtswQu5cBMSuCsQzjktZ+fn8YB+RJLPwBULBbpeDzeXEAJCjrHATEQVU+My4whncLRZDK5Y8wtcPbLEbFikSWFRMARsksAjulQMg4m5W0PhUJGhjkcDkoqy+VSyUBq2Y1UHu3jOatwzmaNSwkgrBi4vAwU6zBwIDnHFw6hh2QKhQJNp1MjY3AqxOE5W1n9J6PkyLjbFGdmzK2d7jof+K9lXDfkunZPk4ouAF07H7guc7p2PuO6zOnaaTHOdQc/3nlzPCEjkcjNU1MXmJOdFnAUQ3gk8+Memzxqs5xA6Mx7Bg62S6USBQIB1SigTkH9kc1m1XergkgHmJONZ+DcYKAD4oaAW7xwOHzXQGM9avB4PK7mUNaiCUHEZMPgNWKegAMgAKPK4wOAZUgH/6NeR/0sWzWsQ7XIzbYEyLU8DsZ+nZjmedfAzXIwA5evFuRa1OiyVZNzAGF+i/B04DJjSOfQtJkxt8Bha47I04GbHUrGzZ27lINsIszZ50ek8gg45rgZRrbhVxYMFJ+c33lOviHjtweyA3Ji3rXGnRzZzcvI6PqwsvOB/3eMP1Me0te3S8UHbmLAZ/y7JGHn99cy/heH196xnilRMwAAAABJRU5ErkJggg=="}}]);