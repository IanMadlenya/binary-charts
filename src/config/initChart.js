import reset from '../parts/reset';
import exporting from '../parts/exporting';
import plotOptions from '../parts/plotOptions';
import navigator from '../parts/navigator';
import rangeSelector from '../parts/rangeSelector';
import yAxis from '../parts/yAxis';
import xAxis from '../parts/xAxis';
import seriesLine from '../parts/seriesLine';
// import events from '../parts/events';

export default ({ pipSize = 0, type = 'area', rangeChange, typeChange }) => ({
    ...reset(),
    binary: {
        pipSize,
    },
    plotOptions: plotOptions(),
    navigator: navigator(),
    rangeSelector: rangeSelector(),
    xAxis: xAxis({ rangeChange }),
    yAxis: {
        ...yAxis({ pipSize }),
        spotIndicator: {
            enabled: true,
            pipSize,
        },
    },
    series: seriesLine({ data: [], pipSize, type }),
    exporting: exporting({ typeChange }),
    // events: events()
});
