import { radarEarlyFraudWarnings } from './radarEarlyFraudWarnings'
import type { StandardScenario } from './radarEarlyFraudWarnings.scenarios'

describe('radarEarlyFraudWarnings', () => {
  scenario(
    'returns all radarEarlyFraudWarnings',
    async (scenario: StandardScenario) => {
      const result = await radarEarlyFraudWarnings()

      expect(result.length).toEqual(
        Object.keys(scenario.radarEarlyFraudWarning).length
      )
    }
  )
})
