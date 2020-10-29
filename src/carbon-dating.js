const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(!isFinite(+sampleActivity) || typeof sampleActivity === "number" || +sampleActivity > 15 || +sampleActivity < 0) return false;
  let t = (Math.log(Math.ceil(+sampleActivity)/MODERN_ACTIVITY)/1.22e-4);
  if(t === Infinity) return false;
  if(t < 0) return false;
  return t;
};
