const gql = require('apollo-server-micro').gql
const admieDefs = require('./admieDefs')

const indexDefs = gql`
  scalar JSON
  scalar BigInt
  scalar Date

  type Query {
    admie_dailyenergybalanceanalysis(query: EnergyBalanceInput): [EnergyBalanceDataPoint],
    admie_realtimescadares(query: DateRangeInput): [RealtimeScadaRES]
  }
`

module.exports = [
  indexDefs, admieDefs
]