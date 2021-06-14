import db from "../module/index.js"
import express from "express"
const router = express.Router()

router.get("/", (req, res) => {
    console.log("yolo")
})

export default router