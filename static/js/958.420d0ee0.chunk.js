"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[958],{958:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var r=n(885),a=n(786),s=n(969),c=n(791),i=n(731),u=n(689),o="MovieDetails_movie__uXENX",l="MovieDetails_movieInfo__kyDrT",f="MovieDetails_movieGenres__4FFHD",v="MovieDetails_buttonList__MG5ss",p="MovieDetails_movieBtn__ShGgG",d="MovieDetails_goBackLink__HnmLb",h=n(184),m=function(){var e,t,n=(0,u.UO)().movieID,m=(0,c.useState)(null),_=(0,r.Z)(m,2),x=_[0],g=_[1],k=(0,u.s0)(),w=(0,u.TH)(),b=null!==(e=null===(t=w.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/";return(0,c.useEffect)((function(){(0,s.fh)(Number(n)).then(g)}),[n]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(i.rU,{to:b,className:d,children:" Go back"}),x&&(0,h.jsxs)("div",{className:o,children:[(0,h.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(x.poster_path),alt:x.title,width:"300",height:"450"}),(0,h.jsxs)("div",{className:l,children:[(0,h.jsx)("h1",{children:x.title}),(0,h.jsxs)("p",{children:["User score: ",Math.round(10*x.vote_average),"%"]}),(0,h.jsx)("h2",{children:"Overview"}),(0,h.jsx)("p",{children:x.overview}),(0,h.jsx)("h3",{children:"Genres"}),(0,h.jsx)("ul",{className:f,children:x.genres.map((function(e){var t=e.id,n=e.name;return(0,h.jsx)("li",{children:n},t)}))}),(0,h.jsxs)("div",{className:v,children:[(0,h.jsx)("button",{type:"button",onClick:function(){var e;k("cast",{state:{from:null===(e=w.state)||void 0===e?void 0:e.from}})},className:p,children:"Cast"}),(0,h.jsx)("button",{type:"button",onClick:function(){var e;k("reviews",{state:{from:null===(e=w.state)||void 0===e?void 0:e.from}})},className:p,children:"Reviews"})]})]})]}),(0,h.jsx)(c.Suspense,{fallback:(0,h.jsx)(a.Z,{}),children:(0,h.jsx)(u.j3,{})})]})}},969:function(e,t,n){n.d(t,{Df:function(){return u},fh:function(){return o},q5:function(){return f},yo:function(){return l},z1:function(){return v}});var r=n(861),a=n(757),s=n.n(a),c=n(44);c.ZP.defaults.baseURL="https://api.themoviedb.org/3/";var i="dfe4a00d2e9affe6d840c5d7f47e5fe1",u=function(){var e=(0,r.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.ZP.get("/trending/movie/day?api_key=".concat(i));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.ZP.get("/movie/".concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.ZP.get("/movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.ZP.get("/movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.ZP.get("/search/movie?api_key=".concat(i,"&language=en-US&query=").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=958.420d0ee0.chunk.js.map