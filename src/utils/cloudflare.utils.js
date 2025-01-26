const { PutObjectCommand } = require('@aws-sdk/client-s3')

const { CustomError } = require('../middleware/errorhandler.middleware')

const s3 = require('./upload.util')

require('dotenv').config()

exports.uploadToS3 = async (file) => {
  try {
    const uploadParams = {
      Bucket: process.env.R2_BUCKET,
      Key: `UserImages/${Date.now()}-${file.originalname}`,
      Body: file.buffer,
    }

    await s3.send(new PutObjectCommand(uploadParams))

    const publicUrl = `${process.env.R2_ENDPOINT_URL}/${uploadParams.Key}`

    return {
      url: publicUrl,
      mimetype: file.mimetype,
    }
  } catch (error) {
    console.log(error)
    throw new CustomError('Failed to upload image to Cloudflare R2', 500)
  }
}
