import { subscriptions } from './subscriptions'
import type { StandardScenario } from './subscriptions.scenarios'

describe('subscriptions', () => {
  scenario('returns all subscriptions', async (scenario: StandardScenario) => {
    const result = await subscriptions()

    expect(result.length).toEqual(Object.keys(scenario.subscription).length)
  })
})
