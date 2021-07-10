import { balanceTransactions } from './balanceTransactions'
import type { StandardScenario } from './balanceTransactions.scenarios'

describe('balanceTransactions', () => {
  scenario(
    'returns all balanceTransactions',
    async (scenario: StandardScenario) => {
      const result = await balanceTransactions()

      expect(result.length).toEqual(
        Object.keys(scenario.balanceTransaction).length
      )
    }
  )
})
