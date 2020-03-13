module.exports = function transform(arr) {
  if (Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== '--double-next' && arr[i] !== '--double-prev' && arr[i] !== '--discard-prev' && arr[i] !== '--discard-next') {
        return arr
      } else {

        if (arr[i] === '--double-next') {
          arr[i] = arr[i + 1]
          return arr
        }

        if (arr[i] === '--double-prev') {
          arr[i] = arr[i - 1]
          return arr
        }

        if (arr[i] === '--discard-prev') {
          newArr = arr.slice(0, i - 1).concat(arr.slice(i + 1, arr.length))
          return newArr
        }

        if (arr[i] === '--discard-next') {
          newArr = arr.slice(0, i).concat(arr.slice(i + 2, arr.length))
          return newArr
        }
      }
    }
  } else return false
}
