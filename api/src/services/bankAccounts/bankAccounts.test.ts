import { bankAccounts } from './bankAccounts'
import type { StandardScenario } from './bankAccounts.scenarios'

describe('bankAccounts', () => {
  scenario('returns all bankAccounts', async (scenario: StandardScenario) => {
    const result = await bankAccounts()

    expect(result.length).toEqual(Object.keys(scenario.bankAccount).length)
  })
})
