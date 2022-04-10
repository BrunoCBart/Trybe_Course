// const measureNames: any = {
//   km: 'kilometers',
//   hm: 'hectometers',
//   dam: 'decameters',
//   m: 'meters',
//   dm: 'decimeters',
//   cm: 'centimeters',
//   mm: 'milimeters'
// }

const unities: any = ['km', 'hm', 'dam', 'm', 'cm', 'mm']

const convert = (value: number, forUnity: string, toUnity: string): number => {
  const forIndex = unities.indexOf(forUnity)
  const toIndex = unities.indexOf(toUnity)
  const exponent = (forIndex - toIndex)
  return value * 10 ** exponent 
}
