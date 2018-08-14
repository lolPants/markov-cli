const analyzeErrors = {
  invalidInput: new Error(`argument 'lines' must be a string[]`),
}

const generateErrors = {
  invalidInput: new Error(`argument 'model' must be a Token[]`),
}

const mapModelErrors = {
  invalidInput: new Error(`argument 'model' must be an Object literal`),
}

module.exports = { analyzeErrors, generateErrors, mapModelErrors }
