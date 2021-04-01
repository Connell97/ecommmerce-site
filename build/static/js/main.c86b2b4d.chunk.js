(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{27:function(e,t,s){},28:function(e,t,s){},29:function(e,t,s){},30:function(e,t,s){},31:function(e,t,s){},42:function(e,t,s){},43:function(e,t,s){},44:function(e,t,s){},45:function(e,t,s){},46:function(e,t,s){},47:function(e,t,s){},48:function(e,t,s){},49:function(e,t,s){},50:function(e,t,s){},51:function(e,t,s){"use strict";s.r(t);var c=s(1),n=s.n(c),a=s(20),r=s.n(a),i=(s(27),s(2)),o=s(4),j=(s(28),s(29),s(3)),l=(s(30),s(21)),d=(s(31),s(0)),b=function(e){return Object(d.jsx)(i.b,{children:Object(d.jsxs)("div",{className:"product-card",children:[Object(d.jsxs)("div",{className:"product-info",children:[Object(d.jsx)("img",{src:e.product.image,alt:e.product.imageAlt}),Object(d.jsxs)("div",{className:"info-container",children:[Object(d.jsxs)("h3",{children:[e.product.brand," ",e.product.model]}),Object(d.jsxs)("p",{children:["\xa3",e.product.price]}),Object(d.jsx)("button",{onClick:function(){!function(e){var t=localStorage.getItem("basket");localStorage.getItem("total"),t?(t=JSON.parse(t)).hasOwnProperty(e._id)?t[e._id].quantity++:t[e._id]={_id:e._id,image:e.image,name:e.brand+" "+e.model,quantity:1,price:e.price}:t=Object(l.a)({},e._id,{_id:e._id,image:e.image,name:e.brand+" "+e.model,quantity:1,price:e.price}),localStorage.setItem("basket",JSON.stringify(t));var s=0;Object.entries(t).map((function(e){var t=Object(j.a)(e,2),c=(t[0],t[1]),n=c.price*c.quantity;s+=n})),localStorage.setItem("total",JSON.stringify(s))}(e.product)},children:"Add to Basket"})]})]}),Object(d.jsx)("div",{className:"expanded-background-container",children:Object(d.jsx)("div",{class:"expand-background",children:Object(d.jsx)("div",{children:e.product.description})})})]})})},u=function(e){var t=Object(c.useState)([]),s=Object(j.a)(t,2),n=s[0],a=s[1],r=Object(c.useState)(""),i=Object(j.a)(r,2);i[0],i[1];Object(c.useEffect)((function(){fetch("/products/all").then((function(e){return e.json()})).then((function(e){return a(e.data)}))}),[]);var o=n.filter((function(t){return t.category=="".concat(e.category)})).slice(0,3);return Object(d.jsx)("div",{className:"category content",children:Object(d.jsx)("div",{className:"category-row",children:o.map((function(e,t){return Object(d.jsx)(b,{product:e})}))})})},m=function(){return Object(d.jsxs)("div",{className:"main-home",children:[Object(d.jsx)(i.b,{to:"/categories/laptops",children:Object(d.jsx)("h2",{children:"Laptops"})}),Object(d.jsx)(u,{category:"laptops"}),Object(d.jsx)(i.b,{to:"/categories/desktop",children:Object(d.jsx)("h2",{children:"Desktops"})}),Object(d.jsx)(u,{category:"desktops"}),Object(d.jsx)(i.b,{to:"/categories/mobiles",children:Object(d.jsx)("h2",{children:"Mobiles"})}),Object(d.jsx)(u,{category:"mobiles"}),Object(d.jsx)(i.b,{to:"/categories/smartwatches",children:Object(d.jsx)("h2",{children:"Smartwatches"})}),Object(d.jsx)(u,{category:"smartwatches"}),Object(d.jsx)(i.b,{to:"/categories/accessories",children:Object(d.jsx)("h2",{children:"Accessories"})}),Object(d.jsx)(u,{category:"accessories"})]})},O=s(9),p=s.n(O),h=s(11),x=(s(42),function(){var e=Object(c.useState)(!1),t=Object(j.a)(e,2),s=t[0],n=t[1],a=Object(c.useState)([]),r=Object(j.a)(a,2),i=(r[0],r[1],Object(c.useState)({email:"",password:"",name:"",address1:"",address2:"",postcode:"",city:"",country:""})),l=Object(j.a)(i,2),b=l[0],u=l[1],m=Object(c.useState)(!1),O=Object(j.a)(m,2),x=O[0],A=O[1];Object(c.useEffect)((function(){}),[]);var f=function(e){var t={email:b.email,password:b.password,name:b.name,address1:b.address1,address2:b.address2,postcode:b.postcode,city:b.city,country:b.country};t[e.target.name]=e.target.value,u(t)},g=function(){var e=Object(h.a)(p.a.mark((function e(t){var s,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!0!==x){e.next=12;break}return console.log(b),e.next=5,fetch("/user/create",{method:"POST",mode:"cors",headers:{"content-type":"application/json",Accept:"application/json"},body:JSON.stringify(b)});case 5:return s=e.sent,e.next=8,s.json();case 8:!0===(s=e.sent).success&&n(!0),e.next=19;break;case 12:return e.next=14,fetch("/user/login",{method:"POST",mode:"cors",headers:{"content-type":"application/json",Accept:"application/json"},body:JSON.stringify(b)});case 14:return c=e.sent,e.next=17,c.json();case 17:!0===(c=e.sent).matchuser&&n(!0);case 19:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:"form-container",children:[s?Object(d.jsx)(o.a,{to:"/"}):null,Object(d.jsx)("form",{className:"form3",onSubmit:g,children:Object(d.jsxs)("div",{className:"form-inner",children:[Object(d.jsxs)("div",{className:"part1",children:[Object(d.jsx)("h2",{children:"Login"}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"email",children:"Email"}),Object(d.jsx)("input",{className:"signup-input",type:"text",name:"email",id:"email",value:b.email,onChange:f})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"password",children:"Password"}),Object(d.jsx)("input",{className:"signup-input",type:"password",name:"password",id:"password",value:b.password,onChange:f})]}),x?null:Object(d.jsx)("input",{className:"signup-submit",type:"submit",value:"SUBMIT"}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("input",{type:"radio",name:"signup",value:"SignIn",onChange:function(){return A(!1)},checked:!0}),"Sign In",Object(d.jsx)("br",{}),Object(d.jsx)("input",{type:"radio",name:"signup",value:"SignUp",onChange:function(){return A(!0)}}),"Sign Up",Object(d.jsx)("br",{}),Object(d.jsx)("br",{})]}),x?Object(d.jsxs)("div",{className:"part2",children:[Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"name",children:"Name"}),Object(d.jsx)("input",{className:"signup-input",type:"text",name:"name",id:"name",value:b.name,onChange:f})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"address1",children:"First Line of Address"}),Object(d.jsx)("input",{className:"signup-input",type:"text",name:"address1",id:"address1",value:b.address1,onChange:f})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"address2",children:"Second Line of Address"}),Object(d.jsx)("input",{className:"signup-input",type:"text",name:"address2",id:"address2",value:b.address2,onChange:f})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"postcode",children:"Postcode"}),Object(d.jsx)("input",{className:"signup-input",type:"text",name:"postcode",id:"postcode",value:b.postcode,onChange:f})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"city",children:"City"}),Object(d.jsx)("input",{className:"signup-input",type:"text",name:"city",id:"city",value:b.city,onChange:f})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"country",children:"Country"}),Object(d.jsx)("input",{className:"signup-input",type:"text",name:"country",id:"country",value:b.country,onChange:f})]}),Object(d.jsx)("input",{className:"signup-submit",type:"submit",value:"CREATE ACCOUNT"})]}):null]})})]})}),A=(s(43),function(e){return Object(d.jsxs)("div",{className:"navbar",children:[Object(d.jsxs)("div",{className:"upper-navbar",children:[Object(d.jsx)("div",{className:"logo-container",children:Object(d.jsx)(i.b,{to:"/",children:Object(d.jsx)("h1",{className:"logo",children:"Logo"})})}),Object(d.jsxs)("div",{class:"top-right-nav",children:[Object(d.jsx)(i.b,{to:"/sign-in-up",children:Object(d.jsx)("div",{className:"log-in-link",children:"Login/Signup"})}),Object(d.jsx)(i.b,{to:"/basket",children:Object(d.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAB3ElEQVRYw+2VQUsCQRTH/0aHKIquYZpiH6CTh45RYB3q0D2oSM0P0KUO3TvUIYLuLSbUB8g0qEP3DiVEEChKohAqhEg0Xd7uOrqjNDN7CHxzWea9+f93f/NmFhjE/4oF5JDDolvyftTAwFBHwB2DGzAaGXj0y+9Y8gwMcd3yM4THHJoxeXBLwjXLKKsTU8x68yii1vOuPjx1kkwDANJ6MXmQsfD4uXbVhCnehscMG1NCVT7QgccME1MDQTU82Q48naea4U4FU8IBj0ZMQTQc8UhgiqDAnVMdo4CIbZDXLs/AkLcNPlwxqNoGSVcMrmyDTZq613K1ZLo7bxo/YGBoYVxZfhRNMuB665kmV5UNlknplZ8+pulTZQOBksCXCy8MlFCCAW+PKgELATlOvtrWgCILH1U47Ka59zHBUoNrQUNQtSXuxz1KXQuWFjmDoqAqRfn97tQcpT4xLG0wZGEMO9395oUxL40obO3RkFP6gtKH0pt8QPmUM78NSj9Kt+kDKWw7p6fowvjGpNQRm0CLDHyikicqWJcyWKPVL+KSIyo5lzI4o9Un4pIlKnmXMnij1SvikhF8Kf9mmhjr9RaGssFl788MoawkX8ZsP5IhJFGREq8g2V9+EIP4e/wC10tSiHGlj7gAAAAASUVORK5CYII=",alt:"Basket icon"})})]})]}),Object(d.jsx)("div",{className:"lower-navbar",children:Object(d.jsxs)("ul",{children:[Object(d.jsx)(i.b,{to:"/categories/laptops",children:Object(d.jsx)("li",{children:"Laptops"})}),Object(d.jsx)(i.b,{to:"/categories/desktops",children:Object(d.jsx)("li",{children:"Desktops"})}),Object(d.jsx)(i.b,{to:"/categories/mobiles",children:Object(d.jsx)("li",{children:"Mobiles"})}),Object(d.jsx)(i.b,{to:"/categories/smartwatches",children:Object(d.jsx)("li",{children:"Smartwatches"})}),Object(d.jsx)(i.b,{to:"/categories/accessories",children:Object(d.jsx)("li",{children:"Accessories"})})]})})]})}),f=(s(44),function(){return Object(d.jsxs)("div",{className:"footer-container",children:[Object(d.jsx)("div",{className:"footer-left",children:"logo"}),Object(d.jsx)("div",{className:"footer-center",children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:"Call Us: 07736969377"}),Object(d.jsx)("li",{children:"Address: 85 Maple Street"}),Object(d.jsx)("li",{children:"Liverpool, L3 8JC"})]})}),Object(d.jsxs)("div",{className:"footer-right",children:[Object(d.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAA/hJREFUeJzt212oZWMcx/HPOTPnmDFNODQj0zDeS0gUYWrciGZiREbkJWRyISaRuPByITeESIoL5Q4pRM2IoUhN05yZQYRoxnibMw7GyzGYMy7+Z3e2ba+919p7vWzH/tavdq21n+f/+69nPS9rPYs+ffr06fP/ZaDqANpwMFZgOY7DIhyAb/E1NuAFvIt9FcVYCEO4F38KY+20DddgMEXZp+FxzEk64ZyOw86Hk7BJOuONGhUtpRlL8drUeTckVT4fu/Fw9z4yM4A7sUdn5mvahbMxDxfiSWyvO/4RZiUFcXPdiWUn4UbdGa/XHvyecOziVkF80HByWUk4Ej/LLwFJaulnNv7K+qccGMD6JvXmqb2iddcYxkpcWx/I0S0KeES6HrYTburAUBb9iktwshgpnsL3+AwH1QdybpuC3sHxOZsfxM6CE/CDf/cHv+DExmDOS1HYBO7QohfNyFkFm2+mSVzaLJhjMxSyUYzX3XJfyeYnsCopmGHRWaQt7A8xWxvqIgHPlmh+J85sF9CWDgreLq7kER0k4M2SzH+Mo9IEdEsXlezFWnF/DadMQG0RU7RuTRmPEXGfdFvhGB4SQ0+r4fP5khJwe1IAjcGNi3GyWw4RWd+C37AVz4lb5XKcgv3xVQ51pWE8y8lzxYKh6KsyKSYpZbSAFUlmmzXPCVwhevkiGRCtoAy+SXPSUlxgOinLxJSxjCtUtA5LMl3fAmbjZXyBB7AYa8T4+V9mnxYe6p8JjogrPtMYw4Kkg/UtYFx5vXKZfNLqYGMnuLXAQKri9VYHGxPwTHFxVMbarH94W/W9dl4a12bp3mwesEZMUmYCb4g1SiLNEjCKpwsJp3wyN/8aQ6I/qLoJd6vDO01AjXt6wESneqVb8zWuEm9bqjaUVW2f/mRhP1wmxtTJHjDXTuvTGmv3dHe5eHw8IlZu41MJOCZtBRWxGp/nUdDVqr+aWbUhD+M1Zom5dNWmsuiiPBMAV/aAqbRap4BdL4N4sQfMtdN3ODRv8zWG8WoPmEzSJM4vynyNOWIYrNpsMz1YoO9/MCzesxf9RjeLNkr/IiY35ov3gj91GHRe2q3iOcmg2DOwCveLiVJZ5nfh9OItpmOx6S1oZWgHTijFWQpWK/dW+BRLyjDWiiExQRpV7j2/GQtL8JfIAtyGL5VrfJ9Y4R1YvMVpBkW2V+JRvK+apfAYrlfgxu5l4unJW1P6UIzzWbbLFKG9eELDVraimIe7lbNbM43ew6mFOk5gIR7DjxmCzVObcZ0e+I5hrtgjsE7xt8Jm3CW26fUki8Uem5fElxozynQnTW0JzhDT0EXis5Z6DYi3zPXaUfd7m0hknz59+vTpUzF/AyE62o/M8p77AAAAAElFTkSuQmCC",alt:"twitter"}),Object(d.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAA5VJREFUeJztmz1LHEEYx39nFJVoZ+AutTmxSBMFK+VIE2xMZZGPkC7YRxCsbfVTiAYskiKX0hBNJ1GSQiIomM4XMJBoipmDzTHP7MzujN6694cHZXfm/7zcvO8zFbJjFJgDJoDHCRnKwemCC+A4IbvAO+BHZL0AVIFlYA+46TDZ07ZVYzg+DCyhon/XjqbJhbZ1OJTz88BpBzjmK6fa9syooJrUXTuSV5a1L154CGx0gPGhZEP75ISKh/O7wCLQAOrEnwHQOupa56K2wTUITi3BpdmvA2Nh/AmCMZRNLt3BivkUgkNgOrT1ATGNstHmgzgwDmMf7ZvASDTTw2EEZavkxynCFLlkqdQE+iIbHhJ92IOw1F6hirzIOaQYv3w7RpC7wwVtK0bbwNfJfR7gEWo/YsI0jgOitLZfj2JyOLwCrlC2fhDKSLPDXqvAqFDghs6a6kz4wv/2mlrCGLJ/oz2oLa0JX4GDwAaHxvfE/7+Bn4YyByhfTJjrRe4/mzkMM6EfeA68BMaBmhaAEy3ftN6PKIfS8Fb/fQKsAL+EcpvAM8PzCZCni4aDAS6oAavAmaDHJGe6Ts3AlwUNQU8TVBMxvaznVDqAGmkvBX4XudQcAzltqQv8BwDnwss8G5sqsC3wZpFt8p30DAm851iUZsVT4MjCm1WONHdWiH6GDECVOM4ng5C1JRg5K8jO+p6iDACfgClLmb/Ae2AnIQCTCXkBPLBwfEYNalee9ok/aqgWkHaOsI89OC1M6bI2rtR9vQFRu0ANebS/Rs3Rgx58g7rOtcB5if8UGTUAqxaeFU+uJFYsvKueXNEC0I+8yNnH75dvxyBydzjTul0RLQCzQv0/uPX5NExpLpOOWQ+eaAFYE+pveXCkYUvQsebBYfSzJ4Bx48LzHeF5Fkhckm5nhAiANBrfRgCCbJbydgFpLxFqJ4fmMuk49+CI1gUKjRABOBGeTwbgTuOSdDujG4C8BKhjLBNuIwCSbi90F0LSC0eUfikMJd8MQXc7DBT0QKR7JEa4FgAFPBS1vsiIwh2Ll/7DSOk/jTWFl42cSlvo6I+jvaiUcxNmUKN6XpwAr4E3hP887ooZ4fkxwALm6OwGNOCuIWWTLkCxU2RcYE2RaRUqapKUC1KTpKDYaXI2OKfJlT5REkqeKgvdZGmg5OnyLZT6wgR0r8wAJb801UKpr80lUdqLk0mU+upsEvfu8nSevnEvrs//A9fnr9PafLJpAAAAAElFTkSuQmCC",alt:"instagram"}),Object(d.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAKlBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHrpZrAAAADXRSTlMAGNEvuI4HwGFS7KcRGMHj9wAAAKdJREFUWIXt1MsKxDAIBVDzaqOd+f/fHShpEtoyaO+q4F0meCBEpS8YcsABIyC5HHkAZA7Us5gBqTTHDORAEBAXwoBEGFDO9UZAzg+wAuul3gjMLwhc95gAHvXleqsAxh/wza0CGE20oUB04HVATC1jlo6TpGrlmxnqgQHVVv4HbCiwooCAwLSQngEJBRgFqgqQ3PLphaWdRBXQ895pdMABBxxwwAz8ACsGptJl6J3JAAAAAElFTkSuQmCC",alt:"facebook"})]})]})}),g=(s(45),s(19)),v=(s(46),s.p,s.p,s.p,function(){var e=Object(c.useState)(!1),t=Object(j.a)(e,2),s=(t[0],t[1],localStorage.getItem("total")),n=localStorage.getItem("basket")||{};n=JSON.parse(n);return Object(d.jsxs)("div",{className:"basket-container",children:[Object(d.jsxs)("div",{className:"basket-left",children:[Object(d.jsx)("div",{className:"basket-heading",children:Object(d.jsx)("h2",{children:"Basket"})}),Object.entries(n).map((function(e){var t=Object(j.a)(e,2),s=(t[0],t[1]);return Object(d.jsxs)("div",{className:"basket-box",children:[Object(d.jsx)("div",{className:"product-name",children:Object(d.jsx)("p",{children:s.name})}),Object(d.jsx)("img",{className:"images",src:s.image,alt:"Laptop"}),Object(d.jsxs)("div",{className:"quantity",children:[Object(d.jsx)("button",{className:"basket-button",onClick:function(){return function(e){var t=Object(g.a)(n);t[e].quantity>=1&&(t[e].quantity-=1)}(0)},children:"-"}),Object(d.jsx)("h4",{children:s.quantity}),Object(d.jsx)("button",{className:"basket-button",onClick:function(){return e=0,void(Object(g.a)(n)[e].quantity+=1);var e},children:"+"})]}),Object(d.jsx)("p",{className:"price",children:s.price})]})}))]}),Object(d.jsx)("div",{className:"basket-right",children:Object(d.jsx)("div",{className:"form-container3",children:Object(d.jsx)("form",{className:"form",children:Object(d.jsx)("div",{className:"form-inner3",children:Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"Summary"}),Object(d.jsxs)("div",{className:"form-group3",children:[Object(d.jsx)("label",{htmlFor:"address1",children:"Subtotal"}),Object(d.jsxs)("p",{children:["\xa3",s=parseFloat(s).toFixed(2)]})]}),Object(d.jsx)(i.b,{to:"/checkout",children:Object(d.jsx)("input",{className:"basket-submit",type:"submit",value:"CHECKOUT"})})]})})})})})]})}),N=function(){var e=parseFloat(localStorage.getItem("total")).toFixed(2);return Object(d.jsxs)("div",{className:"checkout-container",children:[Object(d.jsx)("div",{className:"checkout-left",children:Object(d.jsx)("div",{className:"form-container2",children:Object(d.jsx)("form",{className:"form1",children:Object(d.jsx)("div",{className:"form-inner2",children:Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"Delivery Address"}),Object(d.jsxs)("div",{className:"form-group2",children:[Object(d.jsx)("label",{htmlFor:"address1",children:"First Line of Address"}),Object(d.jsx)("p",{children:"8 mosslawn road"})]}),Object(d.jsxs)("div",{className:"form-group2",children:[Object(d.jsx)("label",{htmlFor:"address2",children:"Second Line of Address"}),Object(d.jsx)("p",{children:"Southdene"})]}),Object(d.jsxs)("div",{className:"form-group2",children:[Object(d.jsx)("label",{htmlFor:"postcode",children:"Postcode"}),Object(d.jsx)("p",{children:"L32 8TY"})]}),Object(d.jsxs)("div",{className:"form-group2",children:[Object(d.jsx)("label",{htmlFor:"city",children:"City"}),Object(d.jsx)("p",{children:"Liverpool"})]}),Object(d.jsxs)("div",{className:"form-group2",children:[Object(d.jsx)("label",{htmlFor:"country",children:"Country"}),Object(d.jsx)("p",{children:"United Kingdom"})]})]})})})})}),Object(d.jsx)("div",{className:"checkout-right",children:Object(d.jsx)("div",{className:"form-container2",children:Object(d.jsx)("form",{className:"form1",children:Object(d.jsx)("div",{className:"form-inner2",children:Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"In Your Basket"}),Object(d.jsxs)("div",{className:"form-group2",children:[Object(d.jsx)("label",{htmlFor:"address1",children:"Subtotal"}),Object(d.jsxs)("p",{children:["\xa3",e]})]}),Object(d.jsxs)("div",{className:"form-group2",children:[Object(d.jsx)("label",{htmlFor:"address2",children:"Shipping"}),Object(d.jsx)("p",{children:"\xa35.99"})]}),Object(d.jsxs)("div",{className:"form-group2",children:[Object(d.jsx)("label",{htmlFor:"postcode",children:"Total"}),Object(d.jsxs)("p",{children:["\xa3",function(e){return(parseFloat(e)+5.99).toFixed(2)}(e)]})]}),Object(d.jsxs)("div",{className:"form-group2",children:[Object(d.jsx)("label",{htmlFor:"city",children:"Promo Code"}),Object(d.jsx)("input",{className:"checkout-input",type:"text",name:"city",id:"city"})]}),Object(d.jsx)("input",{className:"button",type:"submit",value:"APPLY PROMO CODE"}),Object(d.jsx)("br",{}),Object(d.jsx)(i.b,{to:"/checkout/order-confirmed",children:Object(d.jsx)("input",{className:"button",type:"submit",value:"CONFIRM ORDER",onClick:void localStorage.removeItem("basket","total")})})]})})})})})]})},y=(s(47),function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),s=t[0],n=t[1],a=Object(c.useState)(""),r=Object(j.a)(a,2),i=r[0],o=r[1],l=Object(c.useState)({name:"",addressline1:"",addressline2:"",postcode:"",email:"",password:""}),b=Object(j.a)(l,2),u=b[0],m=b[1],O=Object(c.useState)({name:"",addressline1:"",addressline2:"",postcode:"",email:"",password:""}),x=Object(j.a)(O,2),A=x[0],f=x[1];Object(c.useEffect)((function(){fetch("/customer/all").then((function(e){return e.json()})).then((function(e){return n(e.data)}))}),[]);var g=function(){var e=Object(h.a)(p.a.mark((function e(t){var c,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/customer/delete/".concat(t),{method:"DELETE"});case 2:return c=e.sent,e.next=5,c.json();case 5:c=e.sent,console.log(c),a=s.filter((function(e){return e._id!==t})),n(a);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(h.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/customer/update/".concat(i),{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify(A)});case 2:return t=e.sent,e.t0=console,e.next=6,t.json();case 6:e.t1=e.sent,e.t0.log.call(e.t0,e.t1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(e){var t={name:u.name,addressline1:u.addressline1,addressline2:u.addressline2,postcode:u.address,email:u.email,password:u.password};t[e.target.name]=e.target.value,m(t)},y=function(){var e=Object(h.a)(p.a.mark((function e(t){var s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("/customer/create",{method:"POST",mode:"cors",headers:{"content-type":"application/json"},body:JSON.stringify(u)});case 3:return s=e.sent,e.t0=console,e.next=7,s.json();case 7:e.t1=e.sent,e.t0.log.call(e.t0,e.t1);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsxs)("div",{className:"box3",children:[Object(d.jsx)("h2",{children:"My Info"}),s?s.map((function(e,t){return Object(d.jsxs)("div",{children:[Object(d.jsxs)("p",{children:["name: ",e.name]}),Object(d.jsxs)("p",{children:["addressline1: ",e.addressline1]}),Object(d.jsxs)("p",{children:["addressline2: ",e.addressline2]}),Object(d.jsxs)("p",{children:["postcode: ",e.postcode]}),Object(d.jsxs)("p",{children:["email: ",e.email]}),Object(d.jsxs)("p",{children:["password: ",e.password]}),Object(d.jsx)("button",{onClick:function(){g(e._id)},children:"Delete"}),Object(d.jsx)("button",{onClick:function(){o(e._id)},children:"Update"}),Object(d.jsx)("hr",{})]},t)})):Object(d.jsx)("h2",{children:"No customers found"})]}),Object(d.jsxs)("div",{className:"box1",children:[Object(d.jsx)("h2",{children:"Create Info"}),Object(d.jsxs)("form",{onSubmit:y,children:["name: ",Object(d.jsx)("input",{type:"text",name:"name",value:u.name,onChange:N}),Object(d.jsx)("br",{}),"addressline1: ",Object(d.jsx)("input",{type:"text",name:"addressline1",value:u.addressline1,onChange:N}),Object(d.jsx)("br",{}),"addressline2: ",Object(d.jsx)("input",{type:"text",name:"addressline2",value:u.addressline2,onChange:N}),Object(d.jsx)("br",{}),"postcode: ",Object(d.jsx)("input",{type:"text",name:"postcode",value:u.postcode,onChange:N}),Object(d.jsx)("br",{}),"email: ",Object(d.jsx)("input",{type:"email",name:"email",value:u.email,onChange:N}),Object(d.jsx)("br",{}),"password: ",Object(d.jsx)("input",{type:"password",name:"password",value:u.password,onChange:N}),Object(d.jsx)("br",{}),Object(d.jsx)("input",{type:"submit"})]})]}),Object(d.jsxs)("div",{className:"box2",children:[Object(d.jsx)("h2",{children:"Update Password"}),Object(d.jsxs)("button",{onClick:function(){v()},children:["password: ",Object(d.jsx)("input",{type:"password",name:"password",value:A.password,onChange:function(e){var t={name:A.name,addressline1:A.addressline1,addressline2:A.addressline2,postcode:A.address,email:A.email,password:A.password};t[e.target.name]=e.target.value,f(t)}}),Object(d.jsx)("br",{}),Object(d.jsx)("input",{type:"submit"})]})]})]})}),C=(s(48),function(e){var t=Object(c.useState)([]),s=Object(j.a)(t,2),n=s[0],a=s[1],r=Object(c.useState)(""),i=Object(j.a)(r,2);i[0],i[1];Object(c.useEffect)((function(){fetch("/products/all").then((function(e){return e.json()})).then((function(e){return a(e.data)}))}),[]);var o=window.location.href.split("/").pop(),l=o.charAt(0).toUpperCase()+o.slice(1),u=n.filter((function(e){return e.category=="".concat(o)}));return Object(d.jsxs)("div",{class:"category-container content",children:[Object(d.jsx)("h1",{children:l}),Object(d.jsx)("div",{className:"product-grid",children:u.map((function(e,t){return Object(d.jsx)(b,{product:e})}))})]})}),w=(s(49),function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),s=t[0],n=t[1],a=Object(c.useState)(""),r=Object(j.a)(a,2);r[0],r[1];return Object(c.useEffect)((function(){fetch("/products/all").then((function(e){return e.json()})).then((function(e){return n(e.data)}))}),[]),Object(d.jsx)("div",{className:"category content",children:s.map((function(e,t){return Object(d.jsx)(b,{product:e})}))})}),S=(s(50),function(){return Object(d.jsx)("div",{className:"outer-div content",children:Object(d.jsxs)("div",{class:"order-thanks",children:[Object(d.jsx)("h2",{children:"Thank you for your order!"}),Object(d.jsx)("p",{children:"Your order number is: 53254325644687"}),Object(d.jsx)(i.b,{to:"/",children:Object(d.jsx)("button",{children:"Continue Shopping"})})]})})}),k=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(i.a,{children:[Object(d.jsx)(A,{}),Object(d.jsxs)(o.d,{children:[Object(d.jsx)(o.b,{path:"/",exact:!0,component:m}),Object(d.jsx)(o.b,{path:"/sign-in-up",exact:!0,component:x}),Object(d.jsx)(o.b,{path:"/checkout",exact:!0,component:N}),Object(d.jsx)(o.b,{path:"/account",exact:!0,component:y}),Object(d.jsx)(o.b,{path:"/basket",exact:!0,component:v}),Object(d.jsx)(o.b,{path:"/categories/*",exact:!0,component:C}),Object(d.jsx)(o.b,{path:"/products/all",exact:!0,component:w}),Object(d.jsx)(o.b,{path:"/checkout/order-confirmed",exact:!0,component:S})]}),Object(d.jsx)(f,{})]})})};r.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(k,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.c86b2b4d.chunk.js.map