import { reserveTransactions } from './reserveTransactions'
import type { StandardScenario } from './reserveTransactions.scenarios'

describe('reserveTransactions', () => {
  scenario(
    'returns all reserveTransactions',
    async (scenario: StandardScenario) => {
      const result = await reserveTransactions()

      expect(result.length).toEqual(
        Object.keys(scenario.reserveTransaction).length
      )
    }
  )
})
