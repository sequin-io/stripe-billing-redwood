import { coupons } from './coupons'
import type { StandardScenario } from './coupons.scenarios'

describe('coupons', () => {
  scenario('returns all coupons', async (scenario: StandardScenario) => {
    const result = await coupons()

    expect(result.length).toEqual(Object.keys(scenario.coupon).length)
  })
})
