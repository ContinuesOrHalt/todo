(this["webpackJsonptodo-hoanvu"]=this["webpackJsonptodo-hoanvu"]||[]).push([[0],{15:function(e,t,c){},18:function(e,t,c){},19:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),l=c(10),s=c.n(l),r=(c(15),c(5)),i=c(2),o=c(8),u=c(3),j=c(4),d=c.n(j),b=c(0),h=d()().format("Y-MM-DD"),x={name:"",description:"",dueDate:h,priority:"normal"},O=function(e){var t=e.value,c=e.onChange,a=e.isUpdate,l=Object(n.useState)(Object(u.a)(Object(u.a)({},x),t)),s=Object(i.a)(l,2),r=s[0],j=s[1],O=function(e){return function(t){j(Object(u.a)(Object(u.a)({},r),{},Object(o.a)({},e,t.target.value)))}};return Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),c(Object(u.a)({id:d()().unix()},r)),a||j(Object(u.a)({},x))},children:[Object(b.jsx)("input",{required:!0,value:r.name,placeholder:"Add new task ...",onChange:O("name"),className:"w-full mb-20"}),Object(b.jsxs)("div",{className:"mb-20",children:[Object(b.jsx)("p",{className:"text-label",children:"Description"}),Object(b.jsx)("textarea",{required:!0,value:r.description,onChange:O("description"),className:"w-full",rows:10})]}),Object(b.jsxs)("div",{className:"flex gap-20 mb-20",children:[Object(b.jsxs)("div",{className:"flex-1",children:[Object(b.jsx)("p",{className:"text-label",children:"Due Date"}),Object(b.jsx)("input",{type:"date",required:!0,value:r.dueDate,onChange:O("dueDate"),className:"w-full",min:h})]}),Object(b.jsxs)("div",{className:"flex-1",children:[Object(b.jsx)("p",{className:"text-label",children:"Priority"}),Object(b.jsxs)("select",{required:!0,value:r.priority,onChange:O("priority"),className:"w-full",children:[Object(b.jsx)("option",{value:"low",children:"Low"}),Object(b.jsx)("option",{value:"normal",children:"Normal"}),Object(b.jsx)("option",{value:"hight",children:"Hight"})]})]})]}),Object(b.jsx)("button",{className:"btn bg-green w-full text-white",children:a?"Update":"Add"})]})};var f=function(e,t){return d()(e.dueDate,"Y-MM-DD").unix()-d()(t.dueDate,"Y-MM-DD").unix()},p=function(e){var t=e.task,c=e.onUpdate,a=e.onRemove,l=e.isSelected,s=e.onSelect,r=Object(n.useState)(!1),o=Object(i.a)(r,2),u=o[0],j=o[1];return Object(b.jsxs)("div",{className:"todo-item",children:[Object(b.jsxs)("div",{className:"header-item",children:[Object(b.jsx)("input",{type:"checkbox",checked:l,onChange:function(e){return s(e.target.checked)}}),Object(b.jsx)("p",{className:"flex-1",children:t.name}),Object(b.jsx)("button",{className:"btn bg-blue text-white",onClick:function(){return j(!u)},children:u?"Hide":"Detail"}),Object(b.jsx)("button",{className:"btn bg-red text-white",onClick:a,children:"Remove"})]}),u&&Object(b.jsx)("div",{className:" body-item",children:Object(b.jsx)(O,{value:t,onChange:c,isUpdate:!0})})]})},m=function(e){var t=e.tasks,c=void 0===t?[]:t,a=e.onDelete,l=e.onUpdate,s=e.onDeleteMultiple,o=Object(n.useState)(""),u=Object(i.a)(o,2),j=u[0],d=u[1],h=Object(n.useState)([]),x=Object(i.a)(h,2),O=x[0],f=x[1],m=function(e){return function(t){var c=Object(r.a)(O);t?c.push(e):c.splice(e,1),f(c)}},v=function(e){return function(){return a(e)}},g=function(e){return function(t){return l(e,t)}},N=Object(n.useMemo)((function(){return j?c.filter((function(e){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=e.replace(/\xe0|\xe1|\u1ea1|\u1ea3|\xe3|\xe2|\u1ea7|\u1ea5|\u1ead|\u1ea9|\u1eab|\u0103|\u1eb1|\u1eaf|\u1eb7|\u1eb3|\u1eb5/g,"a")).replace(/\xe8|\xe9|\u1eb9|\u1ebb|\u1ebd|\xea|\u1ec1|\u1ebf|\u1ec7|\u1ec3|\u1ec5/g,"e")).replace(/\xec|\xed|\u1ecb|\u1ec9|\u0129/g,"i")).replace(/\xf2|\xf3|\u1ecd|\u1ecf|\xf5|\xf4|\u1ed3|\u1ed1|\u1ed9|\u1ed5|\u1ed7|\u01a1|\u1edd|\u1edb|\u1ee3|\u1edf|\u1ee1/g,"o")).replace(/\xf9|\xfa|\u1ee5|\u1ee7|\u0169|\u01b0|\u1eeb|\u1ee9|\u1ef1|\u1eed|\u1eef/g,"u")).replace(/\u1ef3|\xfd|\u1ef5|\u1ef7|\u1ef9/g,"y")).replace(/\u0111/g,"d")).replace(/\xc0|\xc1|\u1ea0|\u1ea2|\xc3|\xc2|\u1ea6|\u1ea4|\u1eac|\u1ea8|\u1eaa|\u0102|\u1eb0|\u1eae|\u1eb6|\u1eb2|\u1eb4/g,"A")).replace(/\xc8|\xc9|\u1eb8|\u1eba|\u1ebc|\xca|\u1ec0|\u1ebe|\u1ec6|\u1ec2|\u1ec4/g,"E")).replace(/\xcc|\xcd|\u1eca|\u1ec8|\u0128/g,"I")).replace(/\xd2|\xd3|\u1ecc|\u1ece|\xd5|\xd4|\u1ed2|\u1ed0|\u1ed8|\u1ed4|\u1ed6|\u01a0|\u1edc|\u1eda|\u1ee2|\u1ede|\u1ee0/g,"O")).replace(/\xd9|\xda|\u1ee4|\u1ee6|\u0168|\u01af|\u1eea|\u1ee8|\u1ef0|\u1eec|\u1eee/g,"U")).replace(/\u1ef2|\xdd|\u1ef4|\u1ef6|\u1ef8/g,"Y")).replace(/\u0110/g,"D")).normalize("NFD")).replace(/[\u0300-\u036f]/g,"")).toLowerCase()}(null===e||void 0===e?void 0:e.name).replace(/\s/g,"").search(j.replace(/\s/g,""))>-1})):c}),[c,j]);return Object(b.jsxs)("div",{className:"flex-col h-full",children:[Object(b.jsxs)("div",{className:"flex-col flex-1 overflow-hidden",children:[Object(b.jsxs)("div",{className:"pt-50 px-50",children:[Object(b.jsx)("p",{className:"text-header text-center",children:"To Do List"}),Object(b.jsx)("input",{required:!0,value:j,placeholder:"Search ...",onChange:function(e){return d(e.target.value)},className:"w-full mb-20"})]}),Object(b.jsx)("div",{className:"flex-1 px-50 overflow-y-auto",children:N.map((function(e,t){return Object(b.jsx)(p,{task:e,onUpdate:g(t),onSelect:m(t),onRemove:v(t),isSelected:O.includes(t)},e.id)}))})]}),Object(b.jsxs)("div",{className:"footer-list flex",children:[Object(b.jsx)("p",{className:"flex-1",children:"Bulk Action"}),Object(b.jsx)("button",{className:"btn bg-blue text-white",children:"Done"}),Object(b.jsx)("button",{className:"btn bg-red text-white",onClick:function(){return s(O)},children:"Remove"})]})]})};c(18);var v=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){try{var e=localStorage.getItem("tasks");if(e){var t=JSON.parse(e);Array.isArray(t)&&a(t)}}catch(c){}}),[]),Object(n.useEffect)((function(){localStorage.setItem("tasks",JSON.stringify(c))}),[c]),Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("div",{className:"left-content",children:Object(b.jsxs)("div",{className:"p-50",children:[Object(b.jsx)("p",{className:"text-header text-center",children:"New Task"}),Object(b.jsx)(O,{value:{},onChange:function(e){var t=[].concat(Object(r.a)(c),[e]).sort(f);a(t)}})]})}),Object(b.jsx)("div",{className:"right-content",children:Object(b.jsx)(m,{tasks:c,onUpdate:function(e,t){var n=Object(r.a)(c);n[e]=t,n=n.sort(f),a(n)},onDelete:function(e){var t=Object(r.a)(c);t.splice(e,1),a(t)},onDeleteMultiple:function(e){var t=c.filter((function(t,c){return e.includes(c)}));a(t)}})})]})},g=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,20)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,l=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),l(e),s(e)}))};s.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(v,{})}),document.getElementById("root")),g()}},[[19,1,2]]]);
//# sourceMappingURL=main.487e2975.chunk.js.map