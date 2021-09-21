export const abilityModifier = score => {
  if (score < 3) throw new Error('Ability scores must be at least 3');
  if (score > 18) throw new Error('Ability scores can be at most 18');
  return Math.floor((score - 10) / 2);
};

export class Character {
  static rollAbility() {
    return Array.from({ length: 4 }, () => Math.ceil(Math.random() * 6))
      .sort((a, b) => a - b)
      .slice(1)
      .reduce((a, b) => a + b);
  }

  get strength() {
    return Character.rollAbility();
  }

  get dexterity() {
    return Character.rollAbility();
  }

  get constitution() {
    return Character.rollAbility();
  }

  get intelligence() {
    return Character.rollAbility();
  }

  get wisdom() {
    return Character.rollAbility();
  }

  get charisma() {
    return Character.rollAbility();
  }

  get hitpoints() {
    return 10 + abilityModifier(this.constitution);
  }
}
