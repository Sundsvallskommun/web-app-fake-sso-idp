require('dotenv').config()
const { cleanEnv, url, port, bool } = require('envalid')
const { create } = require('./lib/idp')
const { users } = require('./users')

const env = cleanEnv(process.env, {
  PORT: port({ default: 7000 }),
  ENUMERATEUSERS: bool({ default: true }),
  DESTINATION: url(),
  METADATA: url()
})

const app = create({
  // NOTE: If false user will have to type in username and password themself.
  enumerateUsers: env.ENUMERATEUSERS,
  serviceProvider: {
    destination: env.DESTINATION,
    metadata: env.METADATA
  },
  users: users
})

app.listen(env.PORT)
