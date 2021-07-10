import { sourceMandateNotifications } from './sourceMandateNotifications'
import type { StandardScenario } from './sourceMandateNotifications.scenarios'

describe('sourceMandateNotifications', () => {
  scenario(
    'returns all sourceMandateNotifications',
    async (scenario: StandardScenario) => {
      const result = await sourceMandateNotifications()

      expect(result.length).toEqual(
        Object.keys(scenario.sourceMandateNotification).length
      )
    }
  )
})
