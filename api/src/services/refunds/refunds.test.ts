import { refunds } from './refunds'
import type { StandardScenario } from './refunds.scenarios'

describe('refunds', () => {
  scenario('returns all refunds', async (scenario: StandardScenario) => {
    const result = await refunds()

    expect(result.length).toEqual(Object.keys(scenario.refund).length)
  })
})
