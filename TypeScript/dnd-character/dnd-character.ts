export class DnDCharacter {
  private _strength: number = DnDCharacter.generateAbilityScore()
  private _dexterity: number = DnDCharacter.generateAbilityScore()
  private _constitution: number = DnDCharacter.generateAbilityScore()
  private _intelligence: number = DnDCharacter.generateAbilityScore()
  private _wisdom: number = DnDCharacter.generateAbilityScore()
  private _charisma: number = DnDCharacter.generateAbilityScore()
  private _hitpoints: number =
    10 + DnDCharacter.getModifierFor(this._constitution)

  public static generateAbilityScore(): number {
    return Array.from({ length: 4 }, () => Math.floor(Math.random() * 6))
      .sort((a, b) => a - b)
      .slice(1)
      .reduce((a, b) => a + b)
  }

  public static getModifierFor(abilityValue: number): number {
    return Math.floor((abilityValue - 10) / 2)
  }

  public get strength(): number {
    return this._strength
  }
  public get dexterity(): number {
    return this._dexterity
  }
  public get constitution(): number {
    return this._constitution
  }
  public get intelligence(): number {
    return this._intelligence
  }
  public get wisdom(): number {
    return this._wisdom
  }
  public get charisma(): number {
    return this._charisma
  }

  public get hitpoints(): number {
    return this._hitpoints
  }
}
