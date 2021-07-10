import { lineItems } from './lineItems'
import type { StandardScenario } from './lineItems.scenarios'

describe('lineItems', () => {
  scenario('returns all lineItems', async (scenario: StandardScenario) => {
    const result = await lineItems()

    expect(result.length).toEqual(Object.keys(scenario.lineItem).length)
  })
})
