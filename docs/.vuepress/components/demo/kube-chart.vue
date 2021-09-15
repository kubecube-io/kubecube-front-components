<template>
<div>
    <div>
        <u-text> stack: </u-text>
        <u-switch v-model="controls.stack" />
        <u-text> type: </u-text>
        <u-select v-model="controls.type" :data="[{text: 'line', value: 'line'}, {text: 'bar', value: 'bar'}]" />
        <br />
        <u-text> smooth: </u-text>
        <u-switch :disabled="controls.type==='bar'" v-model="controls.smooth" />
        <u-text> fill: </u-text>
        <u-switch :disabled="controls.type==='bar'" v-model="controls.fill" />
    </div>
    <br />
  <div
    :class="$style.root"
  >
    <div
      ref="chart"
      :class="$style.chartcontainer"
    >
      <float-content
        v-if="floatMeta.display"
        v-bind="floatMeta"
      />
    </div>
    <legend-content
       ref="legend"
      :legends="legendMeta.legends"
    />
  </div>
</div>
</template>

<script>
import { flatten, get } from 'lodash';
import jChart, {
    Data2D,
    Coord2D,
    LineChart,
    BarChart,
    LineIndicator,
    Legend,
} from '@joskii/jchart';

import floatContent from '@kubecube/common/kube-chart/template/float-content.vue';
import legendContent from '@kubecube/common/kube-chart/template/legend-content.vue';
import datajson from './data.json';
const NumberFormatter = new Intl.NumberFormat('en-GB', {
    notation: 'compact',
    compactDisplay: 'short',
});
const dataFormatter = new Intl.DateTimeFormat('en-US', {
    year: 'numeric', month: 'numeric', day: 'numeric',
    hour: 'numeric', minute: 'numeric', second: 'numeric',
    hour12: false,
});
function getSeries(data) {
    let largest;
    let l = 0;
    const results = get(data, 'data.result', []);
    results.forEach(r => {
        const length = r.values.length;
        if (length > l) {
            l = length;
            largest = r.values.map(v => v[0]);
        }
    });
    return flatten(
        get(data, 'data.result', []).map(r => {
            const values = r.values.map(v => [ v[0] * 1000, +v[1] ]);
            let vs = [];
            if (values.length < l) {
                largest.forEach(t => {
                    const time = t * 1000;
                    const q = values.find(v => v[0] === time);
                    if (q) {
                        vs.push(q);
                    } else {
                        vs.push([ t * 1000, 0 ]);
                    }
                });
            } else {
                vs = values;
            }

            return {
                name: r.metric.pod,
                values: vs,
            };
        }));
}

export default {
    components: {
        floatContent,
        legendContent,
    },
    data() {
        return {
            controls: {
                stack: false,
                smooth: true,
                fill: true,
                type: 'line'
            }, 

            chartOption: null,

            floatMeta: {
                display: false,
                x: 0,
                y: 0,
                xDimension: '',
                series: [],
            },

            legendMeta: {
                legends: [],
            },
        };
    },
    watch: {
        controls: {
            handler() { this.loadChart(); },
            deep: true,
        }
    },
    mounted() {
        this.loadChart();
    },
    methods: {
        loadChart() {
            if(this.chartContext) {
                this.chartContext.destroy();
                this.chartContext = null;
            }
            const {
                stack, fill, smooth, type
            } = this.controls;
            const dataoption = {
                reference: {
                    type: 'continuous',
                },
                series: getSeries(datajson),
                stack,
                xAxis: {
                    span: 6,
                    format(value) {
                        const datetime = new Date(value);
                        return dataFormatter.format(datetime);
                    },
                },
                yAxis: {
                    min: 0,
                    format(value) {
                        return `${NumberFormatter.format(value)} pps`;
                    },
                },
            };
            this.chartContext = jChart([
                new Data2D(),
                new Coord2D({
                    type: 'vertical',
                    grid: {
                        vertical: true,
                        horizontal: true,
                    },
                }),
                (type === 'line' ? 
                    new LineChart({
                        smooth,
                        fill,
                    }) : 
                    new BarChart())
                ,
                new LineIndicator({
                    callback: meta => {
                        if (!meta.display) {
                            this.floatMeta.display = meta.display;
                        } else {
                            Object.assign(this.floatMeta, meta);
                        }
                    },
                    bar: type === 'bar',
                }),
                new Legend({
                    callback: legends => {
                        this.legendMeta.legends = legends;
                    },
                }),
            ], {
                layout: {
                    left: 5,
                    top: 10,
                    bottom: 35,
                    right: 20,
                },
            })(this.$refs.chart, dataoption);
        }
    }
}
</script>

<style module>
.root{
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 480px;
}
.chartcontainer{
    flex: 1;
    width: 100%;
    position: relative;
}
</style>