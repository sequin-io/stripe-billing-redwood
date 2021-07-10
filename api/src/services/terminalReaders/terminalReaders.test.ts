import { terminalReaders } from './terminalReaders'
import type { StandardScenario } from './terminalReaders.scenarios'

describe('terminalReaders', () => {
  scenario(
    'returns all terminalReaders',
    async (scenario: StandardScenario) => {
      const result = await terminalReaders()

      expect(result.length).toEqual(Object.keys(scenario.terminalReader).length)
    }
  )
})
