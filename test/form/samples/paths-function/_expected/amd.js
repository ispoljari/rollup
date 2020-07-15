define(['require', 'https://unpkg.com/foo'], function (require, foo) { 'use strict';

	function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex : { 'default': ex }; }

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

	var foo__default = /*#__PURE__*/_interopDefault(foo);

	assert.equal(foo__default['default'], 42);

	new Promise(function (resolve, reject) { require(['https://unpkg.com/foo'], function (m) { resolve(/*#__PURE__*/_interopNamespace(m)); }, reject) }).then(({ default: foo }) => assert.equal(foo, 42));

});
