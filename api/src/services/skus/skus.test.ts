import { skus } from './skus'
import type { StandardScenario } from './skus.scenarios'

describe('skus', () => {
  scenario('returns all skus', async (scenario: StandardScenario) => {
    const result = await skus()

    expect(result.length).toEqual(Object.keys(scenario.sku).length)
  })
})
