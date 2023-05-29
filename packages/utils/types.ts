import { ComputedRef, Ref, WatchOptions, WatchSource } from 'vue'

export interface _Point {
  /**
   * 地理经度
   */
  lng: number
  /**
   * 地理纬度
   */
  lat: number
}
export type Point = _Point | BMapGL.Point
export type StrokeStyle = 'solid' | 'dashed' | 'dotted'
export enum DistrictType {
  'PROVINCE' = 0,
  'CITY' = 1,
  'AREA' = 2
}
export type MapMaskShowRegion = 'inside' | 'outside'

export type ControlAnchor =
  /**
   * 控件将定位到地图的左上角
   */
  | 'BMAP_ANCHOR_TOP_LEFT'
  /**
   * 控件将定位到地图的右上角
   */
  | 'BMAP_ANCHOR_TOP_RIGHT'
  /**
   * 控件将定位到地图的左下角
   */
  | 'BMAP_ANCHOR_BOTTOM_LEFT'
  /**
   * 控件将定位到地图的右下角
   */
  | 'BMAP_ANCHOR_BOTTOM_RIGHT'

export type MapType =
  /**
   * 此地图类型展示普通街道视图
   */
  | 'BMAP_NORMAL_MAP'
  /**
   * 地球模式
   */
  | 'BMAP_EARTH_MAP'
  /**
   * 普通卫星图
   */
  | 'BMAP_SATELLITE_MAP'

/**
 * 市内公交方案换乘策略
 */

export type TransitPolicy =
  /**
   *  最少时间
   */
  | 'BMAP_TRANSIT_POLICY_LEAST_TIME'
  /**
   *  最少换乘
   */
  | 'BMAP_TRANSIT_POLICY_LEAST_TRANSFER'
  /**
   *  最少步行
   */
  | 'BMAP_TRANSIT_POLICY_LEAST_WALKING'
  /**
   *  不乘地铁
   */
  | 'BMAP_TRANSIT_POLICY_AVOID_SUBWAYS'

/**
 * 驾车方案的策略配置
 */
export type DrivingPolicy =
  /**
   * 最少时间
   */
  | 'BMAP_DRIVING_POLICY_LEAST_TIME'
  /**
   * 最短距离
   */
  | 'BMAP_DRIVING_POLICY_LEAST_DISTANCE'
  /**
   * 避开高速
   */
  | 'BMAP_DRIVING_POLICY_AVOID_HIGHWAYS'

export type LengthUnit =
  /**
   * 公制单位
   */
  | 'BMAP_UNIT_METRIC'
  /**
   * 英制单位
   */
  | 'BMAP_UNIT_US'

/**
 * Void function
 */
export type Fn = () => void

/**
 * Any function
 */
export type AnyFn = (...args: any[]) => any

/**
 * A ref that allow to set null or undefined
 */
export type RemovableRef<T> = Omit<Ref<T>, 'value'> & {
  get value(): T
  set value(value: T | null | undefined)
}

/**
 * Maybe it's a ref, or a plain value
 *
 * ```ts
 * type MaybeRef<T> = T | Ref<T>
 * ```
 */
export type MaybeRef<T> = T | Ref<T>

/**
 * Maybe it's a ref, or a plain value, or a getter function
 *
 * ```ts
 * type MaybeRefOrGetter<T> = (() => T) | T | Ref<T> | ComputedRef<T>
 * ```
 */
export type MaybeRefOrGetter<T> = MaybeRef<T> | (() => T)

/**
 * Maybe it's a computed ref, or a readonly value, or a getter function
 */
export type ReadonlyRefOrGetter<T> = ComputedRef<T> | (() => T)

/**
 * Make all the nested attributes of an object or array to MaybeRef<T>
 *
 * Good for accepting options that will be wrapped with `reactive` or `ref`
 *
 * ```ts
 * UnwrapRef<DeepMaybeRef<T>> === T
 * ```
 */
export type DeepMaybeRef<T> = T extends Ref<infer V>
  ? MaybeRef<V>
  : T extends Array<any> | object
  ? { [K in keyof T]: DeepMaybeRef<T[K]> }
  : MaybeRef<T>

export type Arrayable<T> = T[] | T

/**
 * Infers the element type of an array
 */
export type ElementOf<T> = T extends (infer E)[] ? E : never

export type ShallowUnwrapRef<T> = T extends Ref<infer P> ? P : T

export type Awaitable<T> = Promise<T> | T

export type ArgumentsType<T> = T extends (...args: infer U) => any ? U : never

export type PromisifyFn<T extends AnyFn> = (...args: ArgumentsType<T>) => Promise<ReturnType<T>>

export interface Pausable {
  /**
   * A ref indicate whether a pausable instance is active
   */
  isActive: Readonly<Ref<boolean>>

  /**
   * Temporary pause the effect from executing
   */
  pause: Fn

  /**
   * Resume the effects
   */
  resume: Fn
}

export interface Stoppable<StartFnArgs extends any[] = any[]> {
  /**
   * A ref indicate whether a stoppable instance is executing
   */
  isPending: Readonly<Ref<boolean>>

  /**
   * Stop the effect from executing
   */
  stop: Fn

  /**
   * Start the effects
   */
  start: (...args: StartFnArgs) => void
}

export interface ConfigurableFlush {
  /**
   * Timing for monitoring changes, refer to WatchOptions for more details
   *
   * @default 'pre'
   */
  flush?: WatchOptions['flush']
}

export interface ConfigurableFlushSync {
  /**
   * Timing for monitoring changes, refer to WatchOptions for more details.
   * Unlike `watch()`, the default is set to `sync`
   *
   * @default 'sync'
   */
  flush?: WatchOptions['flush']
}

// Internal Types
export type MultiWatchSources = (WatchSource<unknown> | object)[]

export type MapSources<T> = {
  [K in keyof T]: T[K] extends WatchSource<infer V> ? V : never
}
export type MapOldSources<T, Immediate> = {
  [K in keyof T]: T[K] extends WatchSource<infer V> ? (Immediate extends true ? V | undefined : V) : never
}

export type Mutable<T> = { -readonly [P in keyof T]: T[P] }
