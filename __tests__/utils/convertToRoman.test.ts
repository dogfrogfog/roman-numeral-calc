import convertToRoman from '@/utils/convertToRoman'

describe('Utility: convertToRoman', () => {
  test.each([[
    2018, 'MMXVIII',
    95, 'XCV',
    500, 'D',
    125, 'CXXV',
    1, 'I',
  ]])('should correctly convert numeric number to roman', (num, expectedRoman) => {
    expect(convertToRoman(num)).toBe(expectedRoman)
  })
})
