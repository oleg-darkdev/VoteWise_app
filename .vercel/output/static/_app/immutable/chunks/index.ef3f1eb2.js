function $(){}const J=t=>t;function _t(t,e){for(const n in e)t[n]=e[n];return t}function K(t){return t()}function G(){return Object.create(null)}function v(t){t.forEach(K)}function T(t){return typeof t=="function"}function zt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let C;function Bt(t,e){return C||(C=document.createElement("a")),C.href=e,t===C.href}function dt(t){return Object.keys(t).length===0}function ht(t,...e){if(t==null)return $;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Ft(t,e,n){t.$$.on_destroy.push(ht(e,n))}function Ht(t,e,n,i){if(t){const r=Q(t,e,n,i);return t[0](r)}}function Q(t,e,n,i){return t[1]&&i?_t(n.ctx.slice(),t[1](i(e))):n.ctx}function Lt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const c=[],s=Math.max(e.dirty.length,r.length);for(let u=0;u<s;u+=1)c[u]=e.dirty[u]|r[u];return c}return e.dirty|r}return e.dirty}function Wt(t,e,n,i,r,c){if(r){const s=Q(e,n,i,c);t.p(s,r)}}function Gt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function It(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Jt(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function Kt(t){const e=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}const U=typeof window<"u";let V=U?()=>window.performance.now():()=>Date.now(),H=U?t=>requestAnimationFrame(t):$;const w=new Set;function X(t){w.forEach(e=>{e.c(t)||(w.delete(e),e.f())}),w.size!==0&&H(X)}function Y(t){let e;return w.size===0&&H(X),{promise:new Promise(n=>{w.add(e={c:t,f:n})}),abort(){w.delete(e)}}}let P=!1;function mt(){P=!0}function pt(){P=!1}function yt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function gt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let l=0;l<e.length;l++){const a=e[l];a.claim_order!==void 0&&o.push(a)}e=o}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let o=0;o<e.length;o++){const l=e[o].claim_order,a=(r>0&&e[n[r]].claim_order<=l?r+1:yt(1,r,_=>e[n[_]].claim_order,l))-1;i[o]=n[a]+1;const f=a+1;n[f]=o,r=Math.max(f,r)}const c=[],s=[];let u=e.length-1;for(let o=n[r]+1;o!=0;o=i[o-1]){for(c.push(e[o-1]);u>=o;u--)s.push(e[u]);u--}for(;u>=0;u--)s.push(e[u]);c.reverse(),s.sort((o,l)=>o.claim_order-l.claim_order);for(let o=0,l=0;o<s.length;o++){for(;l<c.length&&s[o].claim_order>=c[l].claim_order;)l++;const a=l<c.length?c[l]:null;t.insertBefore(s[o],a)}}function $t(t,e){t.appendChild(e)}function Z(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function xt(t){const e=et("style");return bt(Z(t),e),e.sheet}function bt(t,e){return $t(t.head||t,e),e.sheet}function wt(t,e){if(P){for(gt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Qt(t,e,n){P&&!n?wt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function tt(t){t.parentNode&&t.parentNode.removeChild(t)}function Ut(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function et(t){return document.createElement(t)}function Et(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function L(t){return document.createTextNode(t)}function Vt(){return L(" ")}function Xt(){return L("")}function Yt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function vt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Zt(t,e){for(const n in e)vt(t,n,e[n])}function kt(t){return Array.from(t.childNodes)}function Nt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function nt(t,e,n,i,r=!1){Nt(t);const c=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const u=t[s];if(e(u)){const o=n(u);return o===void 0?t.splice(s,1):t[s]=o,r||(t.claim_info.last_index=s),u}}for(let s=t.claim_info.last_index-1;s>=0;s--){const u=t[s];if(e(u)){const o=n(u);return o===void 0?t.splice(s,1):t[s]=o,r?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,u}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function it(t,e,n,i){return nt(t,r=>r.nodeName===e,r=>{const c=[];for(let s=0;s<r.attributes.length;s++){const u=r.attributes[s];n[u.name]||c.push(u.name)}c.forEach(s=>r.removeAttribute(s))},()=>i(e))}function te(t,e,n){return it(t,e,n,et)}function ee(t,e,n){return it(t,e,n,Et)}function At(t,e){return nt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>L(e),!0)}function ne(t){return At(t," ")}function ie(t,e){e=""+e,t.data!==e&&(t.data=e)}function re(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function St(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function se(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const c=r.textContent.trim();c===`HEAD_${t}_END`?(i-=1,n.push(r)):c===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function oe(t,e){return new t(e)}const D=new Map;let M=0;function Ct(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function jt(t,e){const n={stylesheet:xt(e),rules:{}};return D.set(t,n),n}function rt(t,e,n,i,r,c,s,u=0){const o=16.666/i;let l=`{
`;for(let m=0;m<=1;m+=o){const p=e+(n-e)*c(m);l+=m*100+`%{${s(p,1-p)}}
`}const a=l+`100% {${s(n,1-n)}}
}`,f=`__svelte_${Ct(a)}_${u}`,_=Z(t),{stylesheet:d,rules:h}=D.get(_)||jt(_,t);h[f]||(h[f]=!0,d.insertRule(`@keyframes ${f} ${a}`,d.cssRules.length));const y=t.style.animation||"";return t.style.animation=`${y?`${y}, `:""}${f} ${i}ms linear ${r}ms 1 both`,M+=1,f}function z(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?c=>c.indexOf(e)<0:c=>c.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),M-=r,M||Dt())}function Dt(){H(()=>{M||(D.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&tt(e)}),D.clear())})}let A;function N(t){A=t}function st(){if(!A)throw new Error("Function called outside component initialization");return A}function ce(t){st().$$.on_mount.push(t)}function ue(t){st().$$.after_update.push(t)}const b=[],I=[];let E=[];const B=[],ot=Promise.resolve();let F=!1;function ct(){F||(F=!0,ot.then(ut))}function le(){return ct(),ot}function S(t){E.push(t)}function fe(t){B.push(t)}const q=new Set;let x=0;function ut(){if(x!==0)return;const t=A;do{try{for(;x<b.length;){const e=b[x];x++,N(e),Mt(e.$$)}}catch(e){throw b.length=0,x=0,e}for(N(null),b.length=0,x=0;I.length;)I.pop()();for(let e=0;e<E.length;e+=1){const n=E[e];q.has(n)||(q.add(n),n())}E.length=0}while(b.length);for(;B.length;)B.pop()();F=!1,q.clear(),N(t)}function Mt(t){if(t.fragment!==null){t.update(),v(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(S)}}function Ot(t){const e=[],n=[];E.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),E=e}let k;function lt(){return k||(k=Promise.resolve(),k.then(()=>{k=null})),k}function O(t,e,n){t.dispatchEvent(St(`${e?"intro":"outro"}${n}`))}const j=new Set;let g;function ae(){g={r:0,c:[],p:g}}function _e(){g.r||v(g.c),g=g.p}function Tt(t,e){t&&t.i&&(j.delete(t),t.i(e))}function de(t,e,n,i){if(t&&t.o){if(j.has(t))return;j.add(t),g.c.push(()=>{j.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const ft={duration:0};function he(t,e,n){const i={direction:"in"};let r=e(t,n,i),c=!1,s,u,o=0;function l(){s&&z(t,s)}function a(){const{delay:_=0,duration:d=300,easing:h=J,tick:y=$,css:m}=r||ft;m&&(s=rt(t,0,1,d,_,h,m,o++)),y(0,1);const p=V()+_,at=p+d;u&&u.abort(),c=!0,S(()=>O(t,!0,"start")),u=Y(R=>{if(c){if(R>=at)return y(1,0),O(t,!0,"end"),l(),c=!1;if(R>=p){const W=h((R-p)/d);y(W,1-W)}}return c})}let f=!1;return{start(){f||(f=!0,z(t),T(r)?(r=r(i),lt().then(a)):a())},invalidate(){f=!1},end(){c&&(l(),c=!1)}}}function me(t,e,n){const i={direction:"out"};let r=e(t,n,i),c=!0,s;const u=g;u.r+=1;function o(){const{delay:l=0,duration:a=300,easing:f=J,tick:_=$,css:d}=r||ft;d&&(s=rt(t,1,0,a,l,f,d));const h=V()+l,y=h+a;S(()=>O(t,!1,"start")),Y(m=>{if(c){if(m>=y)return _(0,1),O(t,!1,"end"),--u.r||v(u.c),!1;if(m>=h){const p=f((m-h)/a);_(1-p,p)}}return c})}return T(r)?lt().then(()=>{r=r(i),o()}):o(),{end(l){l&&r.tick&&r.tick(1,0),c&&(s&&z(t,s),c=!1)}}}function pe(t,e){const n={},i={},r={$$scope:1};let c=t.length;for(;c--;){const s=t[c],u=e[c];if(u){for(const o in s)o in u||(i[o]=1);for(const o in u)r[o]||(n[o]=u[o],r[o]=1);t[c]=u}else for(const o in s)r[o]=1}for(const s in i)s in n||(n[s]=void 0);return n}function ye(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function ge(t){t&&t.c()}function $e(t,e){t&&t.l(e)}function Pt(t,e,n,i){const{fragment:r,after_update:c}=t.$$;r&&r.m(e,n),i||S(()=>{const s=t.$$.on_mount.map(K).filter(T);t.$$.on_destroy?t.$$.on_destroy.push(...s):v(s),t.$$.on_mount=[]}),c.forEach(S)}function Rt(t,e){const n=t.$$;n.fragment!==null&&(Ot(n.after_update),v(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function qt(t,e){t.$$.dirty[0]===-1&&(b.push(t),ct(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function xe(t,e,n,i,r,c,s,u=[-1]){const o=A;N(t);const l=t.$$={fragment:null,ctx:[],props:c,update:$,not_equal:r,bound:G(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:G(),dirty:u,skip_bound:!1,root:e.target||o.$$.root};s&&s(l.root);let a=!1;if(l.ctx=n?n(t,e.props||{},(f,_,...d)=>{const h=d.length?d[0]:_;return l.ctx&&r(l.ctx[f],l.ctx[f]=h)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](h),a&&qt(t,f)),_}):[],l.update(),a=!0,v(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){mt();const f=kt(e.target);l.fragment&&l.fragment.l(f),f.forEach(tt)}else l.fragment&&l.fragment.c();e.intro&&Tt(t.$$.fragment),Pt(t,e.target,e.anchor,e.customElement),pt(),ut()}N(o)}class be{$destroy(){Rt(this,1),this.$destroy=$}$on(e,n){if(!T(n))return $;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!dt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{fe as $,Pt as A,Rt as B,Ht as C,se as D,Wt as E,Gt as F,Lt as G,wt as H,$ as I,Ft as J,Bt as K,Kt as L,S as M,he as N,me as O,Yt as P,Ut as Q,v as R,be as S,_t as T,Et as U,ee as V,Zt as W,pe as X,Jt as Y,It as Z,ye as _,Vt as a,Qt as b,ne as c,de as d,Xt as e,_e as f,Tt as g,tt as h,xe as i,ue as j,et as k,te as l,kt as m,vt as n,ce as o,re as p,L as q,At as r,zt as s,le as t,ie as u,ae as v,I as w,oe as x,ge as y,$e as z};
