const DNA = {
  G: `C`,
  C: `G`,
  T: `A`,
  A: `U`,
} as const

type DNACodon = keyof typeof DNA

function isValidCodon(value: string): value is DNACodon {
  return value in DNA
}

function validateSequence(values: string[]): asserts values is DNACodon[] {
  if (!values.every(isValidCodon)) {
    throw Error('Invalid input DNA.')
  }
}

export function toRna(dna: string): string {
  const codons = [...dna]
  validateSequence(codons)
  return codons.map((el) => DNA[el]).join('')
}
