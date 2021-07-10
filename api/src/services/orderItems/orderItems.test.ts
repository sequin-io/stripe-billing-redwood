import { orderItems } from './orderItems'
import type { StandardScenario } from './orderItems.scenarios'

describe('orderItems', () => {
  scenario('returns all orderItems', async (scenario: StandardScenario) => {
    const result = await orderItems()

    expect(result.length).toEqual(Object.keys(scenario.orderItem).length)
  })
})
