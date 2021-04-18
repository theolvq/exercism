export class NucleotideCounts {
  static parse(DNA) {
    this.a = 0;
    this.c = 0;
    this.g = 0;
    this.t = 0;
    this.DNA = DNA;
    this.DNA.split('').map(el => {
      switch (el) {
        case 'A':
          this.a++;
          break;
        case 'C':
          this.c++;
          break;
        case 'G':
          this.g++;
          break;
        case 'T':
          this.t++;
          break;
        default:
          throw new Error('Invalid nucleotide in strand');
      }
    });
    return `${this.a} ${this.c} ${this.g} ${this.t}`;
  }
}
