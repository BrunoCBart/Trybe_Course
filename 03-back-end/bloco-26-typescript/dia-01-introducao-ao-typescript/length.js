// const measureNames: any = {
//   km: 'kilometers',
//   hm: 'hectometers',
//   dam: 'decameters',
//   m: 'meters',
//   dm: 'decimeters',
//   cm: 'centimeters',
//   mm: 'milimeters'
// }
var unities = ['km', 'hm', 'dam', 'm', 'cm', 'mm'];
var convert = function (value, forUnity, toUnity) {
    var forIndex = unities.indexOf(forUnity);
    var toIndex = unities.indexOf(toUnity);
    var exponent = (forIndex - toIndex);
    return value * Math.pow(10, exponent);
};