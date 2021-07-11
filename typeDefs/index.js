const gql = require('apollo-server-micro').gql
const admieDefs = require('./admieDefs')
const dedieDefs = require('./dedieDefs')
const mdgDefs = require('./mdgDefs')

const indexDefs = gql`
  scalar JSON
  scalar BigInt
  scalar Date

  input DateRangeInput {
    date_from: Date,
    date_to: Date,
  }

  input DateRangeAreaQuery {
    date_from: Date,
    date_to: Date,
    area: String
  }

  type Query {
    # ADMIE
    admie_dailyenergybalanceanalysis(query: EnergyBalanceInput): [EnergyBalanceDataPoint],
    admie_realtimescadares(query: DateRangeInput): [RealtimeScada],
    admie_realtimescadasystemload(query: DateRangeInput): [RealtimeScada],

    # MDG
    mdg_emvolio(query: DateRangeAreaQuery): [VaccinationDataPoint]

    # DEDIE
    electricity_consumption(query: DateRangeAreaQuery): [ElectricityConsumption]
  }
`

module.exports = [
  indexDefs, admieDefs, mdgDefs, dedieDefs
]