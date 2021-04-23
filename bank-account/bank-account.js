export class BankAccount {
  constructor() {
    this.active = false;
    this.bal = 0;
  }

  open() {
    if (this.active) throw new ValueError();
    this.bal = 0;
    this.active = true;
    return this;
  }

  close() {
    if (!this.active) throw new ValueError();
    this.active = false;
    return this;
  }

  deposit(amount) {
    if (!this.active || amount < 0) throw new ValueError();
    this.bal += amount;
    return this;
  }

  withdraw(amount) {
    if (this.bal < amount || amount < 0 || !this.active) throw new ValueError();
    this.bal -= amount;
    return this;
  }

  get balance() {
    if (!this.active) throw new ValueError();
    return this.bal;
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
