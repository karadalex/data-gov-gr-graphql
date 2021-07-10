const gql = require('apollo-server-micro').gql
const admieDefs = require('./admieDefs')
const mdgDefs = require('./mdgDefs')

const indexDefs = gql`
  scalar JSON
  scalar BigInt
  scalar Date

  type Query {
    # ADMIE
    admie_dailyenergybalanceanalysis(query: EnergyBalanceInput): [EnergyBalanceDataPoint],
    admie_realtimescadares(query: DateRangeInput): [RealtimeScada],
    admie_realtimescadasystemload(query: DateRangeInput): [RealtimeScada],

    # MDG
    mdg_emvolio(query: VaccinationQuery): [VaccinationDataPoint]
  }
`

module.exports = [
  indexDefs, admieDefs, mdgDefs
]