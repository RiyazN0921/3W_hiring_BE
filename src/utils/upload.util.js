const { S3Client } = require('@aws-sdk/client-s3')
require('dotenv').config()

const s3 = new S3Client({
  region: process.env.R2_REGION,
  endpoint: process.env.R2_ENDPOINT_URL,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
  },
})

module.exports = s3
