import { feeRefunds } from './feeRefunds'
import type { StandardScenario } from './feeRefunds.scenarios'

describe('feeRefunds', () => {
  scenario('returns all feeRefunds', async (scenario: StandardScenario) => {
    const result = await feeRefunds()

    expect(result.length).toEqual(Object.keys(scenario.feeRefund).length)
  })
})
