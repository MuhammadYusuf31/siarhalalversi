export const isProd = process.env.NODE_ENV === 'production';
export const isLocal = process.env.NODE_ENV === 'development';

export const showLogger = isLocal
  ? true
  : process.env.NEXT_PUBLIC_SHOW_LOGGER === 'true' ?? false;

export const deploymentURL = process.env.NEXT_PUBLIC_DEPLOYMENT_URL
  ? `${process.env.NEXT_PUBLIC_DEPLOYMENT_URL}`
  : process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : 'http://localhost:3000';

export const imagePrefixUrl =
  process.env.NEXT_PUBLIC_IMAGE_PREFIX_URL ??
  'https://hypeandplay.my.id/hypeandplay-pictures/';
