import { taxIds } from './taxIds'
import type { StandardScenario } from './taxIds.scenarios'

describe('taxIds', () => {
  scenario('returns all taxIds', async (scenario: StandardScenario) => {
    const result = await taxIds()

    expect(result.length).toEqual(Object.keys(scenario.taxId).length)
  })
})
