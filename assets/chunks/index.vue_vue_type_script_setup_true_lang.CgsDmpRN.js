import{r as e,m as a,R as l}from"./index.4XHecB6P.js";import{d as t,u as s,c as r,o as n,e as o,m as i,g as p}from"./naive-ui.DyEX4l5m.js";const m=t({desc:"一个折线图",name:"RNChartLine",__name:"index",props:{config:{default:()=>({})},series:{default:()=>[{label:"销售单信息",value:Array.from({length:12}).fill(0).map((()=>e()))},{label:"配货单信息",value:Array.from({length:12}).fill(0).map((()=>e()))},{label:"会员信息",value:Array.from({length:12}).fill(0).map((()=>e()))}]},type:{default:"line"}},setup(e){const t=e,m=s(),u=r((()=>({...m,options:null}))),f=r((()=>{const e=t.series.map((e=>({...e,data:e.data,name:e.name,type:e.type||t.type})));return a(t.config||{},{series:e,xAxis:{boundaryGap:!1,data:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],type:"category"},yAxis:[{type:"value"}]})}));return(e,a)=>(n(),o(p(l),i({option:f.value},u.value,{theme:"blue"}),null,16,["option"]))}});export{m as _};
