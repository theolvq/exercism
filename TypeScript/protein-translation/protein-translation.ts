interface DNA {
  [key: string]: string
}

const mapping = {
  AUG: 'Methionine',
  UUU: 'Phenylalanine',
  UUC: 'Phenylalanine',
  UUA: 'Leucine',
  UUG: 'Leucine',
  UCU: 'Serine',
  UCC: 'Serine',
  UCA: 'Serine',
  UCG: 'Serine',
  UAU: 'Tyrosine',
  UAC: 'Tyrosine',
  UGU: 'Cysteine',
  UGC: 'Cysteine',
  UGG: 'Tryptophan',
  UAA: 'STOP',
  UAG: 'STOP',
  UGA: 'STOP',
} as DNA

export function translate(RNA: string): string[] {
  const codons = RNA.match(/\w{3}/g)
  const protein = []
  if (codons) {
    for (const codon of codons) {
      if (mapping[codon] === 'STOP') {
        break
      }
      protein.push(mapping[codon])
    }
  }
  return protein
}
