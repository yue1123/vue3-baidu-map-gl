if(!self.define){let e,s={};const n=(n,o)=>(n=new URL(n+".js",o).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(o,l)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let i={};const r=e=>n(e,a),d={module:{uri:a},exports:i,require:r};s[a]=Promise.all(o.map((e=>d[e]||r(e)))).then((e=>(l(...e),i)))}}define(["./workbox-8c9736bb"],(function(e){"use strict";e.setCacheNameDetails({prefix:"bundle-prefetch"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"938a4ac8677c53dffe292c7b84f2f8ba"},{url:"assets/app.8d72TBhU.js",revision:null},{url:"assets/chunks/@localSearchIndexroot.7WLy6Cky.js",revision:null},{url:"assets/chunks/bmap-draw.min.fXjVp_JZ.js",revision:null},{url:"assets/chunks/commonjsHelpers.5-cIlDoe.js",revision:null},{url:"assets/chunks/framework.aeLSa5ZG.js",revision:null},{url:"assets/chunks/mapvthree.umd.c7ntDXwx.js",revision:null},{url:"assets/chunks/theme.RFiQYD5D.js",revision:null},{url:"assets/chunks/vanilla-tilt.es2015.wZKfKoOJ.js",revision:null},{url:"assets/chunks/virtual_pwa-register.Wfz9M2iD.js",revision:null},{url:"assets/chunks/VPLocalSearchBox.g5CqjfdC.js",revision:null},{url:"assets/chunks/workbox-window.prod.es5.prqDwDSL.js",revision:null},{url:"assets/index.md.48hqsp4f.js",revision:null},{url:"assets/index.md.48hqsp4f.lean.js",revision:null},{url:"assets/inter-italic-cyrillic-ext.OVycGSDq.woff2",revision:null},{url:"assets/inter-italic-cyrillic.-nLMcIwj.woff2",revision:null},{url:"assets/inter-italic-greek-ext.hznxWNZO.woff2",revision:null},{url:"assets/inter-italic-greek.PSfer2Kc.woff2",revision:null},{url:"assets/inter-italic-latin-ext.RnFly65-.woff2",revision:null},{url:"assets/inter-italic-latin.27E69YJn.woff2",revision:null},{url:"assets/inter-italic-vietnamese.xzQHe1q1.woff2",revision:null},{url:"assets/inter-roman-cyrillic-ext.8T9wMG5w.woff2",revision:null},{url:"assets/inter-roman-cyrillic.jIZ9REo5.woff2",revision:null},{url:"assets/inter-roman-greek-ext.9JiNzaSO.woff2",revision:null},{url:"assets/inter-roman-greek.Cb5wWeGA.woff2",revision:null},{url:"assets/inter-roman-latin-ext.GZWE-KO4.woff2",revision:null},{url:"assets/inter-roman-latin.bvIUbFQP.woff2",revision:null},{url:"assets/inter-roman-vietnamese.paY3CzEB.woff2",revision:null},{url:"assets/sponsor.md.TisVtjNZ.js",revision:null},{url:"assets/sponsor.md.TisVtjNZ.lean.js",revision:null},{url:"assets/style.SL9VpgYA.css",revision:null},{url:"assets/zh-CN_components_autoComplete_index.md.JVHi06A1.js",revision:null},{url:"assets/zh-CN_components_autoComplete_index.md.JVHi06A1.lean.js",revision:null},{url:"assets/zh-CN_components_control_citylist.md.idya_KLm.js",revision:null},{url:"assets/zh-CN_components_control_citylist.md.idya_KLm.lean.js",revision:null},{url:"assets/zh-CN_components_control_context-menu.md.RLjBXEk0.js",revision:null},{url:"assets/zh-CN_components_control_context-menu.md.RLjBXEk0.lean.js",revision:null},{url:"assets/zh-CN_components_control_copyright.md.Aib5sdpR.js",revision:null},{url:"assets/zh-CN_components_control_copyright.md.Aib5sdpR.lean.js",revision:null},{url:"assets/zh-CN_components_control_custom.md.G8C2X-SZ.js",revision:null},{url:"assets/zh-CN_components_control_custom.md.G8C2X-SZ.lean.js",revision:null},{url:"assets/zh-CN_components_control_location.md.huq1YetT.js",revision:null},{url:"assets/zh-CN_components_control_location.md.huq1YetT.lean.js",revision:null},{url:"assets/zh-CN_components_control_navigation3d.md.zhrDrimb.js",revision:null},{url:"assets/zh-CN_components_control_navigation3d.md.zhrDrimb.lean.js",revision:null},{url:"assets/zh-CN_components_control_panorama-control.md.u2S1XC49.js",revision:null},{url:"assets/zh-CN_components_control_panorama-control.md.u2S1XC49.lean.js",revision:null},{url:"assets/zh-CN_components_control_scale.md.lYXgG17k.js",revision:null},{url:"assets/zh-CN_components_control_scale.md.lYXgG17k.lean.js",revision:null},{url:"assets/zh-CN_components_control_zoom.md.8M0rtZDT.js",revision:null},{url:"assets/zh-CN_components_control_zoom.md.8M0rtZDT.lean.js",revision:null},{url:"assets/zh-CN_components_layer_district-layer.md.DiBz0QLc.js",revision:null},{url:"assets/zh-CN_components_layer_district-layer.md.DiBz0QLc.lean.js",revision:null},{url:"assets/zh-CN_components_layer_panorama-coverage.md.aLKjHoed.js",revision:null},{url:"assets/zh-CN_components_layer_panorama-coverage.md.aLKjHoed.lean.js",revision:null},{url:"assets/zh-CN_components_map.md.7pRcshwd.js",revision:null},{url:"assets/zh-CN_components_map.md.7pRcshwd.lean.js",revision:null},{url:"assets/zh-CN_components_overlay_bezierCurve.md.8okl8LlJ.js",revision:null},{url:"assets/zh-CN_components_overlay_bezierCurve.md.8okl8LlJ.lean.js",revision:null},{url:"assets/zh-CN_components_overlay_circle.md.2_NDUHZm.js",revision:null},{url:"assets/zh-CN_components_overlay_circle.md.2_NDUHZm.lean.js",revision:null},{url:"assets/zh-CN_components_overlay_ground-overlay.md.TrGK40oB.js",revision:null},{url:"assets/zh-CN_components_overlay_ground-overlay.md.TrGK40oB.lean.js",revision:null},{url:"assets/zh-CN_components_overlay_infowindow.md.U9QSEEAW.js",revision:null},{url:"assets/zh-CN_components_overlay_infowindow.md.U9QSEEAW.lean.js",revision:null},{url:"assets/zh-CN_components_overlay_label.md.ODqGUv1C.js",revision:null},{url:"assets/zh-CN_components_overlay_label.md.ODqGUv1C.lean.js",revision:null},{url:"assets/zh-CN_components_overlay_mapMask.md.gSMl_T4J.js",revision:null},{url:"assets/zh-CN_components_overlay_mapMask.md.gSMl_T4J.lean.js",revision:null},{url:"assets/zh-CN_components_overlay_marker.md.nImwnUhr.js",revision:null},{url:"assets/zh-CN_components_overlay_marker.md.nImwnUhr.lean.js",revision:null},{url:"assets/zh-CN_components_overlay_marker3d.md.Qbq0bEFu.js",revision:null},{url:"assets/zh-CN_components_overlay_marker3d.md.Qbq0bEFu.lean.js",revision:null},{url:"assets/zh-CN_components_overlay_polygon.md.WS8cnEL2.js",revision:null},{url:"assets/zh-CN_components_overlay_polygon.md.WS8cnEL2.lean.js",revision:null},{url:"assets/zh-CN_components_overlay_polyline.md.c0xlr7Oa.js",revision:null},{url:"assets/zh-CN_components_overlay_polyline.md.c0xlr7Oa.lean.js",revision:null},{url:"assets/zh-CN_components_overlay_prism.md.ppIv4U1X.js",revision:null},{url:"assets/zh-CN_components_overlay_prism.md.ppIv4U1X.lean.js",revision:null},{url:"assets/zh-CN_expand_bmap-draw.md.awOKdrU9.js",revision:null},{url:"assets/zh-CN_expand_bmap-draw.md.awOKdrU9.lean.js",revision:null},{url:"assets/zh-CN_expand_mapv.md.BKtzpoDc.js",revision:null},{url:"assets/zh-CN_expand_mapv.md.BKtzpoDc.lean.js",revision:null},{url:"assets/zh-CN_guide_breaking-changes.md.3L7xPRlu.js",revision:null},{url:"assets/zh-CN_guide_breaking-changes.md.3L7xPRlu.lean.js",revision:null},{url:"assets/zh-CN_guide_com-events.md.BhalNNGo.js",revision:null},{url:"assets/zh-CN_guide_com-events.md.BhalNNGo.lean.js",revision:null},{url:"assets/zh-CN_guide_config.md.6JEr2Oiz.js",revision:null},{url:"assets/zh-CN_guide_config.md.6JEr2Oiz.lean.js",revision:null},{url:"assets/zh-CN_guide_faq.md.e5pKPFne.js",revision:null},{url:"assets/zh-CN_guide_faq.md.e5pKPFne.lean.js",revision:null},{url:"assets/zh-CN_guide_installation.md.ZJqK6BfE.js",revision:null},{url:"assets/zh-CN_guide_installation.md.ZJqK6BfE.lean.js",revision:null},{url:"assets/zh-CN_guide_introduction.md.axvwZD1W.js",revision:null},{url:"assets/zh-CN_guide_introduction.md.axvwZD1W.lean.js",revision:null},{url:"assets/zh-CN_guide_quick-start.md.mgqYAuTi.js",revision:null},{url:"assets/zh-CN_guide_quick-start.md.mgqYAuTi.lean.js",revision:null},{url:"assets/zh-CN_hooks_useAddressGeocoder.md.SFuJV8Q0.js",revision:null},{url:"assets/zh-CN_hooks_useAddressGeocoder.md.SFuJV8Q0.lean.js",revision:null},{url:"assets/zh-CN_hooks_useAreaBoundary.md.yvFu6GBm.js",revision:null},{url:"assets/zh-CN_hooks_useAreaBoundary.md.yvFu6GBm.lean.js",revision:null},{url:"assets/zh-CN_hooks_useBrowserLocation.md.gCcmdvVT.js",revision:null},{url:"assets/zh-CN_hooks_useBrowserLocation.md.gCcmdvVT.lean.js",revision:null},{url:"assets/zh-CN_hooks_useDefaultMarkerIcons.md.9dqc4mjt.js",revision:null},{url:"assets/zh-CN_hooks_useDefaultMarkerIcons.md.9dqc4mjt.lean.js",revision:null},{url:"assets/zh-CN_hooks_useIpLocation.md.DSaM0DYx.js",revision:null},{url:"assets/zh-CN_hooks_useIpLocation.md.DSaM0DYx.lean.js",revision:null},{url:"assets/zh-CN_hooks_usePoint.md.wifDggbs.js",revision:null},{url:"assets/zh-CN_hooks_usePoint.md.wifDggbs.lean.js",revision:null},{url:"assets/zh-CN_hooks_usePointConvertor.md.tO9NMKi4.js",revision:null},{url:"assets/zh-CN_hooks_usePointConvertor.md.tO9NMKi4.lean.js",revision:null},{url:"assets/zh-CN_hooks_usePointGeocoder.md.VSExeGfa.js",revision:null},{url:"assets/zh-CN_hooks_usePointGeocoder.md.VSExeGfa.lean.js",revision:null},{url:"assets/zh-CN_hooks_useTrackAnimation.md.bpS0hwmf.js",revision:null},{url:"assets/zh-CN_hooks_useTrackAnimation.md.bpS0hwmf.lean.js",revision:null},{url:"assets/zh-CN_hooks_useViewAnimation.md.LjG4cc5f.js",revision:null},{url:"assets/zh-CN_hooks_useViewAnimation.md.LjG4cc5f.lean.js",revision:null},{url:"assets/zh-CN_index.md.i5-hLPs_.js",revision:null},{url:"assets/zh-CN_index.md.i5-hLPs_.lean.js",revision:null},{url:"beijing.json",revision:"8ca7c8460514609870281b24078bbf81"},{url:"bounds.svg",revision:"b5001c3bffdaad6a5244df2d49a08e07"},{url:"enable-volar.png",revision:"c6c5d4487d32007fc6a6adb9297fdd6c"},{url:"enable-volar1.png",revision:"aa9e7916f5bcbf6e1aeca8e9dfaa573c"},{url:"hashmap.json",revision:"82aed4d7f007165486c7bd89713a044b"},{url:"icons/icon-192x192.png",revision:"df23467819a90f7f0e57cd0d1bf67e3f"},{url:"icons/icon-512x512.png",revision:"05d42d8e81c2ea43916b9bc98b9ac56c"},{url:"icons/maskable-icon-512x512.png",revision:"ee74635d9d737b7be78efd9ad166af07"},{url:"index.html",revision:"328c2081723028ed8c1ef1a40a4a38ec"},{url:"logo-shadow.svg",revision:"8fc534bd92b643a27be3927a763e7951"},{url:"logo.png",revision:"31283fbfca0afc60e809b49ca96ce068"},{url:"logo.svg",revision:"3790581a3ce09985efd90ecc6ac5a9d6"},{url:"not-enable-volar.png",revision:"a682f49b4e025eea643f713deffb30da"},{url:"not-enable-volar1.png",revision:"514ab5f4fe331ff8855d66957ef24c09"},{url:"sponsor.html",revision:"6d645b23940d10baca627e519698ba10"},{url:"zh-CN/components/autoComplete/index.html",revision:"cbd7b203807f87fb5b6e2dc9568e2b66"},{url:"zh-CN/components/control/citylist.html",revision:"bd05fb0dc32bd9ebf1eb7ec5ea63482b"},{url:"zh-CN/components/control/context-menu.html",revision:"f2182c82f3ef39a2b153d332c07c8136"},{url:"zh-CN/components/control/copyright.html",revision:"d2d90ff7e9ebe7b1d9694e62b8ac6a95"},{url:"zh-CN/components/control/custom.html",revision:"45c2824e66fe7f1bd10a201571f51a84"},{url:"zh-CN/components/control/location.html",revision:"206145e20b24bc58405aae8078989cc7"},{url:"zh-CN/components/control/navigation3d.html",revision:"41f0e1f2f085f9e1eeeba5702b0726f6"},{url:"zh-CN/components/control/panorama-control.html",revision:"c918a4bd991b2059bd8e05122fdba342"},{url:"zh-CN/components/control/scale.html",revision:"bef30cebcf87eb15c584f541a7e6c484"},{url:"zh-CN/components/control/zoom.html",revision:"2d1469ff484f8e051fb0ec2cac51bc02"},{url:"zh-CN/components/layer/district-layer.html",revision:"5a19a18707b61edf399700ddbcf5b310"},{url:"zh-CN/components/layer/panorama-coverage.html",revision:"209ba925c60fbe0d509fc22bfaeb31a8"},{url:"zh-CN/components/map.html",revision:"6a6936cbf9e9529ae940c244be28bd6d"},{url:"zh-CN/components/overlay/bezierCurve.html",revision:"e9a4400850f673b18b2186fa0155caf2"},{url:"zh-CN/components/overlay/circle.html",revision:"c581699cef2b344d8eed7a78a6d0cc8e"},{url:"zh-CN/components/overlay/ground-overlay.html",revision:"633e5ee49b97a7b858e782af402d87e5"},{url:"zh-CN/components/overlay/infowindow.html",revision:"9e4559efa0cbb87801dbf20f780d41c5"},{url:"zh-CN/components/overlay/label.html",revision:"edf86eb58d08c71c636571ef46c9c49f"},{url:"zh-CN/components/overlay/mapMask.html",revision:"7a761a4876a5c2f9267ea1d21e592126"},{url:"zh-CN/components/overlay/marker.html",revision:"afe2ca2fab6a9beb70cceba66d8e02bf"},{url:"zh-CN/components/overlay/marker3d.html",revision:"2239c8960d8cf93ea22e235d3c8eeaea"},{url:"zh-CN/components/overlay/polygon.html",revision:"39653070b242a991aaa5331a3c009095"},{url:"zh-CN/components/overlay/polyline.html",revision:"f3fa2f21c4ea9373e284e223ca7708af"},{url:"zh-CN/components/overlay/prism.html",revision:"4167e950a5404138ef5b870b22b783c7"},{url:"zh-CN/expand/bmap-draw.html",revision:"4471af9dc3a94452e78d349686252dd0"},{url:"zh-CN/expand/mapv.html",revision:"6991260201af9aac97a49ac8fab8fe9a"},{url:"zh-CN/guide/breaking-changes.html",revision:"4125a6060e40f76b8c0d230e6ad955e2"},{url:"zh-CN/guide/com-events.html",revision:"23cb219866eb2a31d8351187c0c12b23"},{url:"zh-CN/guide/config.html",revision:"7ef5003d36c7220124fe3b7235707d32"},{url:"zh-CN/guide/faq.html",revision:"3dd8c6c53ad5c5a51cbfc21df30e34a1"},{url:"zh-CN/guide/installation.html",revision:"7acbfd0b0b8357b82ab391ad36ed3705"},{url:"zh-CN/guide/introduction.html",revision:"1c61a409e9bad8dd68ed3883ba86cb47"},{url:"zh-CN/guide/quick-start.html",revision:"a4f694ebbdf0be8c005112bdc9b6ea68"},{url:"zh-CN/hooks/useAddressGeocoder.html",revision:"e810e5fc344ce01754328cc6f71a5043"},{url:"zh-CN/hooks/useAreaBoundary.html",revision:"d02ee46f4ce77c21c663fd6f037f6631"},{url:"zh-CN/hooks/useBrowserLocation.html",revision:"17db04568fbf653fbe1951a85b7851f4"},{url:"zh-CN/hooks/useDefaultMarkerIcons.html",revision:"70789da51c392731296beaf17a65ff92"},{url:"zh-CN/hooks/useIpLocation.html",revision:"320c652a55f588fc03b6754fc444d708"},{url:"zh-CN/hooks/usePoint.html",revision:"3c5ffa0f04585c155fed28b613a9d98d"},{url:"zh-CN/hooks/usePointConvertor.html",revision:"927d10fdbe59ddf673bbfa0579c13472"},{url:"zh-CN/hooks/usePointGeocoder.html",revision:"cff4f853204c889f5744fdc0f958bc0a"},{url:"zh-CN/hooks/useTrackAnimation.html",revision:"80d2e60c08aed23a6d6ca178507e0327"},{url:"zh-CN/hooks/useViewAnimation.html",revision:"dad60ba08735c405e56f5fede43edf48"},{url:"zh-CN/index.html",revision:"e6ea1869ba5ef630d3464be93a9cd30d"},{url:"manifest.webmanifest",revision:"47e773587c46881dd5c19db9f20147e7"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{allowlist:[/^\/vue3\x2dbaidu\x2dmap\x2dgl\/(\.html)?$/,/^\/vue3\x2dbaidu\x2dmap\x2dgl\/sponsor(\.html)?$/,/^\/vue3\x2dbaidu\x2dmap\x2dgl\/zh\x2dCN\/components\/autoComplete\/index(\.html)?$/,/^\/vue3\x2dbaidu\x2dmap\x2dgl\/zh\x2dCN\/components\/control\/citylist(\.html)?$/,/^\/vue3\x2dbaidu\x2dmap\x2dgl\/zh\x2dCN\/components\/control\/context\x2dmenu(\.html)?$/,/^\/vue3\x2dbaidu\x2dmap\x2dgl\/zh\x2dCN\/components\/control\/copyright(\.html)?$/,/^\/vue3\x2dbaidu\x2dmap\x2dgl\/zh\x2dCN\/components\/control\/custom(\.html)?$/,/^\/vue3\x2dbaidu\x2dmap\x2dgl\/zh\x2dCN\/components\/control\/location(\.html)?$/,/^\/vue3\x2dbaidu\x2dmap\x2dgl\/zh\x2dCN\/components\/control\/navigation3d(\.html)?$/,/^\/vue3\x2dbaidu\x2dmap\x2dgl\/zh\x2dCN\/components\/control\/panorama\x2dcontrol(\.html)?$/,/^\/vue3\x2dbaidu\x2dmap\x2dgl\/zh\x2dCN\/components\/control\/scale(\.html)?$/,/^\/vue3\x2dbaidu\x2dmap\x2dgl\/zh\x2dCN\/components\/control\/zoom(\.html)?$/,/^\/vue3\x2dbaidu\x2dmap\x2dgl\/zh\x2dCN\/components\/layer\/district\x2dlayer(\.html)?$/,/^\/vue3\x2dbaidu\x2dmap\x2dgl\/zh\x2dCN\/components\/layer\/panorama\x2dcoverage(\.html)?$/,/^\/vue3\x2dbaidu\x2dmap\x2dgl\/zh\x2dCN\/components\/map(\.html)?$/,/^\/vue3\x2dbaidu\x2dmap\x2dgl\/zh\x2dCN\/components\/overlay\/bezierCurve(\.html)?$/,/^\/vue3\x2dbaidu\x2dmap\x2dgl\/zh\x2dCN\/components\/overlay\/circle(\.html)?$/,/^\/vue3\x2dbaidu\x2dmap\x2dgl\/zh\x2dCN\/components\/overlay\/ground\x2doverlay(\.html)?$/,/^\/vue3\x2dbaidu\x2dmap\x2dgl\/zh\x2dCN\/components\/overlay\/infowindow(\.html)?$/,/^\/vue3\x2dbaidu\x2dmap\x2dgl\/zh\x2dCN\/components\/overlay\/label(\.html)?$/,/^\/vue3\x2dbaidu\x2dmap\x2dgl\/zh\x2dCN\/components\/overlay\/mapMask(\.html)?$/,/^\/vue3\x2dbaidu\x2dmap\x2dgl\/zh\x2dCN\/components\/overlay\/marker(\.html)?$/,/^\/vue3\x2dbaidu\x2dmap\x2dgl\/zh\x2dCN\/components\/overlay\/marker3d(\.html)?$/,/^\/vue3\x2dbaidu\x2dmap\x2dgl\/zh\x2dCN\/components\/overlay\/polygon(\.html)?$/,/^\/vue3\x2dbaidu\x2dmap\x2dgl\/zh\x2dCN\/components\/overlay\/polyline(\.html)?$/,/^\/vue3\x2dbaidu\x2dmap\x2dgl\/zh\x2dCN\/components\/overlay\/prism(\.html)?$/,/^\/vue3\x2dbaidu\x2dmap\x2dgl\/zh\x2dCN\/expand\/bmap\x2ddraw(\.html)?$/,/^\/vue3\x2dbaidu\x2dmap\x2dgl\/zh\x2dCN\/expand\/mapv(\.html)?$/,/^\/vue3\x2dbaidu\x2dmap\x2dgl\/zh\x2dCN\/guide\/breaking\x2dchanges(\.html)?$/,/^\/vue3\x2dbaidu\x2dmap\x2dgl\/zh\x2dCN\/guide\/com\x2devents(\.html)?$/,/^\/vue3\x2dbaidu\x2dmap\x2dgl\/zh\x2dCN\/guide\/config(\.html)?$/,/^\/vue3\x2dbaidu\x2dmap\x2dgl\/zh\x2dCN\/guide\/faq(\.html)?$/,/^\/vue3\x2dbaidu\x2dmap\x2dgl\/zh\x2dCN\/guide\/installation(\.html)?$/,/^\/vue3\x2dbaidu\x2dmap\x2dgl\/zh\x2dCN\/guide\/introduction(\.html)?$/,/^\/vue3\x2dbaidu\x2dmap\x2dgl\/zh\x2dCN\/guide\/quick\x2dstart(\.html)?$/,/^\/vue3\x2dbaidu\x2dmap\x2dgl\/zh\x2dCN\/hooks\/useAddressGeocoder(\.html)?$/,/^\/vue3\x2dbaidu\x2dmap\x2dgl\/zh\x2dCN\/hooks\/useAreaBoundary(\.html)?$/,/^\/vue3\x2dbaidu\x2dmap\x2dgl\/zh\x2dCN\/hooks\/useBrowserLocation(\.html)?$/,/^\/vue3\x2dbaidu\x2dmap\x2dgl\/zh\x2dCN\/hooks\/useDefaultMarkerIcons(\.html)?$/,/^\/vue3\x2dbaidu\x2dmap\x2dgl\/zh\x2dCN\/hooks\/useIpLocation(\.html)?$/,/^\/vue3\x2dbaidu\x2dmap\x2dgl\/zh\x2dCN\/hooks\/usePoint(\.html)?$/,/^\/vue3\x2dbaidu\x2dmap\x2dgl\/zh\x2dCN\/hooks\/usePointConvertor(\.html)?$/,/^\/vue3\x2dbaidu\x2dmap\x2dgl\/zh\x2dCN\/hooks\/usePointGeocoder(\.html)?$/,/^\/vue3\x2dbaidu\x2dmap\x2dgl\/zh\x2dCN\/hooks\/useTrackAnimation(\.html)?$/,/^\/vue3\x2dbaidu\x2dmap\x2dgl\/zh\x2dCN\/hooks\/useViewAnimation(\.html)?$/,/^\/vue3\x2dbaidu\x2dmap\x2dgl\/zh\x2dCN\/index(\.html)?$/]})),e.registerRoute(/^https:\/\/raw\.githubusercontent\.com\/.*/i,new e.CacheFirst({cacheName:"animated-images-cache",plugins:[new e.ExpirationPlugin({maxEntries:15,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/^https:\/\/img\.shields\.io\/.*/i,new e.NetworkFirst({cacheName:"dynamic-images-cache",plugins:[new e.ExpirationPlugin({maxEntries:15,maxAgeSeconds:86400}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/^https:\/\/cdn\.jsdelivr\.net\/.*/i,new e.NetworkFirst({cacheName:"jsdelivr-images-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:604800}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/^https:\/\/api\.github\.com\/.*/i,new e.NetworkFirst({cacheName:"github-api-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:86400}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/\.glb$/i,new e.CacheFirst({cacheName:"3d-model-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute((({request:e,sameOrigin:s})=>s&&"navigate"===e.mode),new e.NetworkOnly({plugins:[{handlerDidError:async()=>Response.redirect("404",302),cacheWillUpdate:async()=>null}]}),"GET")}));
