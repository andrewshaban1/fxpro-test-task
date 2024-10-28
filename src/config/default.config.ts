import dotenv from 'dotenv';
dotenv.config({ path: ['.env'] });

const config = {
  env: getEnvVar('NODE_ENV', 'development'),
  port: getEnvVar('PORT', 8000),
  frontEndUrl: getEnvVar('FRONT_END_URL', '*'), // Will be used for CORS
  backEndHost: getEnvVar('BACK_END_HOST'),
  jwt: {
    secret: getEnvVar('JWT_SECRET'),
  },
};

export default config;

function getEnvVar(
  key: string,
  defaultValue: string | number | undefined = undefined
) {
  const value: string | undefined = process.env[key];
  if (value === undefined && defaultValue === undefined) {
    throw new Error(`Environment variable ${key} is missing`);
  }
  return (value || String(defaultValue)) as string;
}
