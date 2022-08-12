import{j as e,W as a,v as l,x as t,A as s,G as i,M as n,F as o,y as r,L as u,u as c,I as d,Z as v,_ as p,$ as m,r as f,a0 as g,a1 as y,d as _,w as k,n as b,D as h,C as w,P as C,a2 as O,R as x,Q as j,a3 as S,J as I,K as V,a4 as F,a5 as G,B as J,a6 as z,a7 as N}from"./vendor.4275dfb6.js";import{_ as U,u as A,a as D,b as E,g as L,L as P,G as q}from"./index.47159791.js";import{g as B,f as M}from"./goods.665b5313.js";const R={key:0},$=e({name:"ESwiper"});var K=U(Object.assign($,{props:{list:{type:Array,default:()=>[]},dot:{type:Boolean,default:!0}},setup(e){const f=e;return(g,y)=>{const _=a("router-link");return l(),t(o,null,[s(" swiper "),e.list.length>0?(l(),t("div",R,[i(c(p),{"show-indicators":e.dot,"lazy-render":""},{default:n((()=>[(l(!0),t(o,null,r(e.list,((e,a)=>(l(),u(c(v),{key:a,onClick:e=>function(e){const a=f.list.map((e=>e.src));m({images:a,startPosition:e,closeable:!0})}(a)},{default:n((()=>[e.to?(l(),u(_,{key:0,to:e.to},{default:n((()=>[i(c(d),{src:e.src,fit:"fill"},null,8,["src"])])),_:2},1032,["to"])):(l(),u(c(d),{key:1,src:e.src,width:"100%"},null,8,["src"]))])),_:2},1032,["onClick"])))),128))])),_:1},8,["show-indicators"]),s(" <ImagePreview /> ")])):s("v-if",!0)],2112)}}}),[["__file","/home/runner/work/ecomv2_app/ecomv2_app/src/components/ESwiper/index.vue"]]);const Q={key:0,class:"detail-title-layout"},T={class:"van-multi-ellipsis--l2 detail-title"},W={class:"collapse-title-layout"},Z={key:0},H={style:{margin:"0"}},X={class:"goods-total"},Y=(e=>(I("data-v-2907e164"),e=e(),V(),e))((()=>h("div",{class:"recommend-list-layout"},"推荐",-1))),ee=["onClick"],ae={class:"van-multi-ellipsis--l2 goods-item-title"},le={class:"recommend-goods-price"},te=e({name:"GoodsDetail"});var se=U(Object.assign(te,{setup(e){const a=A(),v=D(),p=E(),m=f([]),I=f({}),V=f([]),U=f([]),R=f({});g((()=>{const e=a.query.g_id;if(!e)return v.back();ie(e),U.value=Object.values(I.value.spec||[]).reduce(((e,a)=>e.flatMap((e=>a.map((a=>[...e,a]))))),[[]])})),y((()=>{I.value={},V.value={},m.value={}}));const $=f([1,2]),te=f(1),se=_((()=>{var e,a;if(!I.value.variant_mapping){const e=I.value.variant.find((e=>e.name===R.value["no-type"]))||{price:0};return te.value*e.price}return((null==(a=null==(e=I.value)?void 0:e.variant)?void 0:a.find((e=>{var a;return JSON.stringify(null==(a=I.value)?void 0:a.variant_mapping[e.variant_id])===JSON.stringify(R.value)})))||{price:0}).price*te.value}));async function ie(e){I.value={},V.value=[],R.value={},te.value=1;const a=await L({id:e});I.value=function(e){var a;e.spec="variant_mapping"in e?Object.values(e.variant_mapping).reduce(((e,a)=>(Object.entries(a).forEach((([a,l])=>{var t;(null==(t=e[a])?void 0:t.some((e=>e===l)))||(e[a]=(e[a]||[]).concat(l))})),e)),{}):null==(a=e.variant)?void 0:a.map((e=>e.name));return e}(a),m.value=a.images.map((e=>({src:e}))),await async function(){let e=null;try{e=JSON.parse(sessionStorage.getItem("view-goods-from-cart"))}catch{e=null}if(e)return R.value=e.spec,te.value=e.cart_count,await b(),void sessionStorage.removeItem("view-goods-from-cart")}(),V.value=await B({category:"best-deal"})}function ne(e,a){if(!I.value.variant_mapping)return!1;const l={...R.value,[e]:a},t=Object.keys(l).filter((e=>""!==l[e]));return Object.values(I.value.variant_mapping).filter((e=>t.every((a=>e[a]===l[a])))).length>0}function oe(e,a){R.value[e]=R.value[e]===a?"":a}async function re(){const e={id:I.value.id,spec:R.value,count:te.value,unit_price:se.value/te.value,title:I.value.title,image:I.value.images[0]},a=await M({type:"add",data:e});p.setCartCount(a.length),v.push("/cart")}function ue(){const{id:e,title:a,images:l,spec_list:t}=I.value,s=encodeURIComponent(JSON.stringify([{id:e,title:a,spec_list:t,image:l[0],spec:R.value,count:te.value,unit_price:se.value/te.value,express_price:0}]));p.setOrderInfo(s),v.push({name:"GenerateOrder"})}return k((()=>a.query.g_id),((e,a)=>{e&&e!==a&&ie(e)})),(e,a)=>{var p;return l(),t(o,null,[i(K,{list:m.value},null,8,["list"]),s(" <Line /> "),I.value.title?(l(),t("div",Q,[h("h1",T,w(I.value.title),1),i(c(C),{name:"share-o",color:"#ee0a24",size:"20px",class:"share-icon"})])):s("v-if",!0),(null==(p=I.value.variant)?void 0:p.length)>0?(l(),t(o,{key:1},[I.value.variant_mapping?(l(),u(c(O),{key:0,modelValue:$.value,"onUpdate:modelValue":a[0]||(a[0]=e=>$.value=e)},{default:n((()=>[(l(!0),t(o,null,r(I.value.spec,((e,a,o)=>(l(),u(c(F),{key:o,name:o+1},{title:n((()=>[h("div",W,[a?(l(),t("div",Z,w(a[0].toUpperCase()+a.slice(1))+":  ",1)):s("v-if",!0),h("h3",H,w(R.value[a]||"请选择"),1)])])),default:n((()=>[i(q,{list:e,gutter:"10px"},{default:n((({item:e})=>[i(c(G),{type:ne(a,e)?"primary":"default",round:"",plain:!(R.value[a]===e),size:"mini",class:"btn-tag",disabled:!ne(a,e),onClick:l=>oe(a,e)},{default:n((()=>[J(w(e),1)])),_:2},1032,["type","plain","disabled","onClick"])])),_:2},1032,["list"])])),_:2},1032,["name"])))),128))])),_:1},8,["modelValue"])):(l(),u(c(x),{key:1,border:!1,class:"goods-spec-list"},{default:n((()=>[(l(!0),t(o,null,r(I.value.spec,(e=>(l(),u(c(j),{key:e,border:!1},{default:n((()=>[i(c(G),{type:"primary",round:"",plain:!(R.value["no-type"]===e),size:"mini",class:"btn-tag",onClick:a=>oe("no-type",e)},{default:n((()=>[J(w(e),1)])),_:2},1032,["plain","onClick"])])),_:2},1024)))),128))])),_:1})),i(P),s(" count "),i(c(j),{title:"购买数量",border:!1},{value:n((()=>[i(c(z),{modelValue:te.value,"onUpdate:modelValue":a[1]||(a[1]=e=>te.value=e),max:"99",theme:"round"},null,8,["modelValue"])])),_:1}),s(" total "),i(c(j),{title:"Total",border:!1},{value:n((()=>[h("div",X,"￥"+w(c(se)),1)])),_:1}),i(P),s(" product desc "),i(c(j),{title:I.value.description,border:!1},null,8,["title"]),s(" recommend goods list "),V.value.length>0?(l(),t(o,{key:2},[i(P),Y,i(q,{list:V.value,gutter:"12px"},{default:n((({item:e})=>[h("div",{class:"recommend-goods-layout",onClick:a=>{return l=e.id,void v.push(`/goods-detail?g_id=${l}`);var l}},[i(c(d),{src:e.image,class:"recommend-goods-image"},null,8,["src"]),h("div",ae,w(e.title),1),h("div",le,"￥"+w(e.price),1)],8,ee)])),_:1},8,["list"])],64)):s("v-if",!0),i(P),s(" add cart "),i(P,{background:"transparent",space:"50px"}),i(c(S),null,{default:n((()=>[i(c(N),{type:"warning",color:"#FFD814",text:"加入购物车",style:{color:"#0f1111"},disabled:0===c(se),onClick:re},null,8,["disabled"]),i(c(N),{type:"danger",color:"#FFA41C",text:"立即购买",style:{color:"#0f1111"},disabled:0===c(se),onClick:ue},null,8,["disabled"])])),_:1})],64)):s("v-if",!0)],64)}}}),[["__scopeId","data-v-2907e164"],["__file","/home/runner/work/ecomv2_app/ecomv2_app/src/views/Goods/detail.vue"]]);export{se as default};
