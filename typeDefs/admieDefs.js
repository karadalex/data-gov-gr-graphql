const gql = require('apollo-server-micro').gql


module.exports = gql`
  input EnergyBalanceInput {
    date_from: Date,
    date_to: Date,
    fuel: String,
  }

  type EnergyBalanceDataPoint {
    energy_mwh: Int,
    percentage: Float,
    date: Date,
    fuel: String,
  }

  type RealtimeScada {
    date: Date,
    energy_mwh: Float
  }
`