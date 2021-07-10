import { transfers } from './transfers'
import type { StandardScenario } from './transfers.scenarios'

describe('transfers', () => {
  scenario('returns all transfers', async (scenario: StandardScenario) => {
    const result = await transfers()

    expect(result.length).toEqual(Object.keys(scenario.transfer).length)
  })
})
