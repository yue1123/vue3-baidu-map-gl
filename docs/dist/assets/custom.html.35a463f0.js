import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";import{d as v,r as h,a as d,b as p,e as t,g as u,h as o,F as i,c as E,p as _,j as m,o as f}from"./app.1a1662aa.js";const F=a=>(_("data-v-7e41169c"),a=a(),m(),a),b=E(`<h1 id="control-\u81EA\u5B9A\u4E49\u63A7\u4EF6" tabindex="-1" data-v-7e41169c><a class="header-anchor" href="#control-\u81EA\u5B9A\u4E49\u63A7\u4EF6" aria-hidden="true" data-v-7e41169c>#</a> Control \u81EA\u5B9A\u4E49\u63A7\u4EF6</h1><p data-v-7e41169c>\u6839\u636E\u5730\u56FE <code data-v-7e41169c>Map</code> \u7EC4\u4EF6\u63D0\u4F9B\u7684Props, \u6216\u8005\u5730\u56FE\u5B9E\u4F8B,\u81EA\u5B9A\u4E49\u63A7\u4EF6</p><div class="language-typescript ext-ts" data-v-7e41169c><pre class="language-typescript" data-v-7e41169c><code data-v-7e41169c>import { Control } from &#39;vue3-baidu-map-gl&#39;
</code></pre></div><h2 id="\u9759\u6001\u7EC4\u4EF6-props" tabindex="-1" data-v-7e41169c><a class="header-anchor" href="#\u9759\u6001\u7EC4\u4EF6-props" aria-hidden="true" data-v-7e41169c>#</a> \u9759\u6001\u7EC4\u4EF6 Props</h2><table data-v-7e41169c><thead data-v-7e41169c><tr data-v-7e41169c><th data-v-7e41169c>\u53C2\u6570</th><th data-v-7e41169c>\u8BF4\u660E</th><th data-v-7e41169c>\u7C7B\u578B</th><th data-v-7e41169c>\u53EF\u9009\u503C</th><th data-v-7e41169c>\u9ED8\u8BA4\u503C</th></tr></thead><tbody data-v-7e41169c><tr data-v-7e41169c><td data-v-7e41169c>anchor</td><td data-v-7e41169c>\u63A7\u4EF6\u7684\u505C\u9760\u4F4D\u7F6E</td><td data-v-7e41169c>string</td><td data-v-7e41169c><a href="#anchor" data-v-7e41169c>anchor</a></td><td data-v-7e41169c>BMAP_ANCHOR_BOTTOM_LEFT</td></tr><tr data-v-7e41169c><td data-v-7e41169c>offset</td><td data-v-7e41169c>\u63A7\u4EF6\u7684\u504F\u79FB\u503C</td><td data-v-7e41169c>{x: number, y: number }</td><td data-v-7e41169c></td><td data-v-7e41169c>{ x: 83, y: 18 }</td></tr></tbody></table><h2 id="anchor" tabindex="-1" data-v-7e41169c><a class="header-anchor" href="#anchor" aria-hidden="true" data-v-7e41169c>#</a> anchor</h2><table data-v-7e41169c><thead data-v-7e41169c><tr data-v-7e41169c><th data-v-7e41169c>\u503C</th><th data-v-7e41169c>\u8BF4\u660E</th></tr></thead><tbody data-v-7e41169c><tr data-v-7e41169c><td data-v-7e41169c>BMAP_ANCHOR_TOP_LEFT</td><td data-v-7e41169c>\u5DE6\u4E0A</td></tr><tr data-v-7e41169c><td data-v-7e41169c>BMAP_ANCHOR_TOP_RIGHT</td><td data-v-7e41169c>\u53F3\u4E0A</td></tr><tr data-v-7e41169c><td data-v-7e41169c>BMAP_ANCHOR_BOTTOM_LEFT</td><td data-v-7e41169c>\u5DE6\u4E0B</td></tr><tr data-v-7e41169c><td data-v-7e41169c>BMAP_ANCHOR_BOTTOM_RIGHT</td><td data-v-7e41169c>\u53F3\u4E0B</td></tr></tbody></table><h2 id="\u7EC4\u4EF6\u5B9E\u4F8B" tabindex="-1" data-v-7e41169c><a class="header-anchor" href="#\u7EC4\u4EF6\u5B9E\u4F8B" aria-hidden="true" data-v-7e41169c>#</a> \u7EC4\u4EF6\u5B9E\u4F8B</h2>`,8),C=F(()=>t("div",{class:"language-vue ext-vue"},[t("pre",{class:"language-vue"},[t("code",null,`<Map
  :minZoom="3"
  :zoom="zoom"
  :enableScrollWheelZoom="false"
  height="400px"
>
  <Control style="display: flex; background-color: #fff; padding: 10px" :offset="{ x: 0, y: 0 }">
    <button @click="handleZoomOut">\u7F29\u5C0F</button>
    <button @click="handleZoomIn">\u653E\u5927</button>
  </Control>
</Map>

<script setup lang="ts">
  import { ref } from 'vue'
  const zoom = ref(10)
  function handleZoomOut() {
    zoom.value-= 1
  }
  function handleZoomIn() {
    zoom.value+= 1
  }
<\/script>

<style scoped>
button{
  outline:none;
  border:none;
  background:#41b883;
  margin:0 5px;
  padding: 5px 15px;
  border-radius: 4px !important;
}
</style>
`)])],-1)),B=v({setup(a){const e=h(10);function c(){e.value-=1}function r(){e.value+=1}return(A,x)=>{const n=d("Control"),l=d("Map");return f(),p(i,null,[b,t("div",null,[u(l,{ak:"4stE857hYPHbEmgKhLiTAa0QbCIULHpm",minZoom:3,zoom:e.value,enableScrollWheelZoom:!1,height:"400px"},{default:o(()=>[u(n,{style:{display:"flex","background-color":"#fff",padding:"10px"},offset:{x:0,y:0}},{default:o(()=>[t("button",{onClick:c},"\u7F29\u5C0F"),t("button",{onClick:r},"\u653E\u5927")]),_:1})]),_:1},8,["zoom"])]),C],64)}}});var O=s(B,[["__scopeId","data-v-7e41169c"],["__file","custom.html.vue"]]);export{O as default};
