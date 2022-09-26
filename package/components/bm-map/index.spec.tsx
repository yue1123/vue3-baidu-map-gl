import { flushPromises, mount } from '@vue/test-utils'
import Vue from 'vue'
import Map from './index.vue'

describe('Map components test cases', async () => {
	it('Map should be define', () => {
		expect(Map).toBeDefined()
	})
	const initdCal = () => {
    console.log(123)
  }
	const map = (<Map ak='123' onInitd={initdCal} />) as any
	it('props with default', () => {
		const wrapper = mount(map)
		expect(wrapper.props()).toEqual({
			ak: '123',
			width: '100%',
			height: '400px',
			center: { lat: 39.915185, lng: 116.403901 },
			mapType: 'BMAP_NORMAL_MAP',
			zoom: 16,
			heading: 0,
			tilt: 0,
			minZoom: 0,
			maxZoom: 21,
			enableDragging: true,
			enableInertialDragging: true,
			enableScrollWheelZoom: true,
			enableContinuousZoom: true,
			enableResizeOnCenter: true,
			enableDoubleClickZoom: false,
			enableKeyboard: true,
			enablePinchToZoom: true,
			enableAutoResize: true
		})
	})
	it('map loading text', () => {
		const wrapper = mount(map as any)
		expect(wrapper.text()).toBe('map loading...')
	})

	it('custom map Loading text', () => {
		const MapWithCustomLoading = (
			<Map ak='11123'>
				{{
					loading: () => [<div>loading...</div>]
				}}
			</Map>
		) as any
		const wrapper = mount(MapWithCustomLoading)
		expect(wrapper.text()).toBe('loading...')
	})
})
