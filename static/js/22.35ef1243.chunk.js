(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{421:function(e,t,n){"use strict";var a=n(0),c=n.n(a),l=n(4),o=n.n(l),r=(n(422),Object(a.memo)(function(e){return c.a.createElement("article",{className:o()("layout",e.className),style:e.style},e.children)})),s=Object(a.memo)(function(e){return c.a.createElement("header",{className:o()("layout-header",e.className),style:e.style},e.children)}),i=n(423),u=n.n(i),d=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];return o.a.apply(void 0,["layout-sider".concat(e)].concat(n))},m=Object(a.memo)(function(e){return c.a.createElement("div",{className:d("",e.className),style:e.style},c.a.createElement("div",{className:d("__top")},c.a.createElement("img",{alt:"logo",className:d("__logo"),src:u.a}),c.a.createElement("span",{className:d("__name")},"Laboratory")),e.children)}),f=Object(a.memo)(function(e){return c.a.createElement("section",{className:o()("layout-content",e.className),style:e.style},e.children)}),g=Object(a.memo)(function(e){return c.a.createElement("div",{className:o()("layout-container",e.className),style:e.style},c.a.createElement("div",{className:o()("layout-wrapper",e.wrapperClassName),style:e.wrapperStyle},e.children))});n.d(t,"d",function(){return r}),n.d(t,"c",function(){return s}),n.d(t,"e",function(){return m}),n.d(t,"b",function(){return f}),n.d(t,"a",function(){return g})},422:function(e,t,n){},423:function(e,t,n){e.exports=n.p+"static/media/logo.ee7cd8ed.svg"},778:function(e,t,n){"use strict";n.r(t);n(460);var a=n(459),c=(n(236),n(151)),l=n(7),o=n(8),r=n(15),s=n(14),i=n(16),u=n(0),d=n.n(u),m=n(79),f=n(421),g=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(r.a)(this,Object(s.a)(t).call(this,e))).getListPersons=function(){n.setState({loading:!0}),m.b.getListPersons({page:1,size:2},{cancelToken:n.source.token}).then(function(e){n.setState({loading:!1,data:e.data})},function(e){m.a.isCancel(e)||(c.a.error(e.message),n.setState({loading:!1}))})},n.state={data:[],loading:!1},n.source=m.a.CancelToken.source(),n.columns=[{title:"Name",align:"center",dataIndex:"name",filters:[{text:"London",value:"London"},{text:"New York",value:"New York"}],filterMultiple:!1},{title:"Age",align:"center",dataIndex:"age",sorter:function(e,t){console.log("商品数量排序",e,t)}},{title:"Address",align:"center",dataIndex:"address"},{title:"Action",align:"center",render:function(e,t,a){return d.a.createElement("div",{className:"btns"},d.a.createElement("button",{onClick:n.test},"Check"),d.a.createElement("button",null,"Edit"),d.a.createElement("button",null,"Delete"))}}],n}return Object(i.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getListPersons()}},{key:"componentWillUnmount",value:function(){this.source.cancel()}},{key:"render",value:function(){var e=this.columns,t=this.state,n=t.data,c=t.loading;return d.a.createElement(f.a,null,d.a.createElement(a.a,{className:"desktop-table",columns:e,dataSource:n,loading:c,onChange:function(e,t,n){console.log(t)},rowKey:"id",size:"small"}))}}]),t}(u.PureComponent);t.default=g}}]);