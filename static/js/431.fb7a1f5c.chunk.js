(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[431],{4431:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var r=n(885),a=n(2791),c=n(4635),u=n(501),o=n(2007),i=n.n(o),s=n(184),p=function(e){var t=e.movies;return(0,s.jsx)("ul",{children:t.map((function(e){return(0,s.jsx)("li",{children:(0,s.jsx)(u.rU,{to:"movies/".concat(e.id),children:e.title})},e.id)}))})};p.propType={movies:i().arrayOf(i().exact({id:i().string,title:i().string.isRequired}))};var f=p,d=function(){var e=(0,a.useState)([]),t=(0,r.Z)(e,2),n=t[0],u=t[1];return(0,a.useEffect)((function(){(0,c.Df)().then((function(e){u(e.results)})),console.log((0,c.Df)())}),[]),(0,s.jsxs)("main",{children:[(0,s.jsx)("h1",{children:"Trending today"}),(0,s.jsx)(f,{movies:n})]})}},4635:function(e,t,n){"use strict";n.d(t,{Df:function(){return s},M1:function(){return d},TP:function(){return f},tx:function(){return l},z1:function(){return p}});var r=n(5861),a=n(4687),c=n.n(a),u=n(4569),o=n.n(u),i="4a75e2e412d1d0b089e3b2f8fd934085";o().defaults.baseURL="https://api.themoviedb.org/3";var s=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("/trending/movie/day?api_key=".concat(i,"&page=1"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t,n){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("/search/movie?api_key=".concat(i,"&query=").concat(n,"&page=").concat(t));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("/movie/".concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("/movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("/movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},888:function(e,t,n){"use strict";var r=n(9047);function a(){}function c(){}c.resetWarningCache=a,e.exports=function(){function e(e,t,n,a,c,u){if(u!==r){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:c,resetWarningCache:a};return n.PropTypes=n,n}},2007:function(e,t,n){e.exports=n(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=431.fb7a1f5c.chunk.js.map