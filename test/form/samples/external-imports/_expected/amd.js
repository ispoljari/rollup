define(['factory', 'baz', 'shipping-port', 'alphabet'], function (factory, baz, containers, alphabet) { 'use strict';

	function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex : { 'default': ex }; }

	var factory__default = _interopDefault(factory);
	var alphabet__default = _interopDefault(alphabet);

	factory__default.default( null );
	baz.foo( baz.bar, containers.port );
	containers.forEach( console.log, console );
	console.log( alphabet.a );
	console.log( alphabet__default.default.length );

});
