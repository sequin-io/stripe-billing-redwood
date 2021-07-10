import { cards } from './cards'
import type { StandardScenario } from './cards.scenarios'

describe('cards', () => {
  scenario('returns all cards', async (scenario: StandardScenario) => {
    const result = await cards()

    expect(result.length).toEqual(Object.keys(scenario.card).length)
  })
})
