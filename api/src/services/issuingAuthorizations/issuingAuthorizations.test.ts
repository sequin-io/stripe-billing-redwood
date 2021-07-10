import { issuingAuthorizations } from './issuingAuthorizations'
import type { StandardScenario } from './issuingAuthorizations.scenarios'

describe('issuingAuthorizations', () => {
  scenario(
    'returns all issuingAuthorizations',
    async (scenario: StandardScenario) => {
      const result = await issuingAuthorizations()

      expect(result.length).toEqual(
        Object.keys(scenario.issuingAuthorization).length
      )
    }
  )
})
