const express = require('express')
const app = express()
const dataGovGrGraphql = require("../../index")
const port = 3000

app.all('/api/graphql', dataGovGrGraphql)
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})