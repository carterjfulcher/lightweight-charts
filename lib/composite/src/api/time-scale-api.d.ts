import { TimeAxisWidget } from '../gui/time-axis-widget';
import { IDestroyable } from '../helpers/idestroyable';
import { DeepPartial } from '../helpers/strict-type-checks';
import { ChartModel } from '../model/chart-model';
import { Coordinate } from '../model/coordinate';
import { IHorzScaleBehavior } from '../model/ihorz-scale-behavior';
import { Logical, LogicalRange, Range } from '../model/time-data';
import { HorzScaleOptions } from '../model/time-scale';
import { ITimeScaleApi, LogicalRangeChangeEventHandler, SizeChangeEventHandler, TimeRangeChangeEventHandler } from './itime-scale-api';
export declare class TimeScaleApi<HorzScaleItem> implements ITimeScaleApi<HorzScaleItem>, IDestroyable {
    private _model;
    private _timeScale;
    private readonly _timeAxisWidget;
    private readonly _timeRangeChanged;
    private readonly _logicalRangeChanged;
    private readonly _sizeChanged;
    private readonly _horzScaleBehavior;
    constructor(model: ChartModel<HorzScaleItem>, timeAxisWidget: TimeAxisWidget<HorzScaleItem>, horzScaleBehavior: IHorzScaleBehavior<HorzScaleItem>);
    destroy(): void;
    scrollPosition(): number;
    scrollToPosition(position: number, animated: boolean): void;
    scrollToRealTime(): void;
    getVisibleRange(): Range<HorzScaleItem> | null;
    setVisibleRange(range: Range<HorzScaleItem>): void;
    getVisibleLogicalRange(): LogicalRange | null;
    setVisibleLogicalRange(range: Range<number>): void;
    resetTimeScale(): void;
    fitContent(): void;
    logicalToCoordinate(logical: Logical): Coordinate | null;
    coordinateToLogical(x: number): Logical | null;
    timeToCoordinate(time: HorzScaleItem): Coordinate | null;
    coordinateToTime(x: number): HorzScaleItem | null;
    width(): number;
    height(): number;
    subscribeVisibleTimeRangeChange(handler: TimeRangeChangeEventHandler<HorzScaleItem>): void;
    unsubscribeVisibleTimeRangeChange(handler: TimeRangeChangeEventHandler<HorzScaleItem>): void;
    subscribeVisibleLogicalRangeChange(handler: LogicalRangeChangeEventHandler): void;
    unsubscribeVisibleLogicalRangeChange(handler: LogicalRangeChangeEventHandler): void;
    subscribeSizeChange(handler: SizeChangeEventHandler): void;
    unsubscribeSizeChange(handler: SizeChangeEventHandler): void;
    applyOptions(options: DeepPartial<HorzScaleOptions>): void;
    options(): Readonly<HorzScaleOptions>;
    private _onVisibleBarsChanged;
    private _onVisibleLogicalRangeChanged;
    private _onSizeChanged;
}