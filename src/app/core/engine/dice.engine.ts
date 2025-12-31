export type DiceSides = 4 | 6 | 8 | 10 | 12 | 20 | 100

export type ModifierType = 'ADVANTAGE' | 'DISADVANTAGE' | 'BONUS' | 'PENALTY'

export interface Modifier {
  type: ModifierType
  value: number
  source?: string
}

export interface Dice {
  sides: DiceSides
  modifiers?: Modifier[]
}

export interface DiceResult {
  id: number
  sides: DiceSides
  roll: number
  modifiers: Modifier[]
  modifierTotal: number
  final: number
}

export class DiceEngine {

  constructor(
    private readonly rng: () => number = Math.random
  ) {}

  roll(dices: Dice[]): DiceResult[] {
    return dices.map((dice, index) => this.rollOne(dice, index + 1))
  }

  private rollOne(dice: Dice, id: number): DiceResult {

    const roll = Math.floor(this.rng() * dice.sides) + 1
    const modifiers = dice.modifiers ?? []

    const modifierTotal = modifiers.reduce((total, m) => {
      return (m.type === 'DISADVANTAGE' || m.type === 'PENALTY')
        ? total - m.value
        : total + m.value
    }, 0)

    return {
      id,
      sides: dice.sides,
      roll,
      modifiers,
      modifierTotal,
      final: roll + modifierTotal
    }
  }
}