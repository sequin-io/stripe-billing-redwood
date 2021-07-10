import { billingPortalConfigurations } from './billingPortalConfigurations'
import type { StandardScenario } from './billingPortalConfigurations.scenarios'

describe('billingPortalConfigurations', () => {
  scenario(
    'returns all billingPortalConfigurations',
    async (scenario: StandardScenario) => {
      const result = await billingPortalConfigurations()

      expect(result.length).toEqual(
        Object.keys(scenario.billingPortalConfiguration).length
      )
    }
  )
})
