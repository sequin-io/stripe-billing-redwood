import { platformTaxFees } from './platformTaxFees'
import type { StandardScenario } from './platformTaxFees.scenarios'

describe('platformTaxFees', () => {
  scenario(
    'returns all platformTaxFees',
    async (scenario: StandardScenario) => {
      const result = await platformTaxFees()

      expect(result.length).toEqual(Object.keys(scenario.platformTaxFee).length)
    }
  )
})
