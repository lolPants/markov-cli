// Test Suites
const { describe, it } = require('mocha')
const { expect } = require('chai')

// Local Package
const { analyze, generate } = require('../src/index.js')
const { analyzeErrors, generateErrors } = require('../src/errors.js')

// Test Data
const { testData } = require('./data.js')

describe('analyze()', () => {
  it('should be a function', () => {
    expect(analyze).to.be.a('function')
  })

  describe('input types', () => {
    it('should accept an Array', () => {
      expect(() => { analyze(testData) }).to.not.throw()
    })

    it('should ONLY accept a string[]', () => {
      expect(() => { analyze(testData) }).to.not.throw()
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
})

describe('generate()', () => {
  it('should be a function', () => {
    expect(generate).to.be.a('function')
  })

  describe('input types', () => {
    it('should accept an Object literal', () => {
      expect(() => { generate({ object: true }) }).to.not.throw()
    })

    it('should throw when given a string', () => {
      expect(() => { generate('string') }).to.throw(generateErrors.invalidInput)
    })

    it('should throw when given a number', () => {
      expect(() => { generate(5) }).to.throw(generateErrors.invalidInput)
    })

    it('should throw when given an Array', () => {
      expect(() => { generate([1, 2, 3]) }).to.throw(generateErrors.invalidInput)
    })
  })
})
