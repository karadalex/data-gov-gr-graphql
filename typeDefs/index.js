const gql = require('apollo-server-micro').gql
const admieDefs = require('./admieDefs')

const indexDefs = gql`
  scalar JSON
  scalar BigInt
  scalar Date

  type Query {
    admie_dailyenergybalanceanalysis(query: EnergyBalanceInput): [EnergyBalanceDataPoint],
    admie_realtimescadares(query: DateRangeInput): [RealtimeScada],
    admie_realtimescadasystemload(query: DateRangeInput): [RealtimeScada],
  }
`

module.exports = [
  indexDefs, admieDefs
]