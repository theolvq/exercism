const formatString = (str: string) =>
  str
    .split(/\s|[-]/)
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join('')

export function parse(phrase: string): string {
  console.log(formatString(phrase))
  return formatString(phrase).match(/[A-Z]/g).join('')
}
