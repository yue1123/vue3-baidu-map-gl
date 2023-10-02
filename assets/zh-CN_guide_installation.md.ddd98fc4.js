import{_ as t,E as n,c as o,A as a,a as s,H as p,S as e,o as r}from"./chunks/framework.c482a5a7.js";const v=JSON.parse('{"title":"安装","description":"","frontmatter":{},"headers":[],"relativePath":"zh-CN/guide/installation.md","filePath":"zh-CN/guide/installation.md","lastUpdated":1696258790000}'),c={name:"zh-CN/guide/installation.md"},i=e(`<h1 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h1><h2 id="环境支持" tabindex="-1">环境支持 <a class="header-anchor" href="#环境支持" aria-label="Permalink to &quot;环境支持&quot;">​</a></h2><h3 id="组件库" tabindex="-1">组件库 <a class="header-anchor" href="#组件库" aria-label="Permalink to &quot;组件库&quot;">​</a></h3><p>Vue3 BaiduMap GL 可以在支持 <a href="https://caniuse.com/?feats=mdn-javascript_builtins_regexp_dotall,mdn-javascript_builtins_regexp_lookbehind_assertion,mdn-javascript_builtins_regexp_named_capture_groups,mdn-javascript_builtins_regexp_property_escapes,mdn-javascript_builtins_symbol_asynciterator,mdn-javascript_functions_method_definitions_async_generator_methods,mdn-javascript_grammar_template_literals_template_literal_revision,mdn-javascript_operators_destructuring_rest_in_objects,mdn-javascript_operators_spread_spread_in_destructuring,promise-finally" target="_blank" rel="noreferrer">ES2018</a> 的浏览器上运行。 如果您确实需要支持旧版本的浏览器，请自行添加 <a href="https://babeljs.io/" target="_blank" rel="noreferrer">Babel</a> 和相应的 Polyfill 。</p><p>由于 Vue 3 不再支持 IE11，该组件库是基于 Vue3 封装，自然也不再支持 IE 浏览器。</p><table><thead><tr><th><img src="https://cdn.jsdelivr.net/npm/@browser-logos/edge/edge_32x32.png" alt="IE"></th><th><img src="https://cdn.jsdelivr.net/npm/@browser-logos/firefox/firefox_32x32.png" alt="Firefox"></th><th><img src="https://cdn.jsdelivr.net/npm/@browser-logos/chrome/chrome_32x32.png" alt="Chrome"></th><th><img src="https://cdn.jsdelivr.net/npm/@browser-logos/safari/safari_32x32.png" alt="Safari"></th></tr></thead><tbody><tr><td>Edge ≥ 79</td><td>Firefox ≥ 78</td><td>Chrome ≥ 64</td><td>Safari ≥ 12</td></tr></tbody></table><h3 id="baidu-map-gl-api-兼容性" tabindex="-1">Baidu Map GL Api 兼容性 <a class="header-anchor" href="#baidu-map-gl-api-兼容性" aria-label="Permalink to &quot;Baidu Map GL Api 兼容性&quot;">​</a></h3><p>JavaScript API GL v1.0 基于 WebGL 开发，对于用户的浏览器环境有兼容性要求。需要完整支持 WebGL 的现代浏览器来支持渲染。对于 WebGL 支持欠佳的浏览器会降级为 Canvas 绘制，若仍然存在兼容性问题，则会降级到瓦片图渲染，确保不同浏览器环境的用户都可以完成地图的基本渲染。</p><h2 id="版本" tabindex="-1">版本 <a class="header-anchor" href="#版本" aria-label="Permalink to &quot;版本&quot;">​</a></h2><p>Vue3 BaiduMap GL 目前还处于快速开发迭代中。</p><h2 id="使用包管理器" tabindex="-1">使用包管理器 <a class="header-anchor" href="#使用包管理器" aria-label="Permalink to &quot;使用包管理器&quot;">​</a></h2><p>我们建议您使用包管理器（如 NPM、Yarn 或 pnpm）安装 Vue3 BaiduMap GL，然后您就可以使用打包工具，例如 Vite 或 webpack。</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># with npm</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vue3-baidu-map-gl@latest</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--save</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># or with yarn</span></span>
<span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vue3-baidu-map-gl@latest</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># or with pnpm</span></span>
<span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vue3-baidu-map-gl@latest</span></span></code></pre></div>`,13),d={id:"浏览器直接引入",tabindex:"-1"},y=a("a",{class:"header-anchor",href:"#浏览器直接引入","aria-label":'Permalink to "浏览器直接引入 <Badge type="tip" text="^0.0.21" />"'},"​",-1),h=e(`<p>直接通过浏览器的 HTML 标签导入 Vue3 BaiduMap GL，然后就可以使用全局变量 <code>Vue3baiduMapGl</code> 了。</p><p>不同的 CDN 提供商有不同的引入方式， 我们在这里以 <a href="https://unpkg.com" target="_blank" rel="noreferrer">unpkg</a> 和 <a href="https://www.jsdelivr.com" target="_blank" rel="noreferrer">jsDelivr</a> 举例。 你也可以使用其它的 CDN 供应商。</p><h3 id="unpkg" tabindex="-1">unpkg <a class="header-anchor" href="#unpkg" aria-label="Permalink to &quot;unpkg&quot;">​</a></h3><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">charset</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">utf-8</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">&lt;!-- Import Vue3 --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">  &lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://unpkg.com/vue@3</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">&lt;!-- Import Vue3 BaiduMap GL --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">&lt;!-- Would use latest version, you&#39;d better specify a version --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">  &lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://unpkg.com/vue3-baidu-map-gl</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h3 id="jsdelivr" tabindex="-1">jsDelivr <a class="header-anchor" href="#jsdelivr" aria-label="Permalink to &quot;jsDelivr&quot;">​</a></h3><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">&lt;!-- Import Vue 3 --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">  &lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https//cdn.jsdelivr.net/npm/vue@3</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">&lt;!-- Import Vue3 BaiduMap GL --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">  &lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://cdn.jsdelivr.net/npm/vue3-baidu-map-gl</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">提示</p><p>我们建议使用 CDN 引入 Vue3 BaiduMap GL 的用户在链接地址上锁定版本，以免将来 ElementPlus 升级时受到非兼容性更新的影响</p></div><h2 id="hello-world" tabindex="-1">Hello World <a class="header-anchor" href="#hello-world" aria-label="Permalink to &quot;Hello World&quot;">​</a></h2><p><a href="https://codepen.io/yue1123/pen/oNyQWeP" target="_blank" rel="noreferrer">在线演示</a></p>`,9),u=a("iframe",{allow:"accelerometer; camera; encrypted-media; display-capture; geolocation; gyroscope; microphone; midi; clipboard-read; clipboard-write;",allowfullscreen:"true",allowpaymentrequest:"true",height:"500",style:{width:"100%"},scrolling:"no",title:"Vue3 BaiduMap GL",src:"https://codepen.io/yue1123/embed/oNyQWeP?default-tab=html%2Cresult&theme-id=light",frameborder:"no",loading:"lazy"},`
`,-1);function D(F,m,_,g,b,C){const l=n("Badge");return r(),o("div",null,[i,a("h2",d,[s("浏览器直接引入 "),p(l,{type:"tip",text:"^0.0.21"}),s(),y]),h,u])}const A=t(c,[["render",D]]);export{v as __pageData,A as default};
