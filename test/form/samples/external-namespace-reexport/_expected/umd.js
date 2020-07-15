(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('highcharts')) :
	typeof define === 'function' && define.amd ? define(['exports', 'highcharts'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.myBundle = {}, global.highcharts));
}(this, (function (exports, highcharts) { 'use strict';

	function _interopNamespace(e) {
		if (e && e.__esModule) { return e; } else {
			var n = Object.create(null);
			if (e) {
				Object.keys(e).forEach(function (k) {
					var d = Object.getOwnPropertyDescriptor(e, k);
					Object.defineProperty(n, k, d.get ? d : {
						enumerable: true,
						get: function () {
							return e[k];
						}
					});
				});
			}
			n['default'] = e;
			return Object.freeze(n);
		}
	}

	var highcharts__ns = /*#__PURE__*/_interopNamespace(highcharts);



	exports.Highcharts = highcharts__ns;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
