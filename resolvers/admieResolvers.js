const token = process.env.DATA_GOV_GR_TOKEN

module.exports = {
  Query: {
    admie_dailyenergybalanceanalysis: async (parent, args, context) => {
      var headers = new Headers();
      headers.append("Authorization", `Token ${token}`);

      var requestOptions = {
        method: 'GET',
        headers: headers
      };

      const response = await fetch("https://data.gov.gr/api/v1/query/admie_dailyenergybalanceanalysis", requestOptions)
      let data = await response.json()
  
      if (args.query) {
        if (args.query.fuel) {
          data = data.filter(obj => obj.fuel === args.query.fuel)
        }
      }
  
      return data
    },
  }
};
