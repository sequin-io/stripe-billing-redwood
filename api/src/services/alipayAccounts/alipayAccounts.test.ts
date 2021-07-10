import { alipayAccounts } from './alipayAccounts'
import type { StandardScenario } from './alipayAccounts.scenarios'

describe('alipayAccounts', () => {
  scenario('returns all alipayAccounts', async (scenario: StandardScenario) => {
    const result = await alipayAccounts()

    expect(result.length).toEqual(Object.keys(scenario.alipayAccount).length)
  })
})
