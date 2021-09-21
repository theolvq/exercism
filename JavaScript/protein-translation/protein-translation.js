const mapping = {
  AUG: 'Methionine',
  UUU: 'Phenylalanine',
  UUC: 'Phenylalanine',
  UUG: 'Leucine',
  UUA: 'Leucine',
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
};

export const translate = RNA => {
  const proteins = [];
  const codons = RNA ? RNA.match(/.{1,3}/g) : [];
  for (const el of codons) {
    if (!mapping[el]) throw new Error('Invalid codon');
    else if (mapping[el] === 'STOP') return proteins;
    else proteins.push(mapping[el]);
  }

  return proteins;
};
