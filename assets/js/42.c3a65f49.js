(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{528:function(n,t,a){"use strict";a.r(t);var e=a(4),o=Object(e.a)({},(function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h1",{attrs:{id:"自定义标签内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义标签内容"}},[n._v("#")]),n._v(" 自定义标签内容")]),n._v(" "),a("p",[n._v("用 "),a("RouterLink",{attrs:{to:"/zh/guide/formatting.html#自定义标签"}},[n._v("自定义标签")]),n._v("显示自定义内容。")],1),n._v(" "),a("chart-editor",{attrs:{code:"// <block:setup:2>\nvar labels = [\n  'Mercury',\n  'Venus',\n  'Earth',\n  'Mars',\n  'Jupiter',\n  'Saturn',\n  'Uranus',\n  'Neptune',\n];\n\nvar DATA_COUNT = labels.length;\n\nUtils.srand(0);\n// </block:setup>\n\nvar config = /* <block:config:0> */ {\n  type: 'bar',\n  data: {\n    labels: labels,\n    datasets: [{\n      backgroundColor: Utils.colors(0),\n      data: Utils.numbers({\n        count: DATA_COUNT,\n        min: 0,\n        max: 100\n      })\n    }]\n  },\n  options: {\n    plugins: {\n      datalabels: {\n        align: 'end',\n        anchor: 'end',\n        color: function(context) {\n          return context.dataset.backgroundColor;\n        },\n        font: function(context) {\n          var w = context.chart.width;\n          return {\n            size: w < 512 ? 12 : 14,\n            weight: 'bold',\n          };\n        },\n        formatter: function(value, context) {\n          return context.chart.data.labels[context.dataIndex];\n        }\n      }\n    },\n\n    // Core options\n    aspectRatio: 5 / 3,\n    layout: {\n      padding: {\n        top: 32\n      }\n    },\n    elements: {\n      line: {\n        fill: false,\n        tension: 0.4\n      }\n    },\n    scales: {\n      x: {\n        display: false,\n        offset: true\n      },\n      y: {\n        beginAtZero: true\n      }\n    }\n  }\n} /* </block:config> */;\n\nvar actions = [\n  {\n    name: 'Randomize',\n    handler: function(chart) {\n      chart.data.datasets.forEach(function(dataset, i) {\n        dataset.data = dataset.data.map(function(value) {\n          return Utils.rand(0, 100);\n        });\n      });\n\n      chart.update();\n    }\n  }\n];\n\nmodule.exports = {\n  actions: actions,\n  config: config,\n};\n"}})],1)}),[],!1,null,null,null);t.default=o.exports}}]);