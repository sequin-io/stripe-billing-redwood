import { taxRates } from './taxRates'
import type { StandardScenario } from './taxRates.scenarios'

describe('taxRates', () => {
  scenario('returns all taxRates', async (scenario: StandardScenario) => {
    const result = await taxRates()

    expect(result.length).toEqual(Object.keys(scenario.taxRate).length)
  })
})
