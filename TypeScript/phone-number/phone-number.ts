export function clean(number: string): string {
  const hasLetters = /[a-zA-z]/
  const hasPunctuation = /[@:!]/
  const cleanNumber = number.replace(/\D/g, '')
  const noCountryCodeNum =
    cleanNumber.length > 10 ? cleanNumber.slice(1) : cleanNumber

  if (hasLetters.test(number)) {
    throw new Error('Letters not permitted')
  }

  if (hasPunctuation.test(number)) {
    throw new Error('Punctuations not permitted')
  }

  if (noCountryCodeNum.length === 10) {
    const firstChar = noCountryCodeNum.charAt(0)
    const fourthChar = noCountryCodeNum.charAt(3)
    if (firstChar === '0') {
      throw new Error('Area code cannot start with zero')
    }
    if (firstChar === '1') {
      throw new Error('Area code cannot start with one')
    }
    if (fourthChar === '0') {
      throw new Error('Exchange code cannot start with zero')
    }
    if (fourthChar === '1') {
      throw new Error('Exchange code cannot start with one')
    }
  }

  if (cleanNumber.length < 10) {
    throw new Error('Incorrect number of digits')
  }

  if (cleanNumber.length === 11) {
    if (cleanNumber.charAt(0) !== '1') {
      throw new Error('11 digits must start with 1')
    }
    return noCountryCodeNum
  }

  if (cleanNumber.length > 11) {
    throw new Error('More than 11 digits')
  }

  return cleanNumber
}
