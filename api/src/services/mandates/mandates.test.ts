import { mandates } from './mandates'
import type { StandardScenario } from './mandates.scenarios'

describe('mandates', () => {
  scenario('returns all mandates', async (scenario: StandardScenario) => {
    const result = await mandates()

    expect(result.length).toEqual(Object.keys(scenario.mandate).length)
  })
})
