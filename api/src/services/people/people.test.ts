import { people } from './people'
import type { StandardScenario } from './people.scenarios'

describe('people', () => {
  scenario('returns all people', async (scenario: StandardScenario) => {
    const result = await people()

    expect(result.length).toEqual(Object.keys(scenario.person).length)
  })
})
