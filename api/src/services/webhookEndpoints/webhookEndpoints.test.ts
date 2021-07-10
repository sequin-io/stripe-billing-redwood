import { webhookEndpoints } from './webhookEndpoints'
import type { StandardScenario } from './webhookEndpoints.scenarios'

describe('webhookEndpoints', () => {
  scenario(
    'returns all webhookEndpoints',
    async (scenario: StandardScenario) => {
      const result = await webhookEndpoints()

      expect(result.length).toEqual(
        Object.keys(scenario.webhookEndpoint).length
      )
    }
  )
})
