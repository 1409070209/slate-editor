(this["webpackJsonpslate-demo"]=this["webpackJsonpslate-demo"]||[]).push([[0],{225:function(e,t,n){},242:function(e,t,n){},480:function(e,t,n){"use strict";n.r(t);var r,c,i=n(0),a=n(32),o=n.n(a),l=(n(225),n(28)),s=(n(226),n(220)),b=n.n(s),j=(n(113),n(72)),u=n.n(j),d=n(4),g=(n(242),n(35)),O=n(3);!function(e){e.bold="bold",e.code="code",e.italic="italic",e.underline="underline",e.color="color",e.background="background",e.link="link"}(r||(r={})),function(e){e.orderList="orderList",e.listItem="listItem",e.unOrderList="unOrderList",e.image="image"}(c||(c={}));n(59);var h=n(33),f=n.n(h),x=n(14),p=n(203),v=n(204),m=n(29),y=(n(147),n(70)),w=n.n(y),k=function(e){e=e.trim();return/(((^https?:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%\/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[\w]*))?)$/.test(e)},E=function(e,t){if(!e.selection)return!1;var n=O.a.marks(e);return!!n&&n[t]},L=function(e,t,n){E(e,t)?O.a.removeMark(e,t):O.a.addMark(e,t,n)},S=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},C=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},D=n(10);function K(e){var t=e.children,n=e.leaf,c=e.attributes,i=n.link,a=Object(g.f)(),o=Object(D.jsxs)(D.Fragment,{children:[Object(D.jsxs)(f.a,{type:"text",onClick:function(){return window.open(i)},children:[Object(D.jsx)(p.a,{}),"\u8bbf\u95ee"]}),Object(D.jsxs)(f.a,{type:"text",onMouseDown:function(){return function(e){if(e){var t,n=O.a.nodes(a,{at:e}),c=Object(x.a)(n);try{for(c.s();!(t=c.n()).done;){var i=t.value,o=Object(d.a)(i,2),l=o[0],s=o[1];O.g.isText(l)&&S(l,r.link)&&(O.h.setSelection(a,{anchor:{offset:0,path:s},focus:{offset:l.text.length,path:s}}),O.a.removeMark(a,r.link))}}catch(b){c.e(b)}finally{c.f()}}}(a.selection)},children:[Object(D.jsx)(v.a,{}),"\u53d6\u6d88\u94fe\u63a5"]})]});return Object(D.jsx)("span",Object(l.a)(Object(l.a)({},c),{},{children:Object(D.jsx)(u.a,{title:o,placement:"bottom",color:"white",trigger:"click",children:Object(D.jsx)("a",{href:i,children:t})})}))}function N(e){var t=e.attributes,n=e.children,c=e.leaf,i={};return n||(n=Object(D.jsx)(D.Fragment,{})),c[r.bold]&&(i=Object.assign(i,c[r.bold])),c[r.italic]&&(i=Object.assign(i,c[r.italic])),c[r.underline]&&(i=Object.assign(i,c[r.underline])),c[r.color]&&(i=Object.assign(i,c[r.color])),c[r.background]&&(i=Object.assign(i,c[r.background])),c.link&&(n=Object(D.jsx)(K,Object(l.a)(Object(l.a)({},e),{},{children:e.children}))),Object(D.jsx)("span",Object(l.a)(Object(l.a)({},t),{},{style:i,children:n}))}var M=n(206),I=n(207),T=n(208),F=n(209),R=n(210),_=n(211),A=n(212),Y=n(213),z=new Map;z.set(c.orderList,c.listItem),z.set(c.unOrderList,c.listItem);var B=function(e){var t,n=Object(x.a)(z);try{for(n.s();!(t=n.n()).done;){var r=t.value[0];if(C(e,r))return!0}}catch(c){n.e(c)}finally{n.f()}return!1},H=function(e){var t=[];for(var n in c)C(e,n)&&t.push(n);return t},P=function(e,t){var n,r=O.a.nodes(e,{match:function(e){return!O.a.isEditor(e)&&O.b.isElement(e)&&C(e,t)}}),c=Object(x.a)(r);try{for(c.s();!(n=c.n()).done;){var i=n.value[0];if(O.b.isElement(i))return C(i,t)}}catch(a){c.e(a)}finally{c.f()}return!1};function q(e){var t=e.type,n=e.value,r=e.icon,c=Object(g.e)();return Object(D.jsx)(D.Fragment,{children:Object(D.jsx)(f.a,{icon:r,onMouseDown:function(){c.selection&&function(e,t){var n,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},c=P(e,t),i=z.has(t);O.h.unwrapNodes(e,{split:!0,match:function(e){return!O.a.isEditor(e)&&O.b.isElement(e)&&B(e)}}),c?O.h.unsetNodes(e,z.get(t)):i?O.h.setNodes(e,Object(m.a)({},z.get(t),r)):O.h.setNodes(e,Object(m.a)({},t,r)),!c&&i&&O.h.wrapNodes(e,(n={},Object(m.a)(n,t,r),Object(m.a)(n,"children",[]),n))}(c,t,n)},type:P(c,t)?"primary":"text",children:t})})}var J=n(219),W=function(e){var t=e.insertData,n=e.isVoid,r=e.normalizeNode,i=e.apply;return e.isVoid=function(e){return!!C(e,c.image)||n(e)},e.insertData=function(n){var r=n.getData("text/plain");k(r)?function(e,t){O.h.insertNodes(e,[{text:t,link:t},{text:""}])}(e,r):t(n)},e.apply=function(e){i(e)},e.normalizeNode=function(t){var n=Object(d.a)(t,2),c=n[0],i=n[1];if(O.b.isElement(c)&&c.children.length>1&&O.g.isText(c.children[0])&&0===c.children[0].text.length){if(r(t),!e.selection)return;O.h.setSelection(e,{anchor:{offset:0,path:i.concat(0)},focus:{offset:0,path:i.concat(0)}})}else r(t)},e},G=(n(306),n(217)),V=n.n(G),$=(n(308),n(218)),U=n.n($);function Z(e){var t=e.type,n=e.icon,r=Object(g.f)(),a=Object(i.useState)(""),o=Object(d.a)(a,2),l=o[0],s=o[1],b=Object(i.useState)(!1),j=Object(d.a)(b,2),u=j[0],h=j[1],x=Object(i.useState)(null),p=Object(d.a)(x,2),v=p[0],y=p[1];return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(V.a,{title:"\u8bf7\u8f93\u5165\u56fe\u7247url",visible:u,onOk:function(){if(!k(l))return w.a.error("\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u56fe\u7247URL");!function(e,t,n){var r;k(t)?O.h.insertNodes(e,(r={},Object(m.a)(r,c.image,{url:t}),Object(m.a)(r,"children",[{text:t}]),r),{at:n||e.selection||O.a.end(e,[])}):w.a.error("\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u56fe\u7247URL")}(r,l,v||r.selection),h(!1),s("")},onCancel:function(){return h(!1)},getContainer:!1,children:Object(D.jsx)(U.a,{placeholder:"\u8bf7\u8f93\u5165\u56fe\u7247url",onChange:function(e){s(e.target.value)},value:l})}),Object(D.jsx)(f.a,{icon:n,onMouseDown:function(e){e.preventDefault(),h(!0),y(r.selection)},type:"text",children:t})]})}function Q(e){var t=e.type,n=e.value,r=e.icon,c=Object(g.e)();return Object(D.jsx)(f.a,{icon:r,onMouseDown:function(){L(c,t,n)},type:E(c,t)?"primary":"text",children:t})}function X(e){var t=e.element,n=e.attributes,r=e.children,i=Object(g.d)(),a=Object(g.c)(),o=t[c.image];return Object(D.jsxs)("span",Object(l.a)(Object(l.a)({},n),{},{children:[Object(D.jsx)("span",{contentEditable:"false",suppressContentEditableWarning:!0,children:Object(D.jsx)("img",{src:o&&o.url,alt:"\u56fe\u7247",style:{maxWidth:"100%",maxHeight:"20em",boxShadow:"".concat(i&&a?"0 0 0 3px #B4D5FF":"none")}})}),r]}))}n(146);var ee,te,ne=n(100),re=n.n(ne),ce=n(205),ie=["rgb(0, 0, 0)","rgb(38, 38, 38)","rgb(89, 89, 89)","rgb(140, 140, 140)","rgb(191, 191, 191)","rgb(217, 217, 217)","rgb(233, 233, 233)","rgb(245, 245, 245)","rgb(250, 250, 250)","rgb(255, 255, 255)","rgb(245, 34, 45)","rgb(250, 84, 28)","rgb(250, 140, 22)","rgb(250, 219, 20)","rgb(82, 196, 26)","rgb(19, 194, 194)","rgb(24, 144, 255)","rgb(47, 84, 235)","rgb(114, 46, 209)","rgb(235, 47, 150)","rgb(255, 232, 230)","rgb(255, 236, 224)","rgb(255, 239, 209)","rgb(252, 252, 202)","rgb(228, 247, 210)","rgb(211, 245, 240)","rgb(212, 238, 252)","rgb(222, 232, 252)","rgb(239, 225, 250)","rgb(250, 225, 235)","rgb(255, 163, 158)","rgb(255, 187, 150)","rgb(255, 213, 145)","rgb(255, 251, 143)","rgb(183, 235, 143)","rgb(135, 232, 222)","rgb(145, 213, 255)","rgb(173, 198, 255)","rgb(211, 173, 247)","rgb(255, 173, 210)","rgb(255, 77, 79)","rgb(255, 122, 69)","rgb(255, 169, 64)","rgb(255, 236, 61)","rgb(115, 209, 61)","rgb(54, 207, 201)","rgb(64, 169, 255)","rgb(89, 126, 247)","rgb(146, 84, 222)","rgb(247, 89, 171)","rgb(207, 19, 34)","rgb(212, 56, 13)","rgb(212, 107, 8)","rgb(212, 177, 6)","rgb(56, 158, 13)","rgb(8, 151, 156)","rgb(9, 109, 217)","rgb(29, 57, 196)","rgb(83, 29, 171)","rgb(196, 29, 127)","rgb(130, 0, 20)","rgb(135, 20, 0)","rgb(135, 56, 0)","rgb(97, 71, 0)","rgb(19, 82, 0)","rgb(0, 71, 79)","rgb(0, 58, 140)","rgb(6, 17, 120)","rgb(34, 7, 94)","rgb(120, 6, 80)"];function ae(e){var t=e.onColorChange;return Object(D.jsx)("div",{style:{padding:10,backgroundColor:"white",boxShadow:"0 2px 10px rgb(0 0 0 / 12%)"},children:Object(D.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(10, 30px)",gridColumnGap:5,gridRowGap:5},children:ie.map((function(e){return Object(D.jsx)("span",{"data-color":e,onMouseDown:function(n){return t(e,n)},style:{width:20,height:20,backgroundColor:e,display:"inline-block",cursor:"pointer"}},e)}))})})}function oe(e){var t=e.type,n=e.icon,r=Object(g.e)(),c=Object(i.useState)(void 0),a=Object(d.a)(c,2),o=a[0],l=a[1];Object(i.useEffect)((function(){if(r.selection){var e=O.a.marks(r);e&&e[t]?l(e[t]):l(void 0)}}),[r,r.selection,t]);return Object(D.jsx)(re.a.Button,{overlay:Object(D.jsx)(ae,{onColorChange:function(e,n){r.selection&&L(r,t,Object(m.a)({},t,e))}}),icon:Object(D.jsx)(ce.a,{}),placement:"bottomRight",buttonsRender:function(){return[Object(D.jsx)(f.a,{icon:n,type:"text",onMouseDown:function(){return L(r,t)},style:{borderBottom:o?"2px solid ".concat(o[t]):""},children:t}),Object(D.jsx)(f.a,{type:"text",icon:Object(D.jsx)(ce.a,{})})]}})}!function(e){e.ALT_KEY="altKey",e.SHIFT_KEY="shiftKey",e.CTRL_KEY="ctrlKey",e.META_KEY="metaKey"}(ee||(ee={})),function(e){e.ENTER="Enter",e.DEL="Backspace"}(te||(te={}));var le=new Map,se=function(e,t){var n=[ee.CTRL_KEY,ee.SHIFT_KEY,ee.META_KEY,ee.ALT_KEY].reduce((function(t,n){return t+(e[n]?n:"")}),"");if(le.has(n+e.key)){var r=le.get(n+e.key);r&&r(t,e)&&e.preventDefault()}},be=[g.g,J.a,W];function je(e){var t=e.nodes,n=e.setNodeList,a=Object(i.useMemo)((function(){return be.reduce((function(e,t){return t(e)}),Object(O.i)())}),[]),o=Object(i.useCallback)((function(e){return Object(D.jsx)(N,Object(l.a)(Object(l.a)({},e),{},{children:e.children}))}),[]);return Object(D.jsx)("div",{className:"slate-editor",children:Object(D.jsxs)(g.b,{value:t,editor:a,onChange:n,children:[Object(D.jsx)(Q,{icon:Object(D.jsx)(M.a,{}),type:r.bold,value:{fontWeight:"bold"}}),Object(D.jsx)(Q,{icon:Object(D.jsx)(I.a,{}),type:r.italic,value:{fontStyle:"oblique"}}),Object(D.jsx)(Q,{icon:Object(D.jsx)(T.a,{}),type:r.underline,value:{textDecoration:"underline"}}),Object(D.jsx)(oe,{type:r.color,icon:Object(D.jsx)(F.a,{})}),Object(D.jsx)(oe,{type:r.background,icon:Object(D.jsx)(R.a,{})}),Object(D.jsx)(q,{icon:Object(D.jsx)(_.a,{}),type:c.orderList,value:[]}),Object(D.jsx)(q,{icon:Object(D.jsx)(A.a,{}),type:c.unOrderList,value:[]}),Object(D.jsx)(Z,{icon:Object(D.jsx)(Y.a,{}),type:c.image}),Object(D.jsx)("hr",{}),Object(D.jsx)(g.a,{renderElement:function(e){var t=e.element,n=e.attributes,r=e.children;return r=t[c.orderList]?Object(D.jsx)("ol",Object(l.a)(Object(l.a)({},n),{},{children:r})):t[c.unOrderList]?Object(D.jsx)("ul",Object(l.a)(Object(l.a)({},n),{},{children:r})):t[c.listItem]?Object(D.jsx)("li",Object(l.a)(Object(l.a)({},n),{},{children:r})):t[c.image]?Object(D.jsx)(X,Object(l.a)(Object(l.a)({},e),{},{children:e.children})):Object(D.jsx)("div",Object(l.a)(Object(l.a)({},n),{},{children:r}))},renderLeaf:o,onKeyDown:function(e){return se(e,a)},placeholder:"rich demo",spellCheck:!0,autoFocus:!0})]})})}var ue=[{children:[{text:"\u4f7f\u7528Slate + TypeScript + React Hook + Antd\u5b9e\u73b0\u7684\u6570\u636e\u9a71\u52a8\u7684\u5bcc\u6587\u672c\u7f16\u8f91\u5668\uff0c\u6682\u65f6\u4e0d\u652f\u6301\u4ee3\u7801\u9ad8\u4eae\uff0c\u4f7f\u7528\u7c7b\u4f3cVirtual Dom\u7684\u673a\u5236\u548c\u601d\u60f3\u53bb\u5b9e\u73b0\u7f16\u8f91\u5668\u529f\u80fd.\u6269\u5c55\u6027\u5c06\u66f4\u597d"}]},{image:{url:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"},children:[{text:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"}]},{orderList:[],children:[{children:[{text:"\u6709\u987a\u5e8f\u5217\u8868"}],listItem:[]},{children:[{text:"\u6709\u987a\u5e8f\u5217\u8868\u52a0\u7c97\u6837\u5f0f",bold:{fontWeight:"bold"}}],listItem:[]}]},{children:[{bold:{fontWeight:"bold"},text:""}]},{unOrderList:[],children:[{children:[{text:"\u65e0\u987a\u5e8f\u5217\u8868",italic:{fontStyle:"oblique"}}],listItem:[]},{children:[{italic:{fontStyle:"oblique"},text:"\u65e0\u987a\u5e8f\u5217\u8868\u52a0\u989c\u8272",color:{color:"rgb(235, 47, 150)"}}],listItem:[]}]}];var de=function(){var e=Object(i.useState)(ue),t=Object(d.a)(e,2),n=t[0],r=t[1];n.length<1&&r([{children:[{text:""}]}]),H(n[n.length-1]).length&&r(n.concat({children:[{text:""}]}));var c={columns:[{title:"\u8282\u70b9\u7c7b\u578b",dataIndex:"type",key:"type",width:100,render:function(e,t){var n=O.b.isElement(t)?H(t):[];return JSON.stringify(n)}},{title:"\u8282\u70b9value",dataIndex:"children",key:"children",width:100,render:function(e,t){return Object(D.jsx)(u.a,{color:"white",title:Object(D.jsx)("pre",{style:{color:"black"},children:JSON.stringify(t,null,2)}),children:Object(D.jsx)("p",{style:{width:100,textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"},children:JSON.stringify(t)})})}}],pagination:!1,rowKey:function(){return Math.random()},dataSource:n};return Object(D.jsxs)("div",{className:"App",children:[Object(D.jsx)("div",{className:"node-list",children:Object(D.jsx)(b.a,Object(l.a)({},c))}),Object(D.jsx)(je,{nodes:n,setNodeList:r})]})},ge=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,488)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),i(e),a(e)}))};o.a.render(Object(D.jsx)(D.Fragment,{children:Object(D.jsx)(de,{})}),document.getElementById("root")),ge()}},[[480,1,2]]]);
//# sourceMappingURL=main.f880e139.chunk.js.map