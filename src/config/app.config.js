module.exports = {
  loggerOptions: 'dev',
  corsOptions: {
    origin: process.env.ORIGIN_URL || 'http://localhost:3000',
    credentials: true,
  },
  apiPath: `${process.env.API_PATH}/${process.env.API_VERSION}`,
};
