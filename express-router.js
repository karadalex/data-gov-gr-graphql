const express = require('express')
const router = express.Router();
const dataGovGrGraphql = require("./index")

router.all('/api/graphql', dataGovGrGraphql)

module.exports = router;