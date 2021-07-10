# data-gov-gr-api-express
An unofficial GraphQL implementation of the data.gov.gr API


## Example Queries

```graphql
query {
  admie_dailyenergybalanceanalysis(query: {
    date_from: "2021-06-28",
    date_to: "2021-06-29"
  }) {
    energy_mwh
    fuel
    date
  }
}
```