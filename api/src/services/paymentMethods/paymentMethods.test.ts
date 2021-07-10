import { paymentMethods } from './paymentMethods'
import type { StandardScenario } from './paymentMethods.scenarios'

describe('paymentMethods', () => {
  scenario('returns all paymentMethods', async (scenario: StandardScenario) => {
    const result = await paymentMethods()

    expect(result.length).toEqual(Object.keys(scenario.paymentMethod).length)
  })
})
