module.exports = {
  Query: {
    admie_dailyenergybalanceanalysis: (parent, args, context) => {
      let data = [
        {
          energy_mwh: 15143,
          percentage: 0.09381989405532666,
          date: "2021-06-28T00:00:00Z",
          fuel: "ΛΙΓΝΙΤΗΣ",
        },
        {
          energy_mwh: 87982,
          percentage: 0.5451008333075184,
          date: "2021-06-28T00:00:00Z",
          fuel: "ΑΕΡΙΟ",
        },
        {
          energy_mwh: 19800,
          percentage: 0.12267277965366624,
          date: "2021-06-28T00:00:00Z",
          fuel: "ΥΔΡΟΗΛΕΚΤΡΙΚΑ",
        },
        {
          energy_mwh: 9925,
          percentage: 0.061491279700133204,
          date: "2021-06-28T00:00:00Z",
          fuel: "ΑΙΟΛΙΚΑ",
        },
        {
          energy_mwh: 28555,
          percentage: 0.17691521328335552,
          date: "2021-06-28T00:00:00Z",
          fuel: "ΚΑΘΑΡΕΣ ΕΙΣΑΓΩΓΕΣ (ΕΙΣΑΓΩΓΕΣ-ΕΞΑΓΩΓΕΣ)",
        },
        {
          energy_mwh: 161405,
          percentage: 1.0,
          date: "2021-06-28T00:00:00Z",
          fuel: "ΣΥΝΟΛΟ",
        },
      ];
  
      if (args.query) {
        if (args.query.fuel) {
          data = data.filter(obj => obj.fuel === args.query.fuel)
        }
      }
  
      return data
    },
  }
};
