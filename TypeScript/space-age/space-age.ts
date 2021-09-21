const ORBITAL_PERIODS = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 1.0,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
} as const

type planets = keyof typeof ORBITAL_PERIODS

//  Earth years, 365.25 Earth days, or 31557600 seconds

export const age = (planet: string, seconds: number): number =>
  Math.round(
    (seconds / (ORBITAL_PERIODS[planet as planets] * 31557600)) * 100
  ) / 100
