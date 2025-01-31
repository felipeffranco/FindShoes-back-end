import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import connectDb from './config/db.connection.js'
import authRouter from './routes/auth.routes.js'
import welcomeRouter from './routes/welcome.routes.js'
import users from './routes/users.routes.js'
import profile from './routes/profile.routes.js'

connectDb()

const app = express()
 app.use(cors())
 app.use(express.json())

 app.use(welcomeRouter)
 app.use(users)
 app.use(authRouter)
 app.use(profile)


 const PORT = process.env.PORT
 app.listen(PORT, console.log('Server listening on port: ', PORT))

 