(this.webpackJsonpits_me_app=this.webpackJsonpits_me_app||[]).push([[0],{20:function(e,t,a){e.exports={header_wrap:"Header_header_wrap__2_07y",header_menu:"Header_header_menu__373iT",forms_wrap:"Header_forms_wrap__1Gzig"}},37:function(e,t,a){e.exports={forms:"Login_forms__XT70k"}},38:function(e,t,a){e.exports={forms:"Register_forms__7jrs_"}},39:function(e,t,a){e.exports=a(68)},45:function(e,t,a){},46:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),o=a.n(c),s=a(16),i=a(1),l={changedName:"",changedPass:"",status:!1,reason:""},u={changedName:"",changedPass:null,name:null,pass:null,isAuth:!1},p=function(e){return{type:"AUTH_LOGIN",data:e}},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_NAME":return Object(i.a)(Object(i.a)({},e),{},{changedName:t.changeName});case"CHANGE_PASS":return Object(i.a)(Object(i.a)({},e),{},{changedPass:t.changePass});case"AUTH_LOGIN":return Object(i.a)(Object(i.a)({},e),{},{name:t.data.name,pass:t.data.pass,isAuth:!0,changedPass:null,changedName:null});default:return e}},m={changedName:null,changedInfo:null},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_NAME":return Object(i.a)(Object(i.a)({},e),{},{changedName:t.changeName});case"CHANGE_INFO":return Object(i.a)(Object(i.a)({},e),{},{changedInfo:t.changeInfo});case"ADD_COMPANY":return Object(i.a)(Object(i.a)({},e),{},{changedPass:null,changedInfo:null});default:return e}},d=Object(s.b)({register:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_NAME":return Object(i.a)(Object(i.a)({},e),{},{changedName:t.changedName});case"CHANGE_PASS":return Object(i.a)(Object(i.a)({},e),{},{changedPass:t.changedPass});case"CLICK_REGISTER":return Object(i.a)(Object(i.a)({},e),{},{changedName:"",changedPass:"",status:!0,reason:t.reason});default:return Object(i.a)({},e)}},login:h,companies:g}),f=Object(s.c)(d);window.store=f;var E=f,b=(a(45),a(13)),v=a(2),A=(a(46),a(9)),N=a(10),C=a(12),y=a(11),O=a(4),j=a(20),_=a.n(j),P=function(e){return r.a.createElement("div",{className:_.a.header_wrap},r.a.createElement("div",{className:_.a.header_menu},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(b.b,{to:"/mycompany"},"My company")),r.a.createElement("li",null,r.a.createElement(b.b,{to:"/vacancies"},"Vacancies")),r.a.createElement("li",null,r.a.createElement(b.b,{to:"/bank"},"Bank")),r.a.createElement("li",null,r.a.createElement(b.b,{to:"/marketplace"},"Marketplace")),r.a.createElement("li",null,r.a.createElement(b.b,{to:"/myprofile"},"Profile")))),r.a.createElement("div",{className:_.a.forms_wrap},e.state.login.isAuth?r.a.createElement("div",null):r.a.createElement(b.b,{to:"/login"},"log In"),r.a.createElement(b.b,{to:"/register"},"Register")))},w=a(36),k=a.n(w),I=function(e){Object(C.a)(a,e);var t=Object(y.a)(a);function a(){return Object(A.a)(this,a),t.apply(this,arguments)}return Object(N.a)(a,[{key:"componentDidMount",value:function(){var e=this;k.a.get("https://best-app-riglan9eq.vercel.app/api/users",{withCredentials:!0}).then((function(t){var a;console.log(t),t.data.status?(a=t.data.info.info,e.props.authLoginAC(a)):console.log("There are not cookies")}))}},{key:"render",value:function(){return r.a.createElement(P,{state:this.props.state})}}]),a}(r.a.Component),G=Object(O.b)((function(e){return{state:e}}),{authLoginAC:p})(I),H=a(37),R=a.n(H),S=function(e){if(e.state.login.isAuth)return r.a.createElement("div",null,"\u0412\u044b \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u044b!");var t=r.a.createRef(),a=r.a.createRef();return r.a.createElement("div",{className:R.a.forms},r.a.createElement("input",{type:"text",onChange:function(){e.changeName(t.current.value)},value:e.state.register.changedName,ref:t}),r.a.createElement("input",{type:"text",onChange:function(){e.changePass(a.current.value)},value:e.state.register.changedPass,ref:a}),r.a.createElement("button",{onClick:function(){e.checkApi()}},"Login"),r.a.createElement("button",{onClick:function(){e.check()}},"Add"))},M=function(e){Object(C.a)(a,e);var t=Object(y.a)(a);function a(){var e;Object(A.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).checkApi=function(){var t=new FormData;t.append("name",e.props.state.login.changedName),t.append("pass",e.props.state.login.changedPass),fetch("https://best-app-riglan9eq.vercel.app/api/login",{method:"POST",body:t},{withCredentials:!0}).then((function(e){return console.log(e),e.json()})).then((function(t){var a;console.log(t),a=t,e.props.authLoginAC(a)}))},e}return Object(N.a)(a,[{key:"render",value:function(){return r.a.createElement(S,{state:this.props.state,changeName:this.props.changeNameAC,changePass:this.props.changePassAC,checkApi:this.checkApi,check:this.check})}}]),a}(r.a.Component),x=Object(O.b)((function(e){return{state:e}}),{changeNameAC:function(e){return{type:"CHANGE_NAME",changeName:e}},changePassAC:function(e){return{type:"CHANGE_PASS",changePass:e}},authLoginAC:p})(M),L=a(38),T=a.n(L),D=function(e){if(e.state.login.isAuth)return r.a.createElement("div",null,"\u0412\u044b \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u044b!");var t=r.a.createRef(),a=r.a.createRef();return r.a.createElement("div",{className:T.a.forms},r.a.createElement("input",{type:"text",onChange:function(){e.changeName(t.current.value)},value:e.state.register.changedName,ref:t}),r.a.createElement("input",{type:"text",onChange:function(){e.changePass(a.current.value)},value:e.state.register.changedPass,ref:a}),r.a.createElement("button",{onClick:function(){e.postApi()}},"Register"))},F=function(e){Object(C.a)(a,e);var t=Object(y.a)(a);function a(){var e;Object(A.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).postApi=function(){var t=new FormData;t.append("name",e.props.state.register.changedName),t.append("pass",e.props.state.register.changedPass),fetch("https://best-app-riglan9eq.vercel.app/api/users",{method:"POST",body:t},{withCredentials:!0}).then((function(e){return console.log(e),e.json()})).then((function(e){console.log(e)}))},e}return Object(N.a)(a,[{key:"render",value:function(){return r.a.createElement(D,{state:this.props.state,changeName:this.props.changeNameAC,changePass:this.props.changePassAC,postApi:this.postApi})}}]),a}(r.a.Component),q=Object(O.b)((function(e){return{state:e}}),{changeNameAC:function(e){return{type:"CHANGE_NAME",changedName:e}},changePassAC:function(e){return{type:"CHANGE_PASS",changedPass:e}},clickRegisterAC:function(e){return{type:"CLICK_REGISTER",reason:e}}})(F),B=function(e){return e.state.login.isAuth?r.a.createElement("div",null,r.a.createElement("div",null,"Name: ",e.state.login.name),r.a.createElement("div",null,"Pass: ",e.state.login.pass)):r.a.createElement("div",null,"\u0412\u044b \u043d\u0435 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u044b")},J=function(e){Object(C.a)(a,e);var t=Object(y.a)(a);function a(){return Object(A.a)(this,a),t.apply(this,arguments)}return Object(N.a)(a,[{key:"render",value:function(){return r.a.createElement(B,{state:this.props.state})}}]),a}(r.a.Component),K=Object(O.b)((function(e){return{state:e}}))(J),U=function(e){var t=r.a.createRef(),a=r.a.createRef();return r.a.createElement("div",null,r.a.createElement("input",{type:"text",onChange:function(){e.changeName(t.current.value)},ref:t}),r.a.createElement("input",{type:"text",onChange:function(){e.changeInfo(a.current.value)},ref:a}),r.a.createElement("button",{onClick:function(){e.addCompany()}},"Add"))},W=function(e){Object(C.a)(a,e);var t=Object(y.a)(a);function a(){var e;Object(A.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).addCompany=function(){var t=new FormData;t.append("name",e.props.state.companies.changedName),t.append("info",e.props.state.companies.changedInfo),t.append("username",e.props.state.login.name),fetch("https://best-app-riglan9eq.vercel.app/api/company",{method:"POST",body:t},{withCredentials:!0}).then((function(e){return console.log(e),e.json()})).then((function(e){console.log(e)}))},e}return Object(N.a)(a,[{key:"render",value:function(){return r.a.createElement(U,{state:this.props.state,addComapny:this.props.addComapnyAC,changeName:this.props.changeNameAC,changeInfo:this.props.changeInfoAC,addCompany:this.addCompany})}}]),a}(r.a.Component),Y=Object(O.b)((function(e){return{state:e}}),{addComapnyAC:function(e){return{type:"ADD_COMPANY",data:e}},changeNameAC:function(e){return{type:"CHANGE_NAME",changeName:e}},changeInfoAC:function(e){return{type:"CHANGE_INFO",changeInfo:e}}})(W);var z=function(e){return r.a.createElement(b.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App"},r.a.createElement(G,null)),r.a.createElement("div",{className:"main_body"},r.a.createElement(v.a,{path:"/mycompany"}),r.a.createElement(v.a,{path:"/login",render:function(){return r.a.createElement(x,null)}}),r.a.createElement(v.a,{path:"/register",render:function(){return r.a.createElement(q,null)}}),r.a.createElement(v.a,{path:"/myprofile",render:function(){return r.a.createElement(K,null)}}),r.a.createElement(v.a,{path:"/mycompany",render:function(){return r.a.createElement(Y,null)}}))))},V=Object(O.b)((function(e){return{state:e}}))(z);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O.a,{store:E},r.a.createElement(V,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[39,1,2]]]);
//# sourceMappingURL=main.1ef3dcf7.chunk.js.map