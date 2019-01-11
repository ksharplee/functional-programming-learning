import * as R from 'ramda';
import moment from 'moment';

const Left = function(x) {
	this._value = x;
};

Left.of = x => new Left(x);

Left.prototype.map = function(f) {
	return this;
};

const Right = function(x) {
	this._value = x;
};

Right.of = x => new Right(x);

Right.prototype.map = function(f) {
	return Right.of(f(this._value));
};

console.log(Left.of('rain').map(str => `b${str}`));

console.log(Right.of('rain').map(str => `b${str}`));

console.log(
	Right.of({
		host: 'localhost',
		port: 80
	}).map(R.prop('host'))
);

console.log(Left.of('roll eyes...').map(R.prop('host')));

// const getAge = R.curry();
