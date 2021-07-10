import { setupAttempts } from './setupAttempts'
import type { StandardScenario } from './setupAttempts.scenarios'

describe('setupAttempts', () => {
  scenario('returns all setupAttempts', async (scenario: StandardScenario) => {
    const result = await setupAttempts()

    expect(result.length).toEqual(Object.keys(scenario.setupAttempt).length)
  })
})
