import { taxDeductedAtSources } from './taxDeductedAtSources'
import type { StandardScenario } from './taxDeductedAtSources.scenarios'

describe('taxDeductedAtSources', () => {
  scenario(
    'returns all taxDeductedAtSources',
    async (scenario: StandardScenario) => {
      const result = await taxDeductedAtSources()

      expect(result.length).toEqual(
        Object.keys(scenario.taxDeductedAtSource).length
      )
    }
  )
})
