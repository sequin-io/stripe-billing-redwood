import { reportingReportRuns } from './reportingReportRuns'
import type { StandardScenario } from './reportingReportRuns.scenarios'

describe('reportingReportRuns', () => {
  scenario(
    'returns all reportingReportRuns',
    async (scenario: StandardScenario) => {
      const result = await reportingReportRuns()

      expect(result.length).toEqual(
        Object.keys(scenario.reportingReportRun).length
      )
    }
  )
})
