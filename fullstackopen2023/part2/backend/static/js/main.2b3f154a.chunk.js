(this.webpackJsonpphonebook2=this.webpackJsonpphonebook2||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var c=n(3),a=n(9),o=n.n(a),u=n(4),r=n(2);var i=function(e){return Object(r.jsx)("input",{type:"text",placeholder:"Search...",onChange:e.onChange,value:e.value})};var s=function(e){return Object(r.jsxs)("form",{onSubmit:e.onSubmit,children:[Object(r.jsxs)("div",{children:["Name: ",Object(r.jsx)("input",{value:e.newName,onChange:e.nameChange})]}),Object(r.jsxs)("div",{children:["Number: ",Object(r.jsx)("input",{value:e.newNumber,onChange:e.numberChange})]}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{type:"submit",children:"Add person"})})]})};var l=function(e){return Object(r.jsx)("ul",{children:e.filteredData.map((function(t){return Object(r.jsxs)("li",{children:[t.name," ",t.number," ",Object(r.jsxs)("button",{onClick:e.onclick,id:t.id,children:[" delete ",t.name]})]},t.id)}))})},b=n(28),j={getAll:function(){return b.a.get("http://localhost:3001/api/persons").then((function(e){return e.data}))}},d=(n(25),function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],a=t[1],o=Object(c.useState)(""),b=Object(u.a)(o,2),d=b[0],h=b[1],m=Object(c.useState)(""),f=Object(u.a)(m,2),O=f[0],v=f[1],p=Object(c.useState)(""),g=Object(u.a)(p,2),x=g[0],w=g[1],C=Object(c.useState)(0),S=Object(u.a)(C,2),k=S[0],N=S[1],D=Object(c.useState)(null),y=Object(u.a)(D,2),A=y[0],L=y[1];Object(c.useEffect)((function(){j.getAll().then((function(e){a(e)}))}),[k]);var E=n.filter((function(e){return""===x?e:e.name.toLowerCase().includes(x.toLowerCase())})),J=function(e){var t=e.message;return null===t?null:Object(r.jsx)("div",{className:"successMessage",children:t})};return Object(r.jsxs)("div",{className:"bgd",children:[Object(r.jsx)("h2",{children:"Phonebook"}),Object(r.jsx)(i,{onChange:function(e){return w(e.target.value)},value:x}),Object(r.jsx)("h3",{children:"Add a new contact"}),Object(r.jsx)(J,{message:A}),Object(r.jsx)(s,{onSubmit:function(e){e.preventDefault(),n.map((function(e){return e.name.toLowerCase()})).includes(d.toLowerCase())?window.confirm("".concat(d," is already in the phonebook. Do you want to overwrite the number?"))&&j.updateUser(d,O).then((function(){N((function(e){return e+1})),L("".concat(d,"'s number has been updated to ").concat(O,".")),setTimeout((function(){L(null)}),5e3)})):(j.create({name:d,number:O,id:d}).then((function(e){a(n.concat(e)),L("".concat(d," has been added.")),setTimeout((function(){L(null)}),5e3)})),h(""),v(""))},newName:d,nameChange:function(e){e.preventDefault(),h(e.target.value)},newNumber:O,numberChange:function(e){e.preventDefault(),v(e.target.value)}}),Object(r.jsx)("h2",{children:"Numbers"}),Object(r.jsx)(l,{filteredData:E,onclick:function(e){return t=e,void(window.confirm("Do you want to delete user ".concat(t.target.name,"?"))&&(console.log(t),j.deleteUser(t.target.id).then((function(){N((function(e){return e+1}))}))));var t}})]})});o.a.createRoot(document.getElementById("root")).render(Object(r.jsx)(d,{}))}},[[26,1,2]]]);
//# sourceMappingURL=main.2b3f154a.chunk.js.map