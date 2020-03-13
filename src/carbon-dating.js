const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity == 'string' && parseFloat(sampleActivity) > 0 && parseFloat(sampleActivity) <= 15) {
  let ratio = Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity))
    return parseInt(HALF_LIFE_PERIOD * ratio / Math.LN2)
  }
  else {
  return false
  }
}
