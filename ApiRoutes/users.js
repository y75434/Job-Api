import express from "express"
import User from "../models/User.js"

const router = express.Router()

router.get("/",(req,res)=>{
    res.send("get users")
})
export default router

router.post("/",async(req,res)=>{
    const newUser = new User(req.body) 
    try {
        const saveUser = await newUser.save()
        res.status(200).json(saveUser)
    } catch (error) {
        res.status(500).json(error)
    }
})

// get user by id
router.get("/find/:id",async(req,res)=>{
    const id = req.params.id;
    try{
       const getUser = await User.findById(id)
        res.status(200).json(getUser)
    }catch(error){
        res.status(500).json(error)
    }
})

router.put("/:id",async(req,res)=>{
    const id = req.params.id;
    const body = req.body
    try{
        // $set 是 更新mongo db的語法 new 會將新資料傳回來
       const updateUser = await User.findByIdAndUpdate(id,{$set:body},{new:true})
        res.status(200).json(updateUser)
    }catch(error){
        res.status(500).json(error)
    }
})

//刪除資料
router.delete("/:id",async(req,res)=>{
    const id = req.params.id;
    try{
        await User.findByIdAndDelete(id)
        res.status(200).json("刪除資料成功")
    }catch(error){
        res.status(500).json(error)
    }
})
