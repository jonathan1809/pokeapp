const env = process.env;
export const EnvConfiguration = () => ({
  environment: env.NODE_ENV || 'dev',
  port: env.PORT || 3000,
  defaultLimit: +env.DEFAULT_LIMIT || 7,
  pokeApiUrl: env.POKE_API,
  pokeApiImageUrl: env.POKE_API_IMAGE,
  mongoDbUri: env.MONGO_DB,
});
