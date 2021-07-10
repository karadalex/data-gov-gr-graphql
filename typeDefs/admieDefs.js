const gql = require('apollo-server-micro').gql


module.exports = gql`
  input EnergyBalanceInput {
    date_from: Date,
    date_to: Date,
    fuel: String,
  }

  input DateRangeInput {
    date_from: Date,
    date_to: Date,
  }

  type EnergyBalanceDataPoint {
    energy_mwh: Int,
    percentage: Float,
    date: Date,
    fuel: String,
  }

  type RealtimeScadaRES {
    date: Date,
    energy_mwh: Float
  }
`