import { radarValueListItems } from './radarValueListItems'
import type { StandardScenario } from './radarValueListItems.scenarios'

describe('radarValueListItems', () => {
  scenario(
    'returns all radarValueListItems',
    async (scenario: StandardScenario) => {
      const result = await radarValueListItems()

      expect(result.length).toEqual(
        Object.keys(scenario.radarValueListItem).length
      )
    }
  )
})
