const gql = require('apollo-server-micro').gql


module.exports = gql`
  input EnergyBalanceInput {
    date_from: String,
    date_to: String,
    fuel: String,
  }

  type EnergyBalanceDataPoint {
    energy_mwh: Int,
    percentage: Float,
    date: String,
    fuel: String,
  }
`