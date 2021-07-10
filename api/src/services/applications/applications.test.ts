import { applications } from './applications'
import type { StandardScenario } from './applications.scenarios'

describe('applications', () => {
  scenario('returns all applications', async (scenario: StandardScenario) => {
    const result = await applications()

    expect(result.length).toEqual(Object.keys(scenario.application).length)
  })
})
