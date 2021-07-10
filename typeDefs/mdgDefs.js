const gql = require("apollo-server-micro").gql;

module.exports = gql`
  input VaccinationQuery {
    date_from: Date,
    date_to: Date,
    area: String
  }

  type VaccinationDataPoint {
    area: String,
    areaid: Int,
    dailydose1: Int,
    dailydose2: Int,
    daydiff: Int,
    daytotal: Int,
    referencedate: Date,
    totaldistinctpersons: Int,
    totaldose1: Int,
    totaldose2: Int,
    totalvaccinations: Int
  }
`;
