(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/brain.95de09b9.png"},,function(e,t,a){e.exports=a(23)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(6),s=a.n(r),o=(a(17),a(1)),l=a(2),c=a(4),m=a(3),u=a(5),p=(a(18),a(19),a(8)),d=a.n(p),h=a(9),g=a.n(h),b=function(){return i.a.createElement("div",{className:"ma3 mt1"},i.a.createElement(d.a,{className:"Tilt br2 shadow-2",options:{max:55}},i.a.createElement("div",{className:"Tilt-inner center"},i.a.createElement("img",{alt:"Logo",src:g.a,style:{height:"100px"}}))))},f=function(e){var t=e.onRouteChange;return e.isSignedIn?i.a.createElement("nav",null,i.a.createElement("p",{onClick:function(){return t("signin")},className:"f3 link dim black underline pa3 pointer"},"Sign out")):i.a.createElement("nav",{style:{display:"flex",flexDirection:"row"}},i.a.createElement("p",{onClick:function(){return t("signin")},className:"f3 link dim black underline pa3 pointer"},"Sign In"),i.a.createElement("p",{onClick:function(){return t("register")},className:"f3 link dim black underline pa3 pointer"},"Register"))},w=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).onEmailChange=function(e){a.setState({signInEmail:e.target.value})},a.onPasswordChange=function(e){a.setState({signInPassword:e.target.value})},a.onSubmitSignIn=function(){fetch("https://face-detection-1.herokuapp.com/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a.state.signInEmail,password:a.state.signInPassword})}).then(function(e){return e.json()}).then(function(e){e.id&&(a.props.loadUser(e),a.props.onRouteChange("home"))})},a.state={signInEmail:"",signInPassword:""},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.onRouteChange;return i.a.createElement("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"},i.a.createElement("div",{className:"pa4 black-80"},i.a.createElement("div",{className:"measure"},i.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},i.a.createElement("legend",{className:"f1 fw6 ph0 mh0"},"Sign In"),i.a.createElement("div",{className:"mt3"},i.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),i.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange,required:!0})),i.a.createElement("div",{className:"mv3"},i.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),i.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:this.onPasswordChange,required:!0}))),i.a.createElement("div",{className:""},i.a.createElement("input",{onClick:this.onSubmitSignIn,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign in"})),i.a.createElement("div",{className:"lh-copy mt3"},i.a.createElement("p",{onClick:function(){return e("register")},className:"f6 link dim black db pointer"},"Register")))))}}]),t}(n.Component),v=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).onNameChange=function(e){a.setState({name:e.target.value})},a.onEmailChange=function(e){a.setState({email:e.target.value})},a.onPasswordChange=function(e){a.setState({password:e.target.value})},a.onSubmitRegister=function(){fetch("https://face-detection-1.herokuapp.com/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:a.state.name,email:a.state.email,password:a.state.password})}).then(function(e){return e.json()}).then(function(e){e.id&&(a.props.loadUser(e),a.props.onRouteChange("home"))})},a.state={name:"",email:"",password:""},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"},i.a.createElement("div",{className:"pa4 black-80"},i.a.createElement("div",{className:"measure"},i.a.createElement("fieldset",{id:"register",className:"ba b--transparent ph0 mh0"},i.a.createElement("legend",{className:"f1 fw6 ph0 mh0"},"Register"),i.a.createElement("div",{className:"mt3"},i.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"name"},"Name"),i.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"name",id:"name",onChange:this.onNameChange,required:!0})),i.a.createElement("div",{className:"mt3"},i.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),i.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange,required:!0})),i.a.createElement("div",{className:"mv3"},i.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),i.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:this.onPasswordChange,required:!0}))),i.a.createElement("div",{className:""},i.a.createElement("input",{onClick:this.onSubmitRegister,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Register"})))))}}]),t}(n.Component),E=function(e){var t=e.name,a=e.entries;return i.a.createElement("div",null,i.a.createElement("div",{className:"white f3"},"".concat(t,", your current number of entry is...")),i.a.createElement("div",{className:"white f1"},"".concat(a)))},N=(a(20),function(e){var t=e.onImageURLKeyDown,a=e.onImageURLInputChange,n=e.onPictureSubmit;return i.a.createElement("div",null,i.a.createElement("p",{className:"f3"},"This potato will detect faces on pictures. Give it a try."),i.a.createElement("div",{className:"center"},i.a.createElement("div",{className:"form w-60 center pa3 br3 shadow-5"},i.a.createElement("input",{className:"f4 pa2 w-70",type:"text",placeholder:"Paste url of picture...",onChange:a,onKeyDown:t}),i.a.createElement("button",{className:"f4 grow link ph3 pv2 dib white bg-light-purple w-30 pointer",onClick:n},"Detect"))))}),y=(a(21),function(e){var t=e.regions;return i.a.createElement("div",{className:"bounding-box-container"},t.map(function(e,t){var a=e.region_info.bounding_box;return void 0!==typeof e?i.a.createElement("div",{key:t,className:"bounding-box",style:{top:100*a.top_row+"%",bottom:100-100*a.bottom_row+"%",right:100-100*a.right_col+"%",left:100*a.left_col+"%"}}):i.a.createElement("div",{key:t})}))}),C=function(e){var t=e.regions,a=e.imgUrl;return i.a.createElement("div",{className:"center"},i.a.createElement("div",{className:"absolute mt2"},i.a.createElement(y,{regions:t}),i.a.createElement("img",{alt:"",src:a,style:{width:"auto",height:"500px"}})))},k=a(10),S=a.n(k),j=(a(22),{particles:{number:{value:50,density:{enable:!0,value_area:800}},size:{value:3}}}),I={input:"",imgUrl:"",regions:[],route:"signin",isSignedIn:!1,user:{id:0,name:"",email:"",entries:0,joined:""}},R=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(c.a)(this,Object(m.a)(t).call(this))).loadUser=function(t){e.setState({user:{id:t.id,name:t.name,email:t.email,password:t.password,entries:t.entries,joined:t.joined}})},e.onImageURLInputChange=function(t){e.setState({input:t.target.value})},e.onImageURLKeyDown=function(t){13===t.keyCode&&e.onPictureSubmit()},e.onPictureSubmit=function(){e.setState({imgUrl:e.state.input}),fetch("https://face-detection-1.herokuapp.com/imageurl",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({imgUrl:e.state.input})}).then(function(e){return e.json()}).then(function(t){fetch("https://face-detection-1.herokuapp.com/image",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e.state.user.id})}).then(function(e){return e.json()}).then(function(t){return e.setState(Object.assign(e.state.user,{entries:t}))}),e.setState({regions:t.outputs[0].data.regions})}).catch(console.log)},e.onRouteChange=function(t){"signin"===t?e.setState(I):"home"===t&&e.setState({isSignedIn:!0}),e.setState({route:t})},e.state=I,e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.imgUrl,a=e.regions,n=e.route,r=e.isSignedIn;return i.a.createElement("div",{className:"App"},i.a.createElement(S.a,{className:"bgParticles",params:j}),i.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"},className:"pa2"},i.a.createElement(b,null),i.a.createElement(f,{onRouteChange:this.onRouteChange,isSignedIn:r})),"home"===n?i.a.createElement("div",null,i.a.createElement(E,{name:this.state.user.name,entries:this.state.user.entries}),i.a.createElement(N,{onImageURLKeyDown:this.onImageURLKeyDown,onImageURLInputChange:this.onImageURLInputChange,onPictureSubmit:this.onPictureSubmit}),i.a.createElement(C,{regions:a,imgUrl:t})):"signin"===n?i.a.createElement(w,{onRouteChange:this.onRouteChange,loadUser:this.loadUser}):i.a.createElement(v,{onRouteChange:this.onRouteChange,loadUser:this.loadUser}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[11,1,2]]]);
//# sourceMappingURL=main.c97d5865.chunk.js.map