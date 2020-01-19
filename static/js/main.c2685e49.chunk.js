(this["webpackJsonpvending-machine"]=this["webpackJsonpvending-machine"]||[]).push([[0],{1:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(3),s=a.n(r),o=(a(14),a(4)),l=a(5),u=a(7),d=a(6),i=a(8),p=(a(1),function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("li",{className:"product-list__item"},c.a.createElement("div",{className:"product"},c.a.createElement("span",{className:"product__name"},e.name),c.a.createElement("span",{className:"product__desc"},e.desc),c.a.createElement("span",{className:"product__prise"},e.price+" R"),c.a.createElement("span",{className:"product__name"},e.id))))}),m=function(e){var t=e.products.map((function(e){return c.a.createElement(p,{id:e.id,key:e.id,name:e.name,price:e.price,desc:e.desc})}));return c.a.createElement("div",{className:"interface"},c.a.createElement("div",{className:"inteface__goods"},c.a.createElement("ul",{className:"product-list"},t)))},h=function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("form",{onSubmit:e.handleBalanceEnterClick,className:"form"},c.a.createElement("div",{className:"dialog-board"},c.a.createElement("span",null,e.errorMessageUnknowBancnote?e.errorMessageUnknowBancnote:0===e.balance?"Insert banknotes...":e.isRichest?"Inserted money: ".concat(e.balance+" R Enough for any snacks"):"Inserted money: ".concat(e.balance+" R"))),c.a.createElement("input",{onInput:e.balanceInputValue,disabled:e.isRichest||e.selectedProduct}),c.a.createElement("p",{className:"form__desc"},"Available banknotes: 50, 100, 200, 500 or 1000 R. The machine gives change in 1, 2, 5 and 10 R coins.")))},E=function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("form",{onSubmit:e.handleProductEnterClick},c.a.createElement("div",{className:"dialog-board"},c.a.createElement("span",null,e.errorMessageIncorrect?e.errorMessageIncorrect:0===e.balance?">":e.selectedProduct?"Success":"Choose product")),c.a.createElement("input",{onInput:e.productInputValue,disabled:e.selectedProduct||0===e.balance})))},g=function(e){return c.a.createElement("div",null,c.a.createElement("div",{className:"dialog-board"},c.a.createElement("span",null,e.selectedProduct?"Take your product and change":">")),c.a.createElement("div",{className:"conclusion"},c.a.createElement("div",{className:"product"},c.a.createElement("span",null,e.change?e.change+" R":null," ")),c.a.createElement("div",{className:"product result",onClick:e.takeProduct},c.a.createElement("span",null,e.selectedProduct?e.foundSelectedProduct.name:null),c.a.createElement("span",null,e.selectedProduct?e.foundSelectedProduct.desc:null),c.a.createElement("span",null,e.selectedProduct?e.foundSelectedProduct.price:null),c.a.createElement("span",null,e.selectedProduct?e.foundSelectedProduct.id:null))))},b=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).state={change:0,balance:0,selectedProduct:0,productInputValue:0,balanceInputValue:0,isRichest:!1,legalPayload:[50,100,200,500,1e3],errorMessageUnknowBancnote:"",errorMessageIncorrect:"",isError:!1,products:[{name:"Oreo",price:80,desc:"Cookie",id:1},{name:"Milka",price:140,desc:"Chocolate",id:2},{name:"M&M",price:200,desc:"Candy",id:3},{name:"Twix",price:90,desc:"Choco bar",id:4},{name:"Mentos",price:50,desc:"Chewing pills",id:5},{name:"Mountain dew",price:170,desc:"Cold drink",id:6}],coins:[]},a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.state.products.find((function(t){return t.id===e.state.selectedProduct})),a=this.state.products.find((function(t){return t.id===e.state.productInputValue})),n=this.state.products.every((function(t){return t.price<=parseInt(e.state.balance)+parseInt(e.state.balanceInputValue)}));return c.a.createElement("div",{className:"interface"},c.a.createElement(m,{products:this.state.products}),c.a.createElement("div",{className:"interface__control-panel"},c.a.createElement(h,{handleBalanceEnterClick:function(t){t.preventDefault(),e.state.legalPayload.includes(parseInt(e.state.balanceInputValue))?e.setState({balance:parseInt(e.state.balanceInputValue)+parseInt(e.state.balance),isRichest:n,errorMessageUnknowBancnote:""}):e.setState({isError:!0,errorMessageUnknowBancnote:"Unknow bancnote"})},errorMessageUnknowBancnote:this.state.errorMessageUnknowBancnote,balance:this.state.balance,balanceInputValue:function(t){e.setState({balanceInputValue:parseInt(t.currentTarget.value)})},isRichest:this.state.isRichest,selectedProduct:this.state.selectedProduct}),c.a.createElement(E,{handleProductEnterClick:function(t){t.preventDefault(),e.state.products.some((function(t){return t.id===e.state.productInputValue}))&&e.state.balance>=a.price?e.setState({selectedProduct:parseInt(e.state.productInputValue),errorMessageIncorrect:"",change:parseInt(e.state.balance)-a.price}):e.state.products.some((function(t){return t.id===e.state.productInputValue}))&&e.state.balance<a.price?e.setState({isError:!0,errorMessageIncorrect:"Not enought money"}):e.setState({isError:!0,errorMessageIncorrect:"Enter correct number"})},errorMessageIncorrect:this.state.errorMessageIncorrect,balance:this.state.balance,selectedProduct:this.state.selectedProduct,productInputValue:function(t){e.setState({productInputValue:parseInt(t.currentTarget.value)})}}),c.a.createElement(g,{selectedProduct:this.state.selectedProduct,change:this.state.change,takeProduct:function(){e.setState({change:0,balance:0,selectedProduct:0,productInputValue:0,balanceInputValue:0,isRichest:!1,legalPayload:[50,100,200,500,1e3],errorMessageUnknowBancnote:"",errorMessageIncorrect:"",isError:!1})},foundSelectedProduct:t})))}}]),t}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.c2685e49.chunk.js.map