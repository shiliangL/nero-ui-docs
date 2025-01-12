import{u as e}from"./chunks/useAjaxHook.CmkDii63.js";import{d as t,p as a,q as n,u as o,c as l,o as d,e as s,w as i,i as r,g as c,E as u,b as p,t as h,F as m,r as b,G as f,h as v,H as x,m as k,I as g,k as j,l as C,f as D,n as y}from"./chunks/naive-ui.DyEX4l5m.js";import{Q as w}from"./chunks/index.BsjzT1UF.js";import"./chunks/index.DOObuXoO.js";import"./chunks/index.6vUEYOb4.js";const B={key:0,class:"text-sx text-gray-400"},A={key:1,class:"text-red-500"},_=t({desc:"便捷的数据单选框, 配置简单, 支持加载网络数据",name:"RNRadioGroup",__name:"index",props:a({vertical:{type:Boolean,default:!1},ajax:{},childrenField:{},dependencies:{},format:{},immediate:{type:Boolean,default:!0},labelField:{},options:{},params:{},resultField:{},valueField:{}},{modelValue:{default:()=>[]},modelModifiers:{}}),emits:["update:modelValue"],setup(t,{expose:a}){const j=t,C=n(t,"modelValue"),D=o(),y=l((()=>({ajax:j.ajax,dependencies:j.dependencies,format:j.format,immediate:j.immediate,labelField:j.labelField,options:j.options,params:j.params,resultField:j.resultField,valueField:j.valueField}))),{error:w,loading:_,options:G,refresh:N}=e(y);return a({error:w,loading:_,refresh:N}),(e,t)=>(d(),s(c(g),k({value:C.value,"onUpdate:value":t[0]||(t[0]=e=>C.value=e)},c(D)),{default:i((()=>[r(c(u),{vertical:e.vertical},{default:i((()=>[c(_)?(d(),p("div",B,"加载中...")):c(w)?(d(),p("div",A,h(c(w).message),1)):(d(!0),p(m,{key:2},b(c(G),(e=>(d(),s(c(f),{key:e.value,disabled:e.disabled,value:e.value,onClick:t=>{var a;return null==(a=null==e?void 0:e.onClick)?void 0:a.call(e)}},{default:i((()=>[v("div",{class:x(e.class)},h(e.label),3)])),_:2},1032,["disabled","value","onClick"])))),128))])),_:1},8,["vertical"])])),_:1},16,["value"]))}}),G={class:"flex w-full flex-col gap-2"},N={class:"mb-1"},R={__name:"dependencies",setup(e){const t=j({id:null});function a(e,t){console.error(e,t),window.$message.info(t.label)}function n(){return fetch("https://apifoxmock.com/m1/5298581-4967943-default/get/checkData").then((e=>e.json()))}function o(){t.value={...t.value,id:Date.now()}}return(e,l)=>(d(),p("div",G,[v("div",N,[l[0]||(l[0]=v("span",null," 关联依赖- ",-1)),v("span",{class:"cursor-pointer text-[#145bff]",onClick:o}," 依赖项 "+h(t.value),1)]),r(c(_),{ajax:n,dependencies:t.value,"onUpdate:value":a},null,8,["dependencies"])]))}},q={__name:"ajax",setup(e){function t(e,t){console.error(e,t),window.$message.info(t.label)}function a(){return fetch("https://apifoxmock.com/m1/5298581-4967943-default/get/checkData").then((e=>e.json()))}return(e,n)=>(d(),s(c(_),{ajax:a,"onUpdate:value":t}))}},F={__name:"base",setup(e){const t=[{label:"销售记录",value:0},{label:"会员信息",value:1},{label:"订单信息",value:2},{label:"客户来源",value:3}];function a(e,t){console.error(e,t),window.$message.info(t.label)}return(e,n)=>(d(),s(c(_),{options:t,"onUpdate:value":a}))}},P=JSON.parse('{"title":"RNCheckboxGroup 单选框组组件","description":"","frontmatter":{},"headers":[],"relativePath":"components/RNCheckboxGroup.md","filePath":"components/RNCheckboxGroup.md"}'),O={name:"components/RNCheckboxGroup.md"},T=Object.assign(O,{setup:e=>(e,t)=>{const a=y("ClientOnly");return d(),p("div",null,[t[0]||(t[0]=C('<h1 id="rncheckboxgroup-单选框组组件" tabindex="-1">RNCheckboxGroup 单选框组组件 <a class="header-anchor" href="#rncheckboxgroup-单选框组组件" aria-label="Permalink to &quot;RNCheckboxGroup 单选框组组件&quot;">​</a></h1><p>额，只是一个数据的多选，因为不想每次用到都遍历巴拉巴拉。支持ajax网络请求,数据可配置, 还不错。</p><ul><li>📋 帮你整理好所有选项</li><li>✨ 支持默认选中状态</li><li>🎨 提供一点样式定制</li><li>🔄 支持双向数据绑定</li><li>🚀 支持ajax加载数据</li><li>🌟 支持关联数据的加载</li></ul><h2 id="组件介绍" tabindex="-1">组件介绍 <a class="header-anchor" href="#组件介绍" aria-label="Permalink to &quot;组件介绍&quot;">​</a></h2><p>数据复选框选, 支持ajax网络请求,数据可配置</p><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2><p>最简单的复选框组用法。</p>',7)),r(a,null,{default:i((()=>[r(c(w),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"atom-one-light",darkTheme:"atom-one-dark",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:c("<script setup>\nimport { RNCheckboxGroup } from '@nero/next';\n\nconst options = [\n  { label: '销售记录', value: 0 },\n  { label: '会员信息', value: 1 },\n  { label: '订单信息', value: 2 },\n  { label: '客户来源', value: 3 },\n];\n\nfunction update(key, option) {\n  console.error(key, option);\n  window.$message.info(option.label);\n}\n<\/script>\n\n<template>\n  <RNCheckboxGroup :options=\"options\" @update:value=\"update\" />\n</template>\n")},{vue:i((()=>[r(F)])),_:1},8,["vueCode"])])),_:1}),t[1]||(t[1]=v("h2",{id:"使用ajax",tabindex:"-1"},[D("使用ajax "),v("a",{class:"header-anchor",href:"#使用ajax","aria-label":'Permalink to "使用ajax"'},"​")],-1)),t[2]||(t[2]=v("p",null,"应该是需要这个支持的,对接的时候可以少写点代码。",-1)),r(a,null,{default:i((()=>[r(c(w),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"atom-one-light",darkTheme:"atom-one-dark",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:c("<script setup>\nimport { RNCheckboxGroup } from '@nero/next';\n\nfunction update(key, option) {\n  console.error(key, option);\n  window.$message.info(option.label);\n}\n\nfunction ajax() {\n  return fetch(\n    'https://apifoxmock.com/m1/5298581-4967943-default/get/checkData',\n  ).then((r) => r.json());\n}\n<\/script>\n\n<template>\n  <RNCheckboxGroup :ajax=\"ajax\" @update:value=\"update\" />\n</template>\n")},{vue:i((()=>[r(q)])),_:1},8,["vueCode"])])),_:1}),t[3]||(t[3]=v("h2",{id:"关联加载",tabindex:"-1"},[D("关联加载 "),v("a",{class:"header-anchor",href:"#关联加载","aria-label":'Permalink to "关联加载"'},"​")],-1)),t[4]||(t[4]=v("p",null,"哦豁,数据的关联加载,遇到就能省事。",-1)),r(a,null,{default:i((()=>[r(c(w),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"atom-one-light",darkTheme:"atom-one-dark",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:c('<script setup>\nimport { ref } from \'vue\';\n\nimport { RNCheckboxGroup } from \'@nero/next\';\n\nconst dependencies = ref({\n  id: null,\n});\n\nfunction update(key, option) {\n  console.error(key, option);\n  window.$message.info(option.label);\n}\n\nfunction ajax() {\n  return fetch(\n    \'https://apifoxmock.com/m1/5298581-4967943-default/get/checkData\',\n  ).then((r) => r.json());\n}\n\nfunction changeDependencies() {\n  dependencies.value = {\n    ...dependencies.value,\n    id: Date.now(),\n  };\n}\n<\/script>\n\n<template>\n  <div class="flex w-full flex-col gap-2">\n    <div class="mb-1">\n      <span> 关联依赖- </span>\n      <span class="cursor-pointer text-[#145bff]" @click="changeDependencies">\n        依赖项 {{ dependencies }}\n      </span>\n    </div>\n    <RNCheckboxGroup\n      :ajax="ajax"\n      :dependencies="dependencies"\n      @update:value="update"\n    />\n  </div>\n</template>\n')},{vue:i((()=>[r(R)])),_:1},8,["vueCode"])])),_:1}),t[5]||(t[5]=C('<h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>options</td><td>可选项配置</td><td><code>Option[]</code></td><td><code>[]</code></td></tr><tr><td>value(v-model)</td><td>当前选中的值</td><td><code>Array&lt;string | number&gt;</code></td><td><code>[]</code></td></tr><tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table><h2 id="option-配置项" tabindex="-1">Option 配置项 <a class="header-anchor" href="#option-配置项" aria-label="Permalink to &quot;Option 配置项&quot;">​</a></h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>label</td><td>选项文本</td><td><code>string</code></td><td>-</td></tr><tr><td>value</td><td>选项值</td><td><code>string | number</code></td><td>-</td></tr><tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>[key: string]</td><td>其他自定义属性</td><td><code>any</code></td><td>-</td></tr></tbody></table><h2 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件&quot;">​</a></h2><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:value</td><td>选中值改变时触发</td><td><code>(values: Array&lt;string | number&gt;) =&gt; void</code></td></tr></tbody></table>',6))])}});export{P as __pageData,T as default};
