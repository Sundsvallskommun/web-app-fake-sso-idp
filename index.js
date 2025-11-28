const { create } = require('./lib/idp')
const { users } = require('./users')
const { env } = require('./env')

const app = create({
  basepath: env.BASEPATH,
  // NOTE: If false user will have to type in username and password themself.
  enumerateUsers: env.ENUMERATEUSERS,
  host: env.HOST,
  port: env.PORT,
  serviceProvider: {
    destination: env.DESTINATION,
    metadata: env.METADATA,
  },
  users: users,
});

app.listen(env.PORT)
