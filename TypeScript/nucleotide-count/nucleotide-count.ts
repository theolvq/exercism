type Sequence = {
  [key: string]: number
}

export function nucleotideCounts(DNA: string): Sequence {
  const sequence = {
    A: 0,
    C: 0,
    G: 0,
    T: 0,
  } as Sequence

  ;[...DNA].forEach((letter) => {
    if (letter !== 'A' && letter !== 'G' && letter !== 'C' && letter !== 'T') {
      throw new Error('Invalid nucleotide in strand')
    }
    sequence[letter]++
  })
  return sequence
}
