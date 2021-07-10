import { applicationFees } from './applicationFees'
import type { StandardScenario } from './applicationFees.scenarios'

describe('applicationFees', () => {
  scenario(
    'returns all applicationFees',
    async (scenario: StandardScenario) => {
      const result = await applicationFees()

      expect(result.length).toEqual(Object.keys(scenario.applicationFee).length)
    }
  )
})
