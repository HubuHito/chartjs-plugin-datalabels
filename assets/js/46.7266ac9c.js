(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{532:function(n,t,a){"use strict";a.r(t);var e=a(4),o=Object(e.a)({},(function(){var n=this.$createElement,t=this._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("h1",{attrs:{id:"气泡图"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#气泡图"}},[this._v("#")]),this._v(" 气泡图")]),this._v(" "),t("chart-editor",{attrs:{code:"// <block:setup:2>\nvar DATA_COUNT = 8;\nvar labels = [];\n\nUtils.srand(18);\n\nfunction generatePoint() {\n  return {\n    x: Utils.rand(-100, 100),\n    y: Utils.rand(-50, 50),\n    v: Utils.rand(15, 100),\n  };\n}\n\nfunction generateData() {\n  var data = [];\n  for (var i = 0; i < DATA_COUNT; ++i) {\n    data.push(generatePoint());\n  }\n  return data;\n}\n// </block:setup>\n\nvar config = /* <block:config:0> */ {\n  type: 'bubble',\n  data: {\n    datasets: [{\n      backgroundColor: Utils.color(0),\n      borderColor: Utils.color(0),\n      data: generateData()\n    }, {\n      backgroundColor: Utils.color(1),\n      borderColor: Utils.color(1),\n      data: generateData()\n    }]\n  },\n  options: {\n    plugins: {\n      datalabels: {\n        anchor: function(context) {\n          var value = context.dataset.data[context.dataIndex];\n          return value.v < 50 ? 'end' : 'center';\n        },\n        align: function(context) {\n          var value = context.dataset.data[context.dataIndex];\n          return value.v < 50 ? 'end' : 'center';\n        },\n        color: function(context) {\n          var value = context.dataset.data[context.dataIndex];\n          return value.v < 50 ? context.dataset.backgroundColor : 'white';\n        },\n        font: {\n          weight: 'bold'\n        },\n        formatter: function(value) {\n          return Math.round(value.v);\n        },\n        offset: 2,\n        padding: 0\n      }\n    },\n\n    // Core options\n    aspectRatio: 5 / 3,\n    layout: {\n      padding: 16\n    },\n    elements: {\n      point: {\n        radius: function(context) {\n          var value = context.dataset.data[context.dataIndex];\n          var size = context.chart.width;\n          var base = Math.abs(value.v) / 100;\n          return (size / 24) * base;\n        }\n      }\n    },\n  }\n} /* </block:config> */;\n\nvar actions = [\n  {\n    name: 'Randomize',\n    handler: function(chart) {\n      chart.data.datasets.forEach(function(dataset, i) {\n        dataset.backgroundColor = dataset.borderColor = Utils.color();\n        dataset.data = generateData();\n      });\n\n      chart.update();\n    }\n  },\n  {\n    name: 'Add data',\n    handler: function(chart) {\n      chart.data.labels.push(chart.data.labels.length);\n      chart.data.datasets.forEach(function(dataset, i) {\n        dataset.data.push(generatePoint());\n      });\n\n      chart.update();\n    }\n  },\n  {\n    name: 'Remove data',\n    handler: function(chart) {\n      chart.data.labels.shift();\n      chart.data.datasets.forEach(function(dataset, i) {\n        dataset.data.shift();\n      });\n\n      chart.update();\n    }\n  }\n];\n\nmodule.exports = {\n  actions: actions,\n  config: config,\n};\n"}})],1)}),[],!1,null,null,null);t.default=o.exports}}]);