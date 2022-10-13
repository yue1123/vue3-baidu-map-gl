const sidebarConfig = {
	'/zh/': [
		{
			text: '介绍',
			items: [
				{
					text: 'vue3-baidu-map-gl',
					link: '/zh/guide/'
				}
			]
		},
		{
			text: '指南',
			items: [
				{
					text: '安装',
					link: '/zh/guide/install'
				},
				{
					text: '申请 ak',
					link: '/zh/guide/ak'
				},
				{
					text: '在 SFC 中使用',
					link: '/zh/guide/usage-sfc'
				},
				{
					text: '使用 CDN',
					link: '/zh/guide/usage-cdn'
				},
				{
					text: 'ak与插件配置',
					link: '/zh/guide/config'
				}
			]
		},
		{
			text: '基础',
			collapsible: true,
			items: [
				{
					text: 'Map 地图',
					link: '/zh/base/'
				},
				{
					text: '个性化地图',
					link: '/zh/base/custom'
				},
				{
					text: '多实例',
					link: '/zh/base/multiple-instances'
				},
				{
					text: '全局组件事件',
					link: '/zh/base/com-events'
				}
			]
		},
		{
			text: '控件',
			collapsible: true,
			items: [
				{
					text: 'Control 自定义',
					link: '/zh/control/custom'
				},
				{
					text: 'CityList 城市列表',
					link: '/zh/control/citylist'
				},
				{
					text: 'Navigation3d 3D视角导航',
					link: '/zh/control/navigation3d'
				},
				{
					text: 'Copyright 版权',
					link: '/zh/control/copyright'
				},
				{
					text: 'Scale 比例尺',
					link: '/zh/control/scale'
				},
				{
					text: 'Zoom 缩放',
					link: '/zh/control/zoom'
				},
				{
					text: 'Location 定位',
					link: '/zh/control/location'
				}
			]
		},
		{
			text: '覆盖物',
			collapsible: true,
			items: [
				{
					text: 'Circle 圆形',
					link: '/zh/overlay/circle'
				},
				{
					text: 'Label 文本标注',
					link: '/zh/overlay/label'
				},
				{
					text: 'Marker 标注点',
					link: '/zh/overlay/marker'
				},
				{
					text: 'Marker3d 带高度的点',
					link: '/zh/overlay/marker3d'
				},
				{
					text: 'Polygon 多边形',
					link: '/zh/overlay/polygon'
				},
				{
					text: 'Polyline 折线',
					link: '/zh/overlay/polyline'
				},
				{
					text: 'Prism 3d棱柱',
					link: '/zh/overlay/prism'
				}
			]
		},
		{
			text: 'hooks',
			collapsible: true,
			items: [
				{
					text: 'useAreaBoundary',
					link: '/zh/hooks/useAreaBoundary'
				},
				{
					text: 'useTrackAnimation',
					link: '/zh/hooks/useTrackAnimation'
				}
			]
		}
	]
}

export default sidebarConfig
