(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(0),r=n(1),c=n.n(r),o=n(3),a=n.n(o),i=(n(13),n(4)),u=n(5),h=n(7),l=n(6),d=(n.p,n(14),n(15),n(16),function(e){return Object(s.jsxs)("div",{className:"card-container",children:[Object(s.jsx)("img",{alt:"monster",src:"https://robohash.org/".concat(e.monster.id,"?set=set2&size=180x180")}),Object(s.jsx)("h1",{children:e.monster.name},e.monster.id)]})}),j=function(e){return console.log(e),Object(s.jsx)("div",{className:"card-list",children:e.monsters.map((function(e){return Object(s.jsx)(d,{monster:e})}))})},m=(n(17),function(e){var t=e.placeholder,n=e.handleChange;return Object(s.jsx)("input",{type:"search",className:"search",placeholder:t,onChange:n})}),f=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).state={monsters:[],searchField:""},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("http://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})})).catch((function(e){return console.log("There was an error fetching the users ")}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.monsters,r=t.searchField,c=n.filter((function(e){return e.name.toLowerCase().includes(r.toLowerCase())}));return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("h1",{className:"h1-title",children:"Monsters Rolodex"}),Object(s.jsx)(m,{placeholder:"Search Monsters",handleChange:function(t){return e.setState({searchField:t.target.value})}}),Object(s.jsx)(j,{monsters:c})]})}}]),n}(r.Component),b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,s=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),s(e),r(e),c(e),o(e)}))};a.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(f,{})}),document.getElementById("root")),b()}],[[18,1,2]]]);
//# sourceMappingURL=main.c831a0e6.chunk.js.map