import { bitcoinTransactions } from './bitcoinTransactions'
import type { StandardScenario } from './bitcoinTransactions.scenarios'

describe('bitcoinTransactions', () => {
  scenario(
    'returns all bitcoinTransactions',
    async (scenario: StandardScenario) => {
      const result = await bitcoinTransactions()

      expect(result.length).toEqual(
        Object.keys(scenario.bitcoinTransaction).length
      )
    }
  )
})
