const gql = require('apollo-server-micro').gql


module.exports = gql`
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