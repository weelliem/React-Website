(this["webpackJsonpportfolio-react-app"]=this["webpackJsonpportfolio-react-app"]||[]).push([[0],{40:function(e,t,a){e.exports=a.p+"static/media/Snap1.d94b9d4c.jpg"},41:function(e,t,a){e.exports=a.p+"static/media/UAsk.5693dd14.jpeg"},42:function(e,t,a){e.exports=a.p+"static/media/Covid.9e82c2fe.jpg"},50:function(e,t,a){e.exports=a(68)},55:function(e,t,a){},56:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},57:function(e,t,a){},58:function(e,t,a){e.exports=a.p+"static/media/vector.a69b76f9.png"},68:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(23),l=a.n(r),c=(a(55),a(8)),o=a(13),s=a(11),m=a(10),u=(a(56),a(5)),d=a(26),p=a(20),g=a(27),f=a(49),b=a(7),h=(a(57),a(21));a(22);a(39);var y=function(e){return i.a.createElement("div",null,i.a.createElement("div",{className:"content-wrapper",style:{display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center"}},i.a.createElement(b.b.div,{initial:{opacity:0},exit:{opacity:[.5,0]},animate:{opacity:1},transition:{duration:.5}},i.a.createElement(b.b.img,{animate:{opacity:1},transition:{duration:.5},src:a(58),className:"manImage"}),i.a.createElement("h1",{className:"display-1 font-weight-bolder"},"William Hong"),i.a.createElement("h3",{className:"display-4 font-weight-light"},"Graduate Full Stack Developer"))))};var E=function(e){return i.a.createElement("div",null,i.a.createElement("div",{className:"content-wrapper",style:{display:"flex",justifyContent:"center",alignItems:"top",textAlign:"center"}},i.a.createElement(b.b.div,{transition:{duration:.7},exit:{opacity:[.5,0],x:-500}},i.a.createElement(b.b.h1,{animate:{opacity:[.5,.75,1],y:20},transition:{duration:1},className:"display-3 font-weight-light"},"About Me"),i.a.createElement(b.b.div,{animate:{y:50,opacity:[0,.1,1]},transition:{duration:.7},className:"textAboutBox"},i.a.createElement("p",{className:"text"},"Graduate Information Technology / Business student, seeking a graduate role focusing on Fullstack development. Despite pursuing a business degree my passion is with information technology (programming). Therefore, I am seeking employment with regards to my passion , that will allow me to utilize my current skill set whilst also refining my technical skills.")))))},v=a(18),k=a(40),j=a.n(k),x=a(41),w=a.n(x),N=a(42),T=a.n(N),A=a(35);var C=function(e){var t=Object(A.b)({opacity:1,from:{opacity:0}});return i.a.createElement(A.a.div,{className:"g-card-info",style:t},i.a.createElement("p",{className:"g-card-title"},e.title),i.a.createElement("p",{className:"g-card-sub-title"},e.subTitle),i.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},"View"))};var I=function(e){return i.a.createElement(b.b.div,{className:"cardStyle",style:{marginLeft:100,marginRight:100,marginTop:50},onClick:function(t){return e.click(e.item)}},i.a.createElement(b.b.img,{style:{opacity:0},initial:{scale:.25},animate:{opacity:[.35,1],scale:1},whileHover:{scale:1.2},onTap:!0,onHoverStart:function(e){},onHoverEnd:function(e){},className:"cardImages",src:e.item.imgSrc,alt:e.item.imgSrc}),e.item.selected&&i.a.createElement(C,{title:e.item.title,subTitle:e.item.subTitle,link:e.item.link}))},O=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleCardClick=function(e,t){console.log(e);var a=Object(v.a)(n.state.items);a[e].selected=!a[e].selected,a.forEach((function(t){t.id!==e&&(t.selected=!1)})),n.setState({items:a})},n.makeItems=function(e){return e.map((function(e){return i.a.createElement(I,{item:e,click:function(t){return n.handleCardClick(e.id,t)},key:e.id})}))},n.state={items:[{id:0,title:"StackOverflow",subTitle:"Android Application",imgSrc:j.a,link:"https://github.com/weelliem/SnapOverflow-master",selected:!1},{id:1,title:"UAsk",subTitle:"IOS Application",imgSrc:w.a,link:"https://github.com/weelliem/UAsk",selected:!1},{id:2,title:"Covid-19 Tracker",subTitle:"Web API [In Progress]",imgSrc:T.a,link:"https://github.com/weelliem/Covid-Web-API",selected:!1}]},n}return Object(o.a)(a,[{key:"render",value:function(){return i.a.createElement(p.a,{fluid:!0},i.a.createElement(h.a,{className:"d-flex justify-content-around"},this.makeItems(this.state.items)))}}]),a}(i.a.Component);var S=function(e){return i.a.createElement("div",null,i.a.createElement("div",{className:"content-wrapper",style:{display:"flex",justifyContent:"center",alignItems:"bottom",textAlign:"center"}},i.a.createElement(b.b.div,{className:"centre-test",transition:{duration:.5},exit:{opacity:[.5,0],x:-250}},i.a.createElement(b.b.h1,{style:{marginRight:250,opacity:0},animate:{x:-300,opacity:[.5,.75,1]},transition:{type:"spring",stiffness:80,duration:1},className:"display-3 font-weight-light"},"Projects"),i.a.createElement(O,{className:"projectsC"}))))},H=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={title:"William Hong",headerLinks:[{title:"Home",path:"/"},{title:"About",path:"/about"},{title:"Projects",path:"/projects"}],home:{title:"William Hong",subTitle:"Learning about us",subText:"check me out"},about:{title:"About Me"},projects:{title:"My Projects"}},n}return Object(o.a)(a,[{key:"Locations",value:function(){Object(u.f)()}},{key:"render",value:function(){var e=this;return i.a.createElement(d.a,null,i.a.createElement(p.a,{className:"p-0",fluid:!0},i.a.createElement(g.a,{className:"border-bottom",bg:"transparent",expand:"lg"},i.a.createElement(g.a.Brand,null,"William Hong"),i.a.createElement(g.a.Toggle,{className:"border-0","aria-controls":"navbar-toggle"}),i.a.createElement(g.a.Collapse,{id:"navebar-toggle"},i.a.createElement(f.a,{className:"ml-auto"},i.a.createElement(d.b,{className:"nav-link",to:"/"},"Home"),i.a.createElement(d.b,{className:"nav-link",to:"/about"},"About"),i.a.createElement(d.b,{className:"nav-link",to:"/Projects"},"Projects")))),i.a.createElement(u.a,{render:function(t){var a=t.location;return i.a.createElement(b.a,{initial:!0,exitBeforeEnter:!0},i.a.createElement(u.c,{location:a,key:a.key},i.a.createElement(u.a,{path:"/",exact:!0,render:function(){return i.a.createElement(y,{title:e.state.home.title,subTitle:e.state.home.subTitle,subText:e.state.home.subText})}}),i.a.createElement(u.a,{path:"/about",render:function(){return i.a.createElement(E,{title:e.state.about.title})}}),i.a.createElement(u.a,{path:"/projects",render:function(){return i.a.createElement(S,{title:e.state.projects.title})}})))}})))}}]),a}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(67);l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[50,1,2]]]);
//# sourceMappingURL=main.f55521e6.chunk.js.map