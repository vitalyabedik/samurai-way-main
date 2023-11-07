/*! For license information please see 30.f1111c26.chunk.js.LICENSE.txt */
(self.webpackChunksocialite=self.webpackChunksocialite||[]).push([[30],{4030:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return H}});var r=s(5671),t=s(3144),o=s(136),i=s(5716),l=s(2791),a=s(7781),c=s(364),u=s(4930),f="Users_wrapper__OT2RO",d="Users_root__tKscV",p="Users_container__fRWCf",g="Users_usersHeader__LaH-t",h="Users_title__3iMuQ",_="Users_users__VlBFm",m=s(4942),v=s(885),j=s(1694),C=s.n(j),w="Pagination_pagination__U8zOJ",x="Pagination_pageNumber__DPNpC",U="Pagination_selectedPage__OzWfA",P="Pagination_button__FpH3j",N=s(184),F=function(e){for(var n=e.currentPage,s=e.pageSize,r=e.totalItemsCount,t=e.portionSize,o=void 0===t?10:t,i=e.onPageChanged,a=(0,l.useState)(Math.ceil(n/(o||10))),c=(0,v.Z)(a,2),u=c[0],f=c[1],d=Math.ceil(r/s),p=[],g=1;g<=d;g++)p.push(g);var h=Math.ceil(d/o),_=(u-1)*o+1,j=u*o;return(0,N.jsxs)("div",{className:w,children:[u>1&&(0,N.jsx)("button",{className:P,onClick:function(){f(u-1)},children:"PREV"}),p.filter((function(e){return e>=_&&e<=j})).map((function(e){return(0,N.jsx)("span",{className:C()((0,m.Z)({},U,n===e),x),onClick:function(){i(e)},children:e},e)})),h>u&&(0,N.jsx)("button",{className:P,onClick:function(){f(u+1)},children:"NEXT"})]})},b=s(1523),S="User_container__4L+kB",k="User_root__JUyZV",y="User_userPhoto__1J8oD",z="User_name__WlD78",Z="User_status__R27D+",I="User_buttonFollow__LlF-J",L="User_buttonUnfollow__sjbXd",O=s(1813),R=function(e){var n=e.user,s=e.followingInProgress,r=e.follow,t=e.unFollow,o=s.some((function(e){return e===n.id}));return(0,N.jsx)("div",{className:S,children:(0,N.jsxs)("div",{className:k,children:[(0,N.jsx)(b.OL,{to:"/profile/".concat(n.id),children:(0,N.jsx)("img",{className:y,src:n.photos.small?n.photos.small:O,alt:"user-image"})}),(0,N.jsx)("div",{className:z,children:n.name}),(0,N.jsx)("div",{className:Z,children:n.status?n.status:"No status"}),n.followed?(0,N.jsx)("button",{className:L,disabled:o,onClick:function(){var e;e=n.id,t(e)},children:"Unfollowing"}):(0,N.jsx)("button",{className:I,disabled:o,onClick:function(){var e;e=n.id,r(e)},children:"Following"})]})})},A="UsersFilteredButtons_root__oSj46",B="UsersFilteredButtons_button__Eo5Lq",D="UsersFilteredButtons_buttonSelected__0PWEq",M=function(e){var n=e.onFilterChanged,s=e.filter,r=function(e){return n(e)};return(0,N.jsxs)("div",{className:A,children:[(0,N.jsx)("button",{onClick:function(){return r({friend:null,term:s.term})},className:"".concat(B," ").concat(null===s.friend?D:""),children:"All"}),(0,N.jsx)("button",{onClick:function(){return r({friend:!0,term:s.term})},className:"".concat(B," ").concat(!0===s.friend?D:""),children:"Followed"}),(0,N.jsx)("button",{onClick:function(){return r({friend:!1,term:s.term})},className:"".concat(B," ").concat(!1===s.friend?D:""),children:"Unfollowed"})]})},V=function(e){var n=e.users,s=e.currentPage,r=e.pageSize,t=e.totalUsersCount,o=e.followingInProgress,i=e.filter,l=e.follow,a=e.unFollow,c=e.onPageChanged,u=e.onFilterChanged;return(0,N.jsx)("div",{className:f,children:(0,N.jsxs)("div",{className:d,children:[(0,N.jsxs)("div",{className:g,children:[(0,N.jsx)("h2",{className:h,children:"Users"}),(0,N.jsx)(M,{filter:i,onFilterChanged:u})]}),(0,N.jsxs)("div",{className:p,children:[(0,N.jsx)("div",{className:_,children:n.map((function(e){return(0,N.jsx)(R,{user:e,followingInProgress:o,follow:l,unFollow:a},e.id)}))}),(0,N.jsx)(F,{currentPage:s,pageSize:r,totalItemsCount:t,onPageChanged:c})]})]})})},q=s(3949),E=s(3449),J=s(1573),W=function(e){(0,o.Z)(s,e);var n=(0,i.Z)(s);function s(){var e;(0,r.Z)(this,s);for(var t=arguments.length,o=new Array(t),i=0;i<t;i++)o[i]=arguments[i];return(e=n.call.apply(n,[this].concat(o))).onPageChanged=function(n){var s=e.props,r=s.pageSize,t=s.filter;e.props.getUsers(n,r,t)},e.onFilterChanged=function(n){var s=e.props.pageSize;e.props.getUsers(1,s,n)},e}return(0,t.Z)(s,[{key:"componentDidMount",value:function(){var e=this.props,n=e.currentPage,s=e.pageSize;(0,e.getUsers)(n,s,{term:"",friend:null})}},{key:"render",value:function(){return(0,N.jsx)(N.Fragment,{children:this.props.isLoading?(0,N.jsx)(q.p,{}):(0,N.jsx)(V,{users:this.props.users,currentPage:this.props.currentPage,pageSize:this.props.pageSize,totalUsersCount:this.props.totalUsersCount,follow:this.props.follow,unFollow:this.props.unFollow,onPageChanged:this.onPageChanged,followingInProgress:this.props.followingInProgress,onFilterChanged:this.onFilterChanged,filter:this.props.filter})})}}]),s}(l.Component),H=(0,a.qC)((0,c.$j)((function(e){return{users:(0,J.Rf)(e),pageSize:(0,J.b7)(e),totalUsersCount:(0,J.qZ)(e),currentPage:(0,J.FZ)(e),isLoading:(0,J.Vc)(e),followingInProgress:(0,J.yg)(e),filter:(0,J.sw)(e)}}),{setUsers:u.fv,setCurrentPage:u.Io,getUsers:E.Zw,follow:E.iR,unFollow:E.NK}))(W)},1694:function(e,n){var s;!function(){"use strict";var r={}.hasOwnProperty;function t(){for(var e=[],n=0;n<arguments.length;n++){var s=arguments[n];if(s){var o=typeof s;if("string"===o||"number"===o)e.push(s);else if(Array.isArray(s)){if(s.length){var i=t.apply(null,s);i&&e.push(i)}}else if("object"===o)if(s.toString===Object.prototype.toString)for(var l in s)r.call(s,l)&&s[l]&&e.push(l);else e.push(s.toString())}}return e.join(" ")}e.exports?(t.default=t,e.exports=t):void 0===(s=function(){return t}.apply(n,[]))||(e.exports=s)}()}}]);
//# sourceMappingURL=30.f1111c26.chunk.js.map