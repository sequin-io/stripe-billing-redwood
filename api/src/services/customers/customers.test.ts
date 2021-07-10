import { customers } from './customers'
import type { StandardScenario } from './customers.scenarios'

describe('customers', () => {
  scenario('returns all customers', async (scenario: StandardScenario) => {
    const result = await customers()

    expect(result.length).toEqual(Object.keys(scenario.customer).length)
  })
})
