// Test Suites
const { describe, it } = require('mocha')
const { expect } = require('chai')

// Local Package
const { analyze, generate, mapModel } = require('../src/index.js')
const { analyzeErrors, generateErrors } = require('../src/helpers/errors.js')

// Test Data
const { testInput, testModel, testMapped } = require('./data.js')

describe('analyze()', () => {
  it('should be a function', () => {
    expect(analyze).to.be.a('function')
  })

  describe('input types', () => {
    it('should accept an Array', () => {
      expect(() => { analyze([]) }).to.not.throw()
    })

    it('should ONLY accept a string[]', () => {
      expect(() => { analyze([1, 2, 'three']) }).to.throw(analyzeErrors.invalidInput)
    })

    it('should throw when given a string', () => {
      expect(() => { analyze('string') }).to.throw(analyzeErrors.invalidInput)
    })

    it('should throw when given a number', () => {
      expect(() => { analyze(5) }).to.throw(analyzeErrors.invalidInput)
    })

    it('should throw when given an Object literal', () => {
      expect(() => { analyze({ object: true }) }).to.throw(analyzeErrors.invalidInput)
    })
  })

  describe('return types', () => {
    it('should return an Object', () => {
      expect(analyze(testInput)).to.be.an('object')
    })
  })

  describe('handling empty lines', () => {
    it('should not throw', () => {
      expect(() => { analyze(['a b c', '', 'd e f']) }).to.not.throw()
    })

    it('should return an Object', () => {
      expect(analyze(['a b c', '', 'd e f'])).to.be.an('object')
    })
  })
})

describe('generate()', () => {
  it('should be a function', () => {
    expect(generate).to.be.a('function')
  })

  describe('input types', () => {
    it('should accept an Array', () => {
      expect(() => { generate(testMapped) }).to.not.throw()
    })

    it('should throw when given a string', () => {
      expect(() => { generate('string') }).to.throw(generateErrors.invalidInput)
    })

    it('should throw when given a number', () => {
      expect(() => { generate(5) }).to.throw(generateErrors.invalidInput)
    })

    it('should throw when given an Object literal', () => {
      expect(() => { generate({ object: true }) }).to.throw(generateErrors.invalidInput)
    })
  })
})
