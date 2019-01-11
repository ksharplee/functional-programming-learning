import * as R from '../node_modules/ramda/es/index.js';

let Container = function(x) {
	this._value = x;
};

Container.of = function(x) {
	return new Container(x);
};

// console.log(Container.of(3));
// console.log(Container.of('hot dogs'));
// console.log(Container.of(Container.of('sth')));

// Functor
Container.prototype.map = function(f) {
	return Container.of(f(this._value));
};

console.log(Container.of(2).map(two => two + 2));
console.log(Container.of('flamboyant').map(str => str.toUpperCase()));
console.log(
	Container.of('bombs')
		.map(str => str.concat(' away'))
		.map(str => str.length)
);
