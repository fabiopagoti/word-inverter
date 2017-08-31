"use strict"

const assert = require('assert')
const inverter = require('../')

describe('Word inverter', function(){

	it('should invert null as null', function(){
		assert.equal(inverter(null), null)
	})

	it('should invert undefined as undefined', function(){
		assert.equal(inverter(undefined), undefined)
	})

	it('should invert a as a', function(){
		assert.equal(inverter('a'), 'a')
	})

	it('should invert ab as ba', function(){
		assert.equal(inverter('ab'), 'ba')
	})

	it('should invert 0123456789 as 9876543210', function(){
		assert.equal(inverter('0123456789'), '9876543210')
	})

})