import { issuingCardholders } from './issuingCardholders'
import type { StandardScenario } from './issuingCardholders.scenarios'

describe('issuingCardholders', () => {
  scenario(
    'returns all issuingCardholders',
    async (scenario: StandardScenario) => {
      const result = await issuingCardholders()

      expect(result.length).toEqual(
        Object.keys(scenario.issuingCardholder).length
      )
    }
  )
})
