import{r as a,m as e,R as r}from"./index.4XHecB6P.js";import{d as l,u as t,c as o,o as s,e as n,m as u,g as p}from"./naive-ui.DyEX4l5m.js";const i=l({desc:"一个柱状图",name:"RNChartBar",__name:"index",props:{backgroundStyleColor:{default:"rgba(180, 180, 180, 0)"},config:{default:()=>({})},series:{default:()=>[{label:"销售单信息",value:Array.from({length:12}).fill(0).map((()=>a()))},{label:"配货单信息",value:Array.from({length:12}).fill(0).map((()=>a()))},{label:"会员信息",value:Array.from({length:12}).fill(0).map((()=>a()))}]},type:{default:"bar"}},setup(a){const l=a,i=t(),m=o((()=>({...i,options:null}))),d=o((()=>{const a=l.series.map((a=>({...a,backgroundStyle:{color:l.backgroundStyleColor||"transparent"},data:a.data,name:a.name,showBackground:!0,type:a.type||l.type})));return e(l.config||{},{series:a,xAxis:{data:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],type:"category"},yAxis:[{type:"value"}]})}));return(a,e)=>(s(),n(p(r),u({option:d.value},m.value,{theme:"blue"}),null,16,["option"]))}});export{i as _};
