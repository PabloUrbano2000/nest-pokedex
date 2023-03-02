export const EnvConfiguration = () => ({
  ENVIROMENT: process.env.NODE_ENV || 'dev',
  MONGODB: process.env.MONGODB,
  PORT: process.env.PORT || 3000,
  DEFAULT_LIMIT: +process.env.DEFAULT_LIMIT || 7,
});
