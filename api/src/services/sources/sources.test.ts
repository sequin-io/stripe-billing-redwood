import { sources } from './sources'
import type { StandardScenario } from './sources.scenarios'

describe('sources', () => {
  scenario('returns all sources', async (scenario: StandardScenario) => {
    const result = await sources()

    expect(result.length).toEqual(Object.keys(scenario.source).length)
  })
})
