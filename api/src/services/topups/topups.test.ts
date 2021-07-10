import { topups } from './topups'
import type { StandardScenario } from './topups.scenarios'

describe('topups', () => {
  scenario('returns all topups', async (scenario: StandardScenario) => {
    const result = await topups()

    expect(result.length).toEqual(Object.keys(scenario.topup).length)
  })
})
