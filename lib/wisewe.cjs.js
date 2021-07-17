/*!
  * Wisewe v0.0.1
  * author wg
  * (c) 2021 @wisewe/components
  * @license MIT
  */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),require("element-plus/lib/theme-chalk/index.css");var e,t=require("vue"),n=require("element-plus");!function(e){e.PRIMARY="primary",e.SUCCESS="success",e.INFO="info",e.WARNING="warning",e.DANGER="danger"}(e||(e={}));var o=t.defineComponent({name:"WButton",props:{type:{type:String,required:!0,default:e.INFO},disabled:{type:Boolean,required:!1,default:!1},value:{type:String,required:!0,default:"按钮"}},components:{ElButton:n.ElButton},setup(e,n){const o=t.computed((()=>e.type)),l=t.computed((()=>e.disabled)),u=t.computed((()=>e.value));return console.log(o,l,u,"123"),{defaultType:o,defaultDisabled:l,defaultVal:u}}});o.render=function(e,n,o,l,u,a){const r=t.resolveComponent("ElButton");return t.openBlock(),t.createBlock(r,{type:e.defaultType,disabled:e.defaultDisabled},{default:t.withCtx((()=>[t.createTextVNode(t.toDisplayString(e.defaultVal),1)])),_:1},8,["type","disabled"])},o.__file="packages/components/src/Button/button.vue",o.install=e=>{e.component(o.name,o)};const l=[o];var u={install:function(e){l.forEach((t=>{e.component(t.name,t)}))}};exports.WButton=o,exports.default=u;
