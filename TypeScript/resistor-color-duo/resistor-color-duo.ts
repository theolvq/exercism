const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
]

export const decodedValue = (params: string[]): number =>
  COLORS.indexOf(params[0]) * 10 + COLORS.indexOf(params[1])
