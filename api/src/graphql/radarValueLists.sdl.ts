export const schema = gql`
  type RadarValueList {
    id: String!
    deleted: Boolean
    object: String
    alias: String
    created: DateTime
    created_by: String
    item_type: String
    livemode: Boolean
    metadata: JSON
    name: String
    radar_value_list_item: [RadarValueListItem]!
  }

  type Query {
    radarValueLists: [RadarValueList!]!
  }

  input CreateRadarValueListInput {
    deleted: Boolean
    object: String
    alias: String
    created: DateTime
    created_by: String
    item_type: String
    livemode: Boolean
    metadata: JSON
    name: String
  }

  input UpdateRadarValueListInput {
    deleted: Boolean
    object: String
    alias: String
    created: DateTime
    created_by: String
    item_type: String
    livemode: Boolean
    metadata: JSON
    name: String
  }
`
