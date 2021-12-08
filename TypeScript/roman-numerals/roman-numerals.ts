type SPQR = [string, number]

const SPQArr: SPQR[] = [
  ['M', 1000],
  ['CM', 900],
  ['D', 500],
  ['CD', 400],
  ['C', 100],
  ['XC', 90],
  ['L', 50],
  ['XL', 40],
  ['X', 10],
  ['IX', 9],
  ['V', 5],
  ['IV', 4],
  ['I', 1],
]

export const toRoman = (n: number): string => {
  const romanNum = SPQArr.find(([_, value]) => n >= value)
  if (romanNum) {
    return romanNum[0] + toRoman(n - romanNum[1])
  }

  return ''
}
