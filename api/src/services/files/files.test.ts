import { files } from './files'
import type { StandardScenario } from './files.scenarios'

describe('files', () => {
  scenario('returns all files', async (scenario: StandardScenario) => {
    const result = await files()

    expect(result.length).toEqual(Object.keys(scenario.file).length)
  })
})
