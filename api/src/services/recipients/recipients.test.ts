import { recipients } from './recipients'
import type { StandardScenario } from './recipients.scenarios'

describe('recipients', () => {
  scenario('returns all recipients', async (scenario: StandardScenario) => {
    const result = await recipients()

    expect(result.length).toEqual(Object.keys(scenario.recipient).length)
  })
})
