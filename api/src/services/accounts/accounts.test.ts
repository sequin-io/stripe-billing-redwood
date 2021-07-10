import { accounts } from './accounts'
import type { StandardScenario } from './accounts.scenarios'

describe('accounts', () => {
  scenario('returns all accounts', async (scenario: StandardScenario) => {
    const result = await accounts()

    expect(result.length).toEqual(Object.keys(scenario.account).length)
  })
})
