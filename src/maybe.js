import * as R from '../node_modules/ramda/es/index.js';

let Maybe = function(x) {
	this._value = x;
};

Maybe.of = function(x) {
	return new Maybe(x);
};

Maybe.prototype.isNothing = function() {
	return this._value === null || this._value === undefined;
};

Maybe.prototype.map = function(f) {
	return this.isNothing() ? Maybe.of(null) : Maybe.of(f(this._value));
};

console.log(Maybe.of('Boris').map(str => str.toUpperCase()));
console.log(Maybe.of(null).map(str => str.toUpperCase()));
console.log(
	Maybe.of({ name: 'Dinah', age: 14 })
		.map(R.prop('age'))
		.map(R.add(10))
);

const map = R.curry((f, any_functor_at_all) => any_functor_at_all.map(f));

const safeHead = xs => Maybe.of(xs[0]);
const streetName = R.compose(
	map(R.prop('street')),
	safeHead,
	R.prop('address')
);

console.log(streetName({ address: [] }));
console.log(
	streetName({
		address: [
			{
				street: 'Shady Ln.',
				number: 1203
			}
		]
	})
);
