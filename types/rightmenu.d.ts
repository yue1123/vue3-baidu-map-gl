/// <reference path="./base.d.ts" />

declare namespace BMapGL {
  type ContextMenuIcon = string
  interface MenuItemOptions {
    width?: number
    id?: string
    iconUrl?: string
  }
  class MenuItem {
    constructor(text: string, callback: (point: Point, pixel: Pixel) => void, opts?: MenuItemOptions)
    setText(text: string): void
    setIcon(iconUrl: string): void
    enable(): void
    disable(): void
  }
  class ContextMenu {
    constructor()
    addItem(item: MenuItem): void
    getItem(index: number): MenuItem
    removeItem(item: MenuItem): void
    addSeparator(): void
    removeSeparator(index: number): void
    onopen: (event: { type: string; target: any; point: Point; pixel: Pixel }) => void
    onclose: (event: { type: string; target: any; point: Point; pixel: Pixel }) => void
  }
}
declare const BMAP_CONTEXT_MENU_ICON_ZOOMIN: string
declare const BMAP_CONTEXT_MENU_ICON_ZOOMOUT: string
