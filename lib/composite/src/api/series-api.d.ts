import { IPriceFormatter } from '../formatters/iprice-formatter';
import { IDestroyable } from '../helpers/idestroyable';
import { BarPrice } from '../model/bar';
import { Coordinate } from '../model/coordinate';
import { DataUpdatesConsumer, SeriesDataItemTypeMap, WhitespaceData } from '../model/data-consumer';
import { IHorzScaleBehavior } from '../model/ihorz-scale-behavior';
import { MismatchDirection } from '../model/plot-list';
import { CreatePriceLineOptions } from '../model/price-line-options';
import { Series } from '../model/series';
import { SeriesMarker } from '../model/series-markers';
import { SeriesOptionsMap, SeriesPartialOptionsMap, SeriesType } from '../model/series-options';
import { Range } from '../model/time-data';
import { IPriceScaleApiProvider } from './chart-api';
import { type IChartApiBase } from './ichart-api';
import { IPriceLine } from './iprice-line';
import { IPriceScaleApi } from './iprice-scale-api';
import { BarsInfo, DataChangedHandler, ISeriesApi } from './iseries-api';
import { ISeriesPrimitive } from './iseries-primitive-api';
export declare class SeriesApi<TSeriesType extends SeriesType, HorzScaleItem, TData extends WhitespaceData<HorzScaleItem> = SeriesDataItemTypeMap<HorzScaleItem>[TSeriesType], TOptions extends SeriesOptionsMap[TSeriesType] = SeriesOptionsMap[TSeriesType], TPartialOptions extends SeriesPartialOptionsMap[TSeriesType] = SeriesPartialOptionsMap[TSeriesType]> implements ISeriesApi<TSeriesType, HorzScaleItem, TData, TOptions, TPartialOptions>, IDestroyable {
    protected _series: Series<TSeriesType>;
    protected _dataUpdatesConsumer: DataUpdatesConsumer<TSeriesType, HorzScaleItem>;
    protected readonly _chartApi: IChartApiBase<HorzScaleItem>;
    private readonly _priceScaleApiProvider;
    private readonly _horzScaleBehavior;
    private readonly _dataChangedDelegate;
    constructor(series: Series<TSeriesType>, dataUpdatesConsumer: DataUpdatesConsumer<TSeriesType, HorzScaleItem>, priceScaleApiProvider: IPriceScaleApiProvider<HorzScaleItem>, chartApi: IChartApiBase<HorzScaleItem>, horzScaleBehavior: IHorzScaleBehavior<HorzScaleItem>);
    destroy(): void;
    priceFormatter(): IPriceFormatter;
    priceToCoordinate(price: number): Coordinate | null;
    coordinateToPrice(coordinate: number): BarPrice | null;
    barsInLogicalRange(range: Range<number> | null): BarsInfo<HorzScaleItem> | null;
    setData(data: TData[]): void;
    update(bar: TData): void;
    dataByIndex(logicalIndex: number, mismatchDirection?: MismatchDirection): TData | null;
    data(): readonly TData[];
    subscribeDataChanged(handler: DataChangedHandler): void;
    unsubscribeDataChanged(handler: DataChangedHandler): void;
    setMarkers(data: SeriesMarker<HorzScaleItem>[]): void;
    markers(): SeriesMarker<HorzScaleItem>[];
    applyOptions(options: TPartialOptions): void;
    options(): Readonly<TOptions>;
    priceScale(): IPriceScaleApi;
    createPriceLine(options: CreatePriceLineOptions): IPriceLine;
    removePriceLine(line: IPriceLine): void;
    seriesType(): TSeriesType;
    attachPrimitive(primitive: ISeriesPrimitive<HorzScaleItem>): void;
    detachPrimitive(primitive: ISeriesPrimitive<HorzScaleItem>): void;
    private _onDataChanged;
}
