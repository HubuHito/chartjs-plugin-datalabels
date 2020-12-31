# 设置固定的标签位置

用 [position](../../guide/positioning.md#position) 指定标签绘制位置，在悬浮时显示对应的百分比。

```js chart-editor
// <block:setup:2>
var DATA_COUNT = 3;
var labels = [
  'one',
  'two',
  'three'
];

Utils.srand(3);
// </block:setup>

var config = /* <block:config:0> */ {
  type: 'doughnut',
  data: {
    labels: labels,
    datasets: [{
      backgroundColor: Utils.colors({
        color: Utils.color(1),
        mode: 'darken'
      }),
      hoverBorderColor: 'white',
      data: Utils.numbers({
        count: DATA_COUNT,
        min: 0,
        max: 100
      }),
      datalabels: {
        labels: {
          value: {
            textAlign: 'center',
            position: 'center',
            formatter: function(value, ctx) {
              const data = ctx.dataset.data.reduce((pre, next) => {
                return pre + next
              }, 0);
              const percent = (value / data) * 100;
              return [percent.toFixed(2) + '%', labels[ctx.dataIndex]];
            }
          }
        }
      }
    }]
  },
  options: {
    plugins: {
      datalabels: {
        color: Utils.color(1),
        display: function(ctx) {
          return ctx.active;
        },
        font: {
          weight: 'bold',
          size: 20
        }
      }
    },

    // Core options
    aspectRatio: 3 / 2,
    layout: {
      padding: 16
    },
    elements: {
      line: {
        fill: false,
        tension: 0.4
      }
    },
  }
} /* </block:config> */;

var actions = [
  {
    name: 'Randomize',
    handler: function(chart) {
      chart.data.datasets.forEach(function(dataset, i) {
        dataset.backgroundColor = Utils.colors({
          color: Utils.color(),
          mode: 'darken'
        });
        dataset.data = dataset.data.map(function(value) {
          return Utils.rand(0, 100);
        });
      });
      chart.update();
    }
  }
];

module.exports = {
  actions: actions,
  config: config,
};
```