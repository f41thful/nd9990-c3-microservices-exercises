export const config = {
  'username': process.env.POSTGRES_USERNAME,
  'password': process.env.POSTGRES_PASSWORD,
  'database': process.env.POSTGRES_DB,
  'host': process.env.POSTGRES_HOST,
  'dialect': 'postgres',
  'aws_region': process.env.AWS_REGION,
  'aws_profile': process.env.AWS_PROFILE,
  'aws_media_bucket': process.env.AWS_BUCKET,
  'url': process.env.URL,
  'jwt': {
    'secret': process.env.JWT_SECRET,
  },
};

console.log("---- CONFIG USED ----");
console.log("db username: " + config.username);
console.log("db: " + config.database);
console.log("db host: " + config.host);
console.log("aws region: " + config.aws_region);
console.log("aws profile: " + config.aws_profile);
console.log("aws bucket: " + config.aws_media_bucket);