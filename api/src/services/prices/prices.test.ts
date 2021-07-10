import { prices } from './prices'
import type { StandardScenario } from './prices.scenarios'

describe('prices', () => {
  scenario('returns all prices', async (scenario: StandardScenario) => {
    const result = await prices()

    expect(result.length).toEqual(Object.keys(scenario.price).length)
  })
})
