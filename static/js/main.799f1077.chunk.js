(this["webpackJsonpvending-machine"]=this["webpackJsonpvending-machine"]||[]).push([[0],[,function(e,t,a){e.exports={productList__item:"ProductList_productList__item__2TOrG",interface__goods:"ProductList_interface__goods__1raIP",inteface__goods_area:"ProductList_inteface__goods_area__1CSfj",productList:"ProductList_productList__3S7CR",product:"ProductList_product__UP-RR"}},,,,,,function(e,t,a){e.exports={dialogBoard:"ResultForm_dialogBoard__3JABE",conclusion:"ResultForm_conclusion__3fctO",product:"ResultForm_product__2DJQT",result:"ResultForm_result__27VHA"}},function(e,t,a){e.exports={dialogBoard:"InsertBanknoteForm_dialogBoard__2CA0T",form__desc:"InsertBanknoteForm_form__desc__31wp9",form:"InsertBanknoteForm_form__1eT9X"}},function(e,t,a){e.exports={dialogBoard:"ChooseProductForm_dialogBoard__kxfRD",form:"ChooseProductForm_form__11ji9"}},,,,function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),s=a.n(c),o=(a(18),a(2)),u=a(3),i=a(5),l=a(4),d=a(6),p=(a(19),a(1)),m=a.n(p),f=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:m.a.productList__item},r.a.createElement("div",{className:m.a.product},r.a.createElement("span",{className:m.a.product__name},e.name),r.a.createElement("span",{className:m.a.product__desc},e.desc),r.a.createElement("span",{className:m.a.product__prise},e.price+" R"),r.a.createElement("span",{className:m.a.product__name},e.id))))},h=function(e){var t=e.products.map((function(e){return r.a.createElement(f,{id:e.id,key:e.id,name:e.name,price:e.price,desc:e.desc})}));return r.a.createElement("div",{className:m.a.interface__goods},r.a.createElement("div",{className:m.a.inteface__goods_area},r.a.createElement("ul",{className:m.a.productList},t)))},_=a(8),I=a.n(_),E=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={legalPayload:[50,100,200,500,1e3],balanceInputValue:0,isRichest:!1,errorMessageUnknowBanknote:"",isError:!1},a.handleBalanceEnterClick=function(e){if(e.preventDefault(),a.state.legalPayload.includes(parseInt(a.state.balanceInputValue))){var t=parseInt(a.state.balanceInputValue)+parseInt(a.props.balance);a.setState({isRichest:a.props.products.every((function(e){return e.price<=parseInt(a.props.balance)+parseInt(a.state.balanceInputValue)})),errorMessageUnknowBanknote:""},(function(){a.props.setValuesOfInsertBanknoteForm(t,a.state.isRichest)}))}else a.setState({isError:!0,errorMessageUnknowBanknote:"Unknow Banknote"})},a.balanceInputValue=function(e){a.setState({balanceInputValue:parseInt(e.currentTarget.value)})},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e;return e=this.state.errorMessageUnknowBanknote?this.state.errorMessageUnknowBanknote:0===this.props.balance?"Insert banknotes...":this.state.isRichest?"Inserted money: ".concat(this.props.balance+" R Enough for any snacks"):"Inserted money: ".concat(this.props.balance+" R"),r.a.createElement("form",{onSubmit:this.handleBalanceEnterClick,className:I.a.form},r.a.createElement("div",{className:I.a.dialogBoard},r.a.createElement("span",null,e)),r.a.createElement("p",{className:I.a.form__desc},"Available banknotes: 50, 100, 200, 500 or 1000 R. The machine gives change in 1, 2, 5 and 10 R coins."),r.a.createElement("input",{ref:this.props.balanceInputValueRef,onInput:this.balanceInputValue,disabled:this.props.isRichest||this.props.selectedProduct}))}}]),t}(r.a.Component),b=a(12),g=a(9),v=a.n(g),P=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={selectedProduct:0,errorMessageIncorrect:"",coins:[],change:0,isError:!1,productInputValue:0,mycoins:[]},a.handleProductEnterClick=function(e){e.preventDefault(),a.props.products.some((function(e){return e.id===a.state.productInputValue}))&&a.props.balance>=a.props.products.find((function(e){return e.id===a.state.productInputValue})).price?a.setState({selectedProduct:parseInt(a.state.productInputValue),errorMessageIncorrect:"",coins:a.state.mycoins,change:parseInt(a.props.balance)-a.props.products.find((function(e){return e.id===a.state.productInputValue})).price,isError:!1,productInputValue:0},(function(){a.props.setValuesOfChooseProductForm(a.state.selectedProduct,a.state.coins,a.state.change)})):a.props.products.some((function(e){return e.id===a.state.productInputValue}))&&a.props.balance<a.props.products.find((function(e){return e.id===a.state.productInputValue})).price?a.setState({isError:!0,errorMessageIncorrect:"Not enought money"}):a.setState({isError:!0,errorMessageIncorrect:"Enter correct number"})},a.productInputValue=function(e){a.setState({productInputValue:parseInt(e.currentTarget.value)},(function(){if(a.props.products.some((function(e){return e.id===a.state.productInputValue}))){for(var e=parseInt(a.props.balance)-a.props.products.find((function(e){return e.id===a.state.productInputValue})).price,t=[],n=[10,5,2,1],r=0,c=0;r<e;){var s=Math.floor((e-r)/n[c]);t.push(Object(b.a)({},n[c],s)),r+=n[c]*s,c++}a.setState({mycoins:t})}}))},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e;return e=this.props.errorMessageIncorrect?this.props.errorMessageIncorrect:0===this.props.balance?">":this.state.isError?this.state.errorMessageIncorrect:this.props.selectedProduct?"Success":"Choose product",r.a.createElement("form",{onSubmit:this.handleProductEnterClick,className:v.a.form},r.a.createElement("div",{className:v.a.dialogBoard},r.a.createElement("span",null,e)),r.a.createElement("input",{onInput:this.productInputValue,ref:this.props.productInputValueRef,disabled:this.props.selectedProduct||0===this.props.balance}))}}]),t}(r.a.Component),k=a(7),R=a.n(k),V=function(e){return r.a.createElement(r.a.Fragment,null,e.coins10?r.a.createElement("div",null,"10 R: ",e.coins10," coins"):null,e.coins5?r.a.createElement("div",null,"5 R: ",e.coins5," coins"):null,e.coins2?r.a.createElement("div",null,"2 R: ",e.coins2," coins"):null,e.coins1?r.a.createElement("div",null,"1 R: ",e.coins1," coins"):null)},B=function(e){var t=e.coins.map((function(e){return r.a.createElement(V,{key:e.index,coins10:e[10],coins5:e[5],coins2:e[2],coins1:e[1]})}));return r.a.createElement("div",null,r.a.createElement("div",{className:R.a.dialogBoard},r.a.createElement("span",null,e.selectedProduct?"Take your product and change":">")),r.a.createElement("div",{className:R.a.conclusion},r.a.createElement("div",{className:R.a.product},t,!e.change&&e.selectedProduct?r.a.createElement("div",null,"No change"):null),r.a.createElement("div",{className:"".concat(R.a.product," ").concat(R.a.result),onClick:e.takeProduct},r.a.createElement("span",null,e.selectedProduct?e.foundSelectedProduct.name:null),r.a.createElement("span",null,e.selectedProduct?e.foundSelectedProduct.desc:null),r.a.createElement("span",null,e.selectedProduct?e.foundSelectedProduct.price:null),r.a.createElement("span",null,e.selectedProduct?e.foundSelectedProduct.id:null))))},O=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(l.a)(t).call(this,e))).state={products:[{name:"Oreo",price:80,desc:"Cookie",id:1},{name:"Milka",price:140,desc:"Chocolate",id:2},{name:"M&M",price:200,desc:"Candy",id:3},{name:"Twix",price:91,desc:"Choco bar",id:4},{name:"Mentos",price:50,desc:"Chewing pills",id:5},{name:"Mountain dew",price:170,desc:"Cold drink",id:6},{name:"Mountain dew",price:170,desc:"Cold drink",id:6}],change:0,balance:0,selectedProduct:0,coins:[],isRichest:0},a.setValuesOfInsertBanknoteForm=function(e,t){a.setState({balance:e,isRichest:t})},a.setValuesOfChooseProductForm=function(e,t,n){a.setState({selectedProduct:e,coins:t,change:n})},a.takeProduct=function(){a.productInputValueRef.current.value="",a.balanceInputValueRef.current.value="",a.setState({change:0,balance:0,selectedProduct:0,coins:[],isRichest:0})},a.productInputValueRef=r.a.createRef(),a.balanceInputValueRef=r.a.createRef(),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.state.products.find((function(t){return t.id===e.state.selectedProduct}));return r.a.createElement("div",{className:"interface"},r.a.createElement(h,{products:this.state.products}),r.a.createElement("div",{className:"interface__control-panel"},r.a.createElement(E,{selectedProduct:this.state.selectedProduct,balanceInputValueRef:this.balanceInputValueRef,products:this.state.products,setValuesOfInsertBanknoteForm:this.setValuesOfInsertBanknoteForm,balance:this.state.balance,isRichest:this.state.isRichest}),r.a.createElement(P,{selectedProduct:this.state.selectedProduct,balance:this.state.balance,productInputValueRef:this.productInputValueRef,products:this.state.products,setValuesOfChooseProductForm:this.setValuesOfChooseProductForm}),r.a.createElement(B,{selectedProduct:this.state.selectedProduct,change:this.state.change,takeProduct:this.takeProduct,foundSelectedProduct:t,coins:this.state.coins})))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[13,1,2]]]);
//# sourceMappingURL=main.799f1077.chunk.js.map