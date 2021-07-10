import { issuingTransactions } from './issuingTransactions'
import type { StandardScenario } from './issuingTransactions.scenarios'

describe('issuingTransactions', () => {
  scenario(
    'returns all issuingTransactions',
    async (scenario: StandardScenario) => {
      const result = await issuingTransactions()

      expect(result.length).toEqual(
        Object.keys(scenario.issuingTransaction).length
      )
    }
  )
})
