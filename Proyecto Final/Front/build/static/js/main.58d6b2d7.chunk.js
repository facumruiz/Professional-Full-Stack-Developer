(this.webpackJsonppwa2020=this.webpackJsonppwa2020||[]).push([[0],{47:function(e,t,a){e.exports=a(62)},52:function(e,t,a){},53:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},54:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(25),c=a.n(r),l=(a(52),a(19)),s=a(20),i=a(24),u=a(23),m=(a(53),a(54),a(70));var p=function(e){return o.a.createElement(m.a,{style:{margin:"auto",marginBottom:"10px"}},o.a.createElement(m.a.Body,null,o.a.createElement(m.a.Img,{style:{width:"200px"},variant:"top"}),o.a.createElement(m.a.Title,null,e.data.name)))},d=a(64),h=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={productos:[],subtitulo:"Dsdas",loading:!0},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("http://localhost:3001/productos").then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({productos:t,loading:!1})}),(function(e){console.log(e)}))}},{key:"render",value:function(){return o.a.createElement(d.a,null,this.state.loading&&o.a.createElement("div",null,"Loading ..."),!this.state.loading&&o.a.createElement("div",null,this.state.productos.map((function(e){return o.a.createElement(p,{data:e})}))))}}]),a}(n.Component),g=a(21),b=a(14),f=a(16),v=a(5),E=a(67),O=a(65),j=a(66);var y=function(e){return o.a.createElement(O.a,{variant:"primary",type:"submit"},e.loading&&o.a.createElement(j.a,{animation:"border",size:"sm"},o.a.createElement("span",{className:"sr-only"},"Loading...")),e.text)},w={errors:{backgroundColor:"red"},noError:{backgroundColor:"none"}};var S=function(e){return o.a.createElement(E.a.Group,{controlId:"formBasicName"},o.a.createElement(E.a.Label,null,e.label),o.a.createElement(E.a.Control,{type:e.type,placeholder:e.placeholder,name:e.name,value:e.value,onChange:e.change,style:e.errors?w.errors:w.noError}),e.errors&&o.a.createElement(E.a.Text,{className:"text-muted"},e.errors))};var x=function(e){var t=e.login,a=Object(v.e)(),r=Object(n.useState)({user:"",password:""}),c=Object(f.a)(r,2),l=c[0],s=c[1],i=Object(n.useState)({user:"",password:""}),u=Object(f.a)(i,2),m=(u[0],u[1],Object(n.useState)(!1)),p=Object(f.a)(m,2),h=p[0],O=p[1];console.log(l);var j=function(e){s(Object(b.a)(Object(b.a)({},l),{},Object(g.a)({},e.target.name,e.target.value))),e.preventDefault()};return o.a.createElement(d.a,null,o.a.createElement(E.a,{onSubmit:function(e){console.log(l),O(!0),fetch("http://localhost:3001/usuarios/login",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(l)}).then((function(e){return e.json()})).then((function(e){console.log(e),localStorage.setItem("token",e.token),t(!0),a.push("/"),O(!1)}),(function(e){console.log(e),O(!1)})),e.preventDefault()}},o.a.createElement(S,{label:"Usuario",type:"text",placeholder:"Ingrese su usuario",name:"user",value:l.user,change:j}),o.a.createElement(S,{label:"Contrase\xf1a",type:"password",placeholder:"Ingrese su password",name:"password",value:l.password,change:j}),o.a.createElement(y,{text:"Ingresar",loading:h})))};var k=function(e){e.data;var t=Object(v.e)(),a=Object(n.useState)({name:"",user:"",password:""}),r=Object(f.a)(a,2),c=r[0],l=r[1],s=Object(n.useState)({name:"",user:"",password:""}),i=Object(f.a)(s,2),u=i[0],m=i[1],p=Object(n.useState)(!1),h=Object(f.a)(p,2),O=h[0],j=h[1];console.log(c);var w=function(e){l(Object(b.a)(Object(b.a)({},c),{},Object(g.a)({},e.target.name,e.target.value))),e.preventDefault()};return o.a.createElement(d.a,null,o.a.createElement(E.a,{onSubmit:function(e){console.log(c),""==c.name&&m(Object(b.a)(Object(b.a)({},u),{},{name:"El nombre es obligatorio"})),j(!0),fetch("http://localhost:3001/usuarios/registro",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(c)}).then((function(e){return e.json()})).then((function(e){console.log(e),t.push("/registro"),j(!1)}),(function(e){console.log(e),j(!1)})),e.preventDefault()}},o.a.createElement(S,{label:"Nombre",type:"text",placeholder:"Ingrese su nombre",name:"name",value:c.name,change:w,errors:u.name}),o.a.createElement(S,{label:"Usuario",type:"text",placeholder:"Ingrese su usuario",name:"user",value:c.user,change:w}),o.a.createElement(S,{label:"Contrase\xf1a",type:"password",placeholder:"Ingrese su password",name:"password",value:c.password,change:w}),o.a.createElement(y,{text:"Registrarse",loading:O})))},I=a(18),M=a(68),C=a(69),D=a(41);var N=function(e){var t=e.data;return o.a.createElement(M.a,{bg:"light",expand:"lg"},o.a.createElement(M.a.Brand,{href:"#home"},"React-Bootstrap"),o.a.createElement(M.a.Toggle,{"aria-controls":"basic-navbar-nav"}),o.a.createElement(M.a.Collapse,{id:"basic-navbar-nav"},o.a.createElement(C.a,{className:"mr-auto"},t.map((function(e){return o.a.createElement(C.a.Link,{as:I.b,to:e.path},e.label)}))),o.a.createElement(E.a,{inline:!0},o.a.createElement(D.a,{type:"text",placeholder:"Search",className:"mr-sm-2"}),o.a.createElement(O.a,{variant:"outline-success"},"Search"))))},B=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),n=t.call(this,e),console.log(n.props.match.params.id),n}return Object(s.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,"Producto Detalle")}}]),a}(n.Component),T=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).modificarOpcionesMenu=function(t){t?e.setState({opcionesMenu:[{path:"/",label:"Home"}]}):e.setState({opcionesMenu:[{path:"/",label:"Home"},{path:"/login",label:"Login"},{path:"/registro",label:"Registro"}]})},e.cambiarTitulo=function(t){e.setState({titulo:"Inicio"})},e.state={titulo:"Home",opcionesMenu:[]},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){localStorage.getItem("token")?this.modificarOpcionesMenu(!0):this.modificarOpcionesMenu(!1)}},{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(I.a,null,o.a.createElement(v.a,{component:function(){return o.a.createElement(N,{data:e.state.opcionesMenu})}}),o.a.createElement(v.a,{path:"/",exact:!0,component:h}),o.a.createElement(v.a,{path:"/login",exact:!0,component:function(){return o.a.createElement(x,{login:e.modificarOpcionesMenu})}}),o.a.createElement(v.a,{path:"/registro",exact:!0,component:k}),o.a.createElement(v.a,{path:"/producto/:id",exact:!0,component:B})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(61);c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[47,1,2]]]);
//# sourceMappingURL=main.58d6b2d7.chunk.js.map