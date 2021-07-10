import { payouts } from './payouts'
import type { StandardScenario } from './payouts.scenarios'

describe('payouts', () => {
  scenario('returns all payouts', async (scenario: StandardScenario) => {
    const result = await payouts()

    expect(result.length).toEqual(Object.keys(scenario.payout).length)
  })
})
