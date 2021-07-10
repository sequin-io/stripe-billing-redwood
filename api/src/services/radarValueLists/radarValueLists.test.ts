import { radarValueLists } from './radarValueLists'
import type { StandardScenario } from './radarValueLists.scenarios'

describe('radarValueLists', () => {
  scenario(
    'returns all radarValueLists',
    async (scenario: StandardScenario) => {
      const result = await radarValueLists()

      expect(result.length).toEqual(Object.keys(scenario.radarValueList).length)
    }
  )
})
