import { charges } from './charges'
import type { StandardScenario } from './charges.scenarios'

describe('charges', () => {
  scenario('returns all charges', async (scenario: StandardScenario) => {
    const result = await charges()

    expect(result.length).toEqual(Object.keys(scenario.charge).length)
  })
})
