const { analyzeErrors: errors } = require('./helpers/errors.js')

/**
 * @param {string[]} lines All input text seperated by newline
 * @returns {Object}
 */
const analyze = lines => {
  // Input Validation
  if (!Array.isArray(lines)) throw errors.invalidInput
  if (!lines.every(x => typeof x === 'string')) throw errors.invalidInput

  let model = {}
  for (let line of lines) {
    try {
      let tokens = line.split(' ')

      for (let i = 0; i < tokens.length; i++) {
        let token = tokens[i]
        let next = tokens[i + 1]

        if (!next) {
          token = token.replace('\n', '')
          next = '\n'
        }

        if (!model[token]) model[token] = { start: false, next: {} }
        if (i === 0) model[token].start = true

        let count = model[token].count || 0
        if (i === 0) count++
        model[token].count = count

        let nextCount = model[token].next[next] || 0
        nextCount++
        model[token].next[next] = nextCount
      }
    } catch (err) {
      continue
    }
  }

  return model
}

module.exports = { analyze }
