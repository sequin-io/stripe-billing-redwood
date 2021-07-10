import { reportingReportTypes } from './reportingReportTypes'
import type { StandardScenario } from './reportingReportTypes.scenarios'

describe('reportingReportTypes', () => {
  scenario(
    'returns all reportingReportTypes',
    async (scenario: StandardScenario) => {
      const result = await reportingReportTypes()

      expect(result.length).toEqual(
        Object.keys(scenario.reportingReportType).length
      )
    }
  )
})
