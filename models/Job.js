import mongoose from 'mongoose';

const JobSchema = new mongoose.Schema({
    title:{ //工作名稱
        type:String,
        required:true,
    },
    desc:{//描述 
        type:String,
        required:true,
    },
    salary:{//薪水
        type:Number,
        required:true,
    },
    location:{// 地址 
        type:Number,
        required:true,
    },
    obj:[
      { 
      //這邊是表示到時候的房型編號 如可能房型都是海景房 有分01,02
       number:Number, 
       unavailableDates:[{type:Date}]
      }
    ],//與紀錄01,02被訂走的時間，為到時候calendar紀錄的時間
},{timestamps:true})
export default mongoose.model("Job",JobSchema)
