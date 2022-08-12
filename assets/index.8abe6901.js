import{j as e,r as a,d as t,x as s,F as l,G as c,M as o,u as n,Q as i,D as r,P as d,a5 as u,A as p,y as m,J as f,K as g,v,B as y,C as _,a9 as k,a6 as h,aa as b}from"./vendor.4275dfb6.js";import{_ as C,a as x,b as O,N as w,L as S,f as j}from"./index.47159791.js";import{f as D}from"./goods.665b5313.js";const F=e=>(f("data-v-ee0b0d46"),e=e(),g(),e),J=F((()=>r("div",{class:"cart-empty-layout"},[r("object",{type:"image/svg+xml",data:"https://m.media-amazon.com/images/G/28/cart/empty/animated/rolling-cart-desaturated._CB405720349_.svg"},[r("img",{alt:"",src:"https://m.media-amazon.com/images/G/28/cart/empty/animated/cart-fallback-desaturated._CB405720349_.svg"})]),r("b",null,"您的购物车为空")],-1))),N=y(" 继续购物 "),z={class:"cart-card-layout"},G={class:"ac sub-total"},I=F((()=>r("div",null,"小计 ",-1))),E={class:"ac order-notes"},V=F((()=>r("span",{style:{"padding-left":"6px"}},"您的订单享受免费配送。",-1))),B=["onClick"],T={class:"cart-goods-desc"},U={class:"cart-goods-spec"},A={style:{"font-weight":"bolder"}},q={key:1,class:"van-multi-ellipsis--l2",style:{"font-weight":"bolder"}},H={class:"ac cart-goods-footer"},K=y(" 删除 "),L={class:"go-on"},M=e({name:"Cart"});var P=C(Object.assign(M,{setup(e){const f=x(),g=O(),C=a([]);D({type:"query"}).then((e=>{C.value=e}));const F=t((()=>{if(0===C.value.length)return 0;const e=C.value.reduce(((e,a)=>(a.checked&&(e.price+=a.unit_price*a.cart_count,e.count+=a.cart_count),e)),{price:0,count:0});return{...e,price:e.price.toFixed(2)}}));function M(e,a){return e.id==a.id&&JSON.stringify(e.spec)===JSON.stringify(a.spec)}function P(e){sessionStorage.setItem("view-goods-from-cart",JSON.stringify(e)),f.push(`/goods-detail?g_id=${e.id}`)}function Q(){const e=C.value.filter((e=>e.checked)),a=[];e.forEach((e=>{const{id:t,title:s,image:l,spec_list:c,spec:o,unit_price:n,cart_count:i}=e;a.push({id:t,title:s,spec_list:c,spec:o,unit_price:n,image:l,count:i,express_price:0})})),g.setOrderInfo(encodeURIComponent(JSON.stringify(a))),sessionStorage.setItem("order-info-for-cart",JSON.stringify({type:"add_cart",count:C.value.filter((e=>e.checked)).length})),f.push({name:"GenerateOrder"})}function R(){g.deleteHomeGoodsType(),f.replace("/")}return(e,a)=>(v(),s(l,null,[0===C.value.length?(v(),s(l,{key:0},[J,c(n(i),null,{default:o((()=>[c(n(u),{type:"default",color:"#FFD814",block:"",round:"",style:{color:"#000"},onClick:R},{default:o((()=>[N])),_:1})])),_:1})],64)):(v(),s(l,{key:1},[r("div",z,[r("div",G,[I,c(w,{num:n(F).price,prefix:"￥",bold:""},null,8,["num"])]),r("div",E,[c(n(d),{name:"checked",color:"#067D62",size:"24"}),V]),c(n(u),{type:"default",color:"#FFD814",block:"",round:"",style:{color:"#000"},onClick:Q},{default:o((()=>[y(" 进入结算中心 ("+_(n(F).count)+" 件商品) ",1)])),_:1})]),c(S,{background:"#EAEDED",space:"4px"}),p(" cart goods list "),(v(!0),s(l,null,m(C.value,(e=>(v(),s("div",{key:e.id,class:"cart-list-layout"},[c(n(k),{modelValue:e.checked,"onUpdate:modelValue":a=>e.checked=a,"icon-size":"28px",class:"cart-item-check"},null,8,["modelValue","onUpdate:modelValue"]),c(n(b),{style:{"background-color":"transparent"},thumb:e.image,onClickThumb:a=>P(e)},{title:o((()=>[r("div",{class:"van-multi-ellipsis--l2 cart-goods-title",onClick:a=>P(e)},_(e.title),9,B)])),desc:o((()=>[r("div",T,[c(w,{num:e.unit_price,prefix:"￥",bold:""},null,8,["num"]),p(' <div class="cart-goods-title" style="padding-left: 12px">享免费配送</div> ')])])),price:o((()=>[r("div",U,[(v(!0),s(l,null,m(e.spec,((e,a)=>(v(),s("div",{key:a,class:"goods-spec-item"},["no-type"!==a?(v(),s(l,{key:0},[r("span",A,_(a)+"：",1),r("span",null,_(e),1)],64)):(v(),s("span",q,_(e),1))])))),128))])])),footer:o((()=>[r("div",H,[c(n(h),{theme:"round",max:"99","default-value":e.cart_count,onChange:a=>async function({id:e,spec:a},t){const s=C.value.find((t=>M(t,{id:e,spec:a})));s.cart_count=t;const l=await D({type:"update",data:s});C.value=l}(e,a)},null,8,["default-value","onChange"]),c(n(u),{type:"danger",size:"small",round:"",style:{"margin-left":"24px"},onClick:a=>async function(e){C.value=C.value.filter((a=>!M(a,e))),g.setCartCount(C.value.length);const a=await D({type:"delete",data:e});C.value=a}(e)},{default:o((()=>[K])),_:2},1032,["onClick"])])])),_:2},1032,["thumb","onClickThumb"])])))),128)),c(S),r("div",L,[c(n(i),{title:"继续购物","is-link":"",onClick:R})])],64)),c(S),c(n(i),{title:"为你推荐"},{label:o((()=>[c(j)])),_:1})],64))}}),[["__scopeId","data-v-ee0b0d46"],["__file","/home/runner/work/ecomv2_app/ecomv2_app/src/views/Cart/index.vue"]]);export{P as default};
