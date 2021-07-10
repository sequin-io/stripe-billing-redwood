import { plans } from './plans'
import type { StandardScenario } from './plans.scenarios'

describe('plans', () => {
  scenario('returns all plans', async (scenario: StandardScenario) => {
    const result = await plans()

    expect(result.length).toEqual(Object.keys(scenario.plan).length)
  })
})
