// Test Suites
const { describe, it } = require('mocha')
const { expect } = require('chai')

// Local Package
const { analyze, generate } = require('../src/index.js')

describe('analyze()', () => {
  it('should be a function', () => {
    expect(analyze).to.be.a('function')
  })
})

describe('generate()', () => {
  it('should be a function', () => {
    expect(generate).to.be.a('function')
  })
})
