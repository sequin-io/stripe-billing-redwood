import { subscriptionItems } from './subscriptionItems'
import type { StandardScenario } from './subscriptionItems.scenarios'

describe('subscriptionItems', () => {
  scenario(
    'returns all subscriptionItems',
    async (scenario: StandardScenario) => {
      const result = await subscriptionItems()

      expect(result.length).toEqual(
        Object.keys(scenario.subscriptionItem).length
      )
    }
  )
})
