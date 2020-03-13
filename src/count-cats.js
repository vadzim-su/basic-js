module.exports = function countCats(checkedArray) {
  let catsValue = 0
  checkedArray = String(checkedArray).split(',')

  for (let key in checkedArray) {
    if (checkedArray[key] == '^^') catsValue += 1
  }

  return catsValue
};
