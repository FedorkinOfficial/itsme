(this.webpackJsonpits_me_app=this.webpackJsonpits_me_app||[]).push([[0],{20:function(e,t,a){e.exports={header_wrap:"Header_header_wrap__2_07y",header_menu:"Header_header_menu__373iT",forms_wrap:"Header_forms_wrap__1Gzig"}},37:function(e,t,a){e.exports={forms:"Login_forms__XT70k"}},38:function(e,t,a){e.exports={forms:"Register_forms__7jrs_"}},39:function(e,t,a){e.exports=a(68)},45:function(e,t,a){},46:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),o=a.n(c),s=a(16),i=a(1),l={changedName:"",changedPass:"",status:!1,reason:""},u={changedName:"",changedPass:null,name:null,pass:null,isAuth:!1},p=function(e){return{type:"AUTH_LOGIN",data:e}},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_NAME":return Object(i.a)(Object(i.a)({},e),{},{changedName:t.changeName});case"CHANGE_PASS":return Object(i.a)(Object(i.a)({},e),{},{changedPass:t.changePass});case"AUTH_LOGIN":return Object(i.a)(Object(i.a)({},e),{},{name:t.data.name,pass:t.data.pass,isAuth:!0,changedPass:null,changedName:null});default:return e}},m={changedName:null,changedInfo:null},g=function(e){return{type:"CHANGE_NAME",changeName:e}},f=function(e){return{type:"CHANGE_INFO",changeInfo:e}},d=function(e){return{type:"ADD_COMPANY",data:e}},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_NAME":return Object(i.a)(Object(i.a)({},e),{},{changedName:t.changeName});case"CHANGE_INFO":return Object(i.a)(Object(i.a)({},e),{},{changedInfo:t.changeInfo});case"ADD_COMPANY":return Object(i.a)(Object(i.a)({},e),{},{changedPass:null,changeInfo:null});default:return e}},b=Object(s.b)({register:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_NAME":return Object(i.a)(Object(i.a)({},e),{},{changedName:t.changedName});case"CHANGE_PASS":return Object(i.a)(Object(i.a)({},e),{},{changedPass:t.changedPass});case"CLICK_REGISTER":return Object(i.a)(Object(i.a)({},e),{},{changedName:"",changedPass:"",status:!0,reason:t.reason});default:return Object(i.a)({},e)}},login:h,companies:E}),v=Object(s.c)(b);window.store=v;var A=v,N=(a(45),a(13)),C=a(2),O=(a(46),a(9)),y=a(10),j=a(12),_=a(11),P=a(4),w=a(20),k=a.n(w),I=function(e){return r.a.createElement("div",{className:k.a.header_wrap},r.a.createElement("div",{className:k.a.header_menu},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(N.b,{to:"/mycompany"},"My company")),r.a.createElement("li",null,r.a.createElement(N.b,{to:"/vacancies"},"Vacancies")),r.a.createElement("li",null,r.a.createElement(N.b,{to:"/bank"},"Bank")),r.a.createElement("li",null,r.a.createElement(N.b,{to:"/marketplace"},"Marketplace")),r.a.createElement("li",null,r.a.createElement(N.b,{to:"/myprofile"},"Profile")))),r.a.createElement("div",{className:k.a.forms_wrap},e.state.login.isAuth?r.a.createElement("div",null):r.a.createElement(N.b,{to:"/login"},"log In"),r.a.createElement(N.b,{to:"/register"},"Register")))},G=a(36),H=a.n(G),R=function(e){Object(j.a)(a,e);var t=Object(_.a)(a);function a(){return Object(O.a)(this,a),t.apply(this,arguments)}return Object(y.a)(a,[{key:"componentDidMount",value:function(){var e=this;H.a.get("http://itsmeapi/api/users",{withCredentials:!0}).then((function(t){var a;console.log(t),t.data.status?(a=t.data.info.info,e.props.authLoginAC(a)):console.log("There are not cookies")}))}},{key:"render",value:function(){return r.a.createElement(I,{state:this.props.state})}}]),a}(r.a.Component),S=Object(P.b)((function(e){return{state:e}}),{authLoginAC:p})(R),M=a(37),x=a.n(M),L=function(e){if(e.state.login.isAuth)return r.a.createElement("div",null,"\u0412\u044b \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u044b!");var t=r.a.createRef(),a=r.a.createRef();return r.a.createElement("div",{className:x.a.forms},r.a.createElement("input",{type:"text",onChange:function(){e.changeName(t.current.value)},value:e.state.register.changedName,ref:t}),r.a.createElement("input",{type:"text",onChange:function(){e.changePass(a.current.value)},value:e.state.register.changedPass,ref:a}),r.a.createElement("button",{onClick:function(){e.checkApi()}},"Login"),r.a.createElement("button",{onClick:function(){e.check()}},"Add"))},T=function(e){Object(j.a)(a,e);var t=Object(_.a)(a);function a(){var e;Object(O.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).checkApi=function(){var t=new FormData;t.append("name",e.props.state.login.changedName),t.append("pass",e.props.state.login.changedPass),fetch("http://itsmeapi/api/login",{method:"POST",body:t},{withCredentials:!0}).then((function(e){return console.log(e),e.json()})).then((function(t){var a;console.log(t),a=t,e.props.authLoginAC(a)}))},e}return Object(y.a)(a,[{key:"render",value:function(){return r.a.createElement(L,{state:this.props.state,changeName:this.props.changeNameAC,changePass:this.props.changePassAC,checkApi:this.checkApi,check:this.check})}}]),a}(r.a.Component),D=Object(P.b)((function(e){return{state:e}}),{changeNameAC:function(e){return{type:"CHANGE_NAME",changeName:e}},changePassAC:function(e){return{type:"CHANGE_PASS",changePass:e}},authLoginAC:p})(T),F=a(38),B=a.n(F),J=function(e){if(e.state.login.isAuth)return r.a.createElement("div",null,"\u0412\u044b \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u044b!");var t=r.a.createRef(),a=r.a.createRef();return r.a.createElement("div",{className:B.a.forms},r.a.createElement("input",{type:"text",onChange:function(){e.changeName(t.current.value)},value:e.state.register.changedName,ref:t}),r.a.createElement("input",{type:"text",onChange:function(){e.changePass(a.current.value)},value:e.state.register.changedPass,ref:a}),r.a.createElement("button",{onClick:function(){e.postApi()}},"Register"))},K=function(e){Object(j.a)(a,e);var t=Object(_.a)(a);function a(){var e;Object(O.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).postApi=function(){var t=new FormData;t.append("name",e.props.state.register.changedName),t.append("pass",e.props.state.register.changedPass),fetch("http://itsmeapi/api/users",{method:"POST",body:t},{withCredentials:!0}).then((function(e){return console.log(e),e.json()})).then((function(e){console.log(e)}))},e}return Object(y.a)(a,[{key:"render",value:function(){return r.a.createElement(J,{state:this.props.state,changeName:this.props.changeNameAC,changePass:this.props.changePassAC,postApi:this.postApi})}}]),a}(r.a.Component),U=Object(P.b)((function(e){return{state:e}}),{changeNameAC:function(e){return{type:"CHANGE_NAME",changedName:e}},changePassAC:function(e){return{type:"CHANGE_PASS",changedPass:e}},clickRegisterAC:function(e){return{type:"CLICK_REGISTER",reason:e}}})(K),W=function(e){return e.state.login.isAuth?r.a.createElement("div",null,r.a.createElement("div",null,"Name: ",e.state.login.name),r.a.createElement("div",null,"Pass: ",e.state.login.pass)):r.a.createElement("div",null,"\u0412\u044b \u043d\u0435 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u044b")},Y=function(e){Object(j.a)(a,e);var t=Object(_.a)(a);function a(){return Object(O.a)(this,a),t.apply(this,arguments)}return Object(y.a)(a,[{key:"render",value:function(){return r.a.createElement(W,{state:this.props.state})}}]),a}(r.a.Component),z=Object(P.b)((function(e){return{state:e}}))(Y),V=function(e){var t=r.a.createRef(),a=r.a.createRef();return r.a.createElement("div",null,r.a.createElement("input",{type:"text",onChange:function(){e.changeName(t.current.value)},ref:t}),r.a.createElement("input",{type:"text",onChange:function(){e.changeInfo(a.current.value)},ref:a}),r.a.createElement("button",{onClick:function(){e.addComapny()}},"Add"))},X=function(e){Object(j.a)(a,e);var t=Object(_.a)(a);function a(){var e;Object(O.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).postApi=function(){var t=new FormData;t.append("name",e.props.state.companies.changeName),t.append("info",e.props.state.companies.changedInfo),t.append("username",e.props.state.login.name),fetch("http://itsmeapi/api/company",{method:"POST",body:t},{withCredentials:!0}).then((function(e){return console.log(e),e.json()})).then((function(e){console.log(e)}))},e}return Object(y.a)(a,[{key:"render",value:function(){return r.a.createElement(V,{state:this.props.state,addComapny:d,changeName:g,changeInfo:f})}}]),a}(r.a.Component),$=Object(P.b)((function(e){return{state:e}}),{addComapnyAC:d,changeNameAC:g,changeInfoAC:f})(X);var q=function(e){return r.a.createElement(N.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App"},r.a.createElement(S,null)),r.a.createElement("div",{className:"main_body"},r.a.createElement(C.a,{path:"/mycompany"}),r.a.createElement(C.a,{path:"/login",render:function(){return r.a.createElement(D,null)}}),r.a.createElement(C.a,{path:"/register",render:function(){return r.a.createElement(U,null)}}),r.a.createElement(C.a,{path:"/myprofile",render:function(){return r.a.createElement(z,null)}}),r.a.createElement(C.a,{path:"/mycompany",render:function(){return r.a.createElement($,null)}}))))},Q=Object(P.b)((function(e){return{state:e}}))(q);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(P.a,{store:A},r.a.createElement(Q,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[39,1,2]]]);
//# sourceMappingURL=main.a9b2dda8.chunk.js.map