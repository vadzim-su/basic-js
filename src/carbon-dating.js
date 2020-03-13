const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity == 'string' && parseFloat(sampleActivity) > 0 && parseFloat(sampleActivity) <= 15) {
  let ratio = Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity))
    return Math.ceil(HALF_LIFE_PERIOD * ratio / 0.693)
  }
  else {
  return false
  }
}
