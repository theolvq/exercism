const nucleotides = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U',
};

export const toRna = DNA =>
  typeof DNA === 'string' ? [...DNA].map(el => nucleotides[el]).join('') : '';
