import { paymentIntents } from './paymentIntents'
import type { StandardScenario } from './paymentIntents.scenarios'

describe('paymentIntents', () => {
  scenario('returns all paymentIntents', async (scenario: StandardScenario) => {
    const result = await paymentIntents()

    expect(result.length).toEqual(Object.keys(scenario.paymentIntent).length)
  })
})
