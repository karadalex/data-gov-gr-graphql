const token = process.env.DATA_GOV_GR_TOKEN;


async function mdg_emvolio(parent, args, context) {
  var headers = new Headers();
  headers.append("Authorization", `Token ${token}`);

  var requestOptions = {
    method: "GET",
    headers: headers,
  };

  let url = "https://data.gov.gr/api/v1/query/mdg_emvolio";

  if (args.query) {
    url += "?";
    if (args.query.date_from) {
      url += `date_from=${args.query.date_from.split("T")[0]}&`;
    }
    if (args.query.date_to) {
      url += `date_to=${args.query.date_to.split("T")[0]}`;
    }
  }

  const response = await fetch(url, requestOptions);
  let data = await response.json();

  if (args.query) {
    if (args.query.fuel) {
      data = data.filter((obj) => obj.fuel === args.query.fuel);
    }
  }

  return data;
}


module.exports = {
  Query: {
    mdg_emvolio
  },
};
