(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{534:function(n,t,a){"use strict";a.r(t);var o=a(4),r=Object(o.a)({},(function(){var n=this.$createElement,t=this._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("h1",{attrs:{id:"折线图"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#折线图"}},[this._v("#")]),this._v(" 折线图")]),this._v(" "),t("chart-editor",{attrs:{code:"// <block:setup:2>\nvar DATA_COUNT = 8;\nvar labels = [];\n\nUtils.srand(8);\n\nfor (var i = 0; i < DATA_COUNT; ++i) {\n  labels.push('' + i);\n}\n// </block:setup>\n\nvar config = /* <block:config:0> */ {\n  type: 'line',\n  data: {\n    labels: labels,\n    datasets: [{\n      backgroundColor: Utils.color(0),\n      borderColor: Utils.color(0),\n      data: Utils.numbers({\n        count: DATA_COUNT,\n        min: 0,\n        max: 100\n      }),\n      datalabels: {\n        align: 'start',\n        anchor: 'start'\n      }\n    }, {\n      backgroundColor: Utils.color(1),\n      borderColor: Utils.color(1),\n      data: Utils.numbers({\n        count: DATA_COUNT,\n        min: 0,\n        max: 100\n      })\n    }, {\n      backgroundColor: Utils.color(2),\n      borderColor: Utils.color(2),\n      data: Utils.numbers({\n        count: DATA_COUNT,\n        min: 0,\n        max: 100\n      }),\n      datalabels: {\n        align: 'end',\n        anchor: 'end'\n      }\n    }]\n  },\n  options: {\n    plugins: {\n      datalabels: {\n        backgroundColor: function(context) {\n          return context.dataset.backgroundColor;\n        },\n        borderRadius: 4,\n        color: 'white',\n        font: {\n          weight: 'bold'\n        },\n        formatter: Math.round,\n        padding: 6\n      }\n    },\n\n    // Core options\n    aspectRatio: 5 / 3,\n    layout: {\n      padding: {\n        top: 32,\n        right: 16,\n        bottom: 16,\n        left: 8\n      }\n    },\n    elements: {\n      line: {\n        fill: false,\n        tension: 0.4\n      }\n    },\n    scales: {\n      y: {\n        stacked: true\n      }\n    }\n  }\n} /* </block:config> */;\n\nvar actions = [\n  {\n    name: 'Randomize',\n    handler: function(chart) {\n      chart.data.datasets.forEach(function(dataset, i) {\n        dataset.backgroundColor = dataset.borderColor = Utils.color();\n        dataset.data = dataset.data.map(function(value) {\n          return Utils.rand(0, 100);\n        });\n      });\n\n      chart.update();\n    }\n  },\n  {\n    name: 'Add data',\n    handler: function(chart) {\n      chart.data.labels.push(chart.data.labels.length);\n      chart.data.datasets.forEach(function(dataset, i) {\n        dataset.data.push(Utils.rand(0, 100));\n      });\n\n      chart.update();\n    }\n  },\n  {\n    name: 'Remove data',\n    handler: function(chart) {\n      chart.data.labels.shift();\n      chart.data.datasets.forEach(function(dataset, i) {\n        dataset.data.shift();\n      });\n\n      chart.update();\n    }\n  }\n];\n\nmodule.exports = {\n  actions: actions,\n  config: config,\n};\n"}})],1)}),[],!1,null,null,null);t.default=r.exports}}]);