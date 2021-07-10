import { bitcoinReceivers } from './bitcoinReceivers'
import type { StandardScenario } from './bitcoinReceivers.scenarios'

describe('bitcoinReceivers', () => {
  scenario(
    'returns all bitcoinReceivers',
    async (scenario: StandardScenario) => {
      const result = await bitcoinReceivers()

      expect(result.length).toEqual(
        Object.keys(scenario.bitcoinReceiver).length
      )
    }
  )
})
