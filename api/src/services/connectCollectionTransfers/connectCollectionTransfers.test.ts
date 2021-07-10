import { connectCollectionTransfers } from './connectCollectionTransfers'
import type { StandardScenario } from './connectCollectionTransfers.scenarios'

describe('connectCollectionTransfers', () => {
  scenario(
    'returns all connectCollectionTransfers',
    async (scenario: StandardScenario) => {
      const result = await connectCollectionTransfers()

      expect(result.length).toEqual(
        Object.keys(scenario.connectCollectionTransfer).length
      )
    }
  )
})
