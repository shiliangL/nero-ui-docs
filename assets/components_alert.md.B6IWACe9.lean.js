import{o as t,e,w as i,h as n,i as s,g as a,B as r,f as o,j as l,b as d,l as h,n as c}from"./chunks/naive-ui.DyEX4l5m.js";import{c as p}from"./chunks/createLucideIcon.xZBn7lwy.js";import{S as k,a as u,b as g}from"./chunks/shopping-cart.3SyFlmgX.js";import{_ as E}from"./chunks/index.vue_vue_type_script_setup_true_lang.q2_t13Z_.js";import{Q as m}from"./chunks/index.BsjzT1UF.js";import"./chunks/index.6vUEYOb4.js";import"./chunks/defu.CAfuikgh.js";
/**
 * @license lucide-vue-next v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=p("ShirtIcon",[["path",{d:"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z",key:"1wgbhj"}]]),v={class:"mb-2 flex gap-2"},f={__name:"alertIcon",setup(d){function h(t){var e,i;const n={error:()=>l(g,{size:18}),info:()=>l(y,{size:18}),success:()=>l(k,{size:18}),warning:()=>l(u,{size:18})};null==(i=null==(e=window.$alert)?void 0:e[t])||i.call(e,"我是自定义的内容",{icon:n[t],title:"温馨提醒"})}return(l,d)=>(t(),e(a(E),null,{default:i((()=>[n("div",v,[s(a(r),{type:"info",onClick:d[0]||(d[0]=t=>h("info"))},{icon:i((()=>[s(a(y))])),default:i((()=>[d[4]||(d[4]=o(" Shirt 图标 "))])),_:1}),s(a(r),{type:"success",onClick:d[1]||(d[1]=t=>h("success"))},{icon:i((()=>[s(a(k))])),default:i((()=>[d[5]||(d[5]=o(" ShoppingBag 图标 "))])),_:1}),s(a(r),{type:"warning",onClick:d[2]||(d[2]=t=>h("warning"))},{icon:i((()=>[s(a(u))])),default:i((()=>[d[6]||(d[6]=o(" ShoppingCart 图标 "))])),_:1}),s(a(r),{type:"error",onClick:d[3]||(d[3]=t=>h("error"))},{icon:i((()=>[s(a(g))])),default:i((()=>[d[7]||(d[7]=o(" ShieldCheck 图标 "))])),_:1})])])),_:1}))}},b={class:"mb-2 flex gap-2"},C={__name:"alert",setup(l){function d(t){var e,i;null==(i=null==(e=window.$alert)?void 0:e[t])||i.call(e,"我是自定义的内容",{title:"温馨提醒"})}return(l,h)=>(t(),e(a(E),null,{default:i((()=>[n("div",b,[s(a(r),{type:"info",onClick:h[0]||(h[0]=t=>d("info"))},{default:i((()=>h[4]||(h[4]=[o(" Info 类型 ")]))),_:1}),s(a(r),{type:"success",onClick:h[1]||(h[1]=t=>d("success"))},{default:i((()=>h[5]||(h[5]=[o(" Success 类型 ")]))),_:1}),s(a(r),{type:"warning",onClick:h[2]||(h[2]=t=>d("warning"))},{default:i((()=>h[6]||(h[6]=[o(" Warning 类型 ")]))),_:1}),s(a(r),{type:"error",onClick:h[3]||(h[3]=t=>d("error"))},{default:i((()=>h[7]||(h[7]=[o(" Error 类型 ")]))),_:1})]),s(a(E))])),_:1}))}},B=JSON.parse('{"title":"Alert 信息","description":"","frontmatter":{},"headers":[],"relativePath":"components/alert.md","filePath":"components/alert.md"}'),w={name:"components/alert.md"},A=Object.assign(w,{setup:e=>(e,r)=>{const l=c("ClientOnly");return t(),d("div",null,[r[0]||(r[0]=h('<h1 id="alert-信息" tabindex="-1">Alert 信息 <a class="header-anchor" href="#alert-信息" aria-label="Permalink to &quot;Alert 信息&quot;">​</a></h1><p>全局Alert消息提示反馈。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li>🚀 允许你在任意组件或者非setup的地方使用。</li><li>🎯 快捷使用,少写一点代码,无需引入相关的Hook。</li></ul></div><h2 id="使用之前" tabindex="-1">使用之前 <a class="header-anchor" href="#使用之前" aria-label="Permalink to &quot;使用之前&quot;">​</a></h2><p>在系统人口或者根组件中引入</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> lang</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ts&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">import App from &#39;./app.vue&#39;;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">import { RNProviderFeedback } from &#39;@nero/next&#39;;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">RNProviderFeedback</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">App</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">RNProviderFeedback</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2><p>可设置类型<code>info | success | warning | error</code>达到不同的提示效果。</p>',8)),s(l,null,{default:i((()=>[s(a(m),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"atom-one-light",darkTheme:"atom-one-dark",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:a('<script setup>\nimport { RNProviderFeedback } from \'@nero/next\';\nimport { NButton } from \'naive-ui\';\n\nfunction createRenderIcon(type) {\n  window.$alert?.[type]?.(\'我是自定义的内容\', {\n    title: \'温馨提醒\',\n  });\n}\n<\/script>\n\n<template>\n  <RNProviderFeedback>\n    <div class="mb-2 flex gap-2">\n      <NButton type="info" @click="createRenderIcon(\'info\')">\n        Info 类型\n      </NButton>\n      <NButton type="success" @click="createRenderIcon(\'success\')">\n        Success 类型\n      </NButton>\n      <NButton type="warning" @click="createRenderIcon(\'warning\')">\n        Warning 类型\n      </NButton>\n      <NButton type="error" @click="createRenderIcon(\'error\')">\n        Error 类型\n      </NButton>\n    </div>\n    <RNProviderFeedback />\n  </RNProviderFeedback>\n</template>\n')},{vue:i((()=>[s(C)])),_:1},8,["vueCode"])])),_:1}),r[1]||(r[1]=n("h2",{id:"其他配置",tabindex:"-1"},[o("其他配置 "),n("a",{class:"header-anchor",href:"#其他配置","aria-label":'Permalink to "其他配置"'},"​")],-1)),r[2]||(r[2]=n("p",null,"自定义图标",-1)),s(l,null,{default:i((()=>[s(a(m),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"atom-one-light",darkTheme:"atom-one-dark",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:a("<script setup>\nimport { h } from 'vue';\n\nimport { RNProviderFeedback } from '@nero/next';\nimport { ShieldCheck, Shirt, ShoppingBag, ShoppingCart } from 'lucide-vue-next';\nimport { NButton } from 'naive-ui';\n\nfunction createRenderIcon(type) {\n  const iconWar = {\n    error: () => h(ShieldCheck, { size: 18 }),\n    info: () => h(Shirt, { size: 18 }),\n    success: () => h(ShoppingBag, { size: 18 }),\n    warning: () => h(ShoppingCart, { size: 18 }),\n  };\n  window.$alert?.[type]?.('我是自定义的内容', {\n    icon: iconWar[type],\n    title: '温馨提醒',\n  });\n}\n<\/script>\n\n<template>\n  <RNProviderFeedback>\n    <div class=\"mb-2 flex gap-2\">\n      <NButton type=\"info\" @click=\"createRenderIcon('info')\">\n        <template #icon>\n          <Shirt />\n        </template>\n        Shirt 图标\n      </NButton>\n      <NButton type=\"success\" @click=\"createRenderIcon('success')\">\n        <template #icon>\n          <ShoppingBag />\n        </template>\n        ShoppingBag 图标\n      </NButton>\n      <NButton type=\"warning\" @click=\"createRenderIcon('warning')\">\n        <template #icon>\n          <ShoppingCart />\n        </template>\n        ShoppingCart 图标\n      </NButton>\n      <NButton type=\"error\" @click=\"createRenderIcon('error')\">\n        <template #icon>\n          <ShieldCheck />\n        </template>\n        ShieldCheck 图标\n      </NButton>\n    </div>\n  </RNProviderFeedback>\n</template>\n")},{vue:i((()=>[s(f)])),_:1},8,["vueCode"])])),_:1}),r[3]||(r[3]=h('<h2 id="消息内容" tabindex="-1">消息内容 <a class="header-anchor" href="#消息内容" aria-label="Permalink to &quot;消息内容&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">window.$alert.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">info</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(content: string, options: MessageOptions)</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">window.$alert.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">success</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(content: string, options: MessageOptions)</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">window.$alert.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">warning</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(content: string, options: MessageOptions)</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">window.$alert.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">error</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(content: string, options: MessageOptions)</span></span></code></pre></div><h2 id="alert-方法" tabindex="-1">Alert 方法 <a class="header-anchor" href="#alert-方法" aria-label="Permalink to &quot;Alert 方法&quot;">​</a></h2><table><thead><tr><th>名称</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>destroyAll</td><td><code>() =&gt; void</code></td><td>销毁所有弹出的信息</td></tr><tr><td>error</td><td><code>(content: string | (() =&gt; VNodeChild), option?: AlertOption) =&gt; AlertReactive</code></td><td>调用 error 类型的信息</td></tr><tr><td>info</td><td><code>(content: string | (() =&gt; VNodeChild), option?: AlertOption) =&gt; AlertReactive</code></td><td>调用 info 类型的信息</td></tr><tr><td>success</td><td><code>(content: string | (() =&gt; VNodeChild), option?: AlertOption) =&gt; AlertReactive</code></td><td>调用 success 类型的信息</td></tr><tr><td>warning</td><td><code>(content: string | (() =&gt; VNodeChild), option?: AlertOption) =&gt; AlertReactive</code></td><td>调用 warning 类型的信息</td></tr></tbody></table><h2 id="alertoption-属性" tabindex="-1">AlertOption 属性 <a class="header-anchor" href="#alertoption-属性" aria-label="Permalink to &quot;AlertOption 属性&quot;">​</a></h2><table><thead><tr><th>名称</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>title</td><td><code>string</code></td><td>标题描述</td></tr><tr><td>closable</td><td><code>boolean</code></td><td>是否显示 close 图标</td></tr><tr><td>duration</td><td><code>number</code></td><td>持续时间（单位：毫秒），设为 0 则不会自动关闭</td></tr><tr><td>icon</td><td><code>() =&gt; VNodeChild</code></td><td>信息图标</td></tr><tr><td>keepAliveOnHover</td><td><code>boolean</code></td><td>Hover 到信息上是否不销毁</td></tr><tr><td>showIcon</td><td><code>boolean</code></td><td>是否展示图标</td></tr><tr><td>type</td><td><code>info success warning error loading default</code></td><td>信息类型</td></tr><tr><td>onAfterLeave</td><td><code>() =&gt; void</code></td><td>信息消失动画结束的回调</td></tr><tr><td>onClose</td><td><code>() =&gt; void</code></td><td>点击关闭图标的回调</td></tr><tr><td>onLeave</td><td><code>() =&gt; void</code></td><td>信息开始消失的回调</td></tr></tbody></table><h2 id="alertreactive-methods" tabindex="-1">AlertReactive Methods <a class="header-anchor" href="#alertreactive-methods" aria-label="Permalink to &quot;AlertReactive Methods&quot;">​</a></h2><table><thead><tr><th>名称</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>destroy</td><td><code>()</code></td><td>销毁</td></tr></tbody></table>',8))])}});export{B as __pageData,A as default};