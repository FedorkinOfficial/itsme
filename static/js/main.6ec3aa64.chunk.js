(this.webpackJsonpits_me_app=this.webpackJsonpits_me_app||[]).push([[0],{20:function(e,t,a){e.exports={header_wrap:"Header_header_wrap__2_07y",header_menu:"Header_header_menu__373iT",forms_wrap:"Header_forms_wrap__1Gzig"}},37:function(e,t,a){e.exports={forms:"Login_forms__XT70k"}},38:function(e,t,a){e.exports={forms:"Register_forms__7jrs_"}},39:function(e,t,a){e.exports=a(68)},45:function(e,t,a){},46:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),s=a.n(c),o=a(16),i=a(3),l={changedName:"",changedPass:"",status:!1,reason:""},u={changedName:"",changedPass:null,name:null,pass:null,isAuth:!1},h=function(e){return{type:"AUTH_LOGIN",data:e}},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_NAME":return Object(i.a)(Object(i.a)({},e),{},{changedName:t.changeName});case"CHANGE_PASS":return Object(i.a)(Object(i.a)({},e),{},{changedPass:t.changePass});case"AUTH_LOGIN":return Object(i.a)(Object(i.a)({},e),{},{name:t.data.name,pass:t.data.pass,isAuth:!0,changedPass:null,changedName:null});default:return e}},p=Object(o.b)({register:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_NAME":return Object(i.a)(Object(i.a)({},e),{},{changedName:t.changedName});case"CHANGE_PASS":return Object(i.a)(Object(i.a)({},e),{},{changedPass:t.changedPass});case"CLICK_REGISTER":return Object(i.a)(Object(i.a)({},e),{},{changedName:"",changedPass:"",status:!0,reason:t.reason});default:return Object(i.a)({},e)}},login:m}),g=Object(o.c)(p);window.store=g;var d=g,f=(a(45),a(8)),E=a(1),b=(a(46),a(12)),v=a(13),A=a(15),N=a(14),_=a(9),C=a(20),y=a.n(C),O=function(e){return r.a.createElement("div",{className:y.a.header_wrap},r.a.createElement("div",{className:y.a.header_menu},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(f.b,{to:"/mycompany"},"My company")),r.a.createElement("li",null,r.a.createElement(f.b,{to:"/vacancies"},"Vacancies")),r.a.createElement("li",null,r.a.createElement(f.b,{to:"/bank"},"Bank")),r.a.createElement("li",null,r.a.createElement(f.b,{to:"/marketplace"},"Marketplace")),r.a.createElement("li",null,r.a.createElement(f.b,{to:"/myprofile"},"Profile")))),r.a.createElement("div",{className:y.a.forms_wrap},e.state.login.isAuth?r.a.createElement("div",null):r.a.createElement(f.b,{to:"/login"},"log In"),r.a.createElement(f.b,{to:"/login"},"log In"),r.a.createElement(f.b,{to:"/register"},"Register")))},j=a(36),P=a.n(j),k=function(e){Object(A.a)(a,e);var t=Object(N.a)(a);function a(){return Object(b.a)(this,a),t.apply(this,arguments)}return Object(v.a)(a,[{key:"componentDidMount",value:function(){var e=this;P.a.get("http://itsmeapi/api/users",{withCredentials:!0}).then((function(t){var a;console.log(t),t.data.status?(a=t.data.info,e.props.authLoginAC(a)):console.log("There are not cookies")}))}},{key:"render",value:function(){return r.a.createElement(O,{state:this.props.state})}}]),a}(r.a.Component),w=Object(_.b)((function(e){return{state:e}}),{authLoginAC:h})(k),G=a(37),H=a.n(G),S=function(e){if(e.state.login.isAuth)return r.a.createElement("div",null,"\u0412\u044b \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u044b!");var t=r.a.createRef(),a=r.a.createRef();return r.a.createElement("div",{className:H.a.forms},r.a.createElement("input",{type:"text",onChange:function(){e.changeName(t.current.value)},value:e.state.register.changedName,ref:t}),r.a.createElement("input",{type:"text",onChange:function(){e.changePass(a.current.value)},value:e.state.register.changedPass,ref:a}),r.a.createElement("button",{onClick:function(){e.checkApi()}},"Login"),r.a.createElement("button",{onClick:function(){e.check()}},"Add"))},R=function(e){Object(A.a)(a,e);var t=Object(N.a)(a);function a(){var e;Object(b.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).checkApi=function(){var t=new FormData;t.append("name",e.props.state.login.changedName),t.append("pass",e.props.state.login.changedPass),fetch("http://itsmeapi/api/login",{method:"POST",body:t},{withCredentials:!0}).then((function(e){return console.log(e),e.json()})).then((function(t){var a;console.log(t),a=t,e.props.authLoginAC(a)}))},e}return Object(v.a)(a,[{key:"render",value:function(){return r.a.createElement(S,{state:this.props.state,changeName:this.props.changeNameAC,changePass:this.props.changePassAC,checkApi:this.checkApi,check:this.check})}}]),a}(r.a.Component),L=Object(_.b)((function(e){return{state:e}}),{changeNameAC:function(e){return{type:"CHANGE_NAME",changeName:e}},changePassAC:function(e){return{type:"CHANGE_PASS",changePass:e}},authLoginAC:h})(R),I=a(38),T=a.n(I),x=function(e){if(e.state.login.isAuth)return r.a.createElement("div",null,"\u0412\u044b \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u044b!");var t=r.a.createRef(),a=r.a.createRef();return r.a.createElement("div",{className:T.a.forms},r.a.createElement("input",{type:"text",onChange:function(){e.changeName(t.current.value)},value:e.state.register.changedName,ref:t}),r.a.createElement("input",{type:"text",onChange:function(){e.changePass(a.current.value)},value:e.state.register.changedPass,ref:a}),r.a.createElement("button",{onClick:function(){e.postApi()}},"Register"))},M=function(e){Object(A.a)(a,e);var t=Object(N.a)(a);function a(){var e;Object(b.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).postApi=function(){var t=new FormData;t.append("name",e.props.state.register.changedName),t.append("pass",e.props.state.register.changedPass),fetch("http://itsmeapi/api/users",{method:"POST",body:t},{withCredentials:!0}).then((function(e){return console.log(e),e.json()})).then((function(e){console.log(e)}))},e}return Object(v.a)(a,[{key:"render",value:function(){return r.a.createElement(x,{state:this.props.state,changeName:this.props.changeNameAC,changePass:this.props.changePassAC,postApi:this.postApi})}}]),a}(r.a.Component),B=Object(_.b)((function(e){return{state:e}}),{changeNameAC:function(e){return{type:"CHANGE_NAME",changedName:e}},changePassAC:function(e){return{type:"CHANGE_PASS",changedPass:e}},clickRegisterAC:function(e){return{type:"CLICK_REGISTER",reason:e}}})(M);var D=function(e){return r.a.createElement(f.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App"},r.a.createElement(w,null)),r.a.createElement("div",{className:"main_body"},r.a.createElement(E.a,{path:"/mycompany"}),r.a.createElement(E.a,{path:"/login",render:function(){return r.a.createElement(L,null)}}),r.a.createElement(E.a,{path:"/register",render:function(){return r.a.createElement(B,null)}}),r.a.createElement(E.a,{path:"/myprofile"}))))},F=Object(_.b)((function(e){return{state:e}}))(D);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(_.a,{store:d},r.a.createElement(F,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[39,1,2]]]);
//# sourceMappingURL=main.6ec3aa64.chunk.js.map