"use strict";(self.webpackChunkreact_router_hw=self.webpackChunkreact_router_hw||[]).push([[681],{681:function(e,r,t){t.r(r);var n=t(861),c=t(439),s=t(757),a=t.n(s),i=t(791),u=t(759),o=t(689),h=t(184);r.default=function(){var e=(0,i.useState)([]),r=(0,c.Z)(e,2),t=r[0],s=r[1],f=(0,o.UO)().id;return(0,i.useEffect)((function(){var e=function(){var e=(0,n.Z)(a().mark((function e(){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("https://api.themoviedb.org/3/movie/".concat(f,"/reviews?api_key=").concat("3556469a3deea69b9ea3bf68fe390f35"));case 3:r=e.sent,s(r.data.results),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error fetching reviews:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[f]),(0,h.jsxs)("div",{children:[(0,h.jsx)("h3",{children:"Reviews"}),0===t.length?(0,h.jsx)("p",{children:"We don't have any reviews for this movie"}):(0,h.jsx)("ul",{children:t.map((function(e){return(0,h.jsxs)("li",{children:[(0,h.jsxs)("h4",{children:["Author: ",e.author]}),(0,h.jsx)("p",{children:e.content})]},e.id)}))})]})}}}]);
//# sourceMappingURL=681.a32d12fc.chunk.js.map