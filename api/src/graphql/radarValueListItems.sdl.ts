export const schema = gql`
  type RadarValueListItem {
    id: String!
    deleted: Boolean
    object: String
    created: DateTime
    created_by: String
    livemode: Boolean
    value: String
    value_list: String
    radar_value_list: RadarValueList
  }

  type Query {
    radarValueListItems: [RadarValueListItem!]!
  }

  input CreateRadarValueListItemInput {
    deleted: Boolean
    object: String
    created: DateTime
    created_by: String
    livemode: Boolean
    value: String
    value_list: String
  }

  input UpdateRadarValueListItemInput {
    deleted: Boolean
    object: String
    created: DateTime
    created_by: String
    livemode: Boolean
    value: String
    value_list: String
  }
`
