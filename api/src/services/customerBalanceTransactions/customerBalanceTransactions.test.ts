import { customerBalanceTransactions } from './customerBalanceTransactions'
import type { StandardScenario } from './customerBalanceTransactions.scenarios'

describe('customerBalanceTransactions', () => {
  scenario(
    'returns all customerBalanceTransactions',
    async (scenario: StandardScenario) => {
      const result = await customerBalanceTransactions()

      expect(result.length).toEqual(
        Object.keys(scenario.customerBalanceTransaction).length
      )
    }
  )
})
