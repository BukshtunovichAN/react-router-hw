"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[597],{597:function(e,t,r){r.r(t);var a=r(861),n=r(439),c=r(757),s=r.n(c),i=r(791),o=r(759),h=r(689),u=r(184);t.default=function(){var e=(0,i.useState)([]),t=(0,n.Z)(e,2),r=t[0],c=t[1];console.log("Cast  cast:",r);var p=(0,h.UO)().id;return(0,i.useEffect)((function(){var e=function(){var e=(0,a.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("https://api.themoviedb.org/3/movie/".concat(p,"/credits?api_key=").concat("3556469a3deea69b9ea3bf68fe390f35"));case 3:t=e.sent,c(t.data.cast),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error fetching cast:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[p]),(0,u.jsxs)("div",{children:[(0,u.jsx)("h3",{children:"Cast"}),(0,u.jsx)("ul",{children:r.map((function(e){return(0,u.jsxs)("li",{children:[e.profile_path&&(0,u.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(e.profile_path),alt:e.name,width:"200"}),(0,u.jsx)("h4",{children:e.name}),(0,u.jsxs)("p",{children:["Character: ",e.character]})]},e.id)}))})]})}}}]);
//# sourceMappingURL=597.e4935677.chunk.js.map