(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{375:function(e,t,a){},377:function(e,t,a){},379:function(e,t,a){},381:function(e,t,a){e.exports=a.p+"static/media/logo.ee7cd8ed.svg"},483:function(e,t,a){"use strict";a.r(t);var n=a(236),r=a.n(n),c=a(237),l=a(16),i=a(17),o=a(20),s=a(18),u=a(19),m=a(0),d=a.n(m),p=a(38),h=a(30),b=a(8),f=a(37),y=(a(375),a(377),function(){return d.a.createElement("div",{id:"screen-loading"},d.a.createElement("div",{className:"screen-loading__viewbox"},d.a.createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 25 30",fill:"#2d8cf0"},d.a.createElement("rect",{x:"0",y:"9.80392",rx:"1.5",ry:"1.5",width:"4",height:"11.3922"},d.a.createElement("animate",{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0s",dur:"0.6s",repeatCount:"indefinite"}),d.a.createElement("animate",{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0s",dur:"0.6s",repeatCount:"indefinite"})),d.a.createElement("rect",{x:"10",y:"5.80392",rx:"1.5",ry:"1.5",width:"4",height:"19.3922"},d.a.createElement("animate",{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite"}),d.a.createElement("animate",{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite"})),d.a.createElement("rect",{x:"20",y:"8.19608",rx:"1.5",ry:"1.5",width:"4",height:"14.6078"},d.a.createElement("animate",{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite"}),d.a.createElement("animate",{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite"}))),d.a.createElement("p",{className:"screen-loading__text"},"Wecome to React Laboratory")))}),E=(a(379),function(e){var t="".concat("layout"," ").concat(e.className);return d.a.createElement("article",{className:t},e.children)}),g=function(e){var t="".concat("layout-header"," ").concat(e.className);return d.a.createElement("header",{className:t},e.children)},v=a(381),O=a.n(v),j=function(e){var t="".concat("layout-sider"," ").concat(e.className);return d.a.createElement("div",{className:t.trim()},d.a.createElement("div",{className:"".concat("layout-sider","__top")},d.a.createElement("img",{src:O.a,alt:"",className:"".concat("layout-sider","__logo")}),d.a.createElement("span",{className:"".concat("layout-sider","__name")},"Laboratory")),e.children)},k=function(e){var t="".concat("layout-content"," ").concat(e.className);return d.a.createElement("section",{className:t},e.children)},_=E;E.Header=g,E.Sider=j,E.Content=k;a(164);var w=a(132),N=(a(250),a(209)),C=_.Sider,S=N.a.SubMenu,x=N.a.Item,I=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).goto=function(e){a.props.history.push(e.key)},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"shouldComponentUpdate",value:function(e){return!Object(b.is)(Object(b.fromJS)(this.props),Object(b.fromJS)(e))}},{key:"render",value:function(){var e=this.props.location.pathname;return d.a.createElement(C,null,d.a.createElement(N.a,{defaultSelectedKeys:[e],defaultOpenKeys:[e],mode:"inline",theme:"dark",onSelect:this.goto},h.c.map(function(e){return e.children?d.a.createElement(S,{key:e.path,title:d.a.createElement("span",null,d.a.createElement(w.a,{type:"desktop"}),d.a.createElement("span",null,e.title))},e.children.map(function(e){return d.a.createElement(x,{key:e.path},e.title)})):d.a.createElement(x,{key:e.path},e.title)})))}}]),t}(m.Component),J=(a(239),a(210)),L=(a(147),a(158)),U=a(14),M=a(47),T=a(29),X=_.Header,K=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).handleLanguage=function(e){e.item;var t=e.key;e.keyPath;a.props.update_user({language:t}),window.location.reload()},a.handleUser=function(e){e.item;var t=e.key,n=(e.keyPath,a.props),r=n.history,c=n.reset_user;switch(t){case"userInfo":case"password":break;case"logout":Object(f.a)(),Object(U.a)("userInfo"),c(),r.push("/login")}},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return!Object(b.is)(Object(b.fromJS)(this.props),Object(b.fromJS)(e))||!Object(b.is)(Object(b.fromJS)(this.state),Object(b.fromJS)(t))}},{key:"render",value:function(){var e,t=this.props,a=t.language,n=t.name;return d.a.createElement(X,{className:"main__header"},d.a.createElement("h2",{className:"main__title"},d.a.createElement(T.a,{id:"main.title"})),d.a.createElement(J.a,{overlay:function(e,t){return d.a.createElement(N.a,{defaultSelectedKeys:[e],selectedKeys:[e],onClick:t},Object.keys(M.b).map(function(e){var t=M.b[e];return d.a.createElement(N.a.Item,{key:e},d.a.createElement("span",null,t.name))}))}(a,this.handleLanguage),placement:"bottomCenter",className:"main__dropdown"},d.a.createElement("div",{className:"main__dropdown-title"},d.a.createElement(L.a,{size:"small"},M.b[a]&&M.b[a].name))),d.a.createElement(J.a,{overlay:(e=this.handleUser,d.a.createElement(N.a,{onClick:e},d.a.createElement(N.a.Item,{key:"userInfo"},d.a.createElement(w.a,{type:"user"}),d.a.createElement("span",null,"\u4e2a\u4eba\u4fe1\u606f")),d.a.createElement(N.a.Item,{key:"password"},d.a.createElement(w.a,{type:"unlock"}),d.a.createElement("span",null,"\u4fee\u6539\u5bc6\u7801")),d.a.createElement(N.a.Divider,null),d.a.createElement(N.a.Item,{key:"logout"},d.a.createElement(w.a,{type:"poweroff"}),d.a.createElement("span",null,"\u6ce8\u9500")))),placement:"bottomCenter",className:"main__dropdown"},d.a.createElement("div",{className:"main__dropdown-title"},d.a.createElement("span",{className:"main__dropdown-title-text"},n),d.a.createElement(w.a,{type:"caret-down",style:{color:"rgba(0, 0, 0, .5)"}}))))}}]),t}(m.Component),A=Object(p.b)(function(e){return{language:e.user.language,name:e.user.name}},function(e){return{update_user:e.user.update_user,reset_user:e.user.reset_user}})(K),D=_.Content,H=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(s.a)(t).call(this,e))).updateUserInfo=Object(c.a)(r.a.mark(function e(){var t,n,c,l;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=a.props,n=t.history,c=t.getUserInfo,!(l=Object(f.b)("token"))){e.next=9;break}return a.setState({loading:!0}),e.next=6,c({id:l});case 6:a.setState({loading:!1}),e.next=10;break;case 9:n.push("/login");case 10:case"end":return e.stop()}},e,this)})),a.state={loading:!1},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.updateUserInfo()}},{key:"shouldComponentUpdate",value:function(e,t){return!Object(b.is)(Object(b.fromJS)(this.props),Object(b.fromJS)(e))||!Object(b.is)(Object(b.fromJS)(this.state),Object(b.fromJS)(t))}},{key:"render",value:function(){var e=this.props,t=e.history,a=e.location;return this.state.loading?d.a.createElement(y,null):d.a.createElement(_,null,d.a.createElement(I,{history:t,location:a}),d.a.createElement(_,null,d.a.createElement(A,{history:t}),d.a.createElement(D,null,d.a.createElement(h.a,{routes:h.c}))))}}]),t}(m.Component),P=Object(p.b)(function(){return{}},function(e){return{getUserInfo:e.user.getUserInfo}})(H);t.default=P}}]);
//# sourceMappingURL=6.edc91a31.chunk.js.map