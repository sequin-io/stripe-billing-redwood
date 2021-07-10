import { threeDSecures } from './threeDSecures'
import type { StandardScenario } from './threeDSecures.scenarios'

describe('threeDSecures', () => {
  scenario('returns all threeDSecures', async (scenario: StandardScenario) => {
    const result = await threeDSecures()

    expect(result.length).toEqual(Object.keys(scenario.threeDSecure).length)
  })
})
