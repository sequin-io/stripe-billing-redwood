import { usageRecordSummaries } from './usageRecordSummaries'
import type { StandardScenario } from './usageRecordSummaries.scenarios'

describe('usageRecordSummaries', () => {
  scenario(
    'returns all usageRecordSummaries',
    async (scenario: StandardScenario) => {
      const result = await usageRecordSummaries()

      expect(result.length).toEqual(
        Object.keys(scenario.usageRecordSummary).length
      )
    }
  )
})
