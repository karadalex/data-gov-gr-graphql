const gql = require('apollo-server-micro').gql

const indexDefs = gql`
  scalar JSON
  scalar BigInt
  scalar Date

  type Query {
    admie_dailyenergybalanceanalysis(query: EnergyBalanceInput): [EnergyBalanceDataPoint]
  }

  input EnergyBalanceInput {
    from_date: String,
    to_date: String,
    fuel: String,
  }

  type EnergyBalanceDataPoint {
    energy_mwh: Int,
    percentage: Float,
    date: String,
    fuel: String,
  }
`

module.exports = [
  indexDefs
]