import { billingPortalSessions } from './billingPortalSessions'
import type { StandardScenario } from './billingPortalSessions.scenarios'

describe('billingPortalSessions', () => {
  scenario(
    'returns all billingPortalSessions',
    async (scenario: StandardScenario) => {
      const result = await billingPortalSessions()

      expect(result.length).toEqual(
        Object.keys(scenario.billingPortalSession).length
      )
    }
  )
})
