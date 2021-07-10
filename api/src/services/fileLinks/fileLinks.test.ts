import { fileLinks } from './fileLinks'
import type { StandardScenario } from './fileLinks.scenarios'

describe('fileLinks', () => {
  scenario('returns all fileLinks', async (scenario: StandardScenario) => {
    const result = await fileLinks()

    expect(result.length).toEqual(Object.keys(scenario.fileLink).length)
  })
})
