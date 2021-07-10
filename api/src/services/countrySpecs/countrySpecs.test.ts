import { countrySpecs } from './countrySpecs'
import type { StandardScenario } from './countrySpecs.scenarios'

describe('countrySpecs', () => {
  scenario('returns all countrySpecs', async (scenario: StandardScenario) => {
    const result = await countrySpecs()

    expect(result.length).toEqual(Object.keys(scenario.countrySpec).length)
  })
})
