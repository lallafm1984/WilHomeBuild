(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[655],{7179:(e,t,r)=>{Promise.resolve().then(r.bind(r,873))},873:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d});var n=r(7437),i=r(2265),s=r(6648),o=Object.defineProperty,l=new Map,a=new WeakMap,c=0,u=void 0;function d(){let[e,t]=(0,i.useState)(0),{ref:r,inView:o}=function(){var e;let{threshold:t,delay:r,trackVisibility:n,rootMargin:s,root:o,triggerOnce:d,skip:h,initialInView:g,fallbackInView:v,onChange:f}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[p,y]=i.useState(null),b=i.useRef(),[m,w]=i.useState({inView:!!g,entry:void 0});b.current=f,i.useEffect(()=>{let e;if(!h&&p)return e=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:u;if(void 0===window.IntersectionObserver&&void 0!==n){let i=e.getBoundingClientRect();return t(n,{isIntersecting:n,target:e,intersectionRatio:"number"==typeof r.threshold?r.threshold:0,time:0,boundingClientRect:i,intersectionRect:i,rootBounds:i}),()=>{}}let{id:i,observer:s,elements:o}=function(e){let t=Object.keys(e).sort().filter(t=>void 0!==e[t]).map(t=>{var r;return"".concat(t,"_").concat("root"===t?(r=e.root)?(a.has(r)||(c+=1,a.set(r,c.toString())),a.get(r)):"0":e[t])}).toString(),r=l.get(t);if(!r){let n;let i=new Map,s=new IntersectionObserver(t=>{t.forEach(t=>{var r;let s=t.isIntersecting&&n.some(e=>t.intersectionRatio>=e);e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=s),null==(r=i.get(t.target))||r.forEach(e=>{e(s,t)})})},e);n=s.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:t,observer:s,elements:i},l.set(t,r)}return r}(r),d=o.get(e)||[];return o.has(e)||o.set(e,d),d.push(t),s.observe(e),function(){d.splice(d.indexOf(t),1),0===d.length&&(o.delete(e),s.unobserve(e)),0===o.size&&(s.disconnect(),l.delete(i))}}(p,(t,r)=>{w({inView:t,entry:r}),b.current&&b.current(t,r),r.isIntersecting&&d&&e&&(e(),e=void 0)},{root:o,rootMargin:s,threshold:t,trackVisibility:n,delay:r},v),()=>{e&&e()}},[Array.isArray(t)?t.toString():t,p,o,s,d,h,n,v,r]);let I=null==(e=m.entry)?void 0:e.target,j=i.useRef();p||!I||d||h||j.current===I||(j.current=I,w({inView:!!g,entry:void 0}));let O=[y,m.inView,m.entry];return O.ref=O[0],O.inView=O[1],O.entry=O[2],O}({threshold:.1,triggerOnce:!0}),d=["/Images/Sample_5.png","/Images/mImg1.jpg"];return(0,i.useEffect)(()=>{let e=setInterval(()=>{t(e=>(e+1)%d.length)},5e3);return()=>clearInterval(e)},[d.length]),(0,n.jsx)("main",{className:"pt-16",children:(0,n.jsx)("section",{className:"relative h-screen",children:d.map((t,r)=>(0,n.jsx)("div",{className:"absolute inset-0 transition-opacity duration-1000 ".concat(e===r?"opacity-100":"opacity-0"),children:(0,n.jsx)(s.default,{src:t,alt:"Hero slide ".concat(r+1),layout:"fill",objectFit:"cover",priority:0===r})},r))})})}i.Component}},e=>{var t=t=>e(e.s=t);e.O(0,[648,130,215,744],()=>t(7179)),_N_E=e.O()}]);