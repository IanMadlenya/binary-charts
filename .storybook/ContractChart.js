import React from 'react';
import { LiveApi } from 'binary-live-api';
import BinaryChart from '../src/BinaryChart'
import nowEpoch from 'binary-utils/lib/nowAsEpoch';
import durationToSecs from 'binary-utils/lib/durationToSecs';

const token = 'qdJ86Avvrsh0Le4';
const api = new LiveApi();
const granularities = [60, 120, 180, 300, 600, 900, 1800, 3600, 7200, 14400, 28800, 86400];

const ohlcDataToTicks = candles => candles.map(data => ({ quote: +data.open, epoch: +data.epoch }));

const autoAdjustGetData = (symbol, start, end) => {
    const secs = end - start;
    const ticksCount = secs / 2;
    let style = 'ticks';
    if (ticksCount >= 5000) {
        style = 'candles';
        const idealGranularity = secs / 4999;
        let granularity = 60;
        granularities.forEach((g, i) => {
            if (idealGranularity > g && idealGranularity <= granularities[i + 1]) {
                granularity = granularities[i + 1];
            }
        });
        granularity = Math.min(86400, granularity);
        return api.getTickHistory(symbol,
            {
                start,
                end,
                adjust_start_time: 1,
                count: 4999,
                style,
                granularity,
            }
        ).then(r => ohlcDataToTicks(r.candles));
    }
    return api.getTickHistory(symbol,
        {
            start,
            end,
            adjust_start_time: 1,
            count: 4999,
            style,
        }
    ).then(r => {
        const ticks = r.history.times.map((t, idx) => {
            const quote = r.history.prices[idx];
            return { epoch: +t, quote: +quote };
        });
        return ticks;
    });
};

const getAllData = (contractID, style = 'ticks', granularity = 60) =>
    api.subscribeToOpenContract(contractID)
        .then(r => {
            const contract = r.proposal_open_contract;
            const symbol = contract.underlying;
            const start = contract.purchase_time;
            const sellT = contract.sell_time;
            const end = contract.sell_spot ? sellT: nowEpoch();
            return autoAdjustGetData(symbol, start, end);
        });

const hcUnitConverter = type => {
    switch (type) {
        case 'second': return 's';
        case 'minute': return 'm';
        case 'hour': return 'h';
        case 'day': return 'd';
        default: return 'd';
    }
};

/**
 * durationCount {Number}
 * durationType  {second|minute|day|ytd|year|all}      check http://api.highcharts.com/highstock#rangeSelector.buttons
 */
const getData = (contractID, durationType, durationCount, style = 'ticks', granularity = 60) =>
    api.subscribeToOpenContract(contractID)
        .then(r => {
            const contract = r.proposal_open_contract;
            const symbol = contract.underlying;
            const purchaseT = contract.purchase_time;
            const sellT = contract.sell_time;

            if (durationType === 'all') {
                return getAllData(contractID, style, granularity);
            }

            const end = contract.sell_spot ? sellT: nowEpoch();
            const durationUnit = hcUnitConverter(durationType);
            const start = Math.min(purchaseT, end - durationToSecs(durationCount, durationUnit));
            return autoAdjustGetData(symbol, start, end);
        });

export default class ContractChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ticks: [],
        };
    }

    componentWillMount() {
        const { style, contractID } = this.props
        api.authorize(token).then(r =>
            getAllData(contractID, style)
        ).then(ticks => {
            this.setState({ ticks });
        });
    }

    render() {
        const { ticks, contract } = this.state;
        const { contractID } = this.props;
        const getDataWhenChange = (count, type) =>
            getData(contractID, type, count).then(ticks => this.setState({ ticks }));
        return (
            <BinaryChart ticks={ticks} contract={contract} rangeChange={getDataWhenChange} />
        );
    }
}
