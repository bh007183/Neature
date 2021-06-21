import db from "../module/index.js"
import express from "express"
const router = express.Router()

router.get("/all", (req, res) => {
    console.log("test")
    db.find().then(data => {
        res.status(200).json(data)
    }).catch(err => {
        console.log(err)
        res.status(401);
        
    })
})
router.post("/post", (req, res) => {
        db.create(req.body).then(data => {
            console.log(data)
            res.status(200).json(data)
         }).catch(err => res.status(401))

   
    
})


export default router