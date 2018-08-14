const { mapModelErrors: errors } = require('./errors.js')

/**
 * @typedef {Object} Token
 * @property {string} token
 * @property {number} count
 * @property {boolean} start
 * @property {Word[]} next
 */

/**
 * @typedef {Object} Word
 * @property {string} token
 * @property {number} weight
 */

/**
 * @param {Object} model Raw Model
 * @returns {Token[]}
 */
const mapModel = model => {
  // Input Validation
  if (model.constructor !== Object) throw errors.invalidInput

  let output = Object.entries(model)
    .map(x => {
      let [key, value] = x
      value.token = key

      let next = Object.entries(value.next)
        .map(y => {
          let [token, weight] = y
          return { token, weight }
        })
      value.next = next

      return value
    })
  return output
}

module.exports = { mapModel }
