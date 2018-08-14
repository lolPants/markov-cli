const mapModel = model => {
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
