(this.webpackJsonpblogapp=this.webpackJsonpblogapp||[]).push([[0],{25:function(e,t,c){},27:function(e,t,c){},28:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){},37:function(e,t,c){},38:function(e){e.exports=JSON.parse("{}")},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(19),s=c.n(a),i=(c(25),c(7)),o=c.n(i),j=c(9),l=c(10),h=(c(27),c(4)),u=c(2),b=(c(28),c(0));var d=function(){return Object(b.jsx)("div",{children:Object(b.jsx)("div",{className:"title",children:Object(b.jsx)("img",{src:"img/lights2.jpeg",alt:"lights",width:"100%",height:"100%"})})})};c(30);var m=function(){var e=(new Date).getFullYear();return Object(b.jsx)("div",{className:"footer",children:Object(b.jsxs)("h4",{children:["reikamoon \xa9",e," "]})})};c(31);var O=function(){return Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"navbar",children:[Object(b.jsx)(h.b,{to:"/articles",children:"Articles"}),Object(b.jsx)(h.b,{to:"/",children:"Chatterbox"}),Object(b.jsx)(h.b,{to:"/about",children:"About"})]})})};c(37),c(38);var p=function(){return Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"featured",children:[Object(b.jsx)(h.b,{to:"/details/0",children:Object(b.jsx)("img",{src:"img/computer.jpg",alt:"computer",width:"55%",height:"55%"})}),Object(b.jsxs)("div",{className:"featuredcontent",children:[Object(b.jsxs)("h1",{children:[Object(b.jsx)("i",{className:"fas fa-star"}),"Featured Article",Object(b.jsx)("i",{className:"fas fa-star"})]}),Object(b.jsx)(h.b,{to:"/details/0",children:Object(b.jsx)("h2",{children:"Creating Your Own Blog"})}),Object(b.jsx)("h4",{children:"by reikamoon"}),Object(b.jsx)("p",{children:"Step-by-Step How I Created This Blog."})]})]})})};c(39);var x=function(){return Object(b.jsxs)("div",{className:"About",children:[Object(b.jsx)("h1",{children:"About Me"}),Object(b.jsx)("img",{src:"img/reika2.png",alt:"profilepic",width:"25%",height:"25%"}),Object(b.jsxs)("div",{className:"Abouttxt",children:[Object(b.jsx)("h2",{children:"Name: Anjelica"}),Object(b.jsx)("h2",{children:"Favorite Topics: "}),Object(b.jsx)("h2",{children:"Biography:"}),Object(b.jsx)("p",{children:"Hi, my name is Anjelica! I enjoy writing, drawing, and coding. I recently graduated from Dominican University of California with a B.S. in Applied Computer Science. I participated in the Applied Computer Science program for two years, as a Back-End Web student."}),Object(b.jsx)("h2",{children:"Follow Me!"}),Object(b.jsx)("h3",{children:"Articles I Wrote: "})]})]})},f=(c(40),c(41),c(13));c(42);var v=function(){var e=Object(n.useState)({name:"",comment:""}),t=Object(l.a)(e,2),c=t[0],r=t[1],a=Object(u.f)().id;return Object(b.jsx)("div",{className:"commentform",children:Object(b.jsxs)("form",{onSubmit:function(e){function t(){return(t=Object(j.a)(o.a.mark((function e(){var t,c,n,r=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"",c=r.length>1&&void 0!==r[1]?r[1]:{},e.next=4,fetch(t,{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify(c)});case 4:return n=e.sent,e.abrupt("return",n.json());case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}e.preventDefault(),function(){return t.apply(this,arguments)}("/articles/details/".concat(a,"/comment"),c).then((function(e){console.log(e)}))},children:[Object(b.jsx)("label",{htmlFor:"Name",children:"Name"}),Object(b.jsx)("input",{id:"Name",name:"Name",type:"text",value:c.name,onChange:function(e){r((function(t){return Object(f.a)(Object(f.a)({},t),{},{name:e.target.value})}))}}),Object(b.jsx)("label",{htmlFor:"Comment",children:"Comment"}),Object(b.jsx)("textarea",{id:"Comment",name:"Comment",value:c.comment,onChange:function(e){r((function(t){return Object(f.a)(Object(f.a)({},t),{},{comment:e.target.value})}))}}),Object(b.jsx)("input",{type:"submit",value:"Submit"})]})})};c(43);var g=function(e){var t=e.comments;return Object(b.jsx)("div",{children:void 0!==t?t.map((function(e,t){return Object(b.jsxs)("div",{className:"comment",children:[Object(b.jsxs)("p",{children:["Created at: ",e.createdAt]}),Object(b.jsxs)("h4",{children:[e.name,":"]}),Object(b.jsxs)("p",{children:[" ",e.comment]})]},t)})):""})};var N=function(e){var t=e.match.params.id,c=Object(n.useState)(""),r=Object(l.a)(c,2),a=r[0],s=r[1];return Object(n.useEffect)((function(){function e(){return(e=Object(j.a)(o.a.mark((function e(){var c,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/article/".concat(t),{headers:{accepts:"application/json"}});case 3:return c=e.sent,e.next=6,c.json();case 6:return n=e.sent,console.log(n),e.abrupt("return",s(n.article));case 11:return e.prev=11,e.t0=e.catch(0),e.abrupt("return",console.log(e.t0));case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),Object(b.jsxs)("div",{className:"Article",children:[Object(b.jsx)("h1",{children:a.title}),Object(b.jsxs)("h4",{children:["by ",a.author]}),Object(b.jsx)("img",{src:"".concat("","/img/").concat(a.img),width:"60%",height:"60%",alt:"Article"}),Object(b.jsx)("p",{children:a.body}),Object(b.jsx)("i",{className:"fas fa-heart"})," Like",Object(b.jsx)("h2",{children:"Tags"}),Object(b.jsx)("h1",{children:" Comments "}),Object(b.jsxs)("div",{className:"commentsection",children:[Object(b.jsx)("div",{className:"commentform",children:Object(b.jsx)(v,{})}),Object(b.jsx)("div",{className:"commentslist",children:Object(b.jsx)(g,{comments:a.comments})})]})]})};var w=function(e){var t=e.id,c=e.title,n=e.author,r=e.img,a=e.desc,s=e.tags;return Object(b.jsxs)("div",{className:"ArticleDetails",children:[Object(b.jsx)(h.b,{to:"/details/".concat(t),children:Object(b.jsx)("img",{src:"".concat("","/img/").concat(r),width:"80%",height:"60%",alt:"Article"})}),Object(b.jsx)("h1",{children:c}),Object(b.jsxs)("h3",{children:["by ",n]}),Object(b.jsx)("p",{children:a}),Object(b.jsxs)("p",{children:["Tags: ",s[0],", ",s[1]]})]})};c(44);var y=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],r=t[1];Object(n.useEffect)((function(){function e(){return(e=Object(j.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/all",{headers:{accepts:"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:return c=e.sent,console.log(c),e.abrupt("return",r(c.articles));case 11:return e.prev=11,e.t0=e.catch(0),e.abrupt("return",console.log(e.t0));case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var a=c.map((function(e,t){var c=e.id,n=e.title,r=e.author,a=e.img,s=e.desc,i=e.tags,o=e.comments;return Object(b.jsx)("div",{className:"articlepreview",children:Object(b.jsx)(w,{id:c,title:n,author:r,img:a,desc:s,tags:i,comments:o})},c)}));return Object(b.jsx)("div",{className:"ArticleList",children:a})};c(45);var C=function(){return Object(b.jsxs)("div",{className:"notfound",children:[Object(b.jsx)("h1",{children:"Error!"}),Object(b.jsx)("h3",{children:"Something went wrong..."}),Object(b.jsx)("p",{children:Object(b.jsx)(h.b,{to:"/",children:Object(b.jsx)("button",{className:"btn btn-secondary",children:"Go Home"})})})]})};var A=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),c=t[0],r=t[1],a=function(){var e=Object(j.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/health",{headers:{accepts:"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:return c=e.sent,console.log(c),e.abrupt("return",r(c.msg));case 11:return e.prev=11,e.t0=e.catch(0),e.abrupt("return",console.log(e.t0));case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();return Object(b.jsx)(h.a,{children:Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(d,{}),Object(b.jsx)(O,{}),Object(b.jsxs)(u.c,{children:[Object(b.jsx)(u.a,{path:"/health",render:function(){return a(),Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Health Check"}),Object(b.jsx)("h2",{children:c})]})}}),Object(b.jsx)(u.a,{exact:!0,path:"/",component:p}),Object(b.jsx)(u.a,{exact:!0,path:"/about",component:x}),Object(b.jsx)(u.a,{exact:!0,path:"/articles",component:y}),Object(b.jsx)(u.a,{path:"/details/:id",component:N}),Object(b.jsx)(u.a,{component:C})]}),Object(b.jsx)(m,{})]})})},S=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,47)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),r(e),a(e),s(e)}))};s.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(A,{})}),document.getElementById("root")),S()}},[[46,1,2]]]);
//# sourceMappingURL=main.3644db20.chunk.js.map