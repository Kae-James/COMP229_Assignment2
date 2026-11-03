const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,

  // Secret key used to sign JWT tokens
  jwtSecret: process.env.JWT_SECRET || 'superDuperRandomSecret12345',

 // Connection string for Portfolio database
  mongoUri:
    process.env.MONGODB_URI ||
    'mongodb+srv://kjames50_db_user:<<PASSWORDPLACEHOLDER>>@cluster0.olonkzq.mongodb.net/Portfolio'
}

export default config
