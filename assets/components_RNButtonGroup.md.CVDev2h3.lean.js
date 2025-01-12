import{_ as e}from"./chunks/index.vue_vue_type_script_setup_true_lang.C9Xc3vaO.js";import{o as t,e as l,g as o,k as a,b as n,i as d,l as i,w as r,h as u,f as s,n as p}from"./chunks/naive-ui.DyEX4l5m.js";import{Q as c}from"./chunks/index.BsjzT1UF.js";const m={__name:"vertical",setup(a){const n=[{label:"销售记录",value:0},{label:"会员信息",value:1},{label:"订单信息",value:2},{label:"客户来源",value:3}];function d(e,t){console.error(e,t),window.$message.info(t.label)}return(a,i)=>(t(),l(o(e),{options:n,vertical:"","onUpdate:value":d}))}},h={class:"flex flex-col gap-2"},v={__name:"size",setup(l){const i=a(0),r=[{label:"销售记录",value:0},{label:"会员信息",value:1},{label:"订单信息",value:2},{label:"客户来源",value:3}];return(l,a)=>(t(),n("div",h,[d(o(e),{modelValue:i.value,"onUpdate:modelValue":a[0]||(a[0]=e=>i.value=e),options:r,primary:"",size:"tiny"},null,8,["modelValue"]),d(o(e),{modelValue:i.value,"onUpdate:modelValue":a[1]||(a[1]=e=>i.value=e),options:r,primary:"",size:"small"},null,8,["modelValue"]),d(o(e),{modelValue:i.value,"onUpdate:modelValue":a[2]||(a[2]=e=>i.value=e),options:r,primary:"",size:"medium"},null,8,["modelValue"]),d(o(e),{modelValue:i.value,"onUpdate:modelValue":a[3]||(a[3]=e=>i.value=e),options:r,primary:"",size:"large"},null,8,["modelValue"])]))}},b={class:"flex flex-col gap-2"},f={__name:"primary",setup(l){const i=a(0),r=[{label:"销售记录",value:0},{label:"会员信息",value:1},{label:"订单信息",value:2},{label:"客户来源",value:3}];return(l,a)=>(t(),n("div",b,[d(o(e),{modelValue:i.value,"onUpdate:modelValue":a[0]||(a[0]=e=>i.value=e),options:r,primary:""},null,8,["modelValue"]),d(o(e),{modelValue:i.value,"onUpdate:modelValue":a[1]||(a[1]=e=>i.value=e),options:r,ghost:"",primary:""},null,8,["modelValue"]),d(o(e),{modelValue:i.value,"onUpdate:modelValue":a[2]||(a[2]=e=>i.value=e),options:r,primary:"",secondary:""},null,8,["modelValue"]),d(o(e),{modelValue:i.value,"onUpdate:modelValue":a[3]||(a[3]=e=>i.value=e),options:r,primary:"",quaternary:""},null,8,["modelValue"])]))}},B={__name:"ghost",setup(a){const n=[{label:"销售记录",value:0},{label:"会员信息",value:1},{label:"订单信息",value:2},{label:"客户来源",value:3}];function d(e,t){console.error(e,t),window.$message.info(t.label)}return(a,i)=>(t(),l(o(e),{options:n,ghost:"","onUpdate:value":d}))}},g={__name:"base",setup(a){const n=[{label:"销售记录",value:0},{label:"会员信息",value:1},{label:"订单信息",value:2},{label:"客户来源",value:3}];function d(e,t){console.error(e,t),window.$message.info(t.label)}return(a,i)=>(t(),l(o(e),{options:n,"onUpdate:value":d}))}},y=JSON.parse('{"title":"RNButtonGroup 按钮组组件","description":"","frontmatter":{},"headers":[],"relativePath":"components/RNButtonGroup.md","filePath":"components/RNButtonGroup.md"}'),k={name:"components/RNButtonGroup.md"},D=Object.assign(k,{setup:e=>(e,l)=>{const a=p("ClientOnly");return t(),n("div",null,[l[0]||(l[0]=i('<h1 id="rnbuttongroup-按钮组组件" tabindex="-1">RNButtonGroup 按钮组组件 <a class="header-anchor" href="#rnbuttongroup-按钮组组件" aria-label="Permalink to &quot;RNButtonGroup 按钮组组件&quot;">​</a></h1><p>按钮排排队组件</p><ul><li>👶 让按钮们乖乖排好队</li><li>🎨 统一管理它们的样式</li><li>🎯 轻松处理点击事件</li><li>🔄 支持双向绑定</li></ul><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2><p>最简单的按钮组用法。</p>',5)),d(a,null,{default:r((()=>[d(o(c),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"atom-one-light",darkTheme:"atom-one-dark",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:o("<script setup>\nimport { RNButtonGroup } from '@nero/next';\n\nconst options = [\n  { label: '销售记录', value: 0 },\n  { label: '会员信息', value: 1 },\n  { label: '订单信息', value: 2 },\n  { label: '客户来源', value: 3 },\n];\n\nfunction update(key, option) {\n  console.error(key, option);\n  window.$message.info(option.label);\n}\n<\/script>\n\n<template>\n  <RNButtonGroup :options=\"options\" @update:value=\"update\" />\n</template>\n")},{vue:r((()=>[d(g)])),_:1},8,["vueCode"])])),_:1}),l[1]||(l[1]=u("h2",{id:"配置透明",tabindex:"-1"},[s("配置透明 "),u("a",{class:"header-anchor",href:"#配置透明","aria-label":'Permalink to "配置透明"'},"​")],-1)),l[2]||(l[2]=u("p",null,[s("见"),u("code",null,"ghost"),s("鬼了, 脸都吓白了。")],-1)),d(a,null,{default:r((()=>[d(o(c),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"atom-one-light",darkTheme:"atom-one-dark",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:o("<script setup>\nimport { RNButtonGroup } from '@nero/next';\n\nconst options = [\n  { label: '销售记录', value: 0 },\n  { label: '会员信息', value: 1 },\n  { label: '订单信息', value: 2 },\n  { label: '客户来源', value: 3 },\n];\n\nfunction update(key, option) {\n  console.error(key, option);\n  window.$message.info(option.label);\n}\n<\/script>\n\n<template>\n  <RNButtonGroup :options=\"options\" ghost @update:value=\"update\" />\n</template>\n")},{vue:r((()=>[d(B)])),_:1},8,["vueCode"])])),_:1}),l[3]||(l[3]=u("h2",{id:"配置高亮",tabindex:"-1"},[s("配置高亮 "),u("a",{class:"header-anchor",href:"#配置高亮","aria-label":'Permalink to "配置高亮"'},"​")],-1)),l[4]||(l[4]=u("p",null,"支持主题色的按钮组,高亮一下表示激活选中了。",-1)),d(a,null,{default:r((()=>[d(o(c),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"atom-one-light",darkTheme:"atom-one-dark",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:o('<script setup>\nimport { ref } from \'vue\';\n\nimport { RNButtonGroup } from \'@nero/next\';\n\nconst modelRef = ref(0);\n\nconst options = [\n  { label: \'销售记录\', value: 0 },\n  { label: \'会员信息\', value: 1 },\n  { label: \'订单信息\', value: 2 },\n  { label: \'客户来源\', value: 3 },\n];\n<\/script>\n\n<template>\n  <div class="flex flex-col gap-2">\n    <RNButtonGroup v-model="modelRef" :options="options" primary />\n    <RNButtonGroup v-model="modelRef" :options="options" ghost primary />\n    <RNButtonGroup v-model="modelRef" :options="options" primary secondary />\n    <RNButtonGroup v-model="modelRef" :options="options" primary quaternary />\n  </div>\n</template>\n')},{vue:r((()=>[d(f)])),_:1},8,["vueCode"])])),_:1}),l[5]||(l[5]=u("h2",{id:"配置大小",tabindex:"-1"},[s("配置大小 "),u("a",{class:"header-anchor",href:"#配置大小","aria-label":'Permalink to "配置大小"'},"​")],-1)),l[6]||(l[6]=u("p",null,"没大没小, 不同场景可能需要的大小不一致。",-1)),d(a,null,{default:r((()=>[d(o(c),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"atom-one-light",darkTheme:"atom-one-dark",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:o('<script setup>\nimport { ref } from \'vue\';\n\nimport { RNButtonGroup } from \'@nero/next\';\n\nconst modelRef = ref(0);\n\nconst options = [\n  { label: \'销售记录\', value: 0 },\n  { label: \'会员信息\', value: 1 },\n  { label: \'订单信息\', value: 2 },\n  { label: \'客户来源\', value: 3 },\n];\n<\/script>\n\n<template>\n  <div class="flex flex-col gap-2">\n    <RNButtonGroup v-model="modelRef" :options="options" primary size="tiny" />\n    <RNButtonGroup v-model="modelRef" :options="options" primary size="small" />\n    <RNButtonGroup\n      v-model="modelRef"\n      :options="options"\n      primary\n      size="medium"\n    />\n    <RNButtonGroup v-model="modelRef" :options="options" primary size="large" />\n  </div>\n</template>\n')},{vue:r((()=>[d(v)])),_:1},8,["vueCode"])])),_:1}),l[7]||(l[7]=u("h2",{id:"是否垂直",tabindex:"-1"},[s("是否垂直 "),u("a",{class:"header-anchor",href:"#是否垂直","aria-label":'Permalink to "是否垂直"'},"​")],-1)),l[8]||(l[8]=u("p",null,"我直了",-1)),d(a,null,{default:r((()=>[d(o(c),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"atom-one-light",darkTheme:"atom-one-dark",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:o("<script setup>\nimport { RNButtonGroup } from '@nero/next';\n\nconst options = [\n  { label: '销售记录', value: 0 },\n  { label: '会员信息', value: 1 },\n  { label: '订单信息', value: 2 },\n  { label: '客户来源', value: 3 },\n];\n\nfunction update(key, option) {\n  console.error(key, option);\n  window.$message.info(option.label);\n}\n<\/script>\n\n<template>\n  <RNButtonGroup :options=\"options\" vertical @update:value=\"update\" />\n</template>\n")},{vue:r((()=>[d(m)])),_:1},8,["vueCode"])])),_:1}),l[9]||(l[9]=i('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>options</td><td>按钮配置项</td><td><code>ButtonOption[]</code></td><td><code>[]</code></td></tr><tr><td>primary</td><td>是否使用主题色</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>size</td><td>按钮大小</td><td><code>&#39;tiny&#39; | &#39;small&#39; | &#39;medium&#39; | &#39;large&#39;</code></td><td><code>&#39;small&#39;</code></td></tr><tr><td>vertical</td><td>是否垂直排列</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>value(v-model)</td><td>当前选中值</td><td><code>string | number</code></td><td>-</td></tr></tbody></table><h2 id="buttonoption-配置项" tabindex="-1">ButtonOption 配置项 <a class="header-anchor" href="#buttonoption-配置项" aria-label="Permalink to &quot;ButtonOption 配置项&quot;">​</a></h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>label</td><td>按钮文本</td><td><code>string</code></td><td>-</td></tr><tr><td>value</td><td>按钮值</td><td><code>string | number</code></td><td>-</td></tr><tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>type</td><td>按钮类型</td><td><code>&#39;default&#39; | &#39;primary&#39; | &#39;info&#39; | &#39;success&#39; | &#39;warning&#39; | &#39;error&#39;</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>onClick</td><td>点击回调</td><td><code>(option: ButtonOption) =&gt; void</code></td><td>-</td></tr></tbody></table><h2 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件&quot;">​</a></h2><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:value</td><td>值更新时触发</td><td><code>(value: string | number, option: ButtonOption) =&gt; void</code></td></tr></tbody></table><h2 id="继承的属性" tabindex="-1">继承的属性 <a class="header-anchor" href="#继承的属性" aria-label="Permalink to &quot;继承的属性&quot;">​</a></h2><p>组件继承了 Naive UI 的 <code>n-button-group</code> 的所有属性：</p><ul><li><code>size</code>：按钮组大小</li><li><code>vertical</code>：是否垂直排列</li><li>等等...</li></ul><h2 id="注意事项" tabindex="-1">注意事项 <a class="header-anchor" href="#注意事项" aria-label="Permalink to &quot;注意事项&quot;">​</a></h2><ol><li><p>样式处理：</p><ul><li>通过 <code>primary</code> 属性控制是否使用主题色</li><li>每个按钮可以单独设置 <code>type</code> 属性</li><li>支持统一的尺寸控制</li></ul></li><li><p>事件处理：</p><ul><li>支持 v-model 双向绑定</li><li>可以通过 <code>onClick</code> 处理单个按钮点击</li><li><code>update:value</code> 事件提供完整的选项信息</li></ul></li><li><p>布局控制：</p><ul><li>默认水平排列</li><li>通过 <code>vertical</code> 属性切换垂直排列</li><li>按钮宽度会自适应内容</li></ul></li><li><p>状态管理：</p><ul><li>支持按钮禁用状态</li><li>选中状态通过 value 控制</li><li>支持动态更新选项</li></ul></li><li><p>性能优化：</p><ul><li>选项变化时会自动缓存计算结果</li><li>避免不必要的重渲染</li></ul></li></ol>',12))])}});export{y as __pageData,D as default};