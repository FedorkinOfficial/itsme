(this.webpackJsonpits_me_app=this.webpackJsonpits_me_app||[]).push([[0],{18:function(e,t,a){e.exports={inf_item:"Profile_inf_item__1EDRe"}},22:function(e,t,a){e.exports={header_wrap:"Header_header_wrap__2_07y",header_menu:"Header_header_menu__373iT",forms_wrap:"Header_forms_wrap__1Gzig"}},38:function(e,t,a){e.exports={forms:"Login_forms__XT70k"}},39:function(e,t,a){e.exports={forms:"Register_forms__7jrs_"}},40:function(e,t,a){e.exports={header_wrap:"Companies_header_wrap__3I7n9",header_menu:"Companies_header_menu__1pgNS",forms_wrap:"Companies_forms_wrap__1flHu",wrap:"Companies_wrap__a0OJ2"}},41:function(e,t,a){e.exports=a(70)},47:function(e,t,a){},48:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),o=a.n(c),s=a(16),i=a(1),l={changedName:"",changedPass:"",status:!1,reason:""},u={changedName:"",changedPass:null,name:null,pass:null,isAuth:!1},m=function(e){return{type:"AUTH_LOGIN",data:e}},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_NAME":return Object(i.a)(Object(i.a)({},e),{},{changedName:t.changeName});case"CHANGE_PASS":return Object(i.a)(Object(i.a)({},e),{},{changedPass:t.changePass});case"AUTH_LOGIN":return Object(i.a)(Object(i.a)({},e),{},{name:t.data.name,pass:t.data.id,isAuth:!0,changedPass:null,changedName:null});default:return e}},h={changedName:null,changedInfo:null},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_NAME":return Object(i.a)(Object(i.a)({},e),{},{changedName:t.changeName});case"CHANGE_INFO":return Object(i.a)(Object(i.a)({},e),{},{changedInfo:t.changeInfo});case"ADD_COMPANY":return Object(i.a)(Object(i.a)({},e),{},{changedPass:null,changedInfo:null});default:return e}},f=Object(s.b)({register:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_NAME":return Object(i.a)(Object(i.a)({},e),{},{changedName:t.changedName});case"CHANGE_PASS":return Object(i.a)(Object(i.a)({},e),{},{changedPass:t.changedPass});case"CLICK_REGISTER":return Object(i.a)(Object(i.a)({},e),{},{changedName:"",changedPass:"",status:!0,reason:t.reason});default:return Object(i.a)({},e)}},login:p,companies:d}),g=Object(s.c)(f);window.store=g;var E=g,_=(a(47),a(13)),b=a(2),v=(a(48),a(9)),N=a(10),C=a(12),A=a(11),y=a(4),O=a(22),j=a.n(O),w=function(e){return r.a.createElement("div",{className:j.a.header_wrap},r.a.createElement("div",{className:j.a.header_menu},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(_.b,{to:"/mycompany"},"My company")),r.a.createElement("li",null,r.a.createElement(_.b,{to:"/vacancies"},"Vacancies")),r.a.createElement("li",null,r.a.createElement(_.b,{to:"/bank"},"Bank")),r.a.createElement("li",null,r.a.createElement(_.b,{to:"/marketplace"},"Marketplace")),r.a.createElement("li",null,r.a.createElement(_.b,{to:"/myprofile"},"Profile")))),r.a.createElement("div",{className:j.a.forms_wrap},e.state.login.isAuth?r.a.createElement("div",null):r.a.createElement(_.b,{to:"/login"},"log In"),r.a.createElement(_.b,{to:"/register"},"Register")))},P=a(21),k=a.n(P),I=function(e){Object(C.a)(a,e);var t=Object(A.a)(a);function a(){return Object(v.a)(this,a),t.apply(this,arguments)}return Object(N.a)(a,[{key:"componentDidMount",value:function(){var e=this;k.a.get("http://itsmeapi/api/users",{withCredentials:!0}).then((function(t){var a;console.log(t),t.data.status?(a=t.data.info,e.props.authLoginAC(a),console.log(t.data)):console.log("There are not cookies")}))}},{key:"render",value:function(){return r.a.createElement(w,{state:this.props.state})}}]),a}(r.a.Component),H=Object(y.b)((function(e){return{state:e}}),{authLoginAC:m})(I),G=a(38),R=a.n(G),S=function(e){if(e.state.login.isAuth)return r.a.createElement("div",null,"\u0412\u044b \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u044b!");var t=r.a.createRef(),a=r.a.createRef();return r.a.createElement("div",{className:R.a.forms},r.a.createElement("input",{type:"text",onChange:function(){e.changeName(t.current.value)},value:e.state.register.changedName,ref:t}),r.a.createElement("input",{type:"text",onChange:function(){e.changePass(a.current.value)},value:e.state.register.changedPass,ref:a}),r.a.createElement("button",{onClick:function(){e.checkApi()}},"Login"),r.a.createElement("button",{onClick:function(){e.check()}},"Add"))},M=function(e){Object(C.a)(a,e);var t=Object(A.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).checkApi=function(){var t=new FormData;t.append("name",e.props.state.login.changedName),t.append("pass",e.props.state.login.changedPass),fetch("http://itsmeapi/api/login",{method:"POST",body:t},{withCredentials:!0}).then((function(e){return console.log(e),e.json()})).then((function(t){var a;console.log(t),a=t,e.props.authLoginAC(a)}))},e}return Object(N.a)(a,[{key:"render",value:function(){return r.a.createElement(S,{state:this.props.state,changeName:this.props.changeNameAC,changePass:this.props.changePassAC,checkApi:this.checkApi,check:this.check})}}]),a}(r.a.Component),x=Object(y.b)((function(e){return{state:e}}),{changeNameAC:function(e){return{type:"CHANGE_NAME",changeName:e}},changePassAC:function(e){return{type:"CHANGE_PASS",changePass:e}},authLoginAC:m})(M),T=a(39),D=a.n(T),L=function(e){if(e.state.login.isAuth)return r.a.createElement("div",null,"\u0412\u044b \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u044b!");var t=r.a.createRef(),a=r.a.createRef();return r.a.createElement("div",{className:D.a.forms},r.a.createElement("input",{type:"text",onChange:function(){e.changeName(t.current.value)},value:e.state.register.changedName,ref:t}),r.a.createElement("input",{type:"text",onChange:function(){e.changePass(a.current.value)},value:e.state.register.changedPass,ref:a}),r.a.createElement("button",{onClick:function(){e.postApi()}},"Register"))},F=function(e){Object(C.a)(a,e);var t=Object(A.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).postApi=function(){var t=new FormData;t.append("name",e.props.state.register.changedName),t.append("pass",e.props.state.register.changedPass),fetch("http://itsmeapi/api/users",{method:"POST",body:t},{withCredentials:!0}).then((function(e){return console.log(e),e.json()})).then((function(e){console.log(e)}))},e}return Object(N.a)(a,[{key:"render",value:function(){return r.a.createElement(L,{state:this.props.state,changeName:this.props.changeNameAC,changePass:this.props.changePassAC,postApi:this.postApi})}}]),a}(r.a.Component),B=Object(y.b)((function(e){return{state:e}}),{changeNameAC:function(e){return{type:"CHANGE_NAME",changedName:e}},changePassAC:function(e){return{type:"CHANGE_PASS",changedPass:e}},clickRegisterAC:function(e){return{type:"CLICK_REGISTER",reason:e}}})(F),J=a(18),K=a.n(J),U=function(e){return e.state.login.isAuth?r.a.createElement("div",{className:K.a.info_wrap},r.a.createElement("div",{className:K.a.inf_item},"Name: ",e.state.login.name),r.a.createElement("div",{className:K.a.inf_item},"id: ",e.state.login.pass),r.a.createElement("div",{className:K.a.inf_item},"Num of companies :")):r.a.createElement("div",null,"\u0412\u044b \u043d\u0435 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u044b")},W=function(e){Object(C.a)(a,e);var t=Object(A.a)(a);function a(){return Object(v.a)(this,a),t.apply(this,arguments)}return Object(N.a)(a,[{key:"render",value:function(){return r.a.createElement(U,{state:this.props.state})}}]),a}(r.a.Component),Y=Object(y.b)((function(e){return{state:e}}))(W),z=a(40),V=a.n(z),X=function(e){var t=r.a.createRef(),a=r.a.createRef();return r.a.createElement("div",{className:V.a.wrap},r.a.createElement("input",{type:"text",onChange:function(){e.changeName(t.current.value)},ref:t}),r.a.createElement("input",{type:"text",onChange:function(){e.changeInfo(a.current.value)},ref:a}),r.a.createElement("button",{onClick:function(){e.addCompany()}},"Add"))},$=function(e){Object(C.a)(a,e);var t=Object(A.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).addCompany=function(){var t=new FormData;t.append("name",e.props.state.companies.changedName),t.append("info",e.props.state.companies.changedInfo),fetch("http://itsmeapi/api/company",{method:"POST",body:t},{withCredentials:!0}).then((function(e){return console.log(e),e.json()})).then((function(e){console.log(e)}))},e}return Object(N.a)(a,[{key:"componentDidMount",value:function(){k.a.get("http://itsmeapi/api/companies",{withCredentials:!0}).then((function(e){console.log(e),e.data.status?console.log(e.data):console.log("There are not companies")}))}},{key:"render",value:function(){return r.a.createElement(X,{state:this.props.state,addComapny:this.props.addComapnyAC,changeName:this.props.changeNameAC,changeInfo:this.props.changeInfoAC,addCompany:this.addCompany})}}]),a}(r.a.Component),q=Object(y.b)((function(e){return{state:e}}),{addComapnyAC:function(e){return{type:"ADD_COMPANY",data:e}},changeNameAC:function(e){return{type:"CHANGE_NAME",changeName:e}},changeInfoAC:function(e){return{type:"CHANGE_INFO",changeInfo:e}}})($);var Q=function(e){return r.a.createElement(_.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container"},r.a.createElement(H,null)),r.a.createElement("div",{className:"main_body"},r.a.createElement(b.a,{path:"/mycompany"}),r.a.createElement(b.a,{path:"/login",render:function(){return r.a.createElement(x,null)}}),r.a.createElement(b.a,{path:"/register",render:function(){return r.a.createElement(B,null)}}),r.a.createElement(b.a,{path:"/myprofile",render:function(){return r.a.createElement(Y,null)}}),r.a.createElement(b.a,{path:"/mycompany",render:function(){return r.a.createElement(q,null)}}))))},Z=Object(y.b)((function(e){return{state:e}}))(Q);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y.a,{store:E},r.a.createElement(Z,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[41,1,2]]]);
//# sourceMappingURL=main.e0f25d4e.chunk.js.map