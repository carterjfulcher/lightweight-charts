import { DeepPartial } from '../helpers/strict-type-checks';
import { ChartOptionsImpl } from '../model/chart-model';
import { DataUpdatesConsumer, SeriesDataItemTypeMap } from '../model/data-consumer';
import { CustomData, ICustomSeriesPaneView } from '../model/icustom-series';
import { IHorzScaleBehavior } from '../model/ihorz-scale-behavior';
import { Series } from '../model/series';
import { AreaSeriesPartialOptions, BarSeriesPartialOptions, BaselineSeriesPartialOptions, CandlestickSeriesPartialOptions, CustomSeriesOptions, CustomSeriesPartialOptions, HistogramSeriesPartialOptions, LineSeriesPartialOptions, SeriesPartialOptions, SeriesType } from '../model/series-options';
import { IChartApiBase, MouseEventHandler, PaneSize } from './ichart-api';
import { IPriceScaleApi } from './iprice-scale-api';
import { ISeriesApi } from './iseries-api';
import { ITimeScaleApi } from './itime-scale-api';
import { SeriesApi } from './series-api';
export type IPriceScaleApiProvider<HorzScaleItem> = Pick<IChartApiBase<HorzScaleItem>, 'priceScale'>;
export declare class ChartApi<HorzScaleItem> implements IChartApiBase<HorzScaleItem>, DataUpdatesConsumer<SeriesType, HorzScaleItem> {
    private _chartWidget;
    private _dataLayer;
    private readonly _seriesMap;
    private readonly _seriesMapReversed;
    private readonly _clickedDelegate;
    private readonly _dblClickedDelegate;
    private readonly _crosshairMovedDelegate;
    private readonly _timeScaleApi;
    private readonly _horzScaleBehavior;
    constructor(container: HTMLElement, horzScaleBehavior: IHorzScaleBehavior<HorzScaleItem>, options?: DeepPartial<ChartOptionsImpl<HorzScaleItem>>);
    remove(): void;
    resize(width: number, height: number, forceRepaint?: boolean): void;
    addCustomSeries<TData extends CustomData<HorzScaleItem>, TOptions extends CustomSeriesOptions, TPartialOptions extends CustomSeriesPartialOptions = SeriesPartialOptions<TOptions>>(customPaneView: ICustomSeriesPaneView<HorzScaleItem, TData, TOptions>, options?: SeriesPartialOptions<TOptions>): ISeriesApi<'Custom', HorzScaleItem, TData, TOptions, TPartialOptions>;
    addAreaSeries(options?: AreaSeriesPartialOptions): ISeriesApi<'Area', HorzScaleItem>;
    addBaselineSeries(options?: BaselineSeriesPartialOptions): ISeriesApi<'Baseline', HorzScaleItem>;
    addBarSeries(options?: BarSeriesPartialOptions): ISeriesApi<'Bar', HorzScaleItem>;
    addCandlestickSeries(options?: CandlestickSeriesPartialOptions): ISeriesApi<'Candlestick', HorzScaleItem>;
    addHistogramSeries(options?: HistogramSeriesPartialOptions): ISeriesApi<'Histogram', HorzScaleItem>;
    addLineSeries(options?: LineSeriesPartialOptions): ISeriesApi<'Line', HorzScaleItem>;
    removeSeries(seriesApi: SeriesApi<SeriesType, HorzScaleItem>): void;
    applyNewData<TSeriesType extends SeriesType>(series: Series<TSeriesType>, data: SeriesDataItemTypeMap<HorzScaleItem>[TSeriesType][]): void;
    updateData<TSeriesType extends SeriesType>(series: Series<TSeriesType>, data: SeriesDataItemTypeMap<HorzScaleItem>[TSeriesType]): void;
    subscribeClick(handler: MouseEventHandler<HorzScaleItem>): void;
    unsubscribeClick(handler: MouseEventHandler<HorzScaleItem>): void;
    subscribeCrosshairMove(handler: MouseEventHandler<HorzScaleItem>): void;
    unsubscribeCrosshairMove(handler: MouseEventHandler<HorzScaleItem>): void;
    subscribeDblClick(handler: MouseEventHandler<HorzScaleItem>): void;
    unsubscribeDblClick(handler: MouseEventHandler<HorzScaleItem>): void;
    priceScale(priceScaleId: string): IPriceScaleApi;
    timeScale(): ITimeScaleApi<HorzScaleItem>;
    applyOptions(options: DeepPartial<ChartOptionsImpl<HorzScaleItem>>): void;
    options(): Readonly<ChartOptionsImpl<HorzScaleItem>>;
    takeScreenshot(): HTMLCanvasElement;
    autoSizeActive(): boolean;
    chartElement(): HTMLDivElement;
    paneSize(): PaneSize;
    setCrosshairPosition(price: number, horizontalPosition: HorzScaleItem, seriesApi: ISeriesApi<SeriesType, HorzScaleItem>): void;
    clearCrosshairPosition(): void;
    private _addSeriesImpl;
    private _sendUpdateToChart;
    private _mapSeriesToApi;
    private _convertMouseParams;
}