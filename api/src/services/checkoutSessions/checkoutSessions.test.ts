import { checkoutSessions } from './checkoutSessions'
import type { StandardScenario } from './checkoutSessions.scenarios'

describe('checkoutSessions', () => {
  scenario(
    'returns all checkoutSessions',
    async (scenario: StandardScenario) => {
      const result = await checkoutSessions()

      expect(result.length).toEqual(
        Object.keys(scenario.checkoutSession).length
      )
    }
  )
})
