import{_ as o}from"./plugin-vue_export-helper.21dcd24c.js";import{a,b as h,e as t,g as e,h as n,F as s,c,o as i}from"./app.1a1662aa.js";const p={},m=c(`<h1 id="zoom-\u7F29\u653E\u63A7\u4EF6" tabindex="-1"><a class="header-anchor" href="#zoom-\u7F29\u653E\u63A7\u4EF6" aria-hidden="true">#</a> Zoom \u7F29\u653E\u63A7\u4EF6</h1><p>\u7F29\u653E\u63A7\u4EF6\uFF0C\u9ED8\u8BA4\u4F4D\u4E8E\u5730\u56FE\u53F3\u4E0B\u89D2</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code>import { Zoom } from &#39;vue3-baidu-map-gl&#39;
</code></pre></div><h2 id="\u9759\u6001\u7EC4\u4EF6-props" tabindex="-1"><a class="header-anchor" href="#\u9759\u6001\u7EC4\u4EF6-props" aria-hidden="true">#</a> \u9759\u6001\u7EC4\u4EF6 Props</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>anchor</td><td>\u63A7\u4EF6\u7684\u505C\u9760\u4F4D\u7F6E</td><td>string</td><td><a href="#anchor">anchor</a></td><td>BMAP_ANCHOR_BOTTOM_LEFT</td></tr><tr><td>offset</td><td>\u63A7\u4EF6\u7684\u504F\u79FB\u503C</td><td>{x: number, y: number }</td><td></td><td>{ x: 83, y: 18 }</td></tr></tbody></table><h2 id="anchor" tabindex="-1"><a class="header-anchor" href="#anchor" aria-hidden="true">#</a> anchor</h2><table><thead><tr><th>\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>BMAP_ANCHOR_TOP_LEFT</td><td>\u5DE6\u4E0A</td></tr><tr><td>BMAP_ANCHOR_TOP_RIGHT</td><td>\u53F3\u4E0A</td></tr><tr><td>BMAP_ANCHOR_BOTTOM_LEFT</td><td>\u5DE6\u4E0B</td></tr><tr><td>BMAP_ANCHOR_BOTTOM_RIGHT</td><td>\u53F3\u4E0B</td></tr></tbody></table><h2 id="\u7EC4\u4EF6\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u5B9E\u4F8B" aria-hidden="true">#</a> \u7EC4\u4EF6\u5B9E\u4F8B</h2>`,8),_=t("div",{class:"language-vue ext-vue"},[t("pre",{class:"language-vue"},[t("code",null,`<Map
  :minZoom="3" 
  height="400px"
>
  <Zoom />
</Map>

<script setup lang="ts">
import {Map, Zoom} from 'vue3-baidu-map-gl'
<\/script>
`)])],-1);function l(u,b){const d=a("Zoom"),r=a("Map");return i(),h(s,null,[m,t("div",null,[e(r,{ak:"4stE857hYPHbEmgKhLiTAa0QbCIULHpm",minZoom:3,height:"400px"},{default:n(()=>[e(d)]),_:1})]),_],64)}var x=o(p,[["render",l],["__file","zoom.html.vue"]]);export{x as default};
