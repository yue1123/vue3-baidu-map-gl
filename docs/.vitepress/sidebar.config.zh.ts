const sidebarConfig = {
	'/zh/': [
		{
			text: '开发指南',
			items: [
				{
					text: '快速开始',
					link: '/zh/guide/'
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
					text: 'Control 自定义控件',
					link: '/zh/control/custom'
				},
				{
					text: 'CityList 城市列表',
					link: '/zh/control/citylist'
				},
				{
					text: 'Navigation3d 3D视角导航控件',
					link: '/zh/control/navigation3d'
				},
				{
					text: 'Scale 比例尺控件',
					link: '/zh/control/scale'
				},
				{
					text: 'Zoom 缩放控件',
					link: '/zh/control/zoom'
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
					text: 'Polygon 多边形',
					link: '/zh/overlay/polygon'
				},
				{
					text: 'Polyline 折线',
					link: '/zh/overlay/polyline'
				}
			]
		}
	]
}

export default sidebarConfig
