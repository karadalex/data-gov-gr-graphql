data-gov-gr-graphql
=======================

An unofficial GraphQL implementation of the data.gov.gr API

## Getting Started

TODO


## Example Queries

Daily Energy Balance
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

Realtime SCADA data from Renewable Energy Sources
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

COVID-19 Vaccinations query
```graphql
query {
  mdg_emvolio(query: {
    date_from: "2021-07-01T00:00:00Z",
    date_to: "2021-07-10T23:00:00Z",
    area: "ΑΝΑΤΟΛΙΚΗΣ ΑΤΤΙΚΗΣ"
  }) {
    area
    totalvaccinations
    totaldose1
    totaldose2
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
- [x] admie_realtimescadasystemload
- [x] mdg_emvolio (Vaccination statistics)
- [x] electricity_consumption