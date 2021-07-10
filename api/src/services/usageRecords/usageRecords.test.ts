import { usageRecords } from './usageRecords'
import type { StandardScenario } from './usageRecords.scenarios'

describe('usageRecords', () => {
  scenario('returns all usageRecords', async (scenario: StandardScenario) => {
    const result = await usageRecords()

    expect(result.length).toEqual(Object.keys(scenario.usageRecord).length)
  })
})
