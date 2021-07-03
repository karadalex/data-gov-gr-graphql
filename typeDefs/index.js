const gql = require('apollo-server-micro').gql
const coinsDefs = require('./coinsDefs')

const indexDefs = gql`
  scalar JSON
  scalar BigInt

  type Query {
    admie_dailyenergybalanceanalysis: [EnergyBalanceDataPoint]
  }
`

module.exports = [
  indexDefs, coinsDefs
]