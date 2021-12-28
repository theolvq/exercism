export class DiffieHellman {
  _p: number
  _g: number
  constructor(p: number, g: number) {
    if (!this.isPrime(p) || !this.isPrime(g)) {
      throw new Error()
    }
    this._p = p
    this._g = g
  }

  private isPrime(n: number): boolean {
    for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
      if (n % i === 0) {
        return false
      }
    }
    return n > 1
  }

  public getPublicKey(privateKey: number): number {
    if (privateKey <= 1 || privateKey >= this._p) {
      throw new Error()
    }
    return this._g ** privateKey % this._p
  }

  public getSecret(theirPublicKey: number, myPrivateKey: number): number {
    return theirPublicKey ** myPrivateKey % this._p
  }
}
