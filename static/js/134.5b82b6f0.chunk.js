"use strict";(self.webpackChunkreact_router_hw=self.webpackChunkreact_router_hw||[]).push([[134],{906:function(e,t,r){r(791);var n=r(87),a=r(689),c=r(184);t.Z=function(e){var t=e.movies,r=(0,a.TH)();return(0,c.jsx)("ul",{children:t.map((function(e){return(0,c.jsx)("li",{children:(0,c.jsx)(n.rU,{to:"/movie/".concat(e.id),state:{from:r},children:e.title})},e.id)}))})}},134:function(e,t,r){r.r(t);var n=r(439),a=r(861),c=r(757),u=r.n(c),i=r(791),o=r(87),s=r(759),l=r(906),f=r(184),h=function(){var e=(0,a.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(t,"&api_key=").concat("3556469a3deea69b9ea3bf68fe390f35"));case 3:return r=e.sent,e.abrupt("return",r.data.results);case 7:return e.prev=7,e.t0=e.catch(0),console.error("Error fetching movies:",e.t0),e.abrupt("return",[]);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();t.default=function(){var e,t=(0,i.useState)([]),r=(0,n.Z)(t,2),c=r[0],s=r[1],p=(0,o.lr)(),v=(0,n.Z)(p,2),m=v[0],d=v[1],x=null!==(e=m.get("title"))&&void 0!==e?e:"";console.log("Movies  title:",x),(0,i.useEffect)((function(){if(x){var e=function(){var e=(0,a.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(x);case 2:t=e.sent,s(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}}),[x]);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("h1",{children:"\u042d\u0442\u043e Search Movies"}),(0,f.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=e.currentTarget.elements.title.value.trim();if(t)return d({title:t});d({}),e.currentTarget.reset()},children:[(0,f.jsx)("input",{type:"text",name:"title",placeholder:"Search for a movie..."}),(0,f.jsx)("button",{type:"Submit",children:"Search"})]}),(0,f.jsx)(l.Z,{movies:c})]})}}}]);
//# sourceMappingURL=134.5b82b6f0.chunk.js.map