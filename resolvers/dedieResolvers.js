const token = process.env.DATA_GOV_GR_TOKEN;


async function electricity_consumption(parent, args, context) {
  var headers = new Headers();
  headers.append("Authorization", `Token ${token}`);

  var requestOptions = {
    method: "GET",
    headers: headers,
  };

  let url = "https://data.gov.gr/api/v1/query/electricity_consumption";

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
    if (args.query.area) {
      data = data.filter((obj) => obj.area === args.query.area);
    }
  }

  return data;
}


module.exports = {
  Query: {
    electricity_consumption,
  },
};
