import { discounts } from './discounts'
import type { StandardScenario } from './discounts.scenarios'

describe('discounts', () => {
  scenario('returns all discounts', async (scenario: StandardScenario) => {
    const result = await discounts()

    expect(result.length).toEqual(Object.keys(scenario.discount).length)
  })
})
