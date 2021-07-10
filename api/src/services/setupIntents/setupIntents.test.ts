import { setupIntents } from './setupIntents'
import type { StandardScenario } from './setupIntents.scenarios'

describe('setupIntents', () => {
  scenario('returns all setupIntents', async (scenario: StandardScenario) => {
    const result = await setupIntents()

    expect(result.length).toEqual(Object.keys(scenario.setupIntent).length)
  })
})
