data-gov-gr-api-express
=======================

An unofficial GraphQL implementation of the data.gov.gr API

## Getting Started

TODO


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

```graphql
query {
  admie_realtimescadares(query: {
    date_from: "2021-06-29T00:00:00Z",
    date_to: "2021-06-30T23:00:00Z"
  }) {
    energy_mwh
  }
}
```

## Features

- [x] Apollo GraphQL Server
- [x] NextJS example
- [ ] ExpressJS example
- [ ] FastifyJS example
- [ ] API Caching

## Datasets supported

- [x] admie_dailyenergybalanceanalysis
- [x] admie_realtimescadares
- [ ] admie_realtimescadasystemload