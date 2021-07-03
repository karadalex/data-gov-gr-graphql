// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dataGovGrGraphql from '../../../../index'

export const config = {
  api: {
    bodyParser: false,
  },
}

export default async (req, res) => {
  await dataGovGrGraphql(req, res)
}
