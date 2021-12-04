type Input = { [key: string]: string[] }
type Output = { [key: string]: number }
export function transform(input: Input): Output {
  let result = {} as Output
  for (const [key, value] of Object.entries(input)) {
    value.forEach((el) => {
      result[el.toLowerCase()] = Number(key)
    })
  }

  return result
}
