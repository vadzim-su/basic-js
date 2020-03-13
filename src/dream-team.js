module.exports = function dreamTeam(arr) {
  var newArr = []
  if (Array.isArray(arr)) {
    for (var i = 0; i < arr.length; i++) {
      if (typeof arr[i] !== 'string') {
        continue
      } else {
        arr[i] = arr[i].replace(/\s+/g, '')
        newArr.push(arr[i][0].toUpperCase())
      }
    }
    return newArr.sort().join('')
  }
  else{
  return false
  }
}

