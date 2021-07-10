import { issuerFraudRecords } from './issuerFraudRecords'
import type { StandardScenario } from './issuerFraudRecords.scenarios'

describe('issuerFraudRecords', () => {
  scenario(
    'returns all issuerFraudRecords',
    async (scenario: StandardScenario) => {
      const result = await issuerFraudRecords()

      expect(result.length).toEqual(
        Object.keys(scenario.issuerFraudRecord).length
      )
    }
  )
})
