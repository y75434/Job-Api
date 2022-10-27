import express from 'express'
import mongoose from 'mongoose'

import dotenv from 'dotenv'

const app = express()
const port = 3000

dotenv.config()

const connect = async() => {
    try{
     await mongoose.connect(process.env.MONGODB)
        console.log("Connected to mongoDB")
    }catch(error){
        throw error
        console.log("disconnected to mongoDB")
    }
}

mongoose.connection.on("connected",()=>{
    console.log("MongoDB connected!")
})
mongoose.connection.on("disconnected",()=>{
    console.log("MongoDB disconnected!")
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  connect()
  console.log(`Example app listening on port ${port} `)
})


import jobsApiRoute from "./ApiRoutes/jobs.js"
import usersApiRoute from "./ApiRoutes/users.js"
import authApiRoute from "./ApiRoutes/auth.js"

app.use(express.json()) //請求轉為 json
app.use("/api/v1/jobs",jobsApiRoute)
app.use("/api/v1/users",usersApiRoute)
app.use("/api/v1/auth",authApiRoute)
