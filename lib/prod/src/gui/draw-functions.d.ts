import { CanvasRenderingTarget2D } from 'fancy-canvas';
import { IDataSource } from '../model/idata-source';
import { Pane } from '../model/pane';
import { IPaneRenderer } from '../renderers/ipane-renderer';
import { IPaneViewsGetter } from './ipane-view-getter';
export type DrawFunction = (renderer: IPaneRenderer, target: CanvasRenderingTarget2D, isHovered: boolean, hitTestData?: unknown) => void;
export declare function drawBackground(renderer: IPaneRenderer, target: CanvasRenderingTarget2D, isHovered: boolean, hitTestData?: unknown): void;
export declare function drawForeground(renderer: IPaneRenderer, target: CanvasRenderingTarget2D, isHovered: boolean, hitTestData?: unknown): void;
type DrawRendererFn = (renderer: IPaneRenderer) => void;
export declare function drawSourcePaneViews(paneViewsGetter: IPaneViewsGetter, drawRendererFn: DrawRendererFn, source: IDataSource, pane: Pane): void;
export {};