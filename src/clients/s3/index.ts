import { GetObjectCommand, PutObjectCommand, S3Client } from "@aws-sdk/client-s3";

import dotenv from 'dotenv';

dotenv.config();

const s3Client = new S3Client({
    region: process.env.S3_REGION,
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID ?? "",
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY ?? "",
    },
});

export {PutObjectCommand, GetObjectCommand}

export default s3Client;