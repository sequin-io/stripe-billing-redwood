import { capabilities } from './capabilities'
import type { StandardScenario } from './capabilities.scenarios'

describe('capabilities', () => {
  scenario('returns all capabilities', async (scenario: StandardScenario) => {
    const result = await capabilities()

    expect(result.length).toEqual(Object.keys(scenario.capability).length)
  })
})
