(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s,o=n(7),c=n.n(o),i=n(6),r=n(8),a=n(1),u=n(4),l=n.n(u),b=(n(13),n(14),n(0)),d=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(s||(s={}));var j=function(){var t=Object(a.useState)(!1),e=Object(i.a)(t,2),n=e[0],o=e[1],c=Object(a.useState)(s.NONE),u=Object(i.a)(c,2),j=u[0],N=u[1],h=function(t,e,n){var o=Object(r.a)(t);return e!==s.NONE&&(e===s.ALPHABET&&o.sort((function(t,e){return t.localeCompare(e)})),e===s.LENGTH&&o.sort((function(t,e){return t.length-e.length}))),n?o.reverse():o}(d,j,n);return Object(b.jsxs)("div",{className:"section content",children:[Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{type:"button",className:l()({"button is-info":j===s.ALPHABET,"button is-info is-light":j!==s.ALPHABET}),onClick:function(){return N(s.ALPHABET)},children:"Sort alphabetically"}),Object(b.jsx)("button",{type:"button",className:l()({"button is-info":j===s.LENGTH,"button is-info is-light":j!==s.LENGTH}),onClick:function(){return N(s.LENGTH)},children:"Sort by length"}),Object(b.jsx)("button",{type:"button",className:l()({"button is-info":!0===n,"button is-info is-light":!1===n}),onClick:function(){return o(!n)},children:"Reverse"}),j!==s.NONE||!1!==n?Object(b.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){o(!1),N(s.NONE)},children:"Reset"}):null]}),Object(b.jsx)("div",{className:"is-flex is-justify-content-center",children:Object(b.jsx)("div",{className:"has-text-centered",children:h.map((function(t){return Object(b.jsx)("div",{children:Object(b.jsx)("div",{"data-cy":"Good",className:"box column is-info is-rounded mb-3",children:t},t)})}))})})]})};c.a.render(Object(b.jsx)(j,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.d915f238.chunk.js.map