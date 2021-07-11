const gql = require('apollo-server-micro').gql


module.exports = gql`
  type ElectricityConsumption {
    energy_mwh: Float,
    date: Date,
    area: String,
  }
`