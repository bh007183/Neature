import db from "../module/index.js"
import express from "express"
const router = express.Router()

router.get("/", (req, res) => {
    console.log("yolo")
})

router.post("/post", (req, res) => {
    // db.create(req.body, (err, data)=>{
    //     if(err){
    //         console.log("err")
    //     }else{
    //         console.log(data)
    //     }
    // })
   
        db.create(req.body).then(data => {
            console.log(data)
            res.status(200).json(data)
         }).catch(err => res.status(401))

   
    
})


export default router