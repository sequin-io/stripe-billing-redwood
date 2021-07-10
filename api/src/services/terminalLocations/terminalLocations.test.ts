import { terminalLocations } from './terminalLocations'
import type { StandardScenario } from './terminalLocations.scenarios'

describe('terminalLocations', () => {
  scenario(
    'returns all terminalLocations',
    async (scenario: StandardScenario) => {
      const result = await terminalLocations()

      expect(result.length).toEqual(
        Object.keys(scenario.terminalLocation).length
      )
    }
  )
})
