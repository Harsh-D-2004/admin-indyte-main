(self.webpackChunkindyte=self.webpackChunkindyte||[]).push([[8406],{58406:(e,t,n)=>{"use strict";n.d(t,{A:()=>oe});var i=n(64467),r=n(58168),o=n(89379),l=n(23029),a=n(92901),s=n(9417),d=n(85501),c=n(29426),u=n(9950),p=n(82284),f=n(80045);const h={animating:!1,autoplaying:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,dragging:!1,edgeDragged:!1,initialized:!1,lazyLoadedList:[],listHeight:null,listWidth:null,scrolling:!1,slideCount:null,slideHeight:null,slideWidth:null,swipeLeft:null,swiped:!1,swiping:!1,touchObject:{startX:0,startY:0,curX:0,curY:0},trackStyle:{},trackWidth:0,targetSlide:0};function v(e,t,n){var i=(n||{}).atBegin;return function(e,t,n){var i,r=n||{},o=r.noTrailing,l=void 0!==o&&o,a=r.noLeading,s=void 0!==a&&a,d=r.debounceMode,c=void 0===d?void 0:d,u=!1,p=0;function f(){i&&clearTimeout(i)}function h(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];var a=this,d=Date.now()-p;function h(){p=Date.now(),t.apply(a,r)}function v(){i=void 0}u||(s||!c||i||h(),f(),void 0===c&&d>e?s?(p=Date.now(),l||(i=setTimeout(c?v:h,e))):h():!0!==l&&(i=setTimeout(c?v:h,void 0===c?e-d:e)))}return h.cancel=function(e){var t=(e||{}).upcomingOnly,n=void 0!==t&&t;f(),u=!n},h}(e,t,{debounceMode:!1!==(void 0!==i&&i)})}var g=n(48738),S=n.n(g);function A(e,t,n){return Math.max(t,Math.min(e,n))}var y=function(e){["onTouchStart","onTouchMove","onWheel"].includes(e._reactName)||e.preventDefault()},k=function(e){for(var t=[],n=m(e),i=w(e),r=n;r<i;r++)e.lazyLoadedList.indexOf(r)<0&&t.push(r);return t},m=function(e){return e.currentSlide-T(e)},w=function(e){return e.currentSlide+b(e)},T=function(e){return e.centerMode?Math.floor(e.slidesToShow/2)+(parseInt(e.centerPadding)>0?1:0):0},b=function(e){return e.centerMode?Math.floor((e.slidesToShow-1)/2)+1+(parseInt(e.centerPadding)>0?1:0):e.slidesToShow},L=function(e){return e&&e.offsetWidth||0},C=function(e){return e&&e.offsetHeight||0},x=function(e){var t,n,i,r,o=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return t=e.startX-e.curX,n=e.startY-e.curY,i=Math.atan2(n,t),(r=Math.round(180*i/Math.PI))<0&&(r=360-Math.abs(r)),r<=45&&r>=0||r<=360&&r>=315?"left":r>=135&&r<=225?"right":!0===o?r>=35&&r<=135?"up":"down":"vertical"},E=function(e){var t=!0;return e.infinite||(e.centerMode&&e.currentSlide>=e.slideCount-1||e.slideCount<=e.slidesToShow||e.currentSlide>=e.slideCount-e.slidesToShow)&&(t=!1),t},M=function(e,t){var n={};return t.forEach((function(t){return n[t]=e[t]})),n},z=function(e,t){var n=function(e){for(var t=e.infinite?2*e.slideCount:e.slideCount,n=e.infinite?-1*e.slidesToShow:0,i=e.infinite?-1*e.slidesToShow:0,r=[];n<t;)r.push(n),n=i+e.slidesToScroll,i+=Math.min(e.slidesToScroll,e.slidesToShow);return r}(e),i=0;if(t>n[n.length-1])t=n[n.length-1];else for(var r in n){if(t<n[r]){t=i;break}i=n[r]}return t},H=function(e){var t=e.centerMode?e.slideWidth*Math.floor(e.slidesToShow/2):0;if(e.swipeToSlide){var n,i=e.listRef,r=i.querySelectorAll&&i.querySelectorAll(".slick-slide")||[];if(Array.from(r).every((function(i){if(e.vertical){if(i.offsetTop+C(i)/2>-1*e.swipeLeft)return n=i,!1}else if(i.offsetLeft-t+L(i)/2>-1*e.swipeLeft)return n=i,!1;return!0})),!n)return 0;var o=!0===e.rtl?e.slideCount-e.currentSlide:e.currentSlide;return Math.abs(n.dataset.index-o)||1}return e.slidesToScroll},W=function(e,t){return t.reduce((function(t,n){return t&&e.hasOwnProperty(n)}),!0)?null:console.error("Keys Missing:",e)},P=function(e){var t,n;W(e,["left","variableWidth","slideCount","slidesToShow","slideWidth"]);var i=e.slideCount+2*e.slidesToShow;e.vertical?n=i*e.slideHeight:t=D(e)*e.slideWidth;var r={opacity:1,transition:"",WebkitTransition:""};if(e.useTransform){var l=e.vertical?"translate3d(0px, "+e.left+"px, 0px)":"translate3d("+e.left+"px, 0px, 0px)",a=e.vertical?"translate3d(0px, "+e.left+"px, 0px)":"translate3d("+e.left+"px, 0px, 0px)",s=e.vertical?"translateY("+e.left+"px)":"translateX("+e.left+"px)";r=(0,o.A)((0,o.A)({},r),{},{WebkitTransform:l,transform:a,msTransform:s})}else e.vertical?r.top=e.left:r.left=e.left;return e.fade&&(r={opacity:1}),t&&(r.width=t),n&&(r.height=n),window&&!window.addEventListener&&window.attachEvent&&(e.vertical?r.marginTop=e.left+"px":r.marginLeft=e.left+"px"),r},O=function(e){W(e,["left","variableWidth","slideCount","slidesToShow","slideWidth","speed","cssEase"]);var t=P(e);return e.useTransform?(t.WebkitTransition="-webkit-transform "+e.speed+"ms "+e.cssEase,t.transition="transform "+e.speed+"ms "+e.cssEase):e.vertical?t.transition="top "+e.speed+"ms "+e.cssEase:t.transition="left "+e.speed+"ms "+e.cssEase,t},R=function(e){if(e.unslick)return 0;W(e,["slideIndex","trackRef","infinite","centerMode","slideCount","slidesToShow","slidesToScroll","slideWidth","listWidth","variableWidth","slideHeight"]);var t,n,i=e.slideIndex,r=e.trackRef,o=e.infinite,l=e.centerMode,a=e.slideCount,s=e.slidesToShow,d=e.slidesToScroll,c=e.slideWidth,u=e.listWidth,p=e.variableWidth,f=e.slideHeight,h=e.fade,v=e.vertical;if(h||1===e.slideCount)return 0;var g=0;if(o?(g=-I(e),a%d!==0&&i+d>a&&(g=-(i>a?s-(i-a):a%d)),l&&(g+=parseInt(s/2))):(a%d!==0&&i+d>a&&(g=s-a%d),l&&(g=parseInt(s/2))),t=v?i*f*-1+g*f:i*c*-1+g*c,!0===p){var S,A=r&&r.node;if(S=i+I(e),t=(n=A&&A.childNodes[S])?-1*n.offsetLeft:0,!0===l){S=o?i+I(e):i,n=A&&A.children[S],t=0;for(var y=0;y<S;y++)t-=A&&A.children[y]&&A.children[y].offsetWidth;t-=parseInt(e.centerPadding),t+=n&&(u-n.offsetWidth)/2}}return t},I=function(e){return e.unslick||!e.infinite?0:e.variableWidth?e.slideCount:e.slidesToShow+(e.centerMode?1:0)},N=function(e){return e.unslick||!e.infinite?0:e.slideCount},D=function(e){return 1===e.slideCount?1:I(e)+e.slideCount+N(e)},X=function(e){return e.targetSlide>e.currentSlide?e.targetSlide>e.currentSlide+Y(e)?"left":"right":e.targetSlide<e.currentSlide-j(e)?"right":"left"},Y=function(e){var t=e.slidesToShow,n=e.centerMode,i=e.rtl,r=e.centerPadding;if(n){var o=(t-1)/2+1;return parseInt(r)>0&&(o+=1),i&&t%2===0&&(o+=1),o}return i?0:t-1},j=function(e){var t=e.slidesToShow,n=e.centerMode,i=e.rtl,r=e.centerPadding;if(n){var o=(t-1)/2+1;return parseInt(r)>0&&(o+=1),i||t%2!==0||(o+=1),o}return i?t-1:0},q=function(){return!("undefined"===typeof window||!window.document||!window.document.createElement)},F=function(e){var t,n,i,r,o;return i=(o=e.rtl?e.slideCount-1-e.index:e.index)<0||o>=e.slideCount,e.centerMode?(r=Math.floor(e.slidesToShow/2),n=(o-e.currentSlide)%e.slideCount===0,o>e.currentSlide-r-1&&o<=e.currentSlide+r&&(t=!0)):t=e.currentSlide<=o&&o<e.currentSlide+e.slidesToShow,{"slick-slide":!0,"slick-active":t,"slick-center":n,"slick-cloned":i,"slick-current":o===(e.targetSlide<0?e.targetSlide+e.slideCount:e.targetSlide>=e.slideCount?e.targetSlide-e.slideCount:e.targetSlide)}},B=function(e,t){return e.key+"-"+t},G=function(e){var t,n=[],i=[],r=[],l=u.Children.count(e.children),a=m(e),s=w(e);return u.Children.forEach(e.children,(function(d,c){var p,f={message:"children",index:c,slidesToScroll:e.slidesToScroll,currentSlide:e.currentSlide};p=!e.lazyLoad||e.lazyLoad&&e.lazyLoadedList.indexOf(c)>=0?d:u.createElement("div",null);var h=function(e){var t={};return void 0!==e.variableWidth&&!1!==e.variableWidth||(t.width=e.slideWidth),e.fade&&(t.position="relative",e.vertical&&e.slideHeight?t.top=-e.index*parseInt(e.slideHeight):t.left=-e.index*parseInt(e.slideWidth),t.opacity=e.currentSlide===e.index?1:0,e.useCSS&&(t.transition="opacity "+e.speed+"ms "+e.cssEase+", visibility "+e.speed+"ms "+e.cssEase)),t}((0,o.A)((0,o.A)({},e),{},{index:c})),v=p.props.className||"",g=F((0,o.A)((0,o.A)({},e),{},{index:c}));if(n.push(u.cloneElement(p,{key:"original"+B(p,c),"data-index":c,className:S()(g,v),tabIndex:"-1","aria-hidden":!g["slick-active"],style:(0,o.A)((0,o.A)({outline:"none"},p.props.style||{}),h),onClick:function(t){p.props&&p.props.onClick&&p.props.onClick(t),e.focusOnSelect&&e.focusOnSelect(f)}})),e.infinite&&!1===e.fade){var A=l-c;A<=I(e)&&l!==e.slidesToShow&&((t=-A)>=a&&(p=d),g=F((0,o.A)((0,o.A)({},e),{},{index:t})),i.push(u.cloneElement(p,{key:"precloned"+B(p,t),"data-index":t,tabIndex:"-1",className:S()(g,v),"aria-hidden":!g["slick-active"],style:(0,o.A)((0,o.A)({},p.props.style||{}),h),onClick:function(t){p.props&&p.props.onClick&&p.props.onClick(t),e.focusOnSelect&&e.focusOnSelect(f)}}))),l!==e.slidesToShow&&((t=l+c)<s&&(p=d),g=F((0,o.A)((0,o.A)({},e),{},{index:t})),r.push(u.cloneElement(p,{key:"postcloned"+B(p,t),"data-index":t,tabIndex:"-1",className:S()(g,v),"aria-hidden":!g["slick-active"],style:(0,o.A)((0,o.A)({},p.props.style||{}),h),onClick:function(t){p.props&&p.props.onClick&&p.props.onClick(t),e.focusOnSelect&&e.focusOnSelect(f)}})))}})),e.rtl?i.concat(n,r).reverse():i.concat(n,r)},U=function(e){(0,d.A)(n,e);var t=(0,c.A)(n);function n(){var e;(0,l.A)(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return e=t.call.apply(t,[this].concat(o)),(0,i.A)((0,s.A)(e),"node",null),(0,i.A)((0,s.A)(e),"handleRef",(function(t){e.node=t})),e}return(0,a.A)(n,[{key:"render",value:function(){var e=G(this.props),t=this.props,n={onMouseEnter:t.onMouseEnter,onMouseOver:t.onMouseOver,onMouseLeave:t.onMouseLeave};return u.createElement("div",(0,r.A)({ref:this.handleRef,className:"slick-track",style:this.props.trackStyle},n),e)}}]),n}(u.PureComponent),_=function(e){(0,d.A)(n,e);var t=(0,c.A)(n);function n(){return(0,l.A)(this,n),t.apply(this,arguments)}return(0,a.A)(n,[{key:"clickHandler",value:function(e,t){t.preventDefault(),this.props.clickHandler(e)}},{key:"render",value:function(){for(var e,t=this.props,n=t.onMouseEnter,i=t.onMouseOver,r=t.onMouseLeave,l=t.infinite,a=t.slidesToScroll,s=t.slidesToShow,d=t.slideCount,c=t.currentSlide,p=(e={slideCount:d,slidesToScroll:a,slidesToShow:s,infinite:l}).infinite?Math.ceil(e.slideCount/e.slidesToScroll):Math.ceil((e.slideCount-e.slidesToShow)/e.slidesToScroll)+1,f={onMouseEnter:n,onMouseOver:i,onMouseLeave:r},h=[],v=0;v<p;v++){var g=(v+1)*a-1,y=l?g:A(g,0,d-1),k=y-(a-1),m=l?k:A(k,0,d-1),w=S()({"slick-active":l?c>=m&&c<=y:c===m}),T={message:"dots",index:v,slidesToScroll:a,currentSlide:c},b=this.clickHandler.bind(this,T);h=h.concat(u.createElement("li",{key:v,className:w},u.cloneElement(this.props.customPaging(v),{onClick:b})))}return u.cloneElement(this.props.appendDots(h),(0,o.A)({className:this.props.dotsClass},f))}}]),n}(u.PureComponent),K=function(e){(0,d.A)(n,e);var t=(0,c.A)(n);function n(){return(0,l.A)(this,n),t.apply(this,arguments)}return(0,a.A)(n,[{key:"clickHandler",value:function(e,t){t&&t.preventDefault(),this.props.clickHandler(e,t)}},{key:"render",value:function(){var e={"slick-arrow":!0,"slick-prev":!0},t=this.clickHandler.bind(this,{message:"previous"});!this.props.infinite&&(0===this.props.currentSlide||this.props.slideCount<=this.props.slidesToShow)&&(e["slick-disabled"]=!0,t=null);var n={key:"0","data-role":"none",className:S()(e),style:{display:"block"},onClick:t},i={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount};return this.props.prevArrow?u.cloneElement(this.props.prevArrow,(0,o.A)((0,o.A)({},n),i)):u.createElement("button",(0,r.A)({key:"0",type:"button"},n)," ","Previous")}}]),n}(u.PureComponent),Q=function(e){(0,d.A)(n,e);var t=(0,c.A)(n);function n(){return(0,l.A)(this,n),t.apply(this,arguments)}return(0,a.A)(n,[{key:"clickHandler",value:function(e,t){t&&t.preventDefault(),this.props.clickHandler(e,t)}},{key:"render",value:function(){var e={"slick-arrow":!0,"slick-next":!0},t=this.clickHandler.bind(this,{message:"next"});E(this.props)||(e["slick-disabled"]=!0,t=null);var n={key:"1","data-role":"none",className:S()(e),style:{display:"block"},onClick:t},i={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount};return this.props.nextArrow?u.cloneElement(this.props.nextArrow,(0,o.A)((0,o.A)({},n),i)):u.createElement("button",(0,r.A)({key:"1",type:"button"},n)," ","Next")}}]),n}(u.PureComponent),V=n(30853),Z=["animating"],$=function(e){(0,d.A)(n,e);var t=(0,c.A)(n);function n(e){var a;(0,l.A)(this,n),a=t.call(this,e),(0,i.A)((0,s.A)(a),"listRefHandler",(function(e){return a.list=e})),(0,i.A)((0,s.A)(a),"trackRefHandler",(function(e){return a.track=e})),(0,i.A)((0,s.A)(a),"adaptHeight",(function(){if(a.props.adaptiveHeight&&a.list){var e=a.list.querySelector('[data-index="'.concat(a.state.currentSlide,'"]'));a.list.style.height=C(e)+"px"}})),(0,i.A)((0,s.A)(a),"componentDidMount",(function(){if(a.props.onInit&&a.props.onInit(),a.props.lazyLoad){var e=k((0,o.A)((0,o.A)({},a.props),a.state));e.length>0&&(a.setState((function(t){return{lazyLoadedList:t.lazyLoadedList.concat(e)}})),a.props.onLazyLoad&&a.props.onLazyLoad(e))}var t=(0,o.A)({listRef:a.list,trackRef:a.track},a.props);a.updateState(t,!0,(function(){a.adaptHeight(),a.props.autoplay&&a.autoPlay("playing")})),"progressive"===a.props.lazyLoad&&(a.lazyLoadTimer=setInterval(a.progressiveLazyLoad,1e3)),a.ro=new V.A((function(){a.state.animating?(a.onWindowResized(!1),a.callbackTimers.push(setTimeout((function(){return a.onWindowResized()}),a.props.speed))):a.onWindowResized()})),a.ro.observe(a.list),document.querySelectorAll&&Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"),(function(e){e.onfocus=a.props.pauseOnFocus?a.onSlideFocus:null,e.onblur=a.props.pauseOnFocus?a.onSlideBlur:null})),window.addEventListener?window.addEventListener("resize",a.onWindowResized):window.attachEvent("onresize",a.onWindowResized)})),(0,i.A)((0,s.A)(a),"componentWillUnmount",(function(){a.animationEndCallback&&clearTimeout(a.animationEndCallback),a.lazyLoadTimer&&clearInterval(a.lazyLoadTimer),a.callbackTimers.length&&(a.callbackTimers.forEach((function(e){return clearTimeout(e)})),a.callbackTimers=[]),window.addEventListener?window.removeEventListener("resize",a.onWindowResized):window.detachEvent("onresize",a.onWindowResized),a.autoplayTimer&&clearInterval(a.autoplayTimer),a.ro.disconnect()})),(0,i.A)((0,s.A)(a),"componentDidUpdate",(function(e){if(a.checkImagesLoad(),a.props.onReInit&&a.props.onReInit(),a.props.lazyLoad){var t=k((0,o.A)((0,o.A)({},a.props),a.state));t.length>0&&(a.setState((function(e){return{lazyLoadedList:e.lazyLoadedList.concat(t)}})),a.props.onLazyLoad&&a.props.onLazyLoad(t))}a.adaptHeight();var n=(0,o.A)((0,o.A)({listRef:a.list,trackRef:a.track},a.props),a.state),i=a.didPropsChange(e);i&&a.updateState(n,i,(function(){a.state.currentSlide>=u.Children.count(a.props.children)&&a.changeSlide({message:"index",index:u.Children.count(a.props.children)-a.props.slidesToShow,currentSlide:a.state.currentSlide}),e.autoplay===a.props.autoplay&&e.autoplaySpeed===a.props.autoplaySpeed||(!e.autoplay&&a.props.autoplay?a.autoPlay("playing"):a.props.autoplay?a.autoPlay("update"):a.pause("paused"))}))})),(0,i.A)((0,s.A)(a),"onWindowResized",(function(e){a.debouncedResize&&a.debouncedResize.cancel(),a.debouncedResize=v(50,(function(){return a.resizeWindow(e)})),a.debouncedResize()})),(0,i.A)((0,s.A)(a),"resizeWindow",(function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(Boolean(a.track&&a.track.node)){var t=(0,o.A)((0,o.A)({listRef:a.list,trackRef:a.track},a.props),a.state);a.updateState(t,e,(function(){a.props.autoplay?a.autoPlay("update"):a.pause("paused")})),a.setState({animating:!1}),clearTimeout(a.animationEndCallback),delete a.animationEndCallback}})),(0,i.A)((0,s.A)(a),"updateState",(function(e,t,n){var i=function(e){var t,n=u.Children.count(e.children),i=e.listRef,r=Math.ceil(L(i)),l=e.trackRef&&e.trackRef.node,a=Math.ceil(L(l));if(e.vertical)t=r;else{var s=e.centerMode&&2*parseInt(e.centerPadding);"string"===typeof e.centerPadding&&"%"===e.centerPadding.slice(-1)&&(s*=r/100),t=Math.ceil((r-s)/e.slidesToShow)}var d=i&&C(i.querySelector('[data-index="0"]')),c=d*e.slidesToShow,p=void 0===e.currentSlide?e.initialSlide:e.currentSlide;e.rtl&&void 0===e.currentSlide&&(p=n-1-e.initialSlide);var f=e.lazyLoadedList||[],h=k((0,o.A)((0,o.A)({},e),{},{currentSlide:p,lazyLoadedList:f})),v={slideCount:n,slideWidth:t,listWidth:r,trackWidth:a,currentSlide:p,slideHeight:d,listHeight:c,lazyLoadedList:f=f.concat(h)};return null===e.autoplaying&&e.autoplay&&(v.autoplaying="playing"),v}(e);e=(0,o.A)((0,o.A)((0,o.A)({},e),i),{},{slideIndex:i.currentSlide});var r=R(e);e=(0,o.A)((0,o.A)({},e),{},{left:r});var l=P(e);(t||u.Children.count(a.props.children)!==u.Children.count(e.children))&&(i.trackStyle=l),a.setState(i,n)})),(0,i.A)((0,s.A)(a),"ssrInit",(function(){if(a.props.variableWidth){var e=0,t=0,n=[],i=I((0,o.A)((0,o.A)((0,o.A)({},a.props),a.state),{},{slideCount:a.props.children.length})),r=N((0,o.A)((0,o.A)((0,o.A)({},a.props),a.state),{},{slideCount:a.props.children.length}));a.props.children.forEach((function(t){n.push(t.props.style.width),e+=t.props.style.width}));for(var l=0;l<i;l++)t+=n[n.length-1-l],e+=n[n.length-1-l];for(var s=0;s<r;s++)e+=n[s];for(var d=0;d<a.state.currentSlide;d++)t+=n[d];var c={width:e+"px",left:-t+"px"};if(a.props.centerMode){var p="".concat(n[a.state.currentSlide],"px");c.left="calc(".concat(c.left," + (100% - ").concat(p,") / 2 ) ")}return{trackStyle:c}}var f=u.Children.count(a.props.children),h=(0,o.A)((0,o.A)((0,o.A)({},a.props),a.state),{},{slideCount:f}),v=I(h)+N(h)+f,g=100/a.props.slidesToShow*v,S=100/v,A=-S*(I(h)+a.state.currentSlide)*g/100;return a.props.centerMode&&(A+=(100-S*g/100)/2),{slideWidth:S+"%",trackStyle:{width:g+"%",left:A+"%"}}})),(0,i.A)((0,s.A)(a),"checkImagesLoad",(function(){var e=a.list&&a.list.querySelectorAll&&a.list.querySelectorAll(".slick-slide img")||[],t=e.length,n=0;Array.prototype.forEach.call(e,(function(e){var i=function(){return++n&&n>=t&&a.onWindowResized()};if(e.onclick){var r=e.onclick;e.onclick=function(t){r(t),e.parentNode.focus()}}else e.onclick=function(){return e.parentNode.focus()};e.onload||(a.props.lazyLoad?e.onload=function(){a.adaptHeight(),a.callbackTimers.push(setTimeout(a.onWindowResized,a.props.speed))}:(e.onload=i,e.onerror=function(){i(),a.props.onLazyLoadError&&a.props.onLazyLoadError()}))}))})),(0,i.A)((0,s.A)(a),"progressiveLazyLoad",(function(){for(var e=[],t=(0,o.A)((0,o.A)({},a.props),a.state),n=a.state.currentSlide;n<a.state.slideCount+N(t);n++)if(a.state.lazyLoadedList.indexOf(n)<0){e.push(n);break}for(var i=a.state.currentSlide-1;i>=-I(t);i--)if(a.state.lazyLoadedList.indexOf(i)<0){e.push(i);break}e.length>0?(a.setState((function(t){return{lazyLoadedList:t.lazyLoadedList.concat(e)}})),a.props.onLazyLoad&&a.props.onLazyLoad(e)):a.lazyLoadTimer&&(clearInterval(a.lazyLoadTimer),delete a.lazyLoadTimer)})),(0,i.A)((0,s.A)(a),"slideHandler",(function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=a.props,i=n.asNavFor,r=n.beforeChange,l=n.onLazyLoad,s=n.speed,d=n.afterChange,c=a.state.currentSlide,u=function(e){var t=e.waitForAnimate,n=e.animating,i=e.fade,r=e.infinite,l=e.index,a=e.slideCount,s=e.lazyLoad,d=e.currentSlide,c=e.centerMode,u=e.slidesToScroll,p=e.slidesToShow,f=e.useCSS,h=e.lazyLoadedList;if(t&&n)return{};var v,g,S,y=l,m={},w={},T=r?l:A(l,0,a-1);if(i){if(!r&&(l<0||l>=a))return{};l<0?y=l+a:l>=a&&(y=l-a),s&&h.indexOf(y)<0&&(h=h.concat(y)),m={animating:!0,currentSlide:y,lazyLoadedList:h,targetSlide:y},w={animating:!1,targetSlide:y}}else v=y,y<0?(v=y+a,r?a%u!==0&&(v=a-a%u):v=0):!E(e)&&y>d?y=v=d:c&&y>=a?(y=r?a:a-1,v=r?0:a-1):y>=a&&(v=y-a,r?a%u!==0&&(v=0):v=a-p),!r&&y+p>=a&&(v=a-p),g=R((0,o.A)((0,o.A)({},e),{},{slideIndex:y})),S=R((0,o.A)((0,o.A)({},e),{},{slideIndex:v})),r||(g===S&&(y=v),g=S),s&&(h=h.concat(k((0,o.A)((0,o.A)({},e),{},{currentSlide:y})))),f?(m={animating:!0,currentSlide:v,trackStyle:O((0,o.A)((0,o.A)({},e),{},{left:g})),lazyLoadedList:h,targetSlide:T},w={animating:!1,currentSlide:v,trackStyle:P((0,o.A)((0,o.A)({},e),{},{left:S})),swipeLeft:null,targetSlide:T}):m={currentSlide:v,trackStyle:P((0,o.A)((0,o.A)({},e),{},{left:S})),lazyLoadedList:h,targetSlide:T};return{state:m,nextState:w}}((0,o.A)((0,o.A)((0,o.A)({index:e},a.props),a.state),{},{trackRef:a.track,useCSS:a.props.useCSS&&!t})),p=u.state,h=u.nextState;if(p){r&&r(c,p.currentSlide);var v=p.lazyLoadedList.filter((function(e){return a.state.lazyLoadedList.indexOf(e)<0}));l&&v.length>0&&l(v),!a.props.waitForAnimate&&a.animationEndCallback&&(clearTimeout(a.animationEndCallback),d&&d(c),delete a.animationEndCallback),a.setState(p,(function(){i&&a.asNavForIndex!==e&&(a.asNavForIndex=e,i.innerSlider.slideHandler(e)),h&&(a.animationEndCallback=setTimeout((function(){var e=h.animating,t=(0,f.A)(h,Z);a.setState(t,(function(){a.callbackTimers.push(setTimeout((function(){return a.setState({animating:e})}),10)),d&&d(p.currentSlide),delete a.animationEndCallback}))}),s))}))}})),(0,i.A)((0,s.A)(a),"changeSlide",(function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=function(e,t){var n,i,r,l,a=e.slidesToScroll,s=e.slidesToShow,d=e.slideCount,c=e.currentSlide,u=e.targetSlide,p=e.lazyLoad,f=e.infinite;if(n=d%a!==0?0:(d-c)%a,"previous"===t.message)l=c-(r=0===n?a:s-n),p&&!f&&(l=-1===(i=c-r)?d-1:i),f||(l=u-a);else if("next"===t.message)l=c+(r=0===n?a:n),p&&!f&&(l=(c+a)%d+n),f||(l=u+a);else if("dots"===t.message)l=t.index*t.slidesToScroll;else if("children"===t.message){if(l=t.index,f){var h=X((0,o.A)((0,o.A)({},e),{},{targetSlide:l}));l>t.currentSlide&&"left"===h?l-=d:l<t.currentSlide&&"right"===h&&(l+=d)}}else"index"===t.message&&(l=Number(t.index));return l}((0,o.A)((0,o.A)({},a.props),a.state),e);if((0===n||n)&&(!0===t?a.slideHandler(n,t):a.slideHandler(n),a.props.autoplay&&a.autoPlay("update"),a.props.focusOnSelect)){var i=a.list.querySelectorAll(".slick-current");i[0]&&i[0].focus()}})),(0,i.A)((0,s.A)(a),"clickHandler",(function(e){!1===a.clickable&&(e.stopPropagation(),e.preventDefault()),a.clickable=!0})),(0,i.A)((0,s.A)(a),"keyHandler",(function(e){var t=function(e,t,n){return e.target.tagName.match("TEXTAREA|INPUT|SELECT")||!t?"":37===e.keyCode?n?"next":"previous":39===e.keyCode?n?"previous":"next":""}(e,a.props.accessibility,a.props.rtl);""!==t&&a.changeSlide({message:t})})),(0,i.A)((0,s.A)(a),"selectHandler",(function(e){a.changeSlide(e)})),(0,i.A)((0,s.A)(a),"disableBodyScroll",(function(){window.ontouchmove=function(e){(e=e||window.event).preventDefault&&e.preventDefault(),e.returnValue=!1}})),(0,i.A)((0,s.A)(a),"enableBodyScroll",(function(){window.ontouchmove=null})),(0,i.A)((0,s.A)(a),"swipeStart",(function(e){a.props.verticalSwiping&&a.disableBodyScroll();var t=function(e,t,n){return"IMG"===e.target.tagName&&y(e),!t||!n&&-1!==e.type.indexOf("mouse")?"":{dragging:!0,touchObject:{startX:e.touches?e.touches[0].pageX:e.clientX,startY:e.touches?e.touches[0].pageY:e.clientY,curX:e.touches?e.touches[0].pageX:e.clientX,curY:e.touches?e.touches[0].pageY:e.clientY}}}(e,a.props.swipe,a.props.draggable);""!==t&&a.setState(t)})),(0,i.A)((0,s.A)(a),"swipeMove",(function(e){var t=function(e,t){var n=t.scrolling,i=t.animating,r=t.vertical,l=t.swipeToSlide,a=t.verticalSwiping,s=t.rtl,d=t.currentSlide,c=t.edgeFriction,u=t.edgeDragged,p=t.onEdge,f=t.swiped,h=t.swiping,v=t.slideCount,g=t.slidesToScroll,S=t.infinite,A=t.touchObject,k=t.swipeEvent,m=t.listHeight,w=t.listWidth;if(!n){if(i)return y(e);r&&l&&a&&y(e);var T,b={},L=R(t);A.curX=e.touches?e.touches[0].pageX:e.clientX,A.curY=e.touches?e.touches[0].pageY:e.clientY,A.swipeLength=Math.round(Math.sqrt(Math.pow(A.curX-A.startX,2)));var C=Math.round(Math.sqrt(Math.pow(A.curY-A.startY,2)));if(!a&&!h&&C>10)return{scrolling:!0};a&&(A.swipeLength=C);var M=(s?-1:1)*(A.curX>A.startX?1:-1);a&&(M=A.curY>A.startY?1:-1);var z=Math.ceil(v/g),H=x(t.touchObject,a),W=A.swipeLength;return S||(0===d&&("right"===H||"down"===H)||d+1>=z&&("left"===H||"up"===H)||!E(t)&&("left"===H||"up"===H))&&(W=A.swipeLength*c,!1===u&&p&&(p(H),b.edgeDragged=!0)),!f&&k&&(k(H),b.swiped=!0),T=r?L+W*(m/w)*M:s?L-W*M:L+W*M,a&&(T=L+W*M),b=(0,o.A)((0,o.A)({},b),{},{touchObject:A,swipeLeft:T,trackStyle:P((0,o.A)((0,o.A)({},t),{},{left:T}))}),Math.abs(A.curX-A.startX)<.8*Math.abs(A.curY-A.startY)||A.swipeLength>10&&(b.swiping=!0,y(e)),b}}(e,(0,o.A)((0,o.A)((0,o.A)({},a.props),a.state),{},{trackRef:a.track,listRef:a.list,slideIndex:a.state.currentSlide}));t&&(t.swiping&&(a.clickable=!1),a.setState(t))})),(0,i.A)((0,s.A)(a),"swipeEnd",(function(e){var t=function(e,t){var n=t.dragging,i=t.swipe,r=t.touchObject,l=t.listWidth,a=t.touchThreshold,s=t.verticalSwiping,d=t.listHeight,c=t.swipeToSlide,u=t.scrolling,p=t.onSwipe,f=t.targetSlide,h=t.currentSlide,v=t.infinite;if(!n)return i&&y(e),{};var g=s?d/a:l/a,S=x(r,s),A={dragging:!1,edgeDragged:!1,scrolling:!1,swiping:!1,swiped:!1,swipeLeft:null,touchObject:{}};if(u)return A;if(!r.swipeLength)return A;if(r.swipeLength>g){var k,m;y(e),p&&p(S);var w=v?h:f;switch(S){case"left":case"up":m=w+H(t),k=c?z(t,m):m,A.currentDirection=0;break;case"right":case"down":m=w-H(t),k=c?z(t,m):m,A.currentDirection=1;break;default:k=w}A.triggerSlideHandler=k}else{var T=R(t);A.trackStyle=O((0,o.A)((0,o.A)({},t),{},{left:T}))}return A}(e,(0,o.A)((0,o.A)((0,o.A)({},a.props),a.state),{},{trackRef:a.track,listRef:a.list,slideIndex:a.state.currentSlide}));if(t){var n=t.triggerSlideHandler;delete t.triggerSlideHandler,a.setState(t),void 0!==n&&(a.slideHandler(n),a.props.verticalSwiping&&a.enableBodyScroll())}})),(0,i.A)((0,s.A)(a),"touchEnd",(function(e){a.swipeEnd(e),a.clickable=!0})),(0,i.A)((0,s.A)(a),"slickPrev",(function(){a.callbackTimers.push(setTimeout((function(){return a.changeSlide({message:"previous"})}),0))})),(0,i.A)((0,s.A)(a),"slickNext",(function(){a.callbackTimers.push(setTimeout((function(){return a.changeSlide({message:"next"})}),0))})),(0,i.A)((0,s.A)(a),"slickGoTo",(function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(e=Number(e),isNaN(e))return"";a.callbackTimers.push(setTimeout((function(){return a.changeSlide({message:"index",index:e,currentSlide:a.state.currentSlide},t)}),0))})),(0,i.A)((0,s.A)(a),"play",(function(){var e;if(a.props.rtl)e=a.state.currentSlide-a.props.slidesToScroll;else{if(!E((0,o.A)((0,o.A)({},a.props),a.state)))return!1;e=a.state.currentSlide+a.props.slidesToScroll}a.slideHandler(e)})),(0,i.A)((0,s.A)(a),"autoPlay",(function(e){a.autoplayTimer&&clearInterval(a.autoplayTimer);var t=a.state.autoplaying;if("update"===e){if("hovered"===t||"focused"===t||"paused"===t)return}else if("leave"===e){if("paused"===t||"focused"===t)return}else if("blur"===e&&("paused"===t||"hovered"===t))return;a.autoplayTimer=setInterval(a.play,a.props.autoplaySpeed+50),a.setState({autoplaying:"playing"})})),(0,i.A)((0,s.A)(a),"pause",(function(e){a.autoplayTimer&&(clearInterval(a.autoplayTimer),a.autoplayTimer=null);var t=a.state.autoplaying;"paused"===e?a.setState({autoplaying:"paused"}):"focused"===e?"hovered"!==t&&"playing"!==t||a.setState({autoplaying:"focused"}):"playing"===t&&a.setState({autoplaying:"hovered"})})),(0,i.A)((0,s.A)(a),"onDotsOver",(function(){return a.props.autoplay&&a.pause("hovered")})),(0,i.A)((0,s.A)(a),"onDotsLeave",(function(){return a.props.autoplay&&"hovered"===a.state.autoplaying&&a.autoPlay("leave")})),(0,i.A)((0,s.A)(a),"onTrackOver",(function(){return a.props.autoplay&&a.pause("hovered")})),(0,i.A)((0,s.A)(a),"onTrackLeave",(function(){return a.props.autoplay&&"hovered"===a.state.autoplaying&&a.autoPlay("leave")})),(0,i.A)((0,s.A)(a),"onSlideFocus",(function(){return a.props.autoplay&&a.pause("focused")})),(0,i.A)((0,s.A)(a),"onSlideBlur",(function(){return a.props.autoplay&&"focused"===a.state.autoplaying&&a.autoPlay("blur")})),(0,i.A)((0,s.A)(a),"render",(function(){var e,t,n,i=S()("slick-slider",a.props.className,{"slick-vertical":a.props.vertical,"slick-initialized":!0}),l=(0,o.A)((0,o.A)({},a.props),a.state),s=M(l,["fade","cssEase","speed","infinite","centerMode","focusOnSelect","currentSlide","lazyLoad","lazyLoadedList","rtl","slideWidth","slideHeight","listHeight","vertical","slidesToShow","slidesToScroll","slideCount","trackStyle","variableWidth","unslick","centerPadding","targetSlide","useCSS"]),d=a.props.pauseOnHover;if(s=(0,o.A)((0,o.A)({},s),{},{onMouseEnter:d?a.onTrackOver:null,onMouseLeave:d?a.onTrackLeave:null,onMouseOver:d?a.onTrackOver:null,focusOnSelect:a.props.focusOnSelect&&a.clickable?a.selectHandler:null}),!0===a.props.dots&&a.state.slideCount>=a.props.slidesToShow){var c=M(l,["dotsClass","slideCount","slidesToShow","currentSlide","slidesToScroll","clickHandler","children","customPaging","infinite","appendDots"]),p=a.props.pauseOnDotsHover;c=(0,o.A)((0,o.A)({},c),{},{clickHandler:a.changeSlide,onMouseEnter:p?a.onDotsLeave:null,onMouseOver:p?a.onDotsOver:null,onMouseLeave:p?a.onDotsLeave:null}),e=u.createElement(_,c)}var f=M(l,["infinite","centerMode","currentSlide","slideCount","slidesToShow","prevArrow","nextArrow"]);f.clickHandler=a.changeSlide,a.props.arrows&&(t=u.createElement(K,f),n=u.createElement(Q,f));var h=null;a.props.vertical&&(h={height:a.state.listHeight});var v=null;!1===a.props.vertical?!0===a.props.centerMode&&(v={padding:"0px "+a.props.centerPadding}):!0===a.props.centerMode&&(v={padding:a.props.centerPadding+" 0px"});var g=(0,o.A)((0,o.A)({},h),v),A=a.props.touchMove,y={className:"slick-list",style:g,onClick:a.clickHandler,onMouseDown:A?a.swipeStart:null,onMouseMove:a.state.dragging&&A?a.swipeMove:null,onMouseUp:A?a.swipeEnd:null,onMouseLeave:a.state.dragging&&A?a.swipeEnd:null,onTouchStart:A?a.swipeStart:null,onTouchMove:a.state.dragging&&A?a.swipeMove:null,onTouchEnd:A?a.touchEnd:null,onTouchCancel:a.state.dragging&&A?a.swipeEnd:null,onKeyDown:a.props.accessibility?a.keyHandler:null},k={className:i,dir:"ltr",style:a.props.style};return a.props.unslick&&(y={className:"slick-list"},k={className:i,style:a.props.style}),u.createElement("div",k,a.props.unslick?"":t,u.createElement("div",(0,r.A)({ref:a.listRefHandler},y),u.createElement(U,(0,r.A)({ref:a.trackRefHandler},s),a.props.children)),a.props.unslick?"":n,a.props.unslick?"":e)})),a.list=null,a.track=null,a.state=(0,o.A)((0,o.A)({},h),{},{currentSlide:a.props.initialSlide,slideCount:u.Children.count(a.props.children)}),a.callbackTimers=[],a.clickable=!0,a.debouncedResize=null;var d=a.ssrInit();return a.state=(0,o.A)((0,o.A)({},a.state),d),a}return(0,a.A)(n,[{key:"didPropsChange",value:function(e){for(var t=!1,n=0,i=Object.keys(this.props);n<i.length;n++){var r=i[n];if(!e.hasOwnProperty(r)){t=!0;break}if("object"!==(0,p.A)(e[r])&&"function"!==typeof e[r]&&e[r]!==this.props[r]){t=!0;break}}return t||u.Children.count(this.props.children)!==u.Children.count(e.children)}}]),n}(u.Component),J=n(83191),ee=n.n(J);const te={accessibility:!0,adaptiveHeight:!1,afterChange:null,appendDots:function(e){return u.createElement("ul",{style:{display:"block"}},e)},arrows:!0,autoplay:!1,autoplaySpeed:3e3,beforeChange:null,centerMode:!1,centerPadding:"50px",className:"",cssEase:"ease",customPaging:function(e){return u.createElement("button",null,e+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:null,nextArrow:null,onEdge:null,onInit:null,onLazyLoadError:null,onReInit:null,pauseOnDotsHover:!1,pauseOnFocus:!1,pauseOnHover:!0,prevArrow:null,responsive:null,rows:1,rtl:!1,slide:"div",slidesPerRow:1,slidesToScroll:1,slidesToShow:1,speed:500,swipe:!0,swipeEvent:null,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,waitForAnimate:!0};const ne=function(e){(0,d.A)(n,e);var t=(0,c.A)(n);function n(e){var r;return(0,l.A)(this,n),r=t.call(this,e),(0,i.A)((0,s.A)(r),"innerSliderRefHandler",(function(e){return r.innerSlider=e})),(0,i.A)((0,s.A)(r),"slickPrev",(function(){return r.innerSlider.slickPrev()})),(0,i.A)((0,s.A)(r),"slickNext",(function(){return r.innerSlider.slickNext()})),(0,i.A)((0,s.A)(r),"slickGoTo",(function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return r.innerSlider.slickGoTo(e,t)})),(0,i.A)((0,s.A)(r),"slickPause",(function(){return r.innerSlider.pause("paused")})),(0,i.A)((0,s.A)(r),"slickPlay",(function(){return r.innerSlider.autoPlay("play")})),r.state={breakpoint:null},r._responsiveMediaHandlers=[],r}return(0,a.A)(n,[{key:"media",value:function(e,t){var n=window.matchMedia(e),i=function(e){e.matches&&t()};n.addListener(i),i(n),this._responsiveMediaHandlers.push({mql:n,query:e,listener:i})}},{key:"componentDidMount",value:function(){var e=this;if(this.props.responsive){var t=this.props.responsive.map((function(e){return e.breakpoint}));t.sort((function(e,t){return e-t})),t.forEach((function(n,i){var r;r=0===i?ee()({minWidth:0,maxWidth:n}):ee()({minWidth:t[i-1]+1,maxWidth:n}),q()&&e.media(r,(function(){e.setState({breakpoint:n})}))}));var n=ee()({minWidth:t.slice(-1)[0]});q()&&this.media(n,(function(){e.setState({breakpoint:null})}))}}},{key:"componentWillUnmount",value:function(){this._responsiveMediaHandlers.forEach((function(e){e.mql.removeListener(e.listener)}))}},{key:"render",value:function(){var e,t,n=this;(e=this.state.breakpoint?"unslick"===(t=this.props.responsive.filter((function(e){return e.breakpoint===n.state.breakpoint})))[0].settings?"unslick":(0,o.A)((0,o.A)((0,o.A)({},te),this.props),t[0].settings):(0,o.A)((0,o.A)({},te),this.props)).centerMode&&(e.slidesToScroll,e.slidesToScroll=1),e.fade&&(e.slidesToShow,e.slidesToScroll,e.slidesToShow=1,e.slidesToScroll=1);var i=u.Children.toArray(this.props.children);i=i.filter((function(e){return"string"===typeof e?!!e.trim():!!e})),e.variableWidth&&(e.rows>1||e.slidesPerRow>1)&&(console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"),e.variableWidth=!1);for(var l=[],a=null,s=0;s<i.length;s+=e.rows*e.slidesPerRow){for(var d=[],c=s;c<s+e.rows*e.slidesPerRow;c+=e.slidesPerRow){for(var p=[],f=c;f<c+e.slidesPerRow&&(e.variableWidth&&i[f].props.style&&(a=i[f].props.style.width),!(f>=i.length));f+=1)p.push(u.cloneElement(i[f],{key:100*s+10*c+f,tabIndex:-1,style:{width:"".concat(100/e.slidesPerRow,"%"),display:"inline-block"}}));d.push(u.createElement("div",{key:10*s+c},p))}e.variableWidth?l.push(u.createElement("div",{key:s,style:{width:a}},d)):l.push(u.createElement("div",{key:s},d))}if("unslick"===e){var h="regular slider "+(this.props.className||"");return u.createElement("div",{className:h},i)}return l.length<=e.slidesToShow&&(e.unslick=!0),u.createElement($,(0,r.A)({style:this.props.style,ref:this.innerSliderRefHandler},e),l)}}]),n}(u.Component);var ie=n(5741),re=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n};const oe=u.forwardRef((function(e,t){var n=e.dots,o=void 0===n||n,l=e.arrows,a=void 0!==l&&l,s=e.draggable,d=void 0!==s&&s,c=e.dotPosition,p=void 0===c?"bottom":c,f=e.vertical,h=void 0===f?"left"===p||"right"===p:f,v=re(e,["dots","arrows","draggable","dotPosition","vertical"]),g=u.useContext(ie.QO),A=g.getPrefixCls,y=g.direction,k=u.useRef(),m=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];k.current.slickGoTo(e,t)};u.useImperativeHandle(t,(function(){return{goTo:m,autoPlay:k.current.innerSlider.autoPlay,innerSlider:k.current.innerSlider,prev:k.current.slickPrev,next:k.current.slickNext}}),[k.current]);var w=u.useRef(u.Children.count(v.children));u.useEffect((function(){w.current!==u.Children.count(v.children)&&(m(v.initialSlide||0,!1),w.current=u.Children.count(v.children))}),[v.children]);var T=(0,r.A)({vertical:h},v);"fade"===T.effect&&(T.fade=!0);var b=A("carousel",T.prefixCls),L="slick-dots",C=!!o,x=S()(L,"".concat(L,"-").concat(p),"boolean"!==typeof o&&(null===o||void 0===o?void 0:o.className)),E=S()(b,(0,i.A)((0,i.A)({},"".concat(b,"-rtl"),"rtl"===y),"".concat(b,"-vertical"),"left"===p||"right"===p));return u.createElement("div",{className:E},u.createElement(ne,(0,r.A)({ref:k},T,{dots:C,dotsClass:x,arrows:a,draggable:d})))}))},83191:(e,t,n)=>{var i=n(89794),r=function(e){var t="",n=Object.keys(e);return n.forEach((function(r,o){var l=e[r];(function(e){return/[height|width]$/.test(e)})(r=i(r))&&"number"===typeof l&&(l+="px"),t+=!0===l?r:!1===l?"not "+r:"("+r+": "+l+")",o<n.length-1&&(t+=" and ")})),t};e.exports=function(e){var t="";return"string"===typeof e?e:e instanceof Array?(e.forEach((function(n,i){t+=r(n),i<e.length-1&&(t+=", ")})),t):r(e)}},89794:e=>{e.exports=function(e){return e.replace(/[A-Z]/g,(function(e){return"-"+e.toLowerCase()})).toLowerCase()}}}]);