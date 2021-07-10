import { transferReversals } from './transferReversals'
import type { StandardScenario } from './transferReversals.scenarios'

describe('transferReversals', () => {
  scenario(
    'returns all transferReversals',
    async (scenario: StandardScenario) => {
      const result = await transferReversals()

      expect(result.length).toEqual(
        Object.keys(scenario.transferReversal).length
      )
    }
  )
})
