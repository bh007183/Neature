import express from "express"
import path from 'path'
import morgan from "morgan"
import mongoose from "mongoose"
import plantRoutes from "./routes/index.js"

const app = express()
const PORT = process.env.PORT || 8070

app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(morgan("dev"))





app.use(plantRoutes)



mongoose.connect('mongodb://localhost:27017/Plants' || process.env.MongoDB,
 { useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
})





app.listen(PORT, function(){
    console.log("App listening on PORT http://localhost:" + PORT);
})



