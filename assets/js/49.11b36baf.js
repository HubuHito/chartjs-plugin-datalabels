(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{535:function(n,a,t){"use strict";t.r(a);var o=t(4),r=Object(o.a)({},(function(){var n=this.$createElement,a=this._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[a("h1",{attrs:{id:"南丁格尔玫瑰图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#南丁格尔玫瑰图"}},[this._v("#")]),this._v(" 南丁格尔玫瑰图")]),this._v(" "),a("chart-editor",{attrs:{code:"// <block:setup:2>\nvar DATA_COUNT = 10;\nvar labels = [];\n\nUtils.srand(16);\n\nfor (var i = 0; i < DATA_COUNT; ++i) {\n  labels.push('' + i);\n}\n// </block:setup>\n\nvar config = /* <block:config:0> */ {\n  type: 'polarArea',\n  data: {\n    labels: labels,\n    datasets: [{\n      backgroundColor: Utils.color(0),\n      data: Utils.numbers({\n        count: DATA_COUNT,\n        min: 0,\n        max: 100\n      })\n    }, {\n      backgroundColor: Utils.color(1),\n      data: Utils.numbers({\n        count: DATA_COUNT,\n        min: 0,\n        max: 100\n      })\n    }, {\n      backgroundColor: Utils.color(2),\n      data: Utils.numbers({\n        count: DATA_COUNT,\n        min: 0,\n        max: 100\n      })\n    }]\n  },\n  options: {\n    plugins: {\n      datalabels: {\n        anchor: 'end',\n        backgroundColor: function(context) {\n          return context.dataset.backgroundColor;\n        },\n        borderColor: 'white',\n        borderRadius: 25,\n        borderWidth: 2,\n        color: 'white',\n        font: {\n          weight: 'bold'\n        },\n        formatter: Math.round,\n        padding: 6\n      }\n    },\n\n    // Core options\n    aspectRatio: 4 / 3,\n    layout: {\n      padding: 16\n    },\n    elements: {\n      line: {\n        fill: false\n      },\n      point: {\n        hoverRadius: 7,\n        radius: 5\n      }\n    },\n  }\n} /* </block:config> */;\n\nvar actions = [\n  {\n    name: 'Randomize',\n    handler: function(chart) {\n      chart.data.datasets.forEach(function(dataset, i) {\n        dataset.backgroundColor = Utils.color();\n        dataset.data = dataset.data.map(function(value) {\n          return Utils.rand(0, 100);\n        });\n      });\n\n      chart.update();\n    }\n  },\n  {\n    name: 'Add data',\n    handler: function(chart) {\n      chart.data.labels.push(chart.data.labels.length);\n      chart.data.datasets.forEach(function(dataset, i) {\n        dataset.data.push(Utils.rand(0, 100));\n      });\n\n      chart.update();\n    }\n  },\n  {\n    name: 'Remove data',\n    handler: function(chart) {\n      chart.data.labels.shift();\n      chart.data.datasets.forEach(function(dataset, i) {\n        dataset.data.shift();\n      });\n\n      chart.update();\n    }\n  }\n];\n\nmodule.exports = {\n  actions: actions,\n  config: config,\n};\n"}})],1)}),[],!1,null,null,null);a.default=r.exports}}]);