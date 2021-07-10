import { products } from './products'
import type { StandardScenario } from './products.scenarios'

describe('products', () => {
  scenario('returns all products', async (scenario: StandardScenario) => {
    const result = await products()

    expect(result.length).toEqual(Object.keys(scenario.product).length)
  })
})
