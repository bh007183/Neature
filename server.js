import express from "express"
import path from 'path'
import mongoose from "mongoose"
import plantRoutes from "./routes/index.js"

const app = express()
const PORT = process.env.PORT || 8080

app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json());





app.use(plantRoutes)

// app.get("/", (req,res) => {
   
// })

mongoose.connect('mongodb://localhost:27017/Plants' || process.env.MongoDB,
 { useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
})





app.listen(PORT, function(){
    console.log("App listening on PORT http://localhost:" + PORT);
})



