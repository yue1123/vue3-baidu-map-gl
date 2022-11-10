/// <reference path="./base.d.ts" />
/// <reference path="./overlay.d.ts" />
declare namespace BMapGL {
  class Control {
    constructor()
    /**
     * 控件默认的停靠位置。自定义控件时需要提供此属性，作为控件的默认停靠位置
     */
    defaultAnchor: ControlAnchor
    /**
     * 控件默认的位置偏移值。自定义控件时需要提供此属性，作为控件的默认偏移位置
     */
    defaultOffset: Size
    /**
     * 抽象方法。调用Map.addControl()方法添加控件时将调用此方法，从而实现该控件的初始化。
     * 自定义控件时需要实现此方法，并将元素的DOM元素在该方法中返回。
     * DOM元素需要添加到地图的容器中，使用map.getContainer:()
     * @param {Map} map
     */
    initialize(map: Map): HTMLElement
    /**
     * 设置控件停靠的位置
     * @param {ControlAnchor} anchor
     */
    setAnchor(anchor: ControlAnchor): void
    /**
     * 返回控件停靠的位置
     */
    getAnchor(): ControlAnchor
    /**
     * 设置控件停靠的偏移量
     * @param {Size} offset
     */
    setOffset(offset: Size): void
    /**
     * 返回控件停靠的偏移量
     */
    getOffset(): Size
    /**
     * 显示控件
     */
    show(): void
    /**
     * 隐藏控件
     */
    hide(): void
    /**
     * 判断控件的可见性
     */
    isVisible(): boolean

    /** 自定义Control在add之后立马能读取到Container, 内置Control不能 */
    getContainer(): HTMLElement | undefined
  }
  interface ScaleControlOptions {
    /**
     * 控件停靠的位置
     */
    anchor?: ControlAnchor
    /**
     * 控件的偏移值
     */
    offset?: Size
  }
  interface CopyrightControlOptions {
    /**
     * 控件停靠的位置
     */
    anchor?: ControlAnchor
    /**
     * 控件的偏移值
     */
    offset?: Size
  }
  interface ZoomControlOptions {
    /**
     * 控件停靠的位置
     */
    anchor?: ControlAnchor
    /**
     * 控件的偏移值
     */
    offset?: Size
  }
  interface NavigationControl3DOptions {
    /**
     * 控件停靠的位置
     */
    anchor?: ControlAnchor
    /**
     * 控件的偏移值
     */
    offset?: Size
  }
  type ControlAnchor = number
  class OverviewMapControl extends Control {
    constructor(opts: OverviewMapControlOptions)
    changeView(): void
    setSize(size: Size): void
    getSize(): Size
    onviewchanged: (event: { type: string; target: any; isOpen: boolean }) => void
    onviewchanging: (event: { type: string; target: any }) => void
  }
  type LengthUnit = string
  class MapTypeControl extends Control {
    constructor(opts?: MapTypeControlOptions)
  }
  interface OverviewMapControlOptions {
    anchor?: ControlAnchor
    offset?: Size
    size?: Size
    isOpen?: boolean
  }
  class CopyrightControl extends Control {
    constructor(opts?: CopyrightControlOptions)
    addCopyright(copyright: Copyright): void
    removeCopyright(id: number): void
    getCopyright(id: number): Copyright
    getCopyrightCollection(): Copyright[]
  }
  interface MapTypeControlOptions {
    type?: MapTypeControlType
    mapTypes?: MapType[]
  }
  type NavigationControlType = number
  class ScaleControl extends Control {
    constructor(opts?: ScaleControlOptions)
    /**
     * 返回比例尺单位制
     */
    getUnit(): LengthUnitValue
    /**
     * 设置比例尺单位制
     * @param unit
     */
    setUnit(unit: LengthUnit): void
  }
  interface Copyright {
    id?: number
    content?: string
    bounds?: Bounds
  }
  type MapTypeControlType = number
  class GeolocationControl extends Control {
    constructor(opts?: GeolocationControlOptions)
  }
  interface GeolocationControlOptions {
    anchor?: ControlAnchor
    offset?: Size
    showAddressBar?: boolean
    enableAutoLocation?: boolean
    locationIcon?: Icon
  }
  type StatusCode = number
  type PanoramaControlOptions = ZoomControlOptions
  class PanoramaControl extends Control {
    constructor()
  }
  class ZoomControl extends Control {
    constructor(opts?: ZoomControlOptions)
  }
  class NavigationControl3D extends Control {
    constructor(opts?: NavigationControl3DOptions)
  }
  interface CityListControlOptions {
    anchor?: ControlAnchor
    offset?: Size
    expand?: boolean
    onChangeBefore?: Callback
    onChangeAfter?: Callback
    onChangeSuccess?: Callback
  }
  class CityListControl extends Control {
    constructor(opts?: CityListControlOptions)
  }

  interface LocationControlOptions {
    anchor?: ControlAnchor
    offset?: Size
  }
  class LocationControl extends Control {
    constructor(opts?: LocationControlOptions)
  }
}
