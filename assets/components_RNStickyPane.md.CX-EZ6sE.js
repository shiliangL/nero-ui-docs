import{_ as e}from"./chunks/index.vue_vue_type_script_setup_true_lang.CxvanQfd.js";import{o as t,b as a,i as n,w as l,h as d,g as o,k as i,c as s,V as r,W as c,K as h,F as u,r as m,X as p,l as f,f as v,n as k}from"./chunks/naive-ui.DyEX4l5m.js";import{Q as b}from"./chunks/index.BsjzT1UF.js";const y={class:"w-full"},g={__name:"custom",setup:i=>(i,s)=>(t(),a("div",y,[n(o(e),{"content-class":"custom-content","content-style":"background: #42A5F5;padding:0","header-class":"custom-header","header-style":"background: #f5f5f5;padding:0","footer-class":"custom-footer","footer-style":"background: #f5f5f5;padding:0"},{header:l((()=>s[0]||(s[0]=[d("div",null,"自定义样式的头部",-1)]))),footer:l((()=>s[1]||(s[1]=[d("div",null,"自定义样式的底部",-1)]))),default:l((()=>[s[2]||(s[2]=d("div",null,"自定义样式的内容区域",-1)),s[3]||(s[3]=d("div",null,"自定义样式的内容区域",-1))])),_:1})]))},x={class:"h-full"},P={__name:"config",setup(u){const m=i(320),p=s((()=>({height:`${m.value}px`}))),f=Array.from({length:46}).map(((e,t)=>({key:t,age:32,name:`Edward King ${t}`,address:`London, Park Lane no. ${t}`}))),v=[{type:"selection"},{title:"Name",key:"name",width:200},{title:"Age",key:"age",width:100},{title:"Address",key:"address",width:200}];return(i,s)=>(t(),a("div",{class:"w-full",style:h(p.value)},[n(o(e),{noScrollbar:""},{header:l((()=>[s[1]||(s[1]=d("div",null,'真正的业务中高度可能"占满"某个区域,希望在这个区域固定表头滚动',-1)),n(o(r),{value:m.value,"onUpdate:value":s[0]||(s[0]=e=>m.value=e),min:250,max:500,step:10},null,8,["value"])])),footer:l((()=>s[2]||(s[2]=[d("div",null,"一些底部的描述",-1)]))),default:l((()=>[d("div",x,[n(o(c),{"flex-height":"",size:"small",data:o(f),columns:v,style:{height:"100%"}},null,8,["data"])])])),_:1})],4))}},S={class:"h-[220px] w-full"},A={class:"flex flex-col gap-1"},N={__name:"base",setup:i=>(i,s)=>(t(),a("div",S,[n(o(e),null,{header:l((()=>s[0]||(s[0]=[d("div",null,"头部内容",-1)]))),footer:l((()=>s[1]||(s[1]=[d("div",null,"底部内容",-1)]))),default:l((()=>[d("div",A,[(t(),a(u,null,m(100,(e=>d("div",{key:e},[n(o(p),{repeat:1})]))),64))])])),_:1})]))},w=JSON.parse('{"title":"RNStickyPane 粘性面板","description":"","frontmatter":{},"headers":[],"relativePath":"components/RNStickyPane.md","filePath":"components/RNStickyPane.md"}'),D={name:"components/RNStickyPane.md"},_=Object.assign(D,{setup:e=>(e,i)=>{const s=k("ClientOnly");return t(),a("div",null,[i[0]||(i[0]=f('<h1 id="rnstickypane-粘性面板" tabindex="-1">RNStickyPane 粘性面板 <a class="header-anchor" href="#rnstickypane-粘性面板" aria-label="Permalink to &quot;RNStickyPane 粘性面板&quot;">​</a></h1><p>一个基于 flex 布局的容器组件，支持头部、内容区、底部的布局结构，内容区域支持滚动。</p><h2 id="何时使用" tabindex="-1">何时使用 <a class="header-anchor" href="#何时使用" aria-label="Permalink to &quot;何时使用&quot;">​</a></h2><ul><li>需要固定头部和底部，中间内容区域滚动的布局场景</li><li>需要构建类似后台管理系统的页面布局</li><li>需要处理内容溢出滚动的场景</li></ul><h2 id="组件特性" tabindex="-1">组件特性 <a class="header-anchor" href="#组件特性" aria-label="Permalink to &quot;组件特性&quot;">​</a></h2><ul><li>基于 flex 布局实现</li><li>支持头部、内容区、底部三个区域</li><li>内容区域支持滚动和非滚动模式</li><li>可自定义各区域的样式</li><li>继承了 Naive UI 的 Scrollbar 组件特性</li></ul><h3 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h3>',7)),n(s,null,{default:l((()=>[n(o(b),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"atom-one-light",darkTheme:"atom-one-dark",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:o('<script setup>\nimport { RNStickyPane } from \'@nero/next\';\nimport { NSkeleton } from \'naive-ui\';\n<\/script>\n\n<template>\n  <div class="h-[220px] w-full">\n    <RNStickyPane>\n      <template #header>\n        <div>头部内容</div>\n      </template>\n      <div class="flex flex-col gap-1">\n        <div v-for="item in 100" :key="item">\n          <NSkeleton :repeat="1" />\n        </div>\n      </div>\n      <template #footer>\n        <div>底部内容</div>\n      </template>\n    </RNStickyPane>\n  </div>\n</template>\n')},{vue:l((()=>[n(N)])),_:1},8,["vueCode"])])),_:1}),i[1]||(i[1]=d("h3",{id:"滚动条配置",tabindex:"-1"},[v("滚动条配置 "),d("a",{class:"header-anchor",href:"#滚动条配置","aria-label":'Permalink to "滚动条配置"'},"​")],-1)),n(s,null,{default:l((()=>[n(o(b),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"atom-one-light",darkTheme:"atom-one-dark",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:o('<script setup>\nimport { ref, computed } from \'vue\';\nimport { RNStickyPane } from \'@nero/next\';\nimport { NDataTable, NSlider } from \'naive-ui\';\n\nconst height = ref(320);\n\nconst styleRef = computed(() => {\n  return { height: `${height.value}px` };\n});\n\nconst data = Array.from({ length: 46 }).map((_, index) => ({\n  key: index,\n  age: 32,\n  name: `Edward King ${index}`,\n  address: `London, Park Lane no. ${index}`,\n}));\n\nconst columns = [\n  { type: \'selection\' },\n  { title: \'Name\', key: \'name\', width: 200, },\n  { title: \'Age\', key: \'age\', width: 100, },\n  { title: \'Address\', key: \'address\', width: 200, },\n];\n\n<\/script>\n\n<template>\n  <div class="w-full" :style="styleRef">\n    <RNStickyPane noScrollbar>\n      <template #header>\n        <div>真正的业务中高度可能"占满"某个区域,希望在这个区域固定表头滚动</div>\n        <NSlider v-model:value="height" :min="250" :max="500" :step="10" />\n      </template>\n      <div class="h-full">\n        <NDataTable\n          flex-height\n          size="small"\n          :data="data"\n          :columns="columns"\n          style="height: 100%"\n        />\n      </div>\n      <template #footer>\n        <div>一些底部的描述</div>\n      </template>\n    </RNStickyPane>\n  </div>\n</template>\n')},{vue:l((()=>[n(P)])),_:1},8,["vueCode"])])),_:1}),i[2]||(i[2]=d("h3",{id:"自定义样式",tabindex:"-1"},[v("自定义样式 "),d("a",{class:"header-anchor",href:"#自定义样式","aria-label":'Permalink to "自定义样式"'},"​")],-1)),n(s,null,{default:l((()=>[n(o(b),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"atom-one-light",darkTheme:"atom-one-dark",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:o('<script setup>\nimport { RNStickyPane } from \'@nero/next\';\n<\/script>\n\n<template>\n  <div class="w-full">\n    <RNStickyPane\n      content-class="custom-content"\n      content-style="background: #42A5F5;padding:0"\n      header-class="custom-header"\n      header-style="background: #f5f5f5;padding:0"\n      footer-class="custom-footer"\n      footer-style="background: #f5f5f5;padding:0"\n    >\n      <template #header>\n        <div>自定义样式的头部</div>\n      </template>\n      <div>自定义样式的内容区域</div>\n      <div>自定义样式的内容区域</div>\n      <template #footer>\n        <div>自定义样式的底部</div>\n      </template>\n    </RNStickyPane>\n  </div>\n</template>\n\n<style scope>\n\n</style>\n')},{vue:l((()=>[n(g)])),_:1},8,["vueCode"])])),_:1}),i[3]||(i[3]=f('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>contentClass</td><td>内容区域的自定义类名</td><td><code>string</code></td><td><code>&#39;&#39;</code></td></tr><tr><td>contentStyle</td><td>内容区域的自定义样式</td><td><code>string</code></td><td><code>&#39;&#39;</code></td></tr><tr><td>footerWrapperClass</td><td>底部区域的自定义类名</td><td><code>string</code></td><td><code>&#39;&#39;</code></td></tr><tr><td>footerWrapperStyle</td><td>底部区域的自定义样式</td><td><code>string</code></td><td><code>&#39;&#39;</code></td></tr><tr><td>noScrollbar</td><td>是否禁用内容区域的滚动条</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table><h3 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-label="Permalink to &quot;Slots&quot;">​</a></h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>内容区域的插槽</td></tr><tr><td>header</td><td>头部区域的插槽</td></tr><tr><td>footer</td><td>底部区域的插槽</td></tr></tbody></table>',5))])}});export{w as __pageData,_ as default};