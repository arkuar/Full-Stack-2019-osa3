(window.webpackJsonppuhelinluettelo=window.webpackJsonppuhelinluettelo||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},20:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(13),r=t(2),u=t(0),c=t.n(u),o=t(14),l=t.n(o),i=(t(20),t(3)),m=t.n(i),s="/api/persons",f=function(){return m.a.get(s).then((function(e){return e.data}))},d=function(e){return m.a.post(s,e).then((function(e){return e.data}))},p=function(e){return m.a.delete("".concat(s,"/").concat(e))},b=function(e,n){return m.a.put("".concat(s,"/").concat(e),n).then((function(e){return e.data}))};function h(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}var v=function(e){var n=e.person,t=e.handleDelete;return c.a.createElement("div",null,n.name," ",n.number," ",c.a.createElement("button",{onClick:function(){return t(n)}},"delete"))},O=function(e){var n=e.value,t=e.handleChange;return c.a.createElement("div",null,"filter shown with ",c.a.createElement("input",{value:n,onChange:t}))},E=function(e){var n=e.submit,t=e.nameValue,a=e.numberValue,r=e.handleNameChange,u=e.handleNumberChange;return c.a.createElement("form",{onSubmit:n},c.a.createElement("div",null,"name: ",c.a.createElement("input",{value:t,onChange:r,required:!0})),c.a.createElement("div",null,"number: ",c.a.createElement("input",{value:a,onChange:u,required:!0})),c.a.createElement("div",null,c.a.createElement("button",{type:"submit"},"add")))},g=function(e){var n=e.persons,t=e.handleDelete;return c.a.createElement("div",null,n.map((function(e){return c.a.createElement(v,{key:e.name,person:e,handleDelete:t})})))},j=function(e){var n=e.type,t=e.message;return null===t?null:c.a.createElement("div",{className:n},t)};l.a.render(c.a.createElement((function(){var e=Object(u.useState)([]),n=Object(r.a)(e,2),t=n[0],o=n[1],l=Object(u.useState)(""),i=Object(r.a)(l,2),m=i[0],s=i[1],v=Object(u.useState)(""),w=Object(r.a)(v,2),y=w[0],C=w[1],D=Object(u.useState)(""),P=Object(r.a)(D,2),S=P[0],k=P[1],U=Object(u.useState)(null),N=Object(r.a)(U,2),V=N[0],q=N[1],A=Object(u.useState)(""),I=Object(r.a)(A,2),J=I[0],x=I[1];Object(u.useEffect)((function(){f().then((function(e){o(e)}))}),[]);var B=function(){setTimeout((function(){q(null),x(null)}),5e3)},T=S?t.filter((function(e){return e.name.toUpperCase().includes(S.toUpperCase())})):t;return c.a.createElement("div",null,c.a.createElement("h2",null,"Phonebook"),c.a.createElement(j,{type:J,message:V}),c.a.createElement(O,{value:S,handleChange:function(e){k(e.target.value)}}),c.a.createElement("h3",null,"Add a new"),c.a.createElement(E,{submit:function(e){if(e.preventDefault(),t.some((function(e){return e.name.toUpperCase()===m.toUpperCase()}))){if(window.confirm("".concat(m," is already added to phonebook, replace the old number with a new one?"))){var n=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?h(t,!0).forEach((function(n){Object(a.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},t.find((function(e){return e.name.toUpperCase()===m.toUpperCase()})),{number:y});b(n.id,n).then((function(e){o(t.map((function(t){return t.id!==n.id?t:e}))),s(""),C(""),q("Updated ".concat(e.name)),x("success"),B()})).catch((function(e){q("Information of ".concat(n.name," has already been removed from server")),x("error"),o(t.filter((function(e){return e.id!==n.id}))),B()}))}}else{var r={name:m,number:y};d(r).then((function(e){o(t.concat(e)),s(""),C(""),q("Added ".concat(r.name)),x("success"),B()}))}},nameValue:m,numberValue:y,handleNameChange:function(e){s(e.target.value)},handleNumberChange:function(e){C(e.target.value)}}),c.a.createElement("h3",null,"Numbers"),c.a.createElement(g,{persons:T,handleDelete:function(e){window.confirm("Delete ".concat(e.name,"?"))&&p(e.id).then((function(){o(t.filter((function(n){return n.id!==e.id}))),q("Deleted ".concat(e.name)),x("success"),B()}))}}))}),null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.3f1b7ac9.chunk.js.map