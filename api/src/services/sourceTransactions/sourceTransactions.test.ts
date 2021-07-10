import { sourceTransactions } from './sourceTransactions'
import type { StandardScenario } from './sourceTransactions.scenarios'

describe('sourceTransactions', () => {
  scenario(
    'returns all sourceTransactions',
    async (scenario: StandardScenario) => {
      const result = await sourceTransactions()

      expect(result.length).toEqual(
        Object.keys(scenario.sourceTransaction).length
      )
    }
  )
})
