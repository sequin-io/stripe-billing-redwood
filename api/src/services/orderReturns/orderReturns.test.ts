import { orderReturns } from './orderReturns'
import type { StandardScenario } from './orderReturns.scenarios'

describe('orderReturns', () => {
  scenario('returns all orderReturns', async (scenario: StandardScenario) => {
    const result = await orderReturns()

    expect(result.length).toEqual(Object.keys(scenario.orderReturn).length)
  })
})
