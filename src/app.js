import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'

const app = express()

app.use(cookieParser)
app.use(express.json({limit :"14kb"}))
app.use(cors({
    origin : process.env.CORS,
    credentials : true

}))
app.use(url.encoded({extended:true,limit:"14kb"}))
app.use(express.static("public"))

export {app}