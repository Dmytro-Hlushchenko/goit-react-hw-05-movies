"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[845],{197:function(n,e,t){t.d(e,{Jh:function(){return f},OT:function(){return j},TP:function(){return p},V0:function(){return g},XT:function(){return u},_r:function(){return x}});var r=t(861),c=t(757),a=t.n(c),i=t(243),o="a0d3d78947a19dedcb27f194d7d7e916",s="https://api.themoviedb.org/3";function u(){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(a().mark((function n(){var e,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(s,"/trending/movie/day?api_key=").concat(o),n.next=3,i.Z.get(e);case 3:return t=n.sent,n.abrupt("return",t.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(s,"/movie/").concat(e,"?api_key=").concat(o),n.next=3,i.Z.get(t);case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(s,"/movie/").concat(e,"/credits?api_key=").concat(o),n.next=3,i.Z.get(t);case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(s,"/movie/").concat(e,"/reviews?api_key=").concat(o),n.next=3,i.Z.get(t);case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(s,"/search/movie?api_key=").concat(o,"&query=").concat(e),n.next=3,i.Z.get(t);case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function j(){console.log("\u0429\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u0435\u0440\u0435\u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0442\u0435 \u0441\u0442\u043e\u0440\u0456\u043d\u043a\u0443")}},290:function(n,e,t){t.d(e,{Z:function(){return a}});var r=t(881),c=t(184);function a(){return(0,c.jsx)(r.Yt,{visible:!0,height:"120",width:"120",ariaLabel:"MagnifyingGlass-loading",wrapperStyle:{},wrapperClass:"MagnifyingGlass-wrapper",glassColor:"#c0efff",color:"#0226ee"})}},845:function(n,e,t){t.r(e),t.d(e,{default:function(){return j}});var r,c,a,i=t(439),o=t(197),s=t(791),u=t(689),l=t(290),p=t(168),d=t(867),f=t(87),h=(0,d.ZP)(f.OL)(r||(r=(0,p.Z)(["\n  &.active {color: red;}\n"]))),x=(0,d.ZP)(f.rU)(c||(c=(0,p.Z)(["\nbackground-color: grey;\n  color: black;\n  font-weight: 700;\n  border: 1px solid black;\n  width: 100px;\n  justify-content: center;\n"]))),v=d.ZP.section(a||(a=(0,p.Z)(["\npadding: 10px;\ndisplay: flex;\nflex-direction: column;\ngap: 10px;\n"]))),g=t(768),m=t(184);function j(){var n,e,t=(0,s.useState)(null),r=(0,i.Z)(t,2),c=r[0],a=r[1],p=(0,s.useState)(!0),d=(0,i.Z)(p,2),f=d[0],j=d[1],w=(0,u.UO)().movieId,y=null!==(n=null===(e=(0,u.TH)().state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/";if((0,s.useEffect)((function(){w&&(0,o.TP)(w).then((function(n){a(n)})).catch(o.OT).finally((function(){return j(!1)}))}),[w]),c){var b=c.id,k=c.title,Z=c.poster_path,_=c.original_title,O=c.release_date,T=c.vote_average,C=c.overview,P=c.genres;return(0,m.jsxs)(v,{children:[(0,m.jsxs)(x,{to:y,children:[(0,m.jsx)(g.O8Q,{}),"Go back"]}),(0,m.jsx)("h2",{children:k}),f&&(0,m.jsx)(l.Z,{}),c&&(0,m.jsxs)("div",{children:[(0,m.jsx)("img",{src:Z?"http://image.tmdb.org/t/p/w154".concat(Z):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",alt:k,width:"154",height:"231"}),(0,m.jsx)("h3",{children:_}),(0,m.jsxs)("p",{children:[(0,m.jsx)("b",{children:"Release date:"})," ",O]}),(0,m.jsxs)("p",{children:[(0,m.jsx)("b",{children:"Ranking:"})," ",T]}),(0,m.jsxs)("p",{children:[(0,m.jsx)("b",{children:"Genres: "})," ",P&&P.map((function(n){var e=n.name;return"".concat(e," | ")}))]}),(0,m.jsxs)("p",{children:[(0,m.jsx)("b",{children:"Overview: "}),C]})]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("h3",{children:"Additional information:"}),(0,m.jsxs)("ul",{children:[(0,m.jsx)("li",{children:(0,m.jsx)(h,{to:"/movies/".concat(b,"/cast"),children:"Cast"})}),(0,m.jsx)("li",{children:(0,m.jsx)(h,{to:"/movies/".concat(b,"/reviews"),children:"Reviews"})})]}),(0,m.jsx)(u.j3,{})]})]})}}}}]);
//# sourceMappingURL=845.66a45016.chunk.js.map