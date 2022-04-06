/// <reference path="./base.d.ts" />
/// <reference path="./core.d.ts" />
/// <reference path="./overlay.d.ts" />
declare namespace BMapGL {
    class PushpinTool {
        constructor(map: Map, opts?: PushpinToolOptions)
        open(): boolean;
        close(): boolean;
        setIcon(icon: Icon): Icon;
        getIcon(): Icon;
        setCursor(cursor: string): string;
        getCursor(): string;
        toString(): string;
        onmarkend: (event: { type: string, target: any, marker: Marker }) => void;
    }
    interface PushpinToolOptions {
        icon?: Icon;
        cursor?: string;
        followText?: string;
    }
    class DistanceTool {
        constructor(map: Map);
        open(): boolean;
        close(): void;
        toString(): string;
        ondrawend: (event: { type: string, target: any, points: Point[], polylines: Polyline[], distance: number }) => void;
    }
    class DragAndZoomTool {
        constructor(map: Map, opts?: DragAndZoomToolOptions);
        open(): boolean;
        close(): void;
        toString(): string;
        ondrawend: (event: { type: string, target: any, bounds: Bounds[] }) => void;
    }
    interface DragAndZoomToolOptions {
        zoomType?: ZoomType;
        autoClose?: boolean;
        followText?: string;
    }
    type ZoomType = number;
}
declare const BMAP_ZOOM_IN: BMapGL.ZoomType;
declare const BMAP_ZOOM_OUT: BMapGL.ZoomType;
