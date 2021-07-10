import { disputes } from './disputes'
import type { StandardScenario } from './disputes.scenarios'

describe('disputes', () => {
  scenario('returns all disputes', async (scenario: StandardScenario) => {
    const result = await disputes()

    expect(result.length).toEqual(Object.keys(scenario.dispute).length)
  })
})
