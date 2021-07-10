import { subscriptionSchedules } from './subscriptionSchedules'
import type { StandardScenario } from './subscriptionSchedules.scenarios'

describe('subscriptionSchedules', () => {
  scenario(
    'returns all subscriptionSchedules',
    async (scenario: StandardScenario) => {
      const result = await subscriptionSchedules()

      expect(result.length).toEqual(
        Object.keys(scenario.subscriptionSchedule).length
      )
    }
  )
})
