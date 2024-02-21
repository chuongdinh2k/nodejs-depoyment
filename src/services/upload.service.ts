import { GetObjectCommand, PutObjectCommand } from "@aws-sdk/client-s3";
import s3Client from "../clients/s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import SERVER_INTERVAL_ERROR from "../common/error/500";
class UploadServices {
  /**
   * get user info by id
   * @param {number} id
   * @returns {Promise<IUser>}
   */

  static async uploadImageToS3(file: any, keyName?: string) {
    const imageName = keyName ?? file?.originalname;
    try {
      const params = {
        Bucket: process.env.S3_BUCKET,
        Key: imageName,
        Body: file?.buffer || "unknown",
        ContentType: file?.mimetype || "image/jpeg",
      };
      const command = new PutObjectCommand(params);
      await s3Client.send(command);
      // Create the command.
      const commandGetObject = new GetObjectCommand(params);

      // Create the presigned URL.
      const signedUrl = await getSignedUrl(s3Client, commandGetObject, {
        expiresIn: 3600,
      });
      return { url: signedUrl };
    } catch (err) {
      console.log("Error uploading image use S3Client: ", err);
      throw new SERVER_INTERVAL_ERROR("Upload image to s3 failed!");
    }
  }
}

export default UploadServices;
