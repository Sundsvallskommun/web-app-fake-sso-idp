require('dotenv').config()
const { cleanEnv, url, host, port, bool, str } = require("envalid");

const env = cleanEnv(process.env, {
  PORT: port({ default: 7000 }),
  HOST: host({ default: "http://localhost" }),
  ENUMERATEUSERS: bool({ default: true }),
  DESTINATION: url(),
  METADATA: url(),
  BASEPATH: str({ default: "/" }),
});

module.exports = { env }
