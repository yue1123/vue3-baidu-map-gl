import{_ as d,D as a,c as p,I as s,w as c,k as t,R as e,a as n,o as u}from"./chunks/framework.aeLSa5ZG.js";const I=JSON.parse('{"title":"BBezierCurve 折线","description":"","frontmatter":{},"headers":[],"relativePath":"zh-CN/components/overlay/bezierCurve.md","filePath":"zh-CN/components/overlay/bezierCurve.md","lastUpdated":1723390409000}'),r={name:"zh-CN/components/overlay/bezierCurve.md"},C=e("",5),i=t("p",null,"overlay/bezierCurve",-1),E=t("h2",{id:"动态组件-props",tabindex:"-1"},[n("动态组件 Props "),t("a",{class:"header-anchor",href:"#动态组件-props","aria-label":'Permalink to "动态组件 Props"'},"​")],-1),A=t("thead",null,[t("tr",null,[t("th",null,"属性"),t("th",null,"说明"),t("th",null,"类型"),t("th",null,"可选值"),t("th",null,"默认值"),t("th",null,"版本")])],-1),D=t("tr",null,[t("td",null,"path"),t("td",null,"贝塞尔曲线的坐标数组"),t("td",null,[t("code",null,"{ lng: number, lat: number}[]")]),t("td",null,"-"),t("td",null,[t("code",null,"required")]),t("td",null,"-")],-1),k=t("tr",null,[t("td",null,"controlPoints"),t("td",null,"贝塞尔曲线控制点的坐标数组"),t("td",null,[t("code",null,"{ lng: number, lat: number}[][]")]),t("td",null,"-"),t("td",null,[t("code",null,"required")]),t("td",null,"-")],-1),h=t("tr",null,[t("td",null,"strokeColor"),t("td",null,"描边的颜色，同 CSS 颜色"),t("td",null,[t("code",null,"string")]),t("td",null,"-"),t("td",null,[t("code",null,"#000000")]),t("td",null,"-")],-1),_=t("tr",null,[t("td",null,"strokeWeight"),t("td",null,"描边的宽度，单位为像素"),t("td",null,[t("code",null,"string")]),t("td",null,"-"),t("td",null,[t("code",null,"2")]),t("td",null,"-")],-1),F=t("tr",null,[t("td",null,"strokeOpacity"),t("td",null,[n("描边的透明度，范围 "),t("code",null,"0-1")]),t("td",null,[t("code",null," number")]),t("td",null,"-"),t("td",null,[t("code",null," 1")]),t("td",null,"-")],-1),B=t("tr",null,[t("td",null,"strokeStyle"),t("td",null,"描边的样式，为实线、虚线、或者点状线"),t("td",null,[t("code",null,"string")]),t("td",null,[t("code",null,"solid / dashed / dotted")]),t("td",null,"-"),t("td",null,"-")],-1),v=t("tr",null,[t("td",null,"enableMassClear"),t("td",null,[n("是否在调用 "),t("code",null,"map.clearOverlays"),n(" 清除此覆盖物")]),t("td",null,[t("code",null,"boolean")]),t("td",null,"-"),t("td",null,[t("code",null,"true ")]),t("td",null,"-")],-1),g=t("td",null,"visible",-1),m=t("td",null,"是否显示",-1),b=t("td",null,[t("code",null,"boolean")],-1),z=t("td",null,"-",-1),y=t("td",null,[t("code",null,"true")],-1),f=e("",2);function q(P,T,N,S,x,V){const l=a("Demo"),o=a("Badge");return u(),p("div",null,[C,s(l,{source:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3EBMap%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Acenter%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%7B%20lng%3A%20113.399%2C%20lat%3A%2039.91%20%7D%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Azoom%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E8%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3EBBezierCurve%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Apath%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%5B%0A%20%20%20%20%20%20%20%20%7B%20lng%3A%20116.399%2C%20lat%3A%2039.911%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%20lng%3A%20113.399%2C%20lat%3A%2039.91%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%20lng%3A%20110.399%2C%20lat%3A%2039.91%20%7D%0A%20%20%20%20%20%20%5D%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3AcontrolPoints%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%5B%0A%20%20%20%20%20%20%20%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%20lng%3A%20115.399%2C%20lat%3A%2040.91%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20lng%3A%20114.399%2C%20lat%3A%2038.91%20%7D%0A%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%20%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%20lng%3A%20112.399%2C%20lat%3A%2038.911%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20lng%3A%20112.399%2C%20lat%3A%2038.41%20%7D%0A%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%5D%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Estroke-color%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%23000%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Astroke-opacity%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E1%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Astroke-weight%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E2%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3EBMap%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",path:"overlay/bezierCurve","raw-source":"%3Ctemplate%3E%0A%20%20%3CBMap%20v-bind%3D%22%24attrs%22%20%3Acenter%3D%22%7B%20lng%3A%20113.399%2C%20lat%3A%2039.91%20%7D%22%20%3Azoom%3D%228%22%3E%0A%20%20%20%20%3CBBezierCurve%0A%20%20%20%20%20%20%3Apath%3D%22%5B%0A%20%20%20%20%20%20%20%20%7B%20lng%3A%20116.399%2C%20lat%3A%2039.911%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%20lng%3A%20113.399%2C%20lat%3A%2039.91%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%20lng%3A%20110.399%2C%20lat%3A%2039.91%20%7D%0A%20%20%20%20%20%20%5D%22%0A%20%20%20%20%20%20%3AcontrolPoints%3D%22%5B%0A%20%20%20%20%20%20%20%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%20lng%3A%20115.399%2C%20lat%3A%2040.91%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20lng%3A%20114.399%2C%20lat%3A%2038.91%20%7D%0A%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%20%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%20lng%3A%20112.399%2C%20lat%3A%2038.911%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20lng%3A%20112.399%2C%20lat%3A%2038.41%20%7D%0A%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%5D%22%0A%20%20%20%20%20%20stroke-color%3D%22%23000%22%0A%20%20%20%20%20%20%3Astroke-opacity%3D%221%22%0A%20%20%20%20%20%20%3Astroke-weight%3D%222%22%0A%20%20%20%20%2F%3E%0A%20%20%3C%2FBMap%3E%0A%3C%2Ftemplate%3E%0A",description:"%3Cp%3E%E5%9C%A8%E5%9C%B0%E5%9B%BE%E4%B8%AD%E6%B7%BB%E5%8A%A0%E8%B4%9D%E5%A1%9E%E5%B0%94%E6%9B%B2%E7%BA%BF%3C%2Fp%3E%0A"},{default:c(()=>[i]),_:1}),E,t("table",null,[A,t("tbody",null,[D,k,h,_,F,B,v,t("tr",null,[g,m,b,z,y,t("td",null,[s(o,{type:"tip",text:"^2.2.0"})])])])]),f])}const M=d(r,[["render",q]]);export{I as __pageData,M as default};
