import { scheduledQueryRuns } from './scheduledQueryRuns'
import type { StandardScenario } from './scheduledQueryRuns.scenarios'

describe('scheduledQueryRuns', () => {
  scenario(
    'returns all scheduledQueryRuns',
    async (scenario: StandardScenario) => {
      const result = await scheduledQueryRuns()

      expect(result.length).toEqual(
        Object.keys(scenario.scheduledQueryRun).length
      )
    }
  )
})
