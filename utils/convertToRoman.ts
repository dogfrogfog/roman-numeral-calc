const ROMAN_NUMERALS: { [key: string]: number } = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
}

const convertToRoman = (num: number) => {
  return Object.entries(ROMAN_NUMERALS).reduce(
    (acc, [numeral, value]) => {
      while (num >= value) {
        acc += numeral;
        num -= value;
      }
      return acc;
    },
    ''
  )
}

export default convertToRoman;