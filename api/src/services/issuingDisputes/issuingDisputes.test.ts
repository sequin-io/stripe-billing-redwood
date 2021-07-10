import { issuingDisputes } from './issuingDisputes'
import type { StandardScenario } from './issuingDisputes.scenarios'

describe('issuingDisputes', () => {
  scenario(
    'returns all issuingDisputes',
    async (scenario: StandardScenario) => {
      const result = await issuingDisputes()

      expect(result.length).toEqual(Object.keys(scenario.issuingDispute).length)
    }
  )
})
