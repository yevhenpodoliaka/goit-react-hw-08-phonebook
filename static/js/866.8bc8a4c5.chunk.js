"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[866],{5873:function(n,e,t){t.d(e,{II:function(){return l},Pv:function(){return b},__:function(){return p},l0:function(){return d},un:function(){return x}});var r,a,o,i,c,s=t(168),u=t(6444),d=u.ZP.form(r||(r=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n  background-color: #f1f1f1;\n  padding: 8px;\n  gap: 8px;\n  border-radius: 4px;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),p=u.ZP.label(a||(a=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n\n"]))),l=u.ZP.input(o||(o=(0,s.Z)(["\n  border: none;\n  border-bottom:1px solid black;\n  outline: none;\n  background-color:transparent;\n"]))),x=u.ZP.button(i||(i=(0,s.Z)(["\ntext-transform:uppercase;\n  display: block;\n  margin: 0 auto;\n  padding: 8px;\n  background-color: blue;\n  color: white;\n  border-radius: 4px;\n  &:hover {\n    background-color: aqua;\n    color: blue;\n  }\n"]))),b=u.ZP.div(c||(c=(0,s.Z)(["\npadding:12px;\n  background-color: #f3f3f3;\n  border-radius: 4px;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"])))},3866:function(n,e,t){t.r(e),t.d(e,{default:function(){return Z}});var r,a,o=t(885),i=t(168),c=t(6444),s=c.ZP.li(r||(r=(0,i.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  padding:4px;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),u=c.ZP.button(a||(a=(0,i.Z)(["\n  position:absolute; \n  top:8px;\n  right:8px;\n  padding:8px; \n"]))),d=t(3329),p=function(n){var e=n.name,t=n.number,r=n.onDeleteContact;return(0,d.jsxs)(s,{children:[(0,d.jsx)("p",{children:e}),(0,d.jsx)("p",{children:t}),(0,d.jsx)(u,{type:"button",onClick:r,children:"delete"})]})},l=t(5048),x=t(5052),b=t(6925),f=function(){var n=(0,b.wY)().data,e=(0,b.Nt)(),t=(0,o.Z)(e,1)[0],r=(0,l.v9)(x.B8),a=function(){var e=r.toLowerCase();return null===n||void 0===n?void 0:n.filter((function(n){return n.name.toLowerCase().includes(e)}))}();return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("ul",{children:a?null===a||void 0===a?void 0:a.map((function(n){var e=n.id,r=n.name,a=n.number;return(0,d.jsx)(p,{name:r,number:a,onDeleteContact:function(){return t(e)}},e)})):(0,d.jsx)("p",{children:"Loading Contact ..."})}),0===(null===n||void 0===n?void 0:n.length)&&(0,d.jsx)("p",{children:"there are not contacts"})]})},h=t(2791),m=t(4037),g=t(5873);var v=function(){var n=(0,h.useState)(""),e=(0,o.Z)(n,2),t=e[0],r=e[1],a=(0,h.useState)(""),i=(0,o.Z)(a,2),c=i[0],s=i[1],u=(0,b.Tn)(),p=(0,o.Z)(u,2),l=p[0],x=p[1],f=x.isSuccess,v=x.data,j=(0,b.wY)().data;(0,h.useEffect)((function(){f&&m.ZP.success("contact ".concat(v.name," add in list"))}),[f,v]);var Z=function(n){var e=n.currentTarget,t=e.name,a=e.value;switch(t){case"name":r(a);break;case"number":s(a)}};return(0,d.jsxs)(g.l0,{onSubmit:function(n){n.preventDefault(),j.find((function(n){return n.name.toLowerCase()===t.toLowerCase()}))?m.ZP.error("".concat(t," is already in contacts")):l({name:t,number:c}),r(""),s("")},style:{display:"flex",flexDirection:"column"},children:[(0,d.jsxs)(g.__,{children:["Name",(0,d.jsx)(g.II,{value:t,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:Z})]}),(0,d.jsxs)(g.__,{children:["Number",(0,d.jsx)(g.II,{value:c,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:Z})]}),(0,d.jsx)(g.un,{type:"submit",children:"Add Contact"})]})},j=function(){var n=(0,l.v9)(x.B8),e=(0,l.I0)();return(0,d.jsx)(g.Pv,{children:(0,d.jsxs)(g.__,{children:["Find contacts by name",(0,d.jsx)(g.II,{type:"text",value:n,onChange:function(n){e((0,x.Tv)(n.target.value))}})]})})};function Z(){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("h2",{children:"ContactListPage"}),(0,d.jsx)(v,{}),(0,d.jsx)(j,{}),(0,d.jsx)(f,{})]})}}}]);
//# sourceMappingURL=866.8bc8a4c5.chunk.js.map