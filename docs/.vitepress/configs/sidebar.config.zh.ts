import { DefaultTheme } from 'vitepress'
export const sidebarConfigZh: DefaultTheme.Sidebar = {
  '/zh-CN/': [
    {
      text: '指南',
      collapsed: false,
      base: '/zh-CN/guide/',
      items: [
        {
          text: '简介',
          link: 'introduction'
        },
        {
          text: '安装',
          link: 'installation'
        },
        {
          text: '快速开始',
          link: 'quick-start'
        },
        {
          text: '配置',
          link: 'config'
        },
        {
          text: '全局组件事件',
          link: 'com-events'
        },
        {
          text: 'Breaking Changes',
          link: 'breaking-changes'
        },
        {
          text: 'FAQ',
          link: 'faq'
        }
      ]
    },
    {
      text: '基础组件',
      collapsed: false,
      items: [
        {
          text: 'BMap 地图',
          link: '/zh-CN/components/map'
        }
      ]
    },
    {
      text: '控件组件',
      collapsed: true,
      base: '/zh-CN/components/control/',
      items: [
        {
          text: 'BControl 自定义',
          link: 'custom'
        },
        {
          text: 'BCityList 城市列表',
          link: 'citylist'
        },
        {
          text: 'BNavigation3d 3D视角导航',
          link: 'navigation3d'
        },
        {
          text: 'BCopyright 版权',
          link: 'copyright'
        },
        {
          text: 'BScale 比例尺',
          link: 'scale'
        },
        {
          text: 'BZoom 缩放',
          link: 'zoom'
        },
        {
          text: 'BLocation 定位',
          link: 'location'
        },
        {
          text: 'BPanoramaControl 全景',
          link: 'panorama-control'
        },
        {
          text: 'BContextMenu 上下文菜单',
          link: '/zh-CN/components/context-menu'
        }
      ]
    },
    {
      text: '覆盖物组件',
      collapsed: true,
      base: '/zh-CN/components/overlay/',
      items: [
        {
          text: 'BCircle 圆形',
          link: 'circle'
        },
        {
          text: 'BLabel 文本标注',
          link: 'label'
        },
        {
          text: 'BMarker 标注点',
          link: 'marker'
        },
        {
          text: 'BMarker3d 带高度的点',
          link: 'marker3d'
        },
        {
          text: 'BPolygon 多边形',
          link: 'polygon'
        },
        {
          text: 'BPolyline 折线',
          link: 'polyline'
        },
        {
          text: 'BBezierCurve 贝塞尔曲线',
          link: 'bezierCurve'
        },
        {
          text: 'BInfoWindow 信息窗口',
          link: 'infowindow'
        },
        {
          text: 'BPrism 3d棱柱',
          link: 'prism'
        },
        {
          text: 'BGroundOverlay 地面叠加层',
          link: 'ground-overlay'
        },
        {
          text: 'BMapMask 掩膜',
          link: 'mapMask'
        }
      ]
    },
    {
      text: '图层组件',
      collapsed: true,
      base: '/zh-CN/components/layer/',
      items: [
        {
          text: 'BPanoramaCoverageLayer 全景图层',
          link: 'panorama-coverage'
        },
        {
          text: 'BDistrictLayer 行政区图层',
          link: 'district-layer'
        }
      ]
    },
    {
      text: '检索组件',
      collapsed: true,
      base: '/zh-CN/components/autoComplete/',
      items: [
        {
          text: 'BAutoComplete 自动填充',
          link: 'index'
        }
      ]
    },
    {
      text: 'Hooks',
      collapsed: true,
      base: '/zh-CN/hooks/',
      items: [
        {
          text: 'usePoint 地图实例点',
          link: 'usePoint'
        },
        {
          text: 'useDefaultMarkerIcons 图标',
          link: 'useDefaultMarkerIcons'
        },
        {
          text: 'useIpLocation Ip定位',
          link: 'useIpLocation'
        },
        {
          text: 'useBrowserLocation 浏览器定位',
          link: 'useBrowserLocation'
        },
        {
          text: 'usePointGeocoder 坐标点解析',
          link: 'usePointGeocoder'
        },
        {
          text: 'useAddressGeocoder 地址解析',
          link: 'useAddressGeocoder'
        },
        {
          text: 'usePointConvertor 坐标转换',
          link: 'usePointConvertor'
        },
        {
          text: 'useAreaBoundary 区域边界',
          link: 'useAreaBoundary'
        },
        {
          text: 'useViewAnimation 3d视角动画',
          link: 'useViewAnimation'
        },
        {
          text: 'useTrackAnimation 轨迹动画',
          link: 'useTrackAnimation'
        }
      ]
    },
    {
      text: '扩展',
      collapsed: true,
      base: '/zh-CN/expand/',
      items: [
        {
          text: 'mapv 可视化',
          link: 'mapv'
        },
        {
          text: 'bmap-draw 鼠标测量与绘制',
          link: 'bmap-draw'
        }
      ]
    }
  ]
}
